import { useState } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Search from "./components/Banner/Search";
import Blog from "./components/Blog/Blog";
import Details from "./components/Details/Details";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Tickets from "./components/Tickets/Tickets";
import { IoIosArrowUp } from "react-icons/io";


function App() {
  const [active, setActive] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  return (
    <>
      {active && (
        <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="cursor-pointer flex justify-center w-[40px] h-[40px] rounded-full bg-[#a02777] fixed bottom-[20px] right-[20px] !z-[999999999999]">
          <IoIosArrowUp className="mt-[6px] text-2xl text-white" />
        </div>
      )}
      <Header />
      <Search />
      <br />
      <br />
      <div className="flex justify-center">
        <h2 className="text-xl font-[600] text-[#63696d] border-b-2 border-b-[#a02777] pb-[2px]">بلیط چارتر</h2>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[25px]">
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-THR.jpg'} Location={'تهران'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-MHD.jpg'} Location={'مشهد'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-IFN.jpg'} Location={'اصفهان'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-KIH.jpg'} Location={'کیش'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-SYZ.jpg'} Location={'شیراز'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-BND.jpg'} Location={'بندرعباس'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-AWZ.jpg'} Location={'اهواز'} />
        <Tickets ImgSrc={'https://tursab118.com/templates/charter118/city-TBZ.jpg'} Location={'تبریز'} />
      </div>
      <br />
      <div className="flex justify-center">
        <h2 className="text-xl font-[600] text-[#63696d] border-b-2 border-b-[#a02777] pb-[2px]">خرید بلیط چارتر هواپیما در چارتر 118</h2>
      </div>
      <br />
      <Details />
      <br />
      <br />
      <img className="cursor-pointer mr-auto ml-auto rounded" src="https://cdn.charter725.ir/uploads/c118/lang_ads5_img_1539242369.jpg" alt=""></img>
      <br />
      <div className="flex gap-x-[25px] mr-auto ml-auto justify-center">
        <img className="rounded cursor-pointer" src="https://cdn.charter725.ir/uploads/c118/lang_ads6_img_1539242369.jpg" alt="" />
        <img className="rounded cursor-pointer" src="https://cdn.charter725.ir/uploads/c118/lang_ads7_img_1550326267.jpg" alt="" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <AboutUs />
      <br />
      <br />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
