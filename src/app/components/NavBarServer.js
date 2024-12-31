"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

let whiteListed = ["/", "/about"];
const NavBarServer = () => {
    let pathname = usePathname();

    const serverLink = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Profile",
            path: "/auth/profile",
        },
        {
            name: "Dashboard",
            path: "/auth/dashboard",
        },
    ];

    const clintLink = [
        {
            name: "Profile",
            path: "/auth/profile",
        },
        {
            name: "Dashboard",
            path: "/auth/dashboard ",
        },
    ];

    if (whiteListed.includes(pathname))
        return (
            <div className="flex h-14 items-center gap-10 mb-6 border-b px-2">
                <div className="text-2xl text-green-700">ServerNav</div>
                <ul className="flex items-center gap-4">
                    {serverLink.map((item) => (
                        <li
                            key={item.name}
                            className="text-xl text-zinc-400 hover:text-zinc-700 hover:cursor-pointer"
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );

    return null;
};

export default NavBarServer;
