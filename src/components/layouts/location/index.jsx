import HeaderHome from '../navbar/navbar';
import Location from './location.component';
import Footer from '../footer/footer.component';
import LocationBreadcumb from './location-breadcumb.component';
export default function Activities() {
  return (
    <>
      <HeaderHome />
      <LocationBreadcumb />
      <Location />
      <Footer />
    </>
  );
}
