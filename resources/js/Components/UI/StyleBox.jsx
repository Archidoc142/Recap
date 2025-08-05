export default function StyleBox({ setContent, content, id }) {
    const selectedBlock = content.find(block => block.id === id);

    const updateBlockStyle = (value, valueName) => {
        setContent(prevContent =>
            prevContent.map(block =>
                block.id === id
                    ? {
                        ...block,
                        [valueName]: value
                    }
                    : block
            )
        );
    };

    const getStyleOptions = () => {
        if (!selectedBlock) return null;

        switch (selectedBlock.type) {
            case 'title':
                return (
                    <div className="p-4 pt-0">
                        <p>Niveau du titre :
                            <select className="bg-gray-800 w-full text-white border-2 border-gray-600 rounded-md mt-1 p-2 " onChange={(e) => updateBlockStyle(e.target.value, 'level')} value={selectedBlock?.level || '1'}>
                                <option value="1" className="bg-gray-800">1</option>
                                <option value="2" className="bg-gray-800">2</option>
                                <option value="3" className="bg-gray-800">3</option>
                                <option value="4" className="bg-gray-800">4</option>
                            </select>
                        </p>
                    </div>
                );
            case 'image':
                return (
                    <div className="p-4 pt-0">
                        <p>Légende :</p>
                        <input
                            type="text"
                            value={selectedBlock?.legend || ''}
                            onChange={(e) => updateBlockStyle(e.target.value, 'legend')}
                            className="bg-gray-800 w-full text-white border-2 border-gray-600 rounded-md mt-1 p-2"
                        />
                    </div>
                );
            default:
                return <p className="text-gray-500 text-lg text-center pb-3 pt-1 px-8">Aucun style disponible pour ce type de bloc</p>;
        }
    };

    return (
        <div className="w-2/5">
            <div className="w-full bg-[#1d1b1bef] border-gray-500 border-4 rounded-lg">
                <h2 className="text-center py-4 text-3xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">Modifier vos styles</h2>

                <hr className="border-2 mx-1" />

                {selectedBlock ? (
                    <div>
                        <h3 className="text-white text-xl p-4 pb-0"><span className="text-gray-400 font-bold">Bloc :</span> {selectedBlock.type} - #{id}</h3>

                        <hr className="border border-gray-500 mx-4 my-2" />

                        {getStyleOptions()}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center h-full p-4">Sélectionnez un bloc pour modifier ses styles</p>
                )}
            </div>
        </div>
    )
}