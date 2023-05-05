// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, onClickLanguare, isActive} = props
  const {language, id} = languageDetails

  const btnStyle = isActive ? 'language-button active' : 'language-button'

  const updatingLanguage = () => {
    onClickLanguare(id)
  }

  return (
    <li>
      <button className={btnStyle} onClick={updatingLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
