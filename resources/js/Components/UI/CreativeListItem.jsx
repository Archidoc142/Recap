import { useEffect, useState } from "react";

export default function CreativeListItem({ content, handleChange, onClick }) {

    const [listItems, setListItems] = useState(content);
    const [id, setId] = useState(content.length > 0 ? Math.max(...content.map(item => item.id)) + 1 : 1);

    function deleteItem(id) {
        setListItems((items) => {
            const filteredItems = items.filter((i) => i.id !== id);
            updateContent(filteredItems);
            return filteredItems;
        });
    }

    function updateContent(updatedItem) {
        setListItems((prevItems) => 
            prevItems.map((item) => 
                item.id === updatedItem.id ? { ...item, ...updatedItem } : item
            )
        );
    }

    function addItem() {
        setId(p => p + 1);
        const newItem = { id: id, type: "listItem", text: "" };
        setListItems((items) => [...items, newItem]);
    }

    useEffect(() => {
        handleChange(listItems, "items");
    }, [listItems]);

    return (
        <div className="flex flex-col gap-2">

            {listItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-4">
                    <input 
                        value={item.text || ""} 
                        onChange={(e) => updateContent({ id: item.id, text: e.target.value })} 
                        className="bg-transparent border-dashed border-2 w-full text-white"
                        onClick={onClick}
                        type="text" 
                    />

                    {
                        /* Bouton de suppression*/
                        index > 0 && (
                            <button onClick={() => deleteItem(item.id)} className="border-2 p-2 border-gray-500 hover:bg-gray-700 hover:text-white">
                                <svg className="hover:stroke-red-800" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                        )
                    }


                    {/* Bouton d'ajout*/}
                    <button onClick={addItem} className="border-2 p-2 border-gray-500 hover:bg-gray-700 hover:text-white">
                        <svg className="hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            ))}

        </div>
    );
}