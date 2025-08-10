import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ItemList({ sujet, updateContent, items, index, sujets }) {
    const [isRemoving, setIsRemoving] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const itemRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        // Entrance animation
        gsap.fromTo(itemRef.current,
            {
                opacity: 0,
                y: 20,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
                delay: index * 0.05
            }
        );
    }, [index]);

    const moveUp = () => {
        if (index === 0) return;
        setIsMoving(true);

        gsap.to(itemRef.current, {
            y: -10,
            scale: 1.05,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
                const newItems = [...items];
                [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
                updateContent('data', newItems);

                gsap.to(itemRef.current, {
                    y: 0,
                    scale: 1,
                    duration: 0.15,
                    ease: "power2.out",
                    onComplete: () => setIsMoving(false)
                });
            }
        });
    };

    const moveDown = () => {
        if (index === items.length - 1) return;
        setIsMoving(true);

        gsap.to(itemRef.current, {
            y: 10,
            scale: 1.05,
            duration: 0.15,
            ease: "power2.out",
            onComplete: () => {
                const newItems = [...items];
                [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
                updateContent('data', newItems);

                gsap.to(itemRef.current, {
                    y: 0,
                    scale: 1,
                    duration: 0.15,
                    ease: "power2.out",
                    onComplete: () => setIsMoving(false)
                });
            }
        });
    };

    const removeItem = () => {
        setIsRemoving(true);

        gsap.to(itemRef.current, {
            opacity: 0,
            x: -50,
            scale: 0.8,
            rotationX: 90,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                const newItems = items.filter((_, i) => i !== index);
                updateContent('data', newItems);
            }
        });
    };

    const addAfter = () => {
        setShowModal(true);
    };

    const selectSubject = (selectedSujet) => {
        setShowModal(false);
        setSearchTerm('');
        
        // Success pulse animation
        gsap.to(itemRef.current, {
            scale: 1.1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
            onComplete: () => {
                const newItems = [...items];
                newItems.splice(index + 1, 0, selectedSujet.id);
                updateContent('data', newItems);
            }
        });
    };

    const closeModal = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setShowModal(false);
                setSearchTerm('');
            }
        });
    };

    const availableSujets = sujets.filter(s => !items.includes(s.id));
    const filteredSujets = availableSujets.filter(s => 
        s.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div
                ref={itemRef}
                className="flex items-center gap-3 p-3 border rounded-lg mb-2 bg-gray-50 dark:bg-gray-800 w-full"
            >
                <div className="flex-1">
                    <h3 className="font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">{sujet?.title || 'Sujet introuvable'}</h3>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={moveUp}
                        disabled={index === 0 || isMoving}
                        className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded transition-colors duration-200"
                        onMouseEnter={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
                        onMouseLeave={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1, duration: 0.2 })}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
                    </button>

                    <button
                        onClick={moveDown}
                        disabled={index === items.length - 1 || isMoving}
                        className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded transition-colors duration-200"
                        onMouseEnter={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
                        onMouseLeave={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1, duration: 0.2 })}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </button>

                    <button
                        onClick={addAfter}
                        disabled={isRemoving || isMoving || items.length >= 10}
                        className="p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded transition-colors duration-200"
                        onMouseEnter={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
                        onMouseLeave={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1, duration: 0.2 })}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M12 4v16m8-8H4" /></svg>
                    </button>

                    <button
                        onClick={removeItem}
                        disabled={isRemoving || isMoving}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-200"
                        onMouseEnter={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1.1, duration: 0.2 })}
                        onMouseLeave={(e) => !e.target.disabled && gsap.to(e.target, { scale: 1, duration: 0.2 })}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>

            {/* Modal pour sélectionner un sujet */}
            {showModal && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div 
                        ref={modalRef}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4 max-h-96 flex flex-col border-4"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Choisir un sujet</h3>
                            <button  onClick={closeModal}>
                                <svg className='hover:stroke-gray-500' width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                            </button>
                        </div>
                        
                        <input
                            type="text"
                            placeholder="Rechercher un sujet..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 text-white font-bold"
                            autoFocus
                        />
                        
                        <div className="flex-1 overflow-y-auto">
                            {filteredSujets.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">
                                    {searchTerm ? 'Aucun sujet trouvé' : 'Aucun sujet disponible'}
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {filteredSujets.slice(0, 50).map(sujet => (
                                        <button
                                            key={sujet.id}
                                            onClick={() => selectSubject(sujet)}
                                            className="w-full text-left p-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <div className="font-medium">{sujet.title}</div>
                                            {sujet.description && (
                                                <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                                    {sujet.description}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                    {filteredSujets.length > 50 && (
                                        <p className="text-sm text-gray-500 text-center py-2">
                                            ... et {filteredSujets.length - 50} autres résultats
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}