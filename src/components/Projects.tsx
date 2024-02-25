import {motion, useAnimation} from "framer-motion";
import {AiOutlineLink} from "react-icons/ai";
import {FaLaravel, FaReact, FaSymfony} from "react-icons/fa6";
import {SiTailwindcss, SiTurbo} from "react-icons/si";
import {useEffect, useRef} from "react";

export const Projects = () => {

    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } });
                } else {
                    controls.start({ opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: "easeInOut" } });
                }
            },
            {
                root: null, // viewport
                threshold: 0.1, // trigger the callback when the target is visible at least 10%
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);


    return(
        <motion.section
            ref={ref}
            initial={{ opacity: 0, scale: 0.8}}
            animate={controls}
            id="projects" className="flex justify-center ">
            <div className='w-full max-w-[90%] py-10'>
                <div className="flex justify-center items-center w-full pb-10">
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] max-lg:rounded-2xl bg-ba bg-center lg:w-[80%] md:w-full lg:h-[200px] h-[150px] bg-[#1D1D1D] flex justify-center items-center">
                        <div
                            className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col justify-center items-center">
                            <p className="text-[32px] text-center font-poppins font-semibold">Some of my projects 🚀</p>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:h-[550px] flex max-lg:items-center max-lg:flex-col gap-5">
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] max-lg:rounded-2xl lg:w-1/3 max-md:h-[550px] max-lg:h-[700px] bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">Creatik</h2>
                                <motion.a whileHover={{scale: 1.2}} target="_blank" href="https://github.com/nygmasx/Creatik">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-1 bg-gray-300"/>
                            <img src="/projects/creatik1.png" alt=""/>
                            <p className="mt-4 text-wrap leading-7">
                                You are a content creator and you want to boost your creativity ? Creatik is made for
                                you. <br/>
                                Drag a video or paste it from Youtube, select the sequence that you want to subtitle and
                                let the magic happens.
                            </p>
                            <div className="flex justify-center gap-3 mt-4">
                                <FaLaravel className="text-2xl"/>
                                <FaReact className="text-2xl"/>
                                <SiTailwindcss className="text-2xl"/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] max-lg:rounded-2xl lg:w-1/3 max-md:h-[550px] max-lg:h-[700px] bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">SmartLetter</h2>
                                <motion.a whileHover={{scale: 1.2}} target="_blank" href="https://github.com/nygmasx/SmartLetter">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-0 bg-gray-300"/>
                            <img className="" src="/projects/smartletter.jpg" alt=""/>
                            <p className="mt-4 text-wrap leading-7">
                                Boost your chances to get the job of your dream by generating the best cover letter with
                                SmartLetter. <br/>
                                Fast, Efficient, and Tailored to Your Needs, SmartLetter ensures your profile stands out
                                from the crowd by leveraging advanced AI.
                            </p>
                            <div className="flex justify-center gap-3 mt-4">
                                <FaLaravel className="text-2xl"/>
                                <FaReact className="text-2xl"/>
                                <SiTailwindcss className="text-2xl"/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                                className="col-span-4 rounded-[64px] max-lg:rounded-2xl lg:w-1/3 w-full max-lg:h-[550px] bg-[#1D1D1D] flex justify-center items-center">
                        <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[24px] font-poppins">Schoolindex</h2>
                                <motion.a whileHover={{scale: 1.2}} target="_blank" href="https://github.com/nygmasx/MathIndex">
                                    <AiOutlineLink className="hover:text-emerald-300"/>
                                </motion.a>
                            </div>
                            <hr className="w-full h-px mt-2 mb-4 border-0 bg-gray-300"/>
                            <img className="max-h-[216px]" src="/projects/schoolindex.png" alt=""/>
                            <p className="mt-4 text-wrap leading-7">
                                Get an exercise repository and plug it to your school ecosystem. <br/>
                                Allow your students to access resources freely and learn the right way.
                            </p>
                            <div className="flex justify-center gap-3 mt-4">
                                <FaSymfony className="text-2xl"/>
                                <SiTurbo className="text-2xl"/>
                                <SiTailwindcss className="text-2xl"/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )

}