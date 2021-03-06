import icon_search from '../assets/images/icon-search.svg'

export default function Search(props) {
    return (
        <section className="search">
            <h2 className="search_title sr-only">Search</h2>
            <img className="search__icon" src={ icon_search } alt="Search"/>
            <form className="search__form" onSubmit={props.onSubmit}>
                <input
                    className="search__form__input"
                    type="text"
                    aria-label="Search"
                    name="username"
                    placeholder="Search GitHub username.."
                    onChange={ props.clearError }
                />
                { props.error && <div className="search__form__errors">No results</div> }
                <input className="search__form__submit" type="submit" value="Search" />
            </form>
        </section>
    );
}