import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";


const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '25px',
    height: '20px',
    right:'20px',
    top: '40px',
  },
  bmOverlay: {
    background: "transparent",
  },
  bmBurgerBars: {
    background: 'black',
  },
  bmCrossButton: {
    height: '30px',
    width: '30px',
    marginTop:'11%'
  },
  bmCross: {
    background: '#ff5733',
  },
  bmMenu: {
    background: '#f7ece9',
    fontSize: '14px',
    fontWeight:'500',
    borderRadius:'10px',
    height:'auto',
    marginTop:'15%',
  },
  bmItemList: {
    color: 'black',
    padding: '1em',
  },
};

const MenuDesp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu styles={menuStyles} width={'50%'} right isOpen={isMenuOpen} onStateChange={handleMenuStateChange}>
      <NavLink to="/" style={{textDecoration:"none" , color:"black"}}>INICIO</NavLink>
      <NavLink to="/about" style={{textDecoration:"none" , color:"black"}}>SOBRE OPINA.COM</NavLink>
      <NavLink to="/about" style={{textDecoration:"none" , color:"black"}}>PRIVACIDAD</NavLink>
      <NavLink to="/about" style={{textDecoration:"none" , color:"black"}}>IMPACTO</NavLink>
    </Menu>
  );
};

export default MenuDesp;
