import banner from "../assets/banner.png"

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
            <div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    {/* banner content */}
                    <div className="md:w-3/5">
                        <h2>
                            ERP Implementation Reimagined
                        </h2>
                        <p>We provide all the best features so you can stop focusing on your business management and get back to your life’s work.</p>
                        <button>GET STARTED</button>
                        <button>LEARN MORE</button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;