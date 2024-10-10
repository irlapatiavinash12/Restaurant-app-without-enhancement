import './index.css'
import {IoCartOutline} from 'react-icons/io5'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <IoCartOutline className="cart-sizing" />
      <p className="cart-count">{getCartItemsCount()}</p>
    </div>
  )

  return (
    <header className="nav-header">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="cart-compartment">
        <p className="my-orders-text">My Orders</p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
