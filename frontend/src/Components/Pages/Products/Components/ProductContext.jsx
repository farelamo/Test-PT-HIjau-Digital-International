import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const ProductContext = createContext()

export const ProductProvider = props => {
    const [listProduct, setlistProduct] = useState([])

    const [input, setInput] = useState({
        name: "",
        price: 0,
    })
    const [currentId, setCurrentId]     = useState(null)
    const [display, setDisplay]         = useState(false)
    const [fetchStatus, setFetchStatus] = useState(true)

    let state = {
        input, setInput,
        display, setDisplay,
        currentId, setCurrentId,
        fetchStatus, setFetchStatus,
        listProduct, setlistProduct,
    }

    let history = useHistory()

    // Functions
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/product`)

        let result = data.data.map(res => {
            let { id, name, price } = res
            return { id, name, price }
        })
        setlistProduct([...result])
    }

    const handleChange = (event) => {
        let nameOfInput  = event.target.name
        let valueOfInput = event.target.value
        setInput({ ...input, [nameOfInput]: valueOfInput })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let { name, price } = input

        setDisplay(true)

        setTimeout(() => {
            if (currentId === null) {
                axios.post(`http://localhost:8000/api/product`, {
                    name, price
                })
                    .then(res => {
                        let data = res.data
                        setlistProduct([...listProduct, {
                            name : data.name,
                            price: data.price,
                        }
                        ])
                        setFetchStatus(true)
                        history.push('/product')
                    })
            } else {
                axios.put(`http://localhost:8000/api/product/${currentId}`, {
                    name, price
                })
                    .then(() => {
                        setFetchStatus(true)
                        history.push('/product')
                    })
            }
            setDisplay(false)
        })

        setInput({
            name : "",
            price: "",
        })

        setCurrentId(null)
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(() => {
                let newData = listProduct.filter((e) => {
                    return e.id !== id
                })

                setlistProduct(newData)
            })
    }


    const handleCancel = () => {
        history.push('/product')
    }

    let handleFunctions = {
        fetchData,
        handleChange,
        handleSubmit,
        handleDelete,
        handleCancel
    }

    return (
        <ProductContext.Provider value={{
            state, 
            handleFunctions
        }}>
            {props.children} 
        </ProductContext.Provider>
    )
}