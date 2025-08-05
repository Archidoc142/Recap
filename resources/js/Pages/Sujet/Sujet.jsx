import { Head } from "@inertiajs/react";

export default function Sujet({ sujet }) {

    console.log(sujet)

    return (
        <div>
            <Head title={sujet.data.title} />

            <h1 className="dark:text-xl">{sujet.data.title}</h1>
        </div>
    );
}