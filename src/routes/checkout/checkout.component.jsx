import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useCartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const CHECKOUT_HEADERS = [
  'Product',
  'Description',
  'Quantity',
  'Price',
  'Remove',
];

const Checkout = () => {
  const { cartItems, cartTotal } = useCartContext();

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {CHECKOUT_HEADERS.map((header) => (
          <HeaderBlock key={header}>
            <span>{header}</span>
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total className="total">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
