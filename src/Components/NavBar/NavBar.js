import React, { useRef, useState, useEffect } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { lightColors, nightColors } from '../../Variables'

export default function NavBar() {
    const [nightMode, setNightMode] = useState(localStorage.getItem('nightMode') === "true")
    const navBar = useRef(null)

    const urlParams = new URLSearchParams(window.location.search)
    const rgbMode = urlParams.get('rgb')

    var firstStart

    useEffect(() => {
        if (rgbMode === "true") {
            var hue = 0
            setInterval(() => {
                document.documentElement.style.setProperty('--primary-color', `hsl(${hue}, 100%, 70%)`);
                hue += 1
            }, 100)
        }

        firstStart = true
    }, [])

    useEffect(() => {
        localStorage.setItem('nightMode', nightMode)
        var mainPageContainer = document.querySelector(".main-page-container")
        if (!firstStart) mainPageContainer.classList.add("color-transition")
        document.documentElement.style.setProperty('--bg-color', nightMode ? nightColors.background : lightColors.background)
        if (!rgbMode) document.documentElement.style.setProperty('--primary-color', nightMode ? nightColors.primary : lightColors.primary)
        document.documentElement.style.setProperty('--shadow-color', nightMode ? nightColors.shadow : lightColors.shadow)
        document.documentElement.style.setProperty('--neu-upper-shadow', nightMode ? nightColors.neuUpper : lightColors.neuUpper)
        document.documentElement.style.setProperty('--neu-lower-shadow', nightMode ? nightColors.neuLower : lightColors.neuLower)
        setTimeout(() => {
            mainPageContainer.classList.remove("color-transition")
        }, 1000)
        firstStart = false
    }, [nightMode])

    function handleNavHide() {
        if (navBar.current.classList.contains("hidden")) {
            navBar.current.classList.toggle("hidden")
            navBar.current.style.animation = "navbar-hide-animation-reverse 2000ms ease-in-out forwards"
            setTimeout(() => {
                navBar.current.style.animation = ""
            }, 2000)
        }else {
            navBar.current.classList.toggle("hidden")
        }
    }

    function toggleColorMode() {
        setNightMode(!nightMode)
    }
    
    return (
        <>
            <div className='color-mode-button' onClick={toggleColorMode}>{nightMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</div>
            <nav ref={navBar}>
                <h1 className='navbar-logo'>YIGIT</h1>
                <div className='page-selector-container'>
                    <NavLink to="/" activeClassName="active" exact><i className="fa-solid fa-house"></i></NavLink>
                    <NavLink to="/projects" activeClassName="active" exact><i className="fa-solid fa-code"></i></NavLink>
                    <NavLink to="/contact" activeClassName="active" exact><i className="fa-solid fa-envelope"></i></NavLink>
                </div>
                <i className="fa-solid fa-angle-left hide-nav-icon" onClick={handleNavHide}></i>
            </nav>
        </>
    )
}