import LoadingScreen from "@/Components/System/LoadingScreen"
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Signet() {

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    return (
        <div>
            <Head title="Signet" />
            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}
            
            <h1 className="dark:text-xl">Méthodologie</h1>
        </div>
    );
}