'use client'
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes"

export default function ThemeSwap() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <aside className="items-center grid-flow-col ">
                <label className="swap swap-rotate justify-center ">
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    <RiSunLine className="swap-on fill-current w-7 h-7" onClick={() => setTheme('dark')} />

                    <RiMoonLine className="swap-off fill-current w-7 h-7" onClick={() => setTheme('light')} />

                </label>
            </aside>
        </>
    )
}