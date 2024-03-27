import about from "../assets/aboutImg.png"
import about2 from "../assets/aboutImg2.png"

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2 cursor-pointer hover:-translate-y-4 transition-all duration-300">
                    <img src={about} alt=""/>
                    
                </div>
                {/* about content */}
                <div className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We're building the modern ERP Sytems <span className="text-secondary">for many years.</span></h2>
                    <p className="text-tartiary text-lg mb-7">As an innovative ERP company, we strive to provide cutting-edge solutions that streamline business operations and boost productivity. Our focus on leveraging the latest technology ensures that our clients stay ahead of the competition and achieve their business goals.</p>

                    <button className="btnPrimary">GET STARTED</button>
                </div>
            </div>
           
            {/* 2nd part */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <div className="md:w-1/2 cursor-pointer hover:-translate-y-4 transition-all duration-300">
                    <img src={about2} alt=""/>
                    
                </div>
                {/* about content */}
                <div className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Built for collaboration<span className="text-secondary"> WORK TOGETHER</span></h2>
                    <p className="text-tartiary text-lg mb-7">Get hundreds of fully integrated apps in a single platform.</p>

                    <button className="btnPrimary">GET STARTED</button>
                </div>
            </div>
            


            
        </div>
    );
};

export default About;