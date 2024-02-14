import {CgMenuGridO} from "react-icons/cg";
export const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'Projects',
            href: '#home'
        },
        {
            id: 2,
            link: 'Social Hub',
            href: '#about'
        },
        {
            id: 3,
            link: 'Affiliate',
            href: '#projects'
        },
        {
            id: 4,
            link: 'Documentation',
            href: '#contact'
        },
        {
            id: 5,
            link: 'Community',
            href: '#contact'
        },
    ]

    return(
        <>
            <div className="flex mt-4">
                <ul className="flex overflow-hidden">
                    {links.map(({id, link, href}) => (
                    <li key={id} className="w-[90%] ml-4">
                        <a className="flex text-center text-xl justify-center items-center px-4 py-2 bg-blue-600 rounded-3xl" href={href}>
                            <CgMenuGridO className=" mt-0.5 text-3xl mr-1"/> {link}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}