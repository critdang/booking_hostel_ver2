import HeaderHome from '../navbar/navbar';
import Cart from './cart.component';
import CartBreadCrumb from './cart-breadcumb.component';
import Footer from '../footer/footer.component';
export default function Activities() {
  return (
    <>
      <HeaderHome />
      {/* <CartBreadCrumb /> */}
      <Cart />
      <Footer />
    </>
  );
}
