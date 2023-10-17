import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useCartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

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
    <div className="checkout-container">
      <div className="checkout-header">
        {CHECKOUT_HEADERS.map((header) => (
          <div key={header} className="header-block">
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
