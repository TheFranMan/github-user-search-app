import icon_moon from '../assets/images/icon-moon.svg'

export default function Header(props) {
    return (
        <header className="main_header">
            <h1 className="main_header__title">devfinder</h1>
            <div className="main_header__theme_switcher">
                <button className="main_header__theme_switcher__btn">dark</button>
                <img src={ icon_moon } alt="crescent moon" />
            </div>
        </header>
    );
}