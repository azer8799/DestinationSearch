// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = initialDestinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading"> Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="cards-container">
          {searchResults.map(eachItem => (
            <DestinationItem destinationList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
