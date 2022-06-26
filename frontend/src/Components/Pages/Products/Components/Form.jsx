import axios from "axios"
import Cookies from "js-cookie"
import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "./ProductContext"

const FormProduct = () => {
    const { state, handleFunctions } = useContext(ProductContext)

    let {
        input, setInput, setCurrentId
    } = state
    
    let { handleSubmit, handleChange, handleCancel } = handleFunctions
    
    let { id } = useParams()
    // console.log(id)
    
    useEffect(()=> {
            if(id != null) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`
                axios.get(`http://localhost:8000/api/product/${id}`)
                    .then(res => {
                        let data = res.data
                        setInput({ ...data })
                        setCurrentId(id)
                    })
        }
    }, [id, setCurrentId, setInput])

    return (
        <>
            <h2 className="title">Form Tambah Product</h2>
            <button onClick={handleCancel}>Kembali</button>
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input onChange={handleChange} type="text" required value={input.name} name="name" placeholder="name" />

                    <label>Price</label>
                    <input onChange={handleChange} type="number" required value={input.price} name="price" min="0" placeholder="price" />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}

export default FormProduct