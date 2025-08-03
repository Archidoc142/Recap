import { usePage } from "@inertiajs/react";
import { router } from '@inertiajs/react';

export default function ItemPanel({children, route, onClickFunction, className}) {
    
    const url = usePage().url.split('?')[0];
    
    const handleClick = () => {
        if (onClickFunction) onClickFunction();
        router.post(route);
    }

    return (
        <button
            onClick={handleClick}
            className={"hover:bg-[#23252b] text-lg px-6 py-[12px] unselectable " + className + ` ${url === route ? '!text-[#ff5e00]' : ""}`}
        >
            {children}
        </button>
    );
}
