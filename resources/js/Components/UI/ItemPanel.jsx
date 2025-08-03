import { Link, usePage } from "@inertiajs/react";

export default function ItemPanel({children, route, onClick, className}) {

    const url = usePage().url.split('?')[0];

    return (
        <Link
            href={route}
            className={"hover:bg-[#23252b] text-lg px-6 py-[12px] unselectable " + className + ` ${url === route ? '!text-[#2545af]' : ""}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
