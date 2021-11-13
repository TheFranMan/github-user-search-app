import icon_location from '../assets/images/icon-location.svg'
import icon_website from '../assets/images/icon-website.svg'
import icon_twitter from '../assets/images/icon-twitter.svg'
import icon_company from '../assets/images/icon-company.svg'
import classnames from 'classnames';

export default function Bio(props) {
    let unavailableClass = "unavailable"
    let notAvailable = <span className="bio__links__item__text">Not Available</span>

    let joined = ''
    if ( null !== props.user.joined ) {
        let formattedDate = new Date(props.user.joined).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric' }
        )

        joined = "Joined " + formattedDate
    }

    let name = props.user.name
    if ( null === props.user.name ) {
        name = props.user.username
    }

    let bio = "This profile has no bio"
    if ( null !== props.user.bio ) {
        bio = props.user.bio
    }

    let location = notAvailable
    if ( null !== props.user.location ) {
        location = <span className="bio__links__item__text">{ props.user.location }</span>
    }

    let blog = notAvailable
    if ( null !== props.user.blog ) {
        blog = <a className="bio__links__item__text" href={ props.user.blog } target="_blank" rel="noreferrer">{ props.user.blog }</a>
    }

    let twitter = notAvailable
    if ( null !== props.user.twitter ) {
        twitter = <a className="bio__links__item__text" href={ props.user.twitter } target="_blank" rel="noreferrer">{ props.user.twitter }</a>
    }

    let company = notAvailable
    if ( null !== props.user.company ) {
        let companyLink = props.user.company

        if ( "@" === props.user.company.charAt(0) ) {
            companyLink = props.user.company.substr(1)
        }

        company = <a className="bio__links__item__text" href={ 'https://github.com/' + companyLink } target="_blank" rel="noreferrer">{ props.user.company }</a>
    }

    return (
        <main className="bio">
            <img className="bio__avatar" src={ props.user.avatar } alt="" />
            <div className="bio__meta">
                <p className="bio__meta__name">{ name }</p>
                <p className="bio__meta__username">@{ props.user.username }</p>
                <time className="bio__meta__joined" dateTime={ joined }>{ joined }</time>
            </div>
            <p className={ classnames( "bio__bio", null === props.user.bio ? unavailableClass : '' ) }>{ bio }</p>
            <div className="bio__repos">
                <Details title="repos" value={ props.user.repos.number } />
                <Details title="followers" value={ props.user.repos.followers } />
                <Details title="following" value={ props.user.repos.following } />
            </div>
            <ul className="bio__links">
                <li className={ classnames("bio__links__item location", null === props.user.location ? unavailableClass : '' ) }>
                    <img className="bio__links__item__img" src={ icon_location } alt="location" />
                    { location }
                </li>
                <li className={ classnames("bio__links__item blog", null === props.user.blog ? unavailableClass : '') }>
                    <img className="bio__links__item__img" src={ icon_website } alt="blog" />
                    { blog }
                </li>
                <li className={ classnames("bio__links__item twitter", null === props.user.twitter ? unavailableClass : '') }>
                    <img className="bio__links__item___img" src={ icon_twitter } alt="twitter" />
                    { twitter }
                </li>
                <li className={ classnames("bio__links__item company", null === props.user.company ? unavailableClass : '') }>
                    <img className="bio__links__item___img" src={ icon_company } alt="company" />
                    { company }
                </li>
            </ul>
        </main>
    );
}

function Details(props) {
    return (
        <div className="bio__repos__card">
            <h4 className="bio__repos__card__title">{ props.title }</h4>
            <div className="bio__repos__card__value">{ props.value }</div>
        </div>
    );
}