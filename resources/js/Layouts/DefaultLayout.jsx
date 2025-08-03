import { usePage } from '@inertiajs/react'
import Nav from '../Components/Disposition/Nav'
import React, { useEffect, useRef, useState } from "react"
import LeftNav from '@/Components/Disposition/LeftNav'
import ProfilPanel from '@/Components/Disposition/ProfilPanel'


export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)

    const leftNavRef = useRef(null)
    const mainRef = useRef(null)

    const profilURLArray = ['/profile', '/signet', '/sujets']
    const [isProfile, setIsProfile] = useState(false)

    const { url } = usePage()

    useEffect(() => {
        const isInProfil = profilURLArray.some(prefix => url.startsWith(prefix))
        setIsProfile(isInProfil)
    }, [url])

    useEffect(() => {
        if (user?.light_mode == false) {
            document.documentElement.classList.add('dark');
        } else if (user?.light_mode == true) {
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
            />

            {/* Left Nav*/}
            <LeftNav
                setVisibility={setProfilPanel}
                ref={leftNavRef}
                isProfile={isProfile}
            />

            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main className='h-[calc(100vh-64px)]' ref={mainRef}>
                {React.cloneElement(children, { leftNav })}
            </main>
        </div>
    )
}
