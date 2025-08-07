import { useDraggable } from '@dnd-kit/core';

export default function DraggableItem({ type, text, iconId }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: type,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            className="bg-[#2c2b2be1] rounded-lg p-2 mb-2 mx-2 flex items-center gap-2 border-2 border-gray-500 hover:border-gray-300 cursor-grab"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            {
                iconId == 1 ?
                    <svg className='w-6' fill='white' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 406.656"><path fillRule="nonzero" d="M92.263 0h327.474C470.498 0 512 41.501 512 92.262v222.131c0 50.749-41.513 92.263-92.263 92.263H92.263C41.502 406.656 0 365.154 0 314.393V92.262C0 41.493 41.493 0 92.263 0zm289.379 268.984H276.589v-33.616h37.398v-55.677l-37.398 2.519v-33.616l48.323-10.926h33.198v97.7h23.532v33.616zm-177.748 0v-46.432H172.38v46.432h-42.022V137.668h42.022v46.433h31.514v-46.433h42.022v131.316h-42.022zM419.737 30.098H92.263c-34.165 0-62.165 28-62.165 62.164v222.131c0 34.154 28.011 62.164 62.165 62.164h327.474c34.148 0 62.165-28.016 62.165-62.164V92.262c0-34.153-28.011-62.164-62.165-62.164z" /></svg>
                    : iconId == 2 ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                        : iconId == 3 ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                            : iconId == 4 ?
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M20.4 14.5L16 10 4 20" /></svg>
                                : iconId == 5 ?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                                    : iconId == 6 ?
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        : iconId == 7 ?
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                            : null
            }
            <p className='text-white text-lg'>{text}</p>
        </div>
    );
}