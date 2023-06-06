import HeaderNav from './HeaderNav'
import PlaylistNav from './PlaylistNav'
import './sideBar.css'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='sideNav'>
        <HeaderNav />
        <PlaylistNav />
    </div>
  )
}

export default SideBar