
export const PseudoLogin = () =>{
    return(
        <>
            <div className=" w-[100vw] h-[100vh] grid grid-cols-3">
                <section className=" col-span-2">
                    <img width={1200} height={1200}
                        className=" object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1596297393922-38ada973db1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </section>
                <section className=" col-span-1 w-full h-full flex">
                    <div className="m-auto p-20 relative w-full">
                        <div className="w-[100%] h-[500px] bg-white shadow-xl grid grid-rows-4">
                            <div className="row-span-1 flex justify-center">
                                <div className="h-full w-full flex">
                                    <span className="my-auto px-10 text-5xl">
                                        Welcome
                                    </span>
                                </div>
                            </div>
                            <div className=" row-span-3 flex justify-center w-full">
                                <form className="m-auto w-full">
                                    <div className="p-5">
                                        <div>
                                            <input type="text" 
                                                placeholder="Insert any email (be sure to write @)"
                                                className="input-styled w-full border-b-[1px] border-gray-300"/>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div>
                                            <label for></label>
                                            <input type="text" 
                                                placeholder="Password with more than 8 characters"
                                                className="input-styled w-full border-b-[1px] border-gray-200"/>
                                        </div>
                                    </div>
                                    <div className="flex justify-end px-5">
                                        <button className=" shadow-md rounded-lg px-6 py-2 border-2">Iniciar sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}