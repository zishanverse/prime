import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  return (
    <div className="card">
      <Popup
        modal
        trigger={
          <button type="button" className="thumButton">
            <img src={thumbnailUrl} alt="thumbnail" className="thumb" />
          </button>
        }
      >
        {close => (
          <div className="pop-card" data-testid="closeButton">
            <button type="button" onClick={() => close()} className="popClose">
              <IoMdClose className="close-icon" />
              {` `}
            </button>
            <ReactPlayer className="video" url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
