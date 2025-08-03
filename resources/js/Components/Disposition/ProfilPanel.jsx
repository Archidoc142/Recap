import ShadowScreen from "../UI/ShadowScreen";
import Icon from "../UI/Icon";
import ItemPanel from "../UI/ItemPanel";
import ItemPanelPost from "../UI/ItemPanelPost";
import Dropdown from "../Breeze/Dropdown";

export default function ProfilPanel({ setVisibility, user }) {

    return (
        <>
            <div className="bg-[#14151a] fixed right-0 z-50 font-bold rounded-bl-lg overflow-hidden text-white">
                {
                    user ?
                        <div className="flex flex-col w-80">
                            <ItemPanel
                                route="/profile"
                                onClick={() => setVisibility(false)}
                                className="flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-6 text-[22px]">
                                    <Icon path={user?.icon_profil?.file_name || null} size={60} />
                                    <p className="group-hover:text-[#2545af]">{user.name}</p>
                                </div>
                                <svg className="group-hover:stroke-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                            </ItemPanel>

                            <hr className="border-gray-500 mb-2" />

                            <ItemPanelPost route={"/toggleLightMode"} onClickFunction={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                {user?.light_mode ? 
                                    <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                  : <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                                }
                                <p>{user?.light_mode ? "Activer le mode sombre" : "Activer le mode clair"}</p>
                            </ItemPanelPost>

                            <ItemPanel route={"/signet"} onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                <p>Signets de lecture</p>
                            </ItemPanel>

                            <ItemPanel route={"/search"} onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <p>Rechercher</p>
                            </ItemPanel>

                            <hr className="border-gray-500 my-2" />

                            <h4 className="text-lg px-4 py-2 text-gray-200 unselectable">Outils de création</h4>
                            <ItemPanel route="/sujets" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg width="25" height="25" viewBox="0 0 346.000000 345.000000"><g className="group-hover:fill-gray-500" transform="translate(0.000000,345.000000) scale(0.100000,-0.100000)" fill="#d9d9d9" stroke="none"><path d="M1440 3159 c-57 -34 -179 -104 -270 -157 -91 -52 -237 -136 -325 -187 -88 -51 -223 -129 -300 -174 -77 -44 -186 -107 -242 -138 l-103 -58 0 -782 0 -781 142 -83 c79 -45 202 -116 273 -158 72 -41 182 -104 245 -141 63 -37 180 -104 260 -150 80 -46 197 -114 260 -150 63 -37 130 -75 148 -84 l33 -17 212 122 c117 68 235 136 263 151 l51 28 38 -58 c199 -300 613 -396 925 -215 83 49 204 170 253 253 73 125 106 289 88 431 -35 264 -217 490 -463 573 -17 5 -18 39 -18 533 0 492 -1 529 -17 539 -10 6 -94 55 -188 109 -93 54 -228 132 -300 173 -71 41 -188 109 -260 150 -71 41 -186 107 -255 147 -69 40 -169 98 -223 129 -54 31 -103 56 -110 56 -7 0 -59 -28 -117 -61z m413 -312 c155 -90 393 -228 530 -306 136 -79 247 -146 247 -149 0 -4 -12 -14 -28 -23 -15 -8 -119 -69 -232 -134 -565 -327 -729 -421 -770 -443 l-45 -24 -85 49 c-47 27 -175 102 -285 165 -110 64 -256 148 -325 188 -69 39 -180 104 -248 142 -67 39 -124 73 -126 77 -3 4 44 34 102 68 59 33 195 112 302 174 107 62 299 172 425 245 127 74 236 134 243 134 7 0 140 -73 295 -163z m-1278 -723 c94 -54 280 -161 415 -239 135 -78 298 -172 363 -210 l117 -68 0 -618 c0 -418 -3 -619 -10 -619 -12 0 -49 21 -350 195 -113 65 -320 185 -460 266 l-255 147 -3 626 c-1 345 1 625 5 623 5 -3 85 -49 178 -103z m2155 -299 l0 -405 -58 0 c-160 0 -353 -89 -475 -219 -134 -143 -194 -313 -185 -521 l6 -109 -147 -84 c-80 -47 -163 -95 -184 -107 l-37 -22 2 627 3 627 130 75 c275 159 461 267 623 360 213 123 316 182 320 183 1 0 2 -182 2 -405z m93 -600 c177 -46 317 -178 368 -347 17 -56 21 -88 17 -177 -3 -103 -5 -112 -45 -192 -56 -113 -129 -186 -242 -242 -80 -40 -89 -42 -192 -45 -89 -4 -121 0 -177 17 -298 90 -446 431 -310 711 62 128 219 254 348 279 71 14 171 12 233 -4z"/><path d="M2610 920 l0 -100 -100 0 -100 0 0 -90 0 -90 100 0 100 0 0 -105 0 -105 90 0 89 0 3 103 3 102 103 3 102 3 0 89 0 90 -105 0 -105 0 0 100 0 100 -90 0 -90 0 0 -100z"/></g></svg>
                                <p>Mes sujets</p>
                            </ItemPanel>

                            {/*<ItemPanel route="/modify" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                                <p>Modification</p>
                            </ItemPanel>*/}

                            <hr className="border-gray-500 my-2" />

                            <Dropdown.Link
                                href={route('logout')}
                                method="post"
                                as="button"
                            >
                                <div className="text-gray-400 hover:text-white hover:bg-[#23252b] text-lg px-6 py-[12px] unselectable flex items-center gap-4 group" onClick={() => setVisibility(false)}>
                                    <svg className="group-hover:fill-gray-500" width="25" height="25" fill="#d9d9d9" viewBox="0 0 24 24"><path d="M15 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4H6v16h8v-4a1 1 0 0 1 1-1zm8.923-2.618a1 1 0 0 1-.217.326l-4 3.999A.993.993 0 0 1 19 17a.999.999 0 0 1-.707-1.707L20.586 13H15a1 1 0 0 1 0-2h5.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l3.999 4a.992.992 0 0 1 .217 1.089z"></path></svg>
                                    <p>Se déconnecter</p>
                                </div>
                            </Dropdown.Link>
                        </div>

                        :

                        <div className="flex flex-col w-60">
                            <ItemPanel onClick={() => setVisibility(false)} route="/register">Créer un compte</ItemPanel>
                            <ItemPanel onClick={() => setVisibility(false)} route="/login">Se connecter</ItemPanel>
                        </div>
                }
            </div>

            <div onClick={() => setVisibility(false)}>
                <ShadowScreen/>
            </div>
        </>
    );
}
