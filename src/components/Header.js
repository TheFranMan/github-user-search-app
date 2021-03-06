import icon_moon from '../assets/images/icon-moon.svg'
import icon_sun from '../assets/images/icon-sun.svg'

export default function Header(props) {
    let themeDetails = {
        text: "Light",
        icon: icon_sun,
        alt: "sun",
    }

    if (!props.darkMode) {
        themeDetails.text = "Dark"
        themeDetails.icon = icon_moon
        themeDetails.alt = "crescent moon"
    }

    return (
        <header className="main_header">
            <h1 className="main_header__title">devfinder</h1>
            <div className="main_header__switcher" onClick={ props.onClick } role="button">
                { themeDetails.text }
                <img className="main_header__switcher__img" src={ themeDetails.icon } alt={ themeDetails.alt } />
            </div>
        </header>
    );
}