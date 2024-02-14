import {CgMenuGridO, CgMenuGridR} from "react-icons/cg";

export const Navbar = () => {


    return(
        <>
            <div className="flex mt-4 ml-4">
                <ul>
                    <li className="w-[90%]">
                        <a className="flex text-center justify-center items-center px-2 py-1 bg-blue-600 rounded-3xl" href="/">
                            <CgMenuGridO className=" mt-0.5 text-2xl mr-1"/> All
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}