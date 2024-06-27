import { Link } from "react-router-dom"

import { ContainerProducts } from "../../components/containerProducts"

export const Products = () =>{

    return(
        <>
            <div className=" h-[70vh] w-[100vw] px-20">
                <div className=" w-full h-full">
                    <div className=" grid grid-cols-2 bg-white my-5 p-5">
                        <div className="flex">
                            <input type="text" placeholder="Search..."
                            className="shadow-md rounded-md input-styled p-2 my-auto"/>
                        </div>
                        <div className=" flex justify-end">
                            <Link to={`/new-product`}>
                                <button className="bg-yellow-400 px-5 py-2 mx-2 my-auto">Agregar</button>
                            </Link>
                        </div>
                    </div>
                    <div className=''>
                        
                        <ContainerProducts/>
                    </div>
                </div>
            </div>
        </>
    )
}