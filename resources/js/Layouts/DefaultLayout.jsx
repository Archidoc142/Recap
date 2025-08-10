import { usePage } from '@inertiajs/react';
import Nav from '../Components/Disposition/Nav';
import React, { useEffect, useRef, useState } from "react";
import LeftNav from '@/Components/Disposition/LeftNav';
import ProfilPanel from '@/Components/Disposition/ProfilPanel';

export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null;

    const [profilPanel, setProfilPanel] = useState(false);
    const [leftNav, setLeftNav] = useState(true);

    const leftNavRef = useRef(null);
    const mainRef = useRef(null);

    const [isProfile, setIsProfile] = useState(false);
    const profilURLArray = ['/profile', '/signet', '/sujet', '/sujets', '/chapitre', '/chapitres', '/cours'];

    const [isClass, setIsClass] = useState(false);
    const classURL = '/classe';

    const [isModifier, setIsModifier] = useState(false);
    const modifierURL = '/modifier/sujet';

    const { url } = usePage();

    useEffect(() => {
        const isInProfil = profilURLArray.some(prefix => url.startsWith(prefix));
        setIsProfile(isInProfil);

        const isInClass = url.startsWith(classURL);
        setIsClass(isInClass);

        const isInModifier = url.startsWith(modifierURL);
        setIsModifier(isInModifier);

        if (isInClass || isInModifier) setLeftNav(true);
    }, [url]);

    useEffect(() => {
        if (user?.light_mode === false) {
            document.documentElement.classList.add('dark');
        } else if (user?.light_mode === true) {
            document.documentElement.classList.remove('dark');
        }
    }, [user?.light_mode]);

    return (
        <div>
            <Nav
                setProfilPanel={setProfilPanel}
                setLeftNav={setLeftNav}
                leftNav={leftNav}
                profilPanel={profilPanel}
                icon={user?.icon?.file_name || null}
                leftNavRef={leftNavRef}
                mainRef={mainRef}
                isInModifier={isModifier}
            />

            {/* Left Nav*/}
            <LeftNav
                setVisibility={setProfilPanel}
                ref={leftNavRef}
                isProfile={isProfile}
                isInClass={isClass}
                isInModifier={isModifier}
            />

            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main className='pl-72 min-h-[calc(100vh-64px)]' ref={mainRef}>
                {children}
            </main>
        </div>
    );
}