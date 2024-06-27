import { useEffect, useState } from "react"
import compareDate from "../../utils/js/comparedate"
import isDateTodayOrGreater from "../../utils/js/comparedate"
import { AUTHOR_ID, BASE_URL } from "../../utils/consts";
import { Link } from "react-router-dom";


export const AddProducts = () => {
    const today = new Date()
    const defaultDataProduct = {
        id:"",
        name:"",
        description:"",
        logo:"",
        date_release:"",
        date_revision:""
    }

    const [statusForm, setStatusForm] = useState(false)
    const [dataProduct, setDataProduct] = useState(defaultDataProduct)
    const [errorInputs, setErrorInputs] = useState([false,false,false,false,false,false])

    useEffect(()=>{

    },[])


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setDataProduct({ ...dataProduct, [name]: value });

        const copyArray = [...errorInputs]
        switch(name){
            case "id":
                if(value.length<3 || value.length>10 || value===""){
                    copyArray[0] = true
                }else{copyArray[0] = false}
                setErrorInputs(copyArray)
                break;
            case "name":
                if(value.length<5 || value.length>100 || value===""){
                    copyArray[1] = true
                }else{copyArray[1] = false}
                setErrorInputs(copyArray)
                break;
            case "description":
                if(value.length<10 || value.length>200 || value===""){
                    copyArray[2] = true
                }else{copyArray[2] = false}
                setErrorInputs(copyArray)
                break;
            case "logo":
                if(value.length<5 || value===""){
                    copyArray[3] = true
                }else{copyArray[3] = false}
                setErrorInputs(copyArray)
                break;
            case "date_release":
                let inputDate = new Date(value)
                inputDate.setHours(today.getHours())
                inputDate.setMinutes(today.getMinutes())
                inputDate.setDate(inputDate.getDate());
                console.log({inp:inputDate, today: today})
                //date must be today or greater
                if(inputDate.getTime() < today.getTime()){
                    copyArray[4] = true
                }else{copyArray[4] = false}
                setErrorInputs(copyArray)
                
                // //add 1 year automatically
                let newDate = new Date(inputDate);
                newDate.setFullYear(newDate.getFullYear() + 1);
                setDataProduct({ ...dataProduct, [name]: value ,["date_revision"]: `${newDate.getFullYear()}-${(newDate.getMonth() + 1).toString().padStart(2, '0')}-${(newDate.getDate() + 1).toString().padStart(2, '0')}` });
                break;
            case "date_revision":
                break;
            default:
                break;
        }
        // if(name==="phone"){
        //     const sanitizedValue = value.replace(/[^0-9+\-]/g, '').substring(0, 20);
        //     setFormData({ ...formData, [name]: sanitizedValue });
        // }else{
        // }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(
            BASE_URL+"/bp/products",
            {
                method:"POST",
                headers: {   
                    "authorId":AUTHOR_ID,
                    "Access-Control-Allow-Origin":"*",
                    "content-type":"application/json"
                },
                body: JSON.stringify(dataProduct)
            }).then(
                res=>res.json()
                // {
                //     if (!res.ok) throw new Error("Error en la petición")
                //     return res.json()
                // }
            ).then(data=>{
                console.log("ok",data)
                setDataProduct(defaultDataProduct)
            });
    };


    return(
        <>
            <div className=" h-[70vh] w-[100vw] flex " >
                <div className=" w-[500px] grid grid-rows-5 bg-white p-2 mx-auto">
                    <div className=" row-span-1 border-b-2 flex">
                        <h1 className="text-4xl m-auto">Formulario de Registro</h1>
                    </div>
                    <div className=" row-span-3 px-5 py-2 grid grid-cols-2 gap-5">
                        <div className="block">
                            <label className="p-2 w-full">ID</label>
                            <input type="text" autoComplete="off" maxLength={10}
                            name="id" value={dataProduct.id} onChange={handleChange} 
                            className="shadow-md input-styled p-2 my-auto w-full text-xl "/>
                            {errorInputs[0] && <span className="text-[14px] text-red-500">ID no válido</span>}
                        </div>
                        <div className="block">
                            <label className="p-2 w-full">Nombre</label>
                            <input type="text" autoComplete="off" maxLength={100}
                            name="name" value={dataProduct.name} onChange={handleChange} 
                            className="shadow-md input-styled p-2 my-auto w-full text-xl "/>
                            {errorInputs[1] && <span className="text-[14px] text-red-500">Nombre no válido</span>}
                        </div>
                        <div className="block">
                            <label className="p-2 w-full">Descripción</label>
                            <input type="text" autoComplete="off"
                            name="description" value={dataProduct.description} onChange={handleChange} 
                            className="shadow-md input-styled p-2 my-auto w-full text-xl "/>
                            {errorInputs[2] && <span className="text-[14px] text-red-500">Descripción no válida</span>}
                        </div>
                        <div className="block">
                            <label className="p-2 w-full">Logo (URL)</label>
                            <input type="text" autoComplete="off"
                            name="logo" value={dataProduct.logo} onChange={handleChange} 
                            className="shadow-md input-styled p-2 my-auto w-full text-xl "/>
                            {errorInputs[3] && <span className="text-[14px] text-red-500">Url no válida</span>}
                        </div>
                        <div className="block">
                            <label className="p-2 w-full">Fecha de Liberación</label>
                            <input type="date"
                            name="date_release" value={dataProduct.date_release} onChange={handleChange} 
                            className="shadow-md input-styled p-2 my-auto w-full text-xl "/>
                            {errorInputs[4] && <span className="text-[14px] text-red-500">Fecha de liberación no válida</span>}
                        </div>
                        <div className="block">
                            <label className="p-2 w-full">Fecha de Revisión</label>
                            <input type="date" disabled
                            name="date_revision" value={dataProduct.date_revision} onChange={handleChange} 
                            className="shadow-md rounded-md input-styled p-2 my-auto w-full text-xl"/>
                            {/* <span className="text-[14px] text-red-500">qqw eqwe quweyq</span> */}
                        </div>
                        
                        
                    </div>
                    <div className=" row-span-1 flex">
                        <div className="grid grid-cols-2 gap-5 m-auto">
                            <button onClick={()=>setDataProduct(defaultDataProduct)} className=" bg-slate-400 px-5 py-2 mx-2 my-auto font-semibold">Restart</button>
                            <button onClick={(e)=>handleSubmit(e)} className="bg-yellow-400 px-5 py-2 mx-2 my-auto font-semibold">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center">
                <Link to={"/"}>
                    <button className="px-8 py-2 m-2 bg-white">
                        Volver
                    </button>
                </Link>

            </div>
        </>
    )
}