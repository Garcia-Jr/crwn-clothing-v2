import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import ShoppingCartIcon from '../../components/shopping-cart-icon/shopping-cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useCartContext } from '../../contexts/cart.context';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  const { isCartOpen } = useCartContext();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <ShoppingCartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
