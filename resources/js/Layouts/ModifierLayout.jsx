import { usePage } from '@inertiajs/react'
import Nav from '../Components/Disposition/Nav'
import React, { useEffect, useRef, useState } from "react"
import LeftNav from '@/Components/Disposition/LeftNav'
import ProfilPanel from '@/Components/Disposition/ProfilPanel'
import { DndContext } from '@dnd-kit/core';

export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(true)

    const leftNavRef = useRef(null)
    const mainRef = useRef(null)

    const [isProfile, setIsProfile] = useState(false)
    const profilURLArray = ['/profile', '/signet', '/sujets']

    const [isClass, setIsClass] = useState(false)
    const classURL = '/sujet'

    const [isModifier, setIsModifier] = useState(false)
    const modifierURL = '/modifier/sujet'

    const [droppedItem, setDroppedItem] = useState(null);

    const { url } = usePage()

    useEffect(() => {
        const isInProfil = profilURLArray.some(prefix => url.startsWith(prefix))
        setIsProfile(isInProfil)

        const isInClass = url.startsWith(classURL)
        setIsClass(isInClass)

        const isInModifier = url.startsWith(modifierURL)
        setIsModifier(isInModifier)

        if (isInClass || isInModifier) setLeftNav(true)
    }, [url])

    useEffect(() => {
        if (user?.light_mode == false) {
            document.documentElement.classList.add('dark');
        } else if (user?.light_mode == true) {
            document.documentElement.classList.remove('dark');
        }
    }, [user?.light_mode]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && over.id === 'dropzone') {
            const draggedItem = active.id;
            setDroppedItem(draggedItem);
        }
    };

    const childrenWithProps = React.cloneElement(children, { 
        droppedItem: droppedItem,
        setDroppedItem: setDroppedItem,
    });

    return (
        <DndContext onDragEnd={handleDragEnd}>
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

                <main className='h-[calc(100vh-64px)] pl-72' ref={mainRef}>
                    {childrenWithProps}
                </main>
            </div>
        </DndContext>
    )
}
