import { useState, useReducer, useEffect } from 'react';
import Header from './Header.js'
import Search from './Search.js'
import Bio from './Bio.js'
import '../assets/scss/main.scss'

function App() {
  const DEFAULT_USER_NAME = 'octocat'

  let defaultUser = {
    avatar: null,
    name: null,
    username: null,
    joined: null,
    bio: null,
    repos: {
      number: 0,
      followers: 0,
      following: 0,
    },
    location: null,
    blog: null,
    twitter: null,
    company: null,
  }

  const userReducer = (state, action) => {
    switch ( action.type ) {
      case 'updateUser':
          return {
            avatar: action.user.avatar_url,
            name: action.user.name,
            username: action.user.login,
            joined: action.user.created_at,
            bio: action.user.bio,
            repos: {
              number: action.user.public_repos,
              followers: action.user.followers,
              following: action.user.following,
            },
            location: action.user.location,
            blog: action.user.blog,
            twitter: action.user.twitter_username,
            company: action.user.company,
          }
      default:
        throw new Error(`Unknown dispatch type: ${action.type}`)
    }
  }

  const [darkMode, updateDarkMode] = useState(false)
  const [searchErr, updateSearchErr] = useState(false)
  const [user, dispatch] = useReducer(userReducer, defaultUser)

  // Called only on mount, so basically when the page loads.
  useEffect(() => {
    getUser(DEFAULT_USER_NAME)
  }, [])

  const getUser = (username) => {
    window.fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if ( !response.ok ) {
        updateSearchErr(true)
        throw new Error('Network response was not OK');
      }

      return response.json()
    })
    .then(data => {
      dispatch({
        type: 'updateUser',
        user: data,
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const handelGetUser = (e) => {
    e.preventDefault()

    let username = e.target.username.value
    if ( null === username ) {
      return
    }

    if ( "" === username ) {
      return
    }

    getUser(username)
  }

  // Listen to system level color scheme changes.
  // These override app level changes
  useEffect(() => {
    let themeMode = window.matchMedia("(prefers-color-scheme: dark)")

    themeMode.addEventListener('change', function (evt) {
      let isDarkMode = evt.matches

      if ( isDarkMode ) {
        document.body.classList.add('dark-mode')
        updateDarkMode(true)
      } else {
        document.body.classList.remove('dark-mode')
        updateDarkMode(false)
      }
    });
  }, [])


  function handleThemeSwitch() {
    document.body.classList.toggle('dark-mode')
    updateDarkMode(!darkMode)
  }

  return (
    <>
      <Header darkMode={ darkMode } onClick={ handleThemeSwitch } />
      <Search error={ searchErr } clearError={()=>updateSearchErr(false)} onSubmit={ handelGetUser }/>
      <Bio user={ user }/>
    </>
  )
}

export default App;