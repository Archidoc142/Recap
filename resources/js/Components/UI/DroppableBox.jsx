import { useDroppable } from '@dnd-kit/core';

export default function DroppableBox() {
    const { isOver, setNodeRef } = useDroppable({
        id: 'dropzone',
    });

    return (
        <div
            className={'w-full h-16 bg-black border-2 border-dashed border-gray-300 flex items-center justify-center text-white ' + (isOver ? 'bg-gray-500' : '')}
            ref={setNodeRef}
        >
            Déposez ici!
        </div>
    );
}