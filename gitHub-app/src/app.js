'use strict'

import React, { Component } from 'react'
import AppContent from './components/AppContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      avatar: null,
      login: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              avatar: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      const userName = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(userName, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url
              }
            })
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
