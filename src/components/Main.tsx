import { motion } from "framer-motion"
import {AiOutlineLink} from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
export const Main = () => {

    return(
        <main className="flex justify-center">
            <div className="w-full max-w-[90%] py-10">
                <div className='w-full flex gap-5'>
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                        className="w-[50%] h-[550px] flex justify-center items-center rounded-[64px] bg-gb bg-cover bg-center ">
                        <div className="w-full max-w-[90%] h-full max-h-[90%] flex flex-col">
                            <h1 className="text-[32px] font-poppins max-w-[90%]">
                                <span className="font-medium">Imrane Sallak</span> - FullStack Web Developer
                            </h1>
                            <p className="font-medium">But you can call me Nygma.</p>
                            <hr className="w-[90%] h-px my-8  border-0 bg-gray-300"/>
                        </div>
                    </motion.div>
                    <div className="w-[50%] grid grid-cols-4 gap-4">
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                            className="col-span-4 rounded-[64px] h-48 bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[70%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-poppins">See my last projects</h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <p>
                                    Take a look, there is a bunch of projects that you can like
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                            className="col-span-2 rounded-[64px] max-w-full h-[340px] bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[70%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-poppins">Who am I ?</h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <hr className="w-full h-px mt-4 mb-6 border-0 bg-gray-300"/>
                                <p>
                                    I'm a Web enthusiast,  aiding businesses and startups in bringing their visions to life by developing custom ERPs, CRMs, and SaaS platforms.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                            className="col-span-2 rounded-[64px] max-w-full h-full bg-[#1D1D1D] flex justify-center items-center">
                            <div className="w-full max-w-[85%] h-full max-h-[80%] flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className=" flex items-center 2xl:text-[24px] text-[22px] font-poppins">
                                        Last use cases on
                                        <FaXTwitter className="ml-1"/></h2>
                                    <motion.a whileHover={{scale: 1.2}} href=""><AiOutlineLink/></motion.a>
                                </div>
                                <p>
                                    Sometimes i like to build things on public
                                </p>
                                <hr className="w-full h-px mt-4 mb-6 border-0 bg-gray-300"/>
                                <div className="flex w-full">
                                    <Avatar className="w-[60px] h-[60px]">
                                        <AvatarImage
                                            src="https://pbs.twimg.com/profile_images/1638294304719347712/w7Sf9nsH_400x400.jpg"
                                            alt="nygmapfp"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="mt-1 ml-2">
                                        <p> notorious nygma 💻</p>
                                        <p className="text-sm text-emerald-300">@nygmasl</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <a className="flex items-center px-6 py-1 border rounded" href="">Read My <FaXTwitter className="ml-1"/></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}