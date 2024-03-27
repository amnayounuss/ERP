import Banner from "../shared/Banner";
import bannerImg from "../assets/banner2.png"


const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            {/* i used banner components and pass props */}
            <Banner banner={bannerImg} heading="Level up your productivity" subheading={"Get started today and improve your workflow."} btn1={"REQUEST DEMO"} btn2={"LEARN MORE"}/>
            
        </div>
    );
};

export default Newsletter;