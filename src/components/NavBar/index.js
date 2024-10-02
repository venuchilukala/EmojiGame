import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name"> Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-details">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
