import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import RepositoryItem from '../RepositoryItem'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {reposList: [], activeTab: 'ALL', isLoading: true}

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    this.setState({isLoading: true})

    const {activeTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    // console.log(activeTab)

    const response = await fetch(url)
    // const statusCode = await response.status
    // console.log(statusCode)
    const fetchedData = await response.json()
    console.log(fetchedData)
    const updatedData = fetchedData.popular_repos.map(eachRep => ({
      avatarUrl: eachRep.avatar_url,
      id: eachRep.id,
      forksCount: eachRep.forks_count,
      issuesCount: eachRep.issues_count,
      name: eachRep.name,
      starsCount: eachRep.stars_count,
    }))
    this.setState({reposList: updatedData, isLoading: false})
    // console.log(updatedData)
  }

  displayInitialAllReps = () => {
    const {reposList} = this.state
    return (
      <ul className="un-list">
        {reposList.map(eachRep => (
          <RepositoryItem key={eachRep.id} repositoryDetails={eachRep} />
        ))}
      </ul>
    )
  }

  onClickLanguare = id => {
    this.setState({activeTab: id}, this.getRepos)
  }

  displayBtns = () => {
    const {activeTab} = this.state

    return (
      <ul className="btn-con">
        {languageFiltersData.map(eachLanguage => (
          <LanguageFilterItem
            key={eachLanguage.id}
            languageDetails={eachLanguage}
            onClickLanguare={this.onClickLanguare}
            isActive={eachLanguage.id === activeTab}
          />
        ))}
      </ul>
    )
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {reposList, isLoading} = this.state
    // console.log(reposList)

    return (
      <div className="main-con">
        <h1 className="title">Popular</h1>
        {this.displayBtns()}
        {isLoading ? this.loadingView() : this.displayInitialAllReps()}
      </div>
    )
  }
}

export default GithubPopularRepos
