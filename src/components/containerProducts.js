import { useEffect, useState } from "react"
import menuIcon from "../resources/images/menu-vertical.svg"
import { AUTHOR_ID, BASE_URL } from "../utils/consts"
export const ContainerProducts = () =>{
    const [dataProduct, setDataProduct] = useState([])

    useEffect(()=>{
        fetch(
            BASE_URL+"/bp/products",
            {
                method:"GET",
                headers: {   
                    "authorId":AUTHOR_ID,
                    "Access-Control-Allow-Origin":"*",
                    "content-type":"application/json"
                }
            }).then(
                res=>res.json()
            ).then(data=>{
                console.log("ok")
                setDataProduct(data)
        });
    },[])



    return(

        <>
            <div className=" w-full h-full p-10 relative shadow-xl bg-white">
                <div className="w-full h-full bg-white shadow-2xl max-h-[500px] overflow-y-auto">
                    <table class=" w-full text-center">
                        <thead className="">
                            <tr className=" bg-gray-200 h-14 text-lg">
                                <th>Logo</th>
                                <th>Nombre del Producto</th>
                                <th>Descripción</th>
                                <th>Fecha de liberación</th>
                                <th>Fecha de reestructuración</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="overflow-y-auto">
                            {
                                dataProduct.length>0?
                                    dataProduct.map((item,idx)=>{
                                        return(
                                            <tr className=" border-b-2">
                                                <td className=" flex h-20">
                                                    <img src={item.logo} width={60} height={20} className="m-auto"/>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.date_release.split("T")[0]}</td>
                                                <td>{item.date_revision.split("T")[0]}</td>
                                                <td className="p-5">
                                                    <div className="rotate-90 hover:cursor-pointer">
                                                        <span className="text-[5px] ">⚫⚫⚫</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                :
                                <div><p>Nothing to show</p></div>
                            }
                        
                        </tbody>
                    </table>
                </div>
                <div className="mt-10">
                    <p>{dataProduct.length} Resultados</p>
                </div>
            </div>
        </>
    )
}