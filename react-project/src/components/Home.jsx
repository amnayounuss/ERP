import banner from "../assets/banner.png"
import Banner from "../shared/Banner";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">

            <Banner banner={banner} heading="ERP Implementation Reimagined" subheading="We provide all the best features so you can stop focusing on your business management and get back to your life’s work." btn1={'GET STARTED'} btn2={'LEARN MORE'}/>
          
        </div>
    );
};

export default Home;