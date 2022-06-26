
import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const ListProduct = () => {
    const { state, handleFunctions } = useContext(ProductContext)

    let {
        display, fetchStatus, setFetchStatus,
        listProduct,
    } = state

    let { handleDelete, fetchData } = handleFunctions

    useEffect(() => {
        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    let history = useHistory()

    function handleAddForm() {
        history.push('/product/create')
    }

    function handleEditForm(event) {
        let id = parseInt(event.target.value)
        history.push(`/product/${id}`)
    }

    return (
        <>
            <h1 className="mb-3 mr-2 text-3xl font-semibold text-center text-purple-800 rounded  dark:bg-purple-200 dark:text-purple-900">
                List Product
            </h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {Cookies.get('role') === 'staff' && (
                    <div className="p-4">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleAddForm}>
                            Tambah Data Product
                        </button>
                    </div>
                )}
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Price
                            </th>
                            {Cookies.get('role') === 'staff' && (
                                <th scope="col" className="px-6 py-3 text-center">
                                    Action
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {display && <tr>
                            <td><p>Loading ...</p></td>
                        </tr>
                        }
                        {display !== true && (
                            listProduct !== null && (
                                listProduct.map((val, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 text-center">{index + 1}</td>
                                            <td className="px-6 py-4 text-center">{val.name}</td>
                                            <td className="px-6 py-4 text-center">{val.price}</td>
                                            {Cookies.get('role') === 'staff' && (
                                                <td className="px-6 py-4 text-center">
                                                    <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                                                        onClick={handleEditForm} value={val.id}>
                                                        Edit
                                                    </button>
                                                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                        onClick={handleDelete} value={val.id}>
                                                        Delete
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    )
                                })
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListProduct