import icon_search from '../assets/images/icon-search.svg'

export default function Search(props) {
    return (
        <form className="search" onSubmit={props.onSubmit}>
            <img className="search__icon" src={ icon_search } alt="Search"/>
            <input
                className="search__input"
                type="text"
                aria-label="Search"
                name="username"
                placeholder="Search GitHub username.."
                onChange={ props.clearError }
            />
            { props.error && <div className="search__errors">No results</div> }
            <input className="search__submit" type="submit" value="Search" />
        </form>
    );
}