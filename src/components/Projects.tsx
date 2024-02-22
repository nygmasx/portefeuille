import {motion} from "framer-motion";
import {AiOutlineLink} from "react-icons/ai";

export const Projects = () => {

    return(
        <section id="projects" className="flex justify-center ">
            <div className='w-full max-w-[90%] py-10'>
                <div className="w-full h-[550px] flex gap-4 mt-20">
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] w-1/3 h-full bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">Creatik</h2>
                                <motion.a whileHover={{scale: 1.2}} href="">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-0 bg-gray-300"/>
                            <img src="bg-green.jpg" alt=""/>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] w-1/3 h-full bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">SmartLetter</h2>
                                <motion.a whileHover={{scale: 1.2}} href="">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-0 bg-gray-300"/>
                            <img src="bg-green.jpg" alt=""/>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] w-1/3 h-full bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">Scraping and Automation</h2>
                                <motion.a whileHover={{scale: 1.2}} href="">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-0 bg-gray-300"/>
                            <img src="bg-green.jpg" alt=""/>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )

}