import List from "@/Components/UI/List";
import { Head, useForm } from "@inertiajs/react";

export default function ModifierChapitre({ chapitre, sujets }) {

    const { delete: destroy } = useForm();
    function handleDelete(e) {
        e.preventDefault();
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce chapitre ?")) return;
        destroy(route("deleteChapitre", chapitre.data.id));
    }

    const id_chapitre = chapitre.data.id;
    const content = sujets.data
        .filter(sujet => sujet.chapitre == id_chapitre)
        .sort((a, b) => a.ordre - b.ordre)
        .map(sujet => sujet.id);

    const { data, setData, put } = useForm({
        data: content,
        originalContent: content
    });
    function handleSave(e) {
        e.preventDefault();
        put(route("updateChapitre", chapitre.data.id));
    }

    return (
        <>
            <Head title={"Modifier - " + chapitre.data.title} />
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
                            {chapitre.data.title}
                        </h1>
                        <p>
                            Par : <span className="font-bold" style={{ color: chapitre.data.couleur }}>{chapitre.data.author}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a target="_blank" href={route("showChapitre", chapitre.data.id)}>
                            <svg className="hover:stroke-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </a>

                        <button onClick={handleDelete}>
                            <svg className="hover:stroke-red-800" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </div>

                <hr className="dark:border-white border-black mb-4 border-2 rounded-full" />

                <div>
                    <h2 className="text-2xl">Contenu du chapitre</h2>
                    <p className="text-lg text-gray-500 mb-4">Maximum de 10 sujets</p>

                    <List sujets={sujets.data} items={data.data} updateContent={setData} handleSave={handleSave} />
                </div>
            </div>
        </>
    );
}