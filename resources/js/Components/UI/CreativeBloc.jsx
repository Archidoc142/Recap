import CreativeListItem from "./CreativeListItem";

export default function CreativeBloc({ type, setContent, content, id, onClick }) {

    function deleteItem() {
        setContent((c) => {
            const filteredContent = c.filter((i) => i.id !== id);
            updateContent(filteredContent);
            return filteredContent;
        });
    }

    function updateContent(updatedContent) {
        const mappedContent = updatedContent.map((item) => {
            if (item.id === id) {
                return { ...item };
            }
            return item;
        });
        setContent(mappedContent)
    }

    function handleChange(newValue, valueName) {
        setContent((c) => {
            const updatedContent = c.map((item) => {
                if (item.id === id) {
                    return { ...item, [valueName]: newValue };
                }
                return item;
            });
            updateContent(updatedContent);
            return updatedContent;
        });
    }

    return (
        <>
            {
                type == "title" ?
                    <>
                        <div className="flex justify-between items-center pb-1">
                            <p>Titre - #{id}</p>
                            <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                        </div>
                        <input
                            className="bg-transparent text-white w-full border-2 border-dashed mb-4"
                            value={content.find(item => item.id === id)?.text || ""}
                            onClick={onClick}
                            onChange={(e) => { handleChange(e.target.value, "text"); }}
                            type="text"
                        /><br />
                    </>

                    : type == "text" ?
                        <>
                            <div className="flex justify-between items-center pb-1">
                                <p>Paragraphe - #{id}</p>
                                <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                            </div>
                            <textarea
                                className="bg-transparent text-white w-full h-24 border-2 border-dashed mb-4"
                                onChange={(e) => { handleChange(e.target.value, "text"); }}
                                onClick={onClick}
                                value={content.find(item => item.id === id)?.text || ""}
                            ></textarea><br />
                        </>

                        : type == "list" ?
                            <>
                                <div className="flex justify-between items-center pb-1">
                                    <p>Liste - #{id}</p>
                                    <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                                </div>

                                <CreativeListItem
                                    content={content.find(item => item.id === id)?.items || [{ id: 1, type: "listItem", text: "" }]}
                                    handleChange={handleChange}
                                    onClick={onClick}
                                />
                            </>

                            : type == "image" ?
                                <>
                                    <div className="flex justify-between items-center pb-1">
                                        <p>Image - #{id} <span className="text-sm text-gray-500">(Lien)</span></p>
                                        <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                                    </div>

                                    <input
                                        onClick={onClick}
                                        value={content.find(item => item.id === id)?.link || ""}
                                        className="w-full border-2 bg-transparent text-white border-dashed mb-4 flex justify-center"
                                        type="text"
                                        onChange={(e) => { handleChange(e.target.value, "link"); }}
                                    />
                                </>

                                : type == "video" ?
                                    <>
                                        <div className="flex justify-between items-center pb-1">
                                            <p>Vidéo - #{id} <span className="text-sm text-gray-500">(Format Embed)</span></p>
                                            <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                                        </div>

                                        <input
                                            onClick={onClick}
                                            value={content.find(item => item.id === id)?.embed || ""}
                                            className="w-full border-2 bg-transparent text-white border-dashed mb-4 flex justify-center"
                                            type="text"
                                            onChange={(e) => { handleChange(e.target.value, "embed"); }}
                                        />
                                    </>
                                    : type == "hr" ?
                                        <>
                                            <div className="flex justify-between items-center pb-1">
                                                <p>Ligne de séparation - #{id}</p>
                                                <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                                            </div>

                                            <hr className="border-t-2 border-dashed border-gray-500 mb-4" />
                                        </>
                                        : type == "spacer" ?
                                            <>
                                                <div className="flex justify-between items-center pb-1">
                                                    <p>Espaceur - #{id}</p>
                                                    <button onClick={deleteItem} className="text-red-600 hover:text-red-400 underline">supprimer</button>
                                                </div>

                                                <button onClick={onClick} className="bg-[#14151a] hover:bg-gray-700 border-[3px] py-2 w-full border-[#5a5a5c] mb-4 text-lg">Style de l'espaceur</button>
                                            </> : null
            }
        </>
    );
}