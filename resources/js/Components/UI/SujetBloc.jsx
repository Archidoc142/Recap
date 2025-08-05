import { Link } from "@inertiajs/react";

export default function SujetBloc({ sujet, canModify = false }) {
    return (
        <Link
            className="border-2 border-gray-500 rounded-lg group hover:bg-gray-800 hover:border-gray-200 cursor-pointer"
            href={`/sujet/${sujet.id}`}
        >
            <div className="px-4 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 max-w-[90%]">
                    <h2 className="text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">{sujet.title}</h2>
                    <button><svg className="group-hover:stroke-white" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg></button>
                </div>

                {
                    canModify ?
                        <Link href={`/modifier/sujet/${sujet.id}`}>
                            <svg className="hover:stroke-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        </Link> : null
                }
            </div>

            <div className="flex items-center justify-between px-4 py-2">
                <p className={"max-w-[55%] text-gray-400 font-semibold whitespace-nowrap overflow-hidden text-ellipsis " + (!canModify ? "!max-w-full" : null)}>{sujet.chapitre ? `Chapitre : ${sujet.chapitre}` : "Non affilié à un chapitre"}</p>

                {
                    canModify ?
                        <p className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{sujet.etat}</p>
                        : null
                }
            </div>

            <div className="h-2 w-full rounded-b-md" style={{ backgroundColor: sujet.couleur }} />
        </Link>
    );
}
