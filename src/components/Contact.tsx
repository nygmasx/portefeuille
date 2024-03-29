import {motion} from "framer-motion";
export const Contact = () => {

    return(
        <section  id="contact" className="flex justify-center">
            <motion.div initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        className='w-full max-w-[90%] py-10 flex justify-center'>
                <motion.div whileHover={{scale: 1.02}} transition={{ease: "easeInOut"}}
                            className="col-span-4 rounded-[64px] bg-ab w-[80%] h-[300px] bg-[#1D1D1D] flex justify-center items-center">
                    <div className="w-full max-w-[85%] h-full max-h-[85%] flex flex-col justify-center items-center">
                        <p className="text-[32px] font-poppins font-semibold">Say, Hello 👋</p>
                        <a href="https://calendly.com/imraneeslk/30min" className="px-6 py-3 rounded-[30px] bg-gb">Call with me</a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}