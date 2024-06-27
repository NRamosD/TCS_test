import logoBP from "../resources/images/BP_logo_grande.png"

export const NavBar = () =>{

    return(
        <>
            <div className="w-full h-24 fixed top-0 z-10 bg-white shadow-md grid grid-cols-3">
                <div></div>
                <div className=" flex justify-center ">
                    <img  
                    className=" w-80 m-auto"
                    src={logoBP}/>
                </div>
                <div></div>
            </div>
        </>
    )
}