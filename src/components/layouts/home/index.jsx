import HeaderHome from './header-home.component';
import HotSalesBanner from './hot-sales-banner.component';
import AllRoom from './all-room.component';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer.component';
import SpeedDial from '../speedDial/speed-dial-cart.component';
export default function HomePage() {
  return (
    <>
      {/* <HeaderHome /> */}
      <NavBar />
      <HotSalesBanner />
      <AllRoom />
      <Footer />
      <SpeedDial />
    </>
  );
}
