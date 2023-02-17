// Write your code here.

import './index.css'

const Thumbnails = props => {
  const {imageDetails, onClickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickTabItem = () => {
    onClickImage(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`button  ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        <img className="image" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default Thumbnails
