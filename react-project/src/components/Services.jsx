
import services from '../assets/servicesImg.svg'
const Services = () => {
    return (
        <div className="my-24 md:px px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="w-full lg:w-1/2 grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer items-center hover:-translate-y-4 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Why we are better than others</h3>
                    <p className="text-base text-tariary">A simple paragraph is comprised of three major components. The first sentence, which is
                        often a declarative sentence, is called the "topic sentence."</p>

                </div>
                {/* services card */}
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer items-center hover:-translate-y-4 transition-all duration-300'>
                            <div>
                                <img src={services} alt="" className="h-1160 w-60" viewBox="0 0 24 24" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>

                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer md:mt-16 items-center hover:-translate-y-4 transition-all duration-300'>
                            <div>
                                <img src={services} alt="" className="h-1160 w-60" viewBox="0 0 24 24" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>

                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer items-center hover:-translate-y-4 transition-all duration-300'>
                            <div>
                                <img src={services} alt="" className="h-1160 w-60" viewBox="0 0 24 24" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Services;