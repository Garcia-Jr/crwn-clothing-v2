import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import ShoppingCartIcon from '../../components/shopping-cart-icon/shopping-cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useCartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useCartContext();

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <ShoppingCartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
