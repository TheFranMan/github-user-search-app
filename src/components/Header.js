import { useContext } from 'react'
import { ThemeContext } from './App.js'
import icon_moon from '../assets/images/icon-moon.svg'
import icon_sun from '../assets/images/icon-sun.svg'

export default function Header(props) {
    const darkMode = useContext(ThemeContext)

    let themeDetails = {
        text: "Light",
        icon: icon_sun,
        label: "enable light mode",
        pressed: false,
    }

    if (!darkMode) {
        themeDetails.text = "Dark"
        themeDetails.icon = icon_moon
        themeDetails.label = "enable dark mode"
        themeDetails.pressed = true
    }

    return (
        <header className="main_header">
            <h1 className="main_header__title">devfinder</h1>
            <button
                class="main_header__theme"
                type="button"
                onClick={ props.onClick }
                aria-labelledby="theme-heading"
                role="switch"
                aria-checked={ themeDetails.pressed }
            >
                <span id="theme-heading" class="sr-only">Enable dark mode</span>
                { themeDetails.text }
                <img className="main_header__theme__img" src={ themeDetails.icon } aria-hidden="true" alt="" />
            </button>
        </header>
    );
}