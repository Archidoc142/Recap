import PrimaryButton from "@/Components/Breeze/PrimaryButton";
import LoadingScreen from "@/Components/System/LoadingScreen"
import PaginationBar from "@/Components/UI/PaginationBar";
import PopUp from "@/Components/UI/PopUp";
import SujetBloc from "@/Components/UI/SujetBloc";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Cours({ cours }) {

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [show, setShow] = useState(false)
    const { data, setData, post, processing, reset } = useForm({
        title: '',
        type: 'Article',
        id_etat: 2,
        couleur: '#4545FF', // Default color
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('storeSujet'), {
            data,
            onSuccess: () => {
                setShow(false);
                reset();
            }
        });
    };


    return (
        <div className="relative h-full min-h-[calc(100vh-64px)]">
            <Head title="Cours" />
            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}

            <PopUp
                show={show}
                setShow={setShow}
                title="Ajouter un sujet"
                className="max-w-[500px] min-w-[370px] w-2/3 p-1 rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] bg-gradient-to-br from-[#AF40FF] via-[#5B42F3] to-[#00DDEB]"
            >
                <form onSubmit={submit}>
                    <div className="form__group field mb-4 -mt-4">
                        <input
                            type="text"
                            className="form__field"
                            value={data.title}
                            placeholder=""
                            required
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <label htmlFor="title" className="form__label">Titre</label>
                    </div>

                    <div className="flex justify-between mb-4">
                        <div className="border-2 border-[#c0c0c0] rounded-lg p-4 w-[55%] mr-2">
                            <label className="text-[17px] font-semibold" htmlFor="type">Sélectionner un type</label><br />

                            <label className="radio-label">
                                <input defaultChecked required type="radio" name="option" className="radio-input" value="Article" onChange={(e) => setData('type', e.target.value)} />
                                <span className="radio-custom"></span>
                                <span className="radio-text">Article</span>
                            </label>

                            <label className="radio-label">
                                <input type="radio" name="option" className="radio-input" value="Quiz" onChange={(e) => setData('type', e.target.value)} />
                                <span className="radio-custom"></span>
                                <span className="radio-text">Quiz</span>
                            </label>
                        </div>

                        <div className="border-2 border-[#5a5a5c] rounded-lg p-4 w-[45%] mr-2">
                            <label className="text-[17px] font-semibold" htmlFor="etat">Sélectionner un état</label><br />

                            <label className="radio-label">
                                <input required type="radio" name="etat" className="radio-input" value="1" onChange={(e) => setData('id_etat', e.target.value)} />
                                <span className="radio-custom"></span>
                                <span className="radio-text">Publique</span>
                            </label>

                            <label className="radio-label">
                                <input defaultChecked required type="radio" name="etat" className="radio-input" value="2" onChange={(e) => setData('id_etat', e.target.value)} />
                                <span className="radio-custom"></span>
                                <span className="radio-text">Privé</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg">Couleur : <span className="font-bold">{data.couleur}</span></p>
                    </div>

                    <div className="my-4 font-bold text-transparent">
                        <div>
                            <button type="button" className="bg-[#00A6FF] hover:text-white py-2 w-1/6 rounded-tl-lg" onClick={() => setData('couleur', '#00A6FF')}>00A6FF</button>
                            <button type="button" className="bg-[#4de4c1] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#4DE4C1')}>4DE4C1</button>
                            <button type="button" className="bg-[#E9C46A] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#E9C46A')}>E9C46A</button>
                            <button type="button" className="bg-[#233d47] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#233D47')}>233D47</button>
                            <button type="button" className="bg-[#b6464f] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#B6464F')}>B6464F</button>
                            <button type="button" className="bg-[#a7a7a7] hover:text-white py-2 w-1/6 rounded-tr-lg" onClick={() => setData('couleur', '#A7A7A7')}>A7A7A7</button>
                        </div>
                        <div>
                            <button type="button" className="bg-[#3295ca] hover:text-white py-2 w-1/6 rounded-bl-lg" onClick={() => setData('couleur', '#3295CA')}>3295CA</button>
                            <button type="button" className="bg-[#4de466] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#4DE466')}>4DE466</button>
                            <button type="button" className="bg-[#e9b26a] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#E9B26A')}>E9B26A</button>
                            <button type="button" className="bg-[#132b35] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#132B35')}>132B35</button>
                            <button type="button" className="bg-[#772c86] hover:text-white py-2 w-1/6" onClick={() => setData('couleur', '#772C86')}>772C86</button>
                            <button type="button" className="bg-[#dfdfdf] hover:text-white py-2 w-1/6 rounded-br-lg" onClick={() => setData('couleur', '#DFDFDF')}>DFDFDF</button>
                        </div>
                    </div>

                    <div className="center">
                        <PrimaryButton type="submit" className="bg-transparent border-[3px] border-[#5a5a5c] rounded-none" disabled={processing}>
                            Créer un nouveau sujet
                        </PrimaryButton>
                    </div>
                </form>
            </PopUp>

            <div className="flex items-center justify-between px-4 py-4">
                <h1 className="text-4xl">Mes sujets</h1>

                <button onClick={() => setShow(true)}>
                    <svg className="dark:hover:stroke-gray-300 hover:stroke-gray-800 hover:scale-110 transition-transform dark:stroke-white stroke-black" width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>

            <hr className="dark:border-white border-black mx-4 border-2 rounded-full" />

            {
                sujets.data.length > 0 ?
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                            {sujets.data.map((sujet) => (
                                <SujetBloc key={sujet.id} sujet={sujet} canModify={true} />
                            ))}
                        </div>

                        <PaginationBar links={sujets.meta.links} />
                    </>
                    :
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl dark:text-gray-500">Aucun sujet</div>
            }
        </div>
    );
}