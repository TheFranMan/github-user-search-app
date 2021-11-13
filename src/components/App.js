import { useState } from 'react';
import Header from './Header.js'
import Search from './Search.js'
import Bio from './Bio.js'
import '../assets/scss/main.scss'

function App() {
  let userDetails = {
    avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    username: "octocat",
    joined: "2011-01-25T18:44:36Z",
    bio: null,
    repos: {
      number: 8,
      followers: 4123,
      following: 8,
    },
    location: "San Francisco",
    blog: "https://github.blog",
    twitter: null,
    company: "@github",
  }

  const [darkMode, updateDarkMode] = useState(false)
  const [user, updateUser] = useState(userDetails)

  function handleThemeSwitch() {
    document.body.classList.toggle('dark-mode')
    updateDarkMode(!darkMode)
  }

  return (
    <>
      <Header darkMode={ darkMode } onClick={ handleThemeSwitch } />
      <Search />
      <Bio user={ user }/>
    </>
  )
}

export default App;