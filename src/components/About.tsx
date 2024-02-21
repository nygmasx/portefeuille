import {motion} from "framer-motion";
import {AiOutlineLink} from "react-icons/ai";
import {FaLaravel, FaReact, FaSymfony} from "react-icons/fa6";
import {SiRootsbedrock, SiTailwindcss, SiTurbo, SiTypescript} from "react-icons/si";

export const About = () => {
    return (
        <section id="about" className="flex justify-center">
            <div className="w-full max-w-[90%] py-10">
                <div className='w-full flex justify-center mt-20 gap-5'>
                    <div className="w-[50%] h-[550px] flex flex-col gap-4">
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                    className="col-span-4 rounded-[64px] h-1/3 bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[70%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-poppins">Scraping and Automation</h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <p>
                                    Take a look, there is a bunch of projects that you can like
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                    className="col-span-4 rounded-[64px] h-1/3 bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[70%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-poppins">Web Development</h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <p>
                                    Take a look, there is a bunch of projects that you can like
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                    className="col-span-4 rounded-[64px] h-1/3 bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[70%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-poppins">Wordpress Deep Customization</h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <p>
                                    Take a look, there is a bunch of projects that you can like
                                </p>
                            </div>
                        </motion.div>

                    </div>
                    <motion.div
                        whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                        className="w-[50%] h-[550px] flex justify-center items-center rounded-[64px] bg-gr bg-cover bg-center ">
                        <div className="w-full max-w-[90%] h-full max-h-[90%] flex flex-col">
                            <h1 className="text-[32px] font-poppins max-w-[90%]">
                                That's the way I can help you
                            </h1>
                            <p className="font-medium">A solution for every problem.</p>
                            <hr className="w-[90%] h-px my-8  border-0 bg-gray-300"/>
                            <div className="mt-10 flex justify-center items-center">
                                <div className="flex flex-wrap h-full items-center justify-around w-full gap-5">
                                    <p className="text-[28px] flex text-center items-center"><FaSymfony
                                        className='mr-2'/> Symfony</p>
                                    <p className="text-[28px] flex items-center"><FaReact className='mr-2'/> React
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiTypescript className='mr-2'/> TypeScript
                                    </p>
                                    <p className="text-[28px] flex items-center"><FaLaravel className='mr-2'/> Laravel
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiTurbo className='mr-2'/> Turbo.js
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiTailwindcss className='mr-2'/> TailwindCss
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiRootsbedrock className='mr-2'/> Bedrock
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiTurbo className='mr-2'/> Turbo.js
                                    </p>
                                    <p className="text-[28px] flex items-center"><SiTailwindcss className='mr-2'/> TailwindCss
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}