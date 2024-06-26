import menuIcon from "../resources/images/menu-vertical.svg"
export const ContainerProducts = () =>{

    return(

        <>
            <div className=" w-full h-full bg-gray-400 p-10 relative">
                <div className="w-full h-full bg-white">
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
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>30</td>
                            <td>juan@example.com</td>
                            <td>juan@example.com</td>
                            <td className="p-5">
                                <div className="rotate-90 hover:cursor-pointer">
                                    <span className="text-[5px] ">⚫⚫⚫</span>
                                </div>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>30</td>
                            <td>juan@example.com</td>
                            <td>juan@example.com</td>
                            <td className="p-5">
                                <div className="rotate-90 hover:cursor-pointer">
                                    <span className="text-[5px] ">⚫⚫⚫</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>30</td>
                            <td>juan@example.com</td>
                            <td>juan@example.com</td>
                            <td className="p-5">
                                <div className="rotate-90 hover:cursor-pointer">
                                    <span className="text-[5px] ">⚫⚫⚫</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}