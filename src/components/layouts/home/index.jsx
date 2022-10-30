import HeaderHome from './header-home.component';
import HotSalesBanner from './hot-sales-banner.component';
import AllRoom from './all-room.component';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer.component';
import SpeedDialCart from '../speedDial/speed-dial-cart.component';
import ScrollTop from './scroll-top.component';
import SearchRoom from './search-room.component';
import Amenities from './amenities.component';
import HostelPolicies from './hostel-policies.component';
import HomeLocation from './home-location.component';
import AllRoom2 from './all-room2.component';
import { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import CartContext from '../../../context/cart.context';
import { useCount } from '../../../context/cart.provider';

export default function HomePage() {
  const { state } = useCount();
  const { dispatch } = useCount();
  const onClick = (type) => () => dispatch({ type: type });
  return (
    <>
      <div>{state.count}</div>
      <div>
        <button onClick={onClick('increase')}>Increase</button>
        <button onClick={onClick('decrease')}>Decrease</button>
      </div>
      {/* <HeaderHome /> */}
      <NavBar />
      <SearchRoom />
      <HotSalesBanner />
      <Amenities />
      <HostelPolicies />
      {/* <AllRoom /> */}
      <AllRoom2 />
      <HomeLocation />
      <Footer />
      <SpeedDialCart />
      {/* <ScrollTop /> */}
    </>
  );
}
