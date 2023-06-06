import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faPlus, faArrowRight, faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

type Props = {}

const PlaylistNav = (props: Props) => {
    const [search, setSearch] = useState<boolean>(false)
  return (
    <div className="playlistNav">
      <div className="playlistNav-header">
        <div className="playlistNav-header__left">
          <FontAwesomeIcon icon={faLayerGroup} rotation={90} size="xl" />
          <span>Your Library</span>
        </div>
        <div className="fa-icons">
          <FontAwesomeIcon icon={faPlus} size="xl" className="fa-icon" />
          <FontAwesomeIcon icon={faArrowRight} size="xl" className="fa-icon" />
        </div>
      </div>
      <div className="playlistNav-tabs">
        <button>Playlists</button>
        <button>Podcasts & Shows</button>
        <button>Artists</button>
      </div>
      <div className="playlistNav-search">
        <div className={`search ${search ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => setSearch((prev) => !prev)}
          />
          {search && <input type="text" name="search" id="search-ip" className="mx-1" placeholder='Search in your library '/>}
        </div>
        <div className="filter">
          <span>Recent</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}

export default PlaylistNav