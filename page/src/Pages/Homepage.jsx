import Footer from "../component/Footer";
import Header from "../component/Header";
import Newsletter from "../component/NewsletterSection";
import Smartrfq from "../component/Smartrfq";
import Hero from "./Hero";
import Servies from "./Servies";

const Homepage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <Servies />
      </div>
      <div>
<Smartrfq/>

      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
