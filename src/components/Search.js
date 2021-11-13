import icon_search from '../assets/images/icon-search.svg'

export default function Search(props) {
    return (
        <section className="search">
            <h2 className="search_title sr-only">Search</h2>
            <img className="search__icon" src={ icon_search } alt="Search"/>
            <form className="search__form">
                <input className="search__form__input" type="text" aria-label="Search" placeholder="Search GitHub username.."/>
                { props.error && <div className="search__form__errors">No results</div> }
                <input className="search__form__submit" type="submit" />
            </form>
        </section>
    );
}