import {BsGithub} from "react-icons/bs";
import {FaLinkedin, FaXTwitter} from "react-icons/fa6";

export const Footer = () => {
    return(
        <>
            <div id="home" className="flex items-center justify-center py-7 lg:px-24 w-full">
                <div className="lg:w-[25%] hidden lg:flex flex justify-center items-center">
                    <img src="logo-is.png" alt=""/>
                    <h1 className="text-3xl font-bold font-anta ml-4">Nygma</h1>
                </div>
                <div className="lg:w-[50%] flex items-center justify-center">
                </div>
                <div className="lg:w-[25%] flex lg:justify-end items-center">
                    <a className="m-2" target="_blank" href="https://github.com/nygmasx"><BsGithub
                        className="text-3xl text-emerald-400"/></a>
                    <a className="m-2" target="_blank" href="https://twitter.com/nygmasl"><FaXTwitter
                        className="text-3xl text-emerald-400"/></a>
                    <a className="m-2" target="_blank" href=""><FaLinkedin className="text-3xl text-emerald-400"/></a>
                </div>

            </div>
        </>
        )

}