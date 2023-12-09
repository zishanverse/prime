import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime"
        />
      </div>

      <div className="slider-container">
        <div className="slider-card">
          <h1 className="head">Action Movies</h1>
          <div className="slider">
            <MoviesSlider list={actionList} />
          </div>
        </div>
        <div className="slider-card">
          <h1 className="head">Comedy Movies</h1>
          <div className="slider">
            <MoviesSlider list={comedyList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
