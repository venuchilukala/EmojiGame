import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const scoreStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const onClickPlayAgainBtn = () => {
    onClickPlayAgain()
  }

  return (
    <div className="wl-container">
      <div className="res">
        <h1 className="win-lose">{scoreStatus}</h1>
        <p className="score">{scoreLabel}</p>
        <p className="d-score">{score}/12</p>
        <span>
          <button type="button" onClick={onClickPlayAgainBtn}>
            Play Again
          </button>
        </span>
      </div>
      <div className="res-img">
        <img src={imageUrl} alt="won or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
