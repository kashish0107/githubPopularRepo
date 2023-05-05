// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    id,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = repositoryDetails

  const startImg =
    'https://assets.ccbp.in/frontend/react-js/stars-count-img.png'

  const forksImg =
    'https://assets.ccbp.in/frontend/react-js/forks-count-img.png'

  const issuesIMG =
    'https://assets.ccbp.in/frontend/react-js/issues-count-img.png'

  return (
    <li className="rep-card">
      <img alt={name} className="rep-img" src={avatarUrl} />
      <h1 className="head">{name}</h1>
      <div className="star-con">
        <img className="star-img" src={startImg} alt="stars" />
        <p> {starsCount} stars</p>
      </div>

      <div className="star-con">
        <img className="star-img" src={forksImg} alt="forks" />
        <p> {forksCount} stars</p>
      </div>

      <div className="star-con">
        <img className="star-img" src={issuesIMG} alt="open issues" />
        <p> {issuesCount} stars</p>
      </div>
    </li>
  )
}

export default RepositoryItem
