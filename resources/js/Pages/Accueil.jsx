import LoadingScreen from "@/Components/System/LoadingScreen"
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Accueil() {

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    return (
        <div>
            <Head title="Accueil" />
            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}
            
            <h1 className="text-2xl">Biologie</h1>
        </div>
    );
}