import {motion} from "framer-motion";
export const About = () => {
    return(
        <section id="about" className="flex justify-center">
            <div className="w-full max-w-[90%] py-10">
                <div className='w-full flex gap-5'>
                    <motion.div
                        whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                        className="w-full h-[550px] flex justify-center items-center
                        rounded-[64px] bg-gr bg-cover bg-center"
                    >
                        <div className="w-full max-w-[90%] items-center h-full max-h-[90%] flex flex-col">
                           <h3 className="text-[32px]">My Expertise</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

)
}