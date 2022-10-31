import NavBar from '../navbar/navbar';
import Footer from '../footer/footer.component';
import SpeedDialCart from '../speedDial/speed-dial-cart.component';
import RoomBody from './room-body.component';
import RoomBreadcumb from './room-breadcumb.component';
import SearchRoom from '../search/search-room.component';
export default function Room() {
  return (
    <>
      <NavBar />
      <RoomBreadcumb />
      <SearchRoom />
      <RoomBody />
      <Footer />
      <SpeedDialCart />
    </>
  );
}
