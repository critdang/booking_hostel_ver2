import HeaderHome from '../navbar/navbar';
import ActivitiesHeader from './activities-header.component';
import Footer from '../footer/footer.component';

import BodyActivities from './body.component';
export default function Activities() {
  return (
    <>
      <HeaderHome />
      <ActivitiesHeader />
      <BodyActivities />
      <Footer />
    </>
  );
}
