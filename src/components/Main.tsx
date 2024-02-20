import { motion } from "framer-motion"
export const Main = () => {

    return(
        <main className="flex justify-center">
            <div className="w-full max-w-[90%] py-10">
                <div className='w-full grid'>
                    <motion.div whileHover={{}}  className="w-[50%] h-[550px] 2xl:h-[695px] flex justify-center items-center rounded-[64px] bg-gb bg-cover bg-center ">
                        <div className="w-full max-w-[90%] h-full max-h-[90%] flex flex-col">
                            <h1 className="text-[32px] font-poppins max-w-[90%]">
                                <span className="font-medium">Imrane Sallak</span> - FullStack Web Developer
                            </h1>
                            <p className="font-medium">But you can call me Nygma.</p>
                            <hr className="w-[90%] h-px my-8  border-0 bg-gray-300"/>
                            <p></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}