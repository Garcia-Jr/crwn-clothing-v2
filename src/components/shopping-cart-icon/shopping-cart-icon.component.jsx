import {
  CartIconContainer,
  BagIcon,
  ItemCount,
} from './shopping-cart-icon.styles';
import { useCartContext } from '../../contexts/cart.context';

const ShoppingCartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <BagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default ShoppingCartIcon;
