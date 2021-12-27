import {ReactComponent as IconLocation} from '../assets/images/icon-location.svg';
import {ReactComponent as IconWebsite} from '../assets/images/icon-website.svg';
import {ReactComponent as IconTwitter} from '../assets/images/icon-twitter.svg';
import {ReactComponent as IconCompany} from '../assets/images/icon-company.svg';
import classnames from 'classnames';

export default function Bio(props) {
    let unavailableClass = "unavailable"
    let notAvailable = <span className="bio__links__item__text">Not Available</span>

    let joined = ''
    let joined_machine = ''
    if ( null !== props.user.joined ) {
        joined_machine = props.user.joined

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
    let locationNotActive = false
    if ( null !== props.user.location ) {
        location = <span className="bio__links__item__text">{ props.user.location }</span>
        locationNotActive = true
    }
    let blog = notAvailable
    let blogNotActive = false
    if ( null !== props.user.blog && "" !== props.user.blog ) {
        blog = <a className="bio__links__item__text" href={ props.user.blog } target="_blank" rel="noreferrer">{ props.user.blog }</a>
        blogNotActive = true
    }

    let twitter = notAvailable
    let twitterNotActive = false
    if ( null !== props.user.twitter ) {
        twitter = <a className="bio__links__item__text" href={ props.user.twitter } target="_blank" rel="noreferrer">{ props.user.twitter }</a>
        twitterNotActive = true
    }

    let company = notAvailable
    let companyNotActive = false
    if ( null !== props.user.company ) {
        let companyLink = props.user.company

        if ( "@" === props.user.company.charAt(0) ) {
            companyLink = props.user.company.substr(1)
        }

        company = <a className="bio__links__item__text" href={ 'https://github.com/' + companyLink } target="_blank" rel="noreferrer">{ props.user.company }</a>
        companyNotActive = true
    }

    return (
        <main className="bio">
            <img className="bio__avatar" src={ props.user.avatar } alt="" />
            <div className="bio__meta">
                <p className="bio__meta__name">{ name }</p>
                <p className="bio__meta__username">@{ props.user.username }</p>
                <time className="bio__meta__joined" dateTime={ joined_machine }>{ joined }</time>
            </div>
            <p className={ classnames( "bio__bio", null === props.user.bio ? unavailableClass : '' ) }>{ bio }</p>
            <div className="bio__repos" aria-label="repository information">
                <Details title="repos" value={ props.user.repos.number } />
                <Details title="followers" value={ props.user.repos.followers } />
                <Details title="following" value={ props.user.repos.following } />
            </div>
            <ul className="bio__links" aria-label="contact information">
                <li className={ classnames("bio__links__item location", locationNotActive ? '' : unavailableClass) }>
                    <IconLocation className="bio__links__item__icon" role="img" title="location" />
                    { location }
                </li>
                <li className={ classnames("bio__links__item blog", blogNotActive ? '' : unavailableClass) }>
                    <IconWebsite className="bio__links__item__icon" role="img" title="blog" />
                    { blog }
                </li>
                <li className={ classnames("bio__links__item twitter", twitterNotActive ? '' : unavailableClass) }>
                    <IconTwitter className="bio__links__item__icon" role="img" title="twitter" />
                    { twitter }
                </li>
                <li className={ classnames("bio__links__item company", companyNotActive ? '' : unavailableClass) }>
                    <IconCompany className="bio__links__item__icon" role="img" title="company" />
                    { company }
                </li>
            </ul>
        </main>
    );
}

function Details(props) {
    return (
        <div className="bio__repos__card">
            <h2 className="bio__repos__card__title">{ props.title }</h2>
            <div className="bio__repos__card__value">{ props.value }</div>
        </div>
    );
}