import ItemList from "./ItemList";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function List({ items, updateContent, sujets, handleSave }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Container entrance animation
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, []);

    const leftColumnItems = items.slice(0, 5);
    const rightColumnItems = items.slice(5, 10);

    return (
        <div ref={containerRef}>
            <div className="grid grid-cols-2 gap-6">
                {/* Colonne de gauche */}
                <div>
                    {leftColumnItems.map((item, index) => (
                        <div className="flex items-center gap-2" key={item}>
                            <p className="w-6">{index + 1}. </p>
                            <ItemList
                                sujet={sujets.find(s => s.id === item)}
                                updateContent={updateContent}
                                items={items}
                                index={index}
                                sujets={sujets}
                            />
                        </div>
                    ))}
                </div>

                {/* Colonne de droite */}
                <div>
                    {rightColumnItems.map((item, index) => (
                        <div className="flex items-center gap-2" key={item + 5}>
                            <p className="w-6">{index + 6}. </p>
                            <ItemList
                                sujet={sujets.find(s => s.id === item)}
                                updateContent={updateContent}
                                items={items}
                                index={index + 5}
                                sujets={sujets}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleSave} className="bg-[#14151a] hover:bg-gray-700 border-[3px] py-3 w-full border-[#5a5a5c] mt-4 text-lg lexend">Sauvegarder</button>
        </div>
    );
}