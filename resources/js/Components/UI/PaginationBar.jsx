import { Link } from "@inertiajs/react";

function getPaginationLinks(current, last) {
    const pages = [];
    // Always show first page
    pages.push(1);

    // Show "..." if gap between first and current-2
    if (current > 4) pages.push("...");

    // Window around current page
    for (let i = Math.max(2, current - 2); i <= Math.min(last - 1, current + 2); i++) {
        pages.push(i);
    }

    // Show "..." if gap between current+2 and last
    if (current < last - 3) pages.push("...");

    // Always show last page if more than one page
    if (last > 1) pages.push(last);

    return pages;
}

export default function PaginationBar({ links, className }) {
    const current = Number(links.find(link => link.active)?.label);
    const last = Number(links[links.length - 2]?.label);

    const pageLinks = getPaginationLinks(current, last);

    // Find previous and next links
    const prevLink = links[0].url || null;
    const nextLink = links[links.length - 1].url || null;

    return (
        <div className={"text-center flex justify-center items-center gap-1 unselectable " + className}>
            {/* Previous button */}
            {
                prevLink ? (
                    <Link
                        href={prevLink}
                        className="bg-[#243F9B] border-2 border-[#424242] px-4 py-2 font-bold text-white mx-1"
                    >
                        Précédent
                    </Link>
                ) : (
                    <span className="border-2 border-[#424242] px-4 py-2 font-bold text-gray-500 mx-1">
                        Précédent
                    </span>
                )
            }

            {/* Page links */}
            {pageLinks.map((label, i) => {
                if (label === "...") {
                    return <span key={i} className="mx-1">...</span>;
                }
                const link = links.find(l => l.label == label);
                return link && link.url ? (
                    <Link
                        key={i}
                        href={link.url}
                        className={`border-2 border-[#424242] px-4 py-2 mx-1 font-bold ${link.active ? 'text-white bg-[#243F9B]' : 'text-gray-500'}`}
                    >
                        {label}
                    </Link>
                ) : (
                    <span key={i} className="mx-1">{label}</span>
                );
            })}

            {/* Next button */}
            {
                nextLink ? (
                    <Link
                        href={nextLink}
                        className="bg-[#243F9B] border-2 border-[#424242] px-4 py-2 font-bold text-white mx-1"
                    >
                        Suivant
                    </Link>
                ) : (
                    <span className="border-2 border-[#424242] px-4 py-2 font-bold text-gray-500 mx-1">
                        Suivant
                    </span>
                )
            }
        </div>
    );
}
