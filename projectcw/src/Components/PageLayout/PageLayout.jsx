import Footer from "../Footer";
import Header from "../Header";

const Pagelayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Pagelayout;
