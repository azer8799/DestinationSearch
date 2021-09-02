// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {name, imgUrl} = destinationList

  return (
    <li className="single-card">
      <img src={imgUrl} className="image" alt={name} />

      <p className="desc"> {name} </p>
    </li>
  )
}

export default DestinationItem
