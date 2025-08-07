import BuildingBlockArticle from "@/Components/UI/BuildingBlockArticle";
import BuildingBlockQuiz from "@/Components/UI/BuildingBlockQuiz";
import { Head } from "@inertiajs/react";

export default function Sujet({ sujet }) {
    return (
        <>
            <Head title={sujet.data.title} />

            <div className="px-6 py-4">
                <div className="pb-3">
                    <h1 className="text-4xl text-white">{sujet.data.title}</h1>
                    <p>Par : <span className="font-bold" style={{ color: sujet.data.couleur }}>{sujet.data.author}</span></p>
                </div>

                <hr className="dark:border-white border-black mb-8 border-2 rounded-full" />

                {
                    sujet.data.meta?.type === "Article" ?
                        sujet.data.meta?.content.map((item, index) => {
                            return <BuildingBlockArticle key={index} content={item} />
                        }) :
                        sujet.data.meta?.content.map((item, index) => {
                            return <BuildingBlockQuiz key={index} content={item} />
                    })
                }
            </div>
        </>
    );
}