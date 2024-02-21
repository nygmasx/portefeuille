import {BsGithub} from "react-icons/bs";
import {FaLinkedin, FaXTwitter} from "react-icons/fa6";
import {motion} from "framer-motion";

export const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'Home',
            href: '#home'
        },
        {
            id: 2,
            link: 'About',
            href: '#about'
        },
        {
            id: 3,
            link: 'Projects',
            href: '#projects'
        },
        {
            id: 4,
            link: 'Contact',
            href: '#contact'
        },
    ]

    return (
        <>
            <div className="flex justify-center py-7 px-24 w-full">
                <div className="w-[25%] flex  items-center">
                    <img src="logo-is.png" alt=""/>
                    <h1 className="text-3xl font-bold font-anta ml-4">Nygma</h1>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <ul className="flex overflow-hidden justify-center items-center border-[1px] rounded-[80px]
                     w-[650px] border-gray-700 bg-[#141414] h-[70px] fixed z-50 ">
                        {links.map(({id, link, href}) => (
                            <li key={id} className="w-[90%] m-4">
                                <motion.a whileHover={{scale: 1.05}} className="flex text-center text-[16px] font-light justify-center items-center
                                bg-[#1D1D1D] py-2.5 px-3 rounded-[80px] border-[1px] border-neutral-700"
                                   href={href}>{link}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[25%] flex justify-end items-center">
                    <a className="m-2" target="_blank" href="https://github.com/nygmasx"><BsGithub className="text-3xl text-emerald-400"/></a>
                    <a className="m-2" target="_blank" href="https://twitter.com/nygmasl"><FaXTwitter className="text-3xl text-emerald-400"/></a>
                    <a className="m-2" target="_blank" href=""><FaLinkedin className="text-3xl text-emerald-400"/></a>
                </div>

            </div>
        </>
    )
}