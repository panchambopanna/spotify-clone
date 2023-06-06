import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const HeaderNav = (props: Props) => {
  return (<div className='headerNav'>
    <div className='headerNav-navItem'>
    <FontAwesomeIcon icon={faHouse} size='lg'/>
    <span>Home</span>
    </div>
    <div className='headerNav-navItem'>
    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
    <span>Search</span>
    </div>
  </div>
  )
}

export default HeaderNav