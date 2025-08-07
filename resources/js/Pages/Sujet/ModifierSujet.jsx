import DroppableBox from "@/Components/UI/DroppableBox";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ModifierLayout from "@/Layouts/ModifierLayout";
import CreativeBloc from "@/Components/UI/CreativeBloc";
import StyleBox from "@/Components/UI/StyleBox";

export default function ModifierSujet({ sujet, droppedItem, setDroppedItem }) {

    const initialContent = (() => {
        if (sujet.data.meta) {
            const meta = sujet.data.meta;
            return meta.content && Array.isArray(meta.content) ? meta.content : [];
        }
        return [];
    })();

    const [content, setContent] = useState(initialContent);
    const [selectedBox, setSelectedBox] = useState(null);
    const [id, setId] = useState(initialContent.length > 0 ? Math.max(...initialContent.map(item => item.id)) + 1 : 1);

    useEffect(() => {
        if (droppedItem) {
            setContent(prev => [...prev, { "id": id, "type": droppedItem }]);
            setId(p => p + 1);
            setDroppedItem(null);
        }
    }, [droppedItem, setDroppedItem, id]);

    const { delete: destroy } = useForm();
    function handleDelete(e) {
        e.preventDefault();
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce sujet ?")) return;
        destroy(route("deleteSujet", sujet.data.id));
    }

    const { data, setData, put } = useForm({
        content: initialContent
    });

    useEffect(() => {
        setData('content', content);
    }, [content, setData]);

    function handleSave(e) {
        e.preventDefault();
        put(route("updateSujet", sujet.data.id));
    }

    return (
        <>
            <Head title={"Modifier - " + sujet.data.title} />
            <div className="px-4 py-4">
                <div className="flex items-center justify-between pb-3">
                    <div>
                        <h1
                            className="text-4xl"
                            style={{
                                background: "linear-gradient(to right, #1e40af, #22c55e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {sujet.data.title}
                        </h1>
                        <p>
                            Par : <span className="font-bold" style={{ color: sujet.data.couleur }}>{sujet.data.author}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a target="_blank" href={route("showSujet", sujet.data.id)}>
                            <svg className="hover:stroke-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </a>
                    
                        <button onClick={handleDelete}>
                            <svg className="hover:stroke-red-800" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </div>

                <hr className="dark:border-white border-black mb-8 border-2 rounded-full" />

                <div className="flex gap-4">
                    <div className="w-3/5 border-r-2 border-gray-600 pr-4" id="content"> {/* Content*/}
                        {content.map((data, index) => (
                            <CreativeBloc
                                key={index}
                                type={data.type}
                                setContent={setContent}
                                content={content}
                                id={data.id}
                                onClick={() => setSelectedBox(data.id)}
                            />
                        ))}

                        <DroppableBox />
                        <button onClick={handleSave} className="bg-[#14151a] hover:bg-gray-700 border-[3px] py-4 w-full border-[#5a5a5c] mt-4 text-lg lexend">Sauvegarder</button>
                    </div>

                    <StyleBox
                        setContent={setContent}
                        content={content}
                        id={selectedBox}
                    />
                </div>
            </div>
        </>
    );
}

ModifierSujet.layout = page => <ModifierLayout children={page} />;