import './assets/styles/globals.scss'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import UserProfile from './UserProfile/UserProfile'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <SideBar />
        <UserProfile />
      </main>
    </>
  )
}

export default App
