import HeaderHome from '../navbar/navbar';
import ActivitiesHeader from './activities-header.component';
import Footer from '../footer/footer.component';
import ActivitiesBreadcumb from './activities-breadcumb.component';
import BodyActivities from './body.component';
export default function Activities() {
  return (
    <>
      <HeaderHome />
      <ActivitiesBreadcumb />
      <ActivitiesHeader />
      <BodyActivities />
      <Footer />
    </>
  );
}
