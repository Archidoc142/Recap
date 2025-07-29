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

    const profilePrefix = '/profile'
    const [isProfile, setIsProfile] = useState(false)

    const { url } = usePage()

    useEffect(() => {
        const isInProfil = url.startsWith(profilePrefix)
        setIsProfile(isInProfil)
    }, [url])

    return(
        <div className="relative h-screen">
            <Nav
                setProfilPanel={setProfilPanel}
                setLeftNav={setLeftNav}
                leftNav={leftNav}
                profilPanel={profilPanel}
                icon={user?.icon?.file_name || null}
                leftNavRef={leftNavRef}
            />

            {/* Left Nav*/}
            <LeftNav
                setVisibility={setProfilPanel}
                ref={leftNavRef}
                isProfile={isProfile}
            />

            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main>
                {React.cloneElement(children, { leftNav })}
            </main>
        </div>
    )
}
