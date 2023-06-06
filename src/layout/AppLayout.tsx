import SideBar from '../components/NavBar';
import './AppLayout.css'

type Props = {}

const AppLayout = (props: Props) => {
  return (
    <div className='AppLayout'>
        <div className="sidebar">
            <SideBar/>
        </div>
        <div className='main-container'>    
            {/* <MainApp/> */}
            MainApp
        </div>
        <div className="player">
            Player
        </div>
    </div>
  )
}

export default AppLayout