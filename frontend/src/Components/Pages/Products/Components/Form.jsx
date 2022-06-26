import axios from "axios"
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
    
    useEffect(()=> {
            if(id != null) {
                axios.get(`http://localhost:8000/api/product/${id}`)
                    .then(res => {
                        let data = res.data.data
                        setInput({ ...data })
                        setCurrentId(id)
                    })
        }
    }, [id, setCurrentId, setInput])

    return (
        <>
            <h1 className=" text-purple-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 text-center">
                Form Product
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} type="text" required value={input.name} name="name" placeholder=" " className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} type="number" name="price" min="0" value={input.price} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <button onClick={handleCancel} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Kembali</button>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </>
    )
}

export default FormProduct