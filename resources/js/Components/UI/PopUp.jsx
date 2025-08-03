import ShadowScreen from "./ShadowScreen";

export default function PopUp({ show, setShow, title, children, className }) {

    if (!show) return null;

    return (
        <>
            <div onClick={() => setShow(false)}>
                <ShadowScreen />
            </div>

            <div className={"fixed bg-gray-800 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 " + className}>
                <div className="bg-[#05062d] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <svg onClick={() => setShow(false)} className="hover:stroke-[#4f4f4f] cursor-pointer" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>

                    {children}
                </div>
            </div>
        </>
    );
}
