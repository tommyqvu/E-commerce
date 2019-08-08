import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStartAction } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop' className='option'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop' className='option'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv className='option' onClick={() => signOutStart()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink className='option' to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStartAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
