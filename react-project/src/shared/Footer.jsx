
import fbImg from '../assets/facebook.png'
import instaImg from '../assets/instagram.png'
import twitterImg from '../assets/twitter.png'
import linkedInImg from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8" >
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-white cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              {/* <img src={logo} alt=""  className='mr-20'/> */}
              Ecube
            </a>
            <p className="md:w-1/2">
              In publishing and graphic design, Lorem ipsum is a placeholder text
              to demonstrate the visual form of a document
            </p>
            <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
              />
  
          </div>
          </div>
          
          
          <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-7 item-start ">
              <div className="space-y-4 mt-5">
                  <h4 className="text-xl">Platfrom</h4>
                  <ul className="space-y-3">
                      <a href="/" className="block hover:text-gray-300">Overview</a>
                      <a href="/" className="block hover:text-gray-300">Features</a>
                      <a href="/" className="block hover:text-gray-300">About</a>
                      <a href="/" className="block hover:text-gray-300">Pricing</a>
                  </ul>
              </div>
              <div className="space-y-4 mt-5">
                  <h4 className="text-xl">Help</h4>
                  <ul className="space-y-3">
                      <a href="/" className="block hover:text-gray-300">How does it works?</a>
                      <a href="/" className="block hover:text-gray-300">Where to ask question?</a>
                      <a href="/" className="block hover:text-gray-300">How to play?</a>
                      <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                  </ul>
              </div>
              <div className="space-y-4 mt-5">
                  <h4 className="text-xl">Contacts</h4>
                  <ul className="space-y-3">
                      <p className="hover:text-gray-300">(021) 1234-567-890</p>
                      <p className="hover:text-gray-300">Golden town</p>
                      <p className="hover:text-gray-300">Shah faisal, Malir, Karachi</p>
                      <p className="hover:text-gray-300">9823984</p>
                  </ul>
              </div>
          </div>
        </div>
  
        <hr/>
  
        <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
          <p>Enterprise Cube (PVT) LTD</p>
          <div className="flex items-center space-x-5">
              <img src={fbImg} alt="" className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
              <img src={instaImg} alt="" className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"/>
              <img src={twitterImg} alt="" className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"/>
              <img src={linkedInImg} alt="" className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"/>
          </div>
        </div>
  
  
      </div>
    );
};

export default Footer;