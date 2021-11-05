import '../assets/scss/main.scss'
import Header from './Header.js'
import Search from './Search.js'
import Bio from './Bio.js'

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Bio />
    </div>
  );
}

export default App;