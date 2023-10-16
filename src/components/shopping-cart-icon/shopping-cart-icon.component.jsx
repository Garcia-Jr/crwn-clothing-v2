import './shopping-card-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../contexts/cart.context';

const ShoppingCartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default ShoppingCartIcon;
