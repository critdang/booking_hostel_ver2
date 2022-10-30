import NavBar from '../navbar/navbar';
import Footer from '../footer/footer.component';
import SpeedDialCart from '../speedDial/speed-dial-cart.component';
import RoomBody from './room-body.component';
import RoomBreadcumb from './room-breadcumb.component';
export default function Room() {
  return (
    <>
      <NavBar />
      <RoomBreadcumb />
      <RoomBody />
      <Footer />
      <SpeedDialCart />
    </>
  );
}
