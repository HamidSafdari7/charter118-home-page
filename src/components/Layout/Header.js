import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { ImTicket } from "react-icons/im";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoInformationSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";

const Header = () => {
    const [showContactWithUs, setShowContactWithUs] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showLaws, setShowLaws] = useState(false)
    const [showTours, setShowTours] = useState(false)
    const [showApps, setShowApps] = useState(false)

    const handleShowContactWithUs = () => {
        setShowMenu(false)
        setShowContactWithUs(!showContactWithUs)
    }

    const handleShowMenu = () => {
        setShowContactWithUs(false)
        setShowMenu(!showMenu)
    }

    const handleShowLaws = () => {
        setShowLaws(!showLaws)
    }

    const handleShowTours = () => {
        setShowApps(false)
        setShowTours(!showTours)
    }

    const handleShowApps = () => {
        setShowTours(false)
        setShowApps(!showApps)
    }

    return (
        <div>
            <div className='w-ful bg-[#a32478] h-[38px] flex justify-between'>
                <div className='flex justify-between mr-[100px]'>
                    <div>
                        <h5 onClick={handleShowContactWithUs} className={`flex text-white mt-[5px] ml-[25px] cursor-pointer ${showContactWithUs && '!text-[#ffa903]'}`}>ارتباط با ما <IoIosArrowDown className={`mt-[6px] text-sm mr-[4px] ${showContactWithUs && "transition-all rotate-180 duration-500 text-white"}`} /></h5>
                        {showContactWithUs && (
                            <div>
                                <IoMdArrowDropup className='text-white absolute text-4xl z-[999999] top-[17px] mr-[25px]' />
                                <div className='mt-[8px] bg-white z-[9999] w-[350px] h-[450px] absolute border-2 border-slate-100 border-t-2 border-t-orange-300 rounded-xl'>
                                    <div className='w-[95%] h-[100px] border-2 border-slate-100 rounded-xl ml-auto mr-auto mt-[5px] cursor-pointer hover:bg-[#f5f7f9] transition-all duration-500 shadow-md'>
                                        <div className='mt-[12px] mr-[15px]'>
                                            <FaPhoneVolume className='text-[#63696d]' />
                                            <p className='text-[#63696d]'>07691006118</p>
                                            <p className='text-[#63696d]'>برای <span className='font-[700] text-black'>تماس تلفنی</span> کلیک کنید</p>
                                        </div>
                                    </div>
                                    <div className='w-[95%] h-[80px] border-2 border-slate-100 rounded-xl ml-auto mr-auto mt-[5px] cursor-pointer hover:bg-[#f5f7f9] transition-all duration-500 shadow-md'>
                                        <div className='mt-[15px] mr-[15px]'>
                                            <GiVibratingSmartphone className='text-xl' />
                                            <p className='text-[#63696d]'>09027006118</p>
                                        </div>
                                    </div>
                                    <div className='w-[95%] h-[80px] border-2 border-slate-100 rounded-xl ml-auto mr-auto mt-[5px] cursor-pointer hover:bg-[#f5f7f9] transition-all duration-500 shadow-md'>
                                        <div className='mt-[15px] mr-[15px]'>
                                            <MdEmail className='text-2xl text-[#63696d]' />
                                            <p className='text-[#63696d]'>charter118@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='w-[95%] h-[80px] border-2 border-slate-100 rounded-xl ml-auto mr-auto mt-[5px] cursor-pointer hover:bg-[#f5f7f9] transition-all duration-500 shadow-md'>
                                        <div className='mt-[15px] mr-[15px]'>
                                            <FaRegCreditCard className='text-2xl text-[#63696d]' />
                                            <p className='text-[#63696d]'>5054-1670-0019-3467</p>
                                        </div>
                                    </div>
                                    <div className='mt-[40px] mr-[20px] flex'>
                                        <SiAparat className='text-2xl ml-[15px] text-[#3767aa] cursor-pointer' />
                                        <FaFacebookF className='text-2xl ml-[15px] text-[#3767aa] cursor-pointer' />
                                        <FaTwitter className='text-2xl ml-[15px] text-[#3767aa] cursor-pointer' />
                                        <FaTelegramPlane className='text-2xl ml-[15px] text-[#3767aa] cursor-pointer' />
                                        <FaInstagram className='text-2xl ml-[15px] text-[#3767aa] cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h5 onClick={handleShowMenu} className={`flex text-white mt-[5px] ml-[25px] cursor-pointer ${showMenu && '!text-[#ffa903]'}`}>منوی کاربری <IoIosArrowDown className={`mt-[6px] text-sm mr-[4px] ${showMenu && "transition-all rotate-180 duration-500 text-white"}`} /></h5>
                        {showMenu && (
                            <div>
                                <IoMdArrowDropup className='text-[#ff9600] absolute text-4xl z-[999999] top-[17px] mr-[25px]' />
                                <div className={`right-[110px] mt-[8px] bg-white z-[9999] w-[280px] h-[450px] absolute border-2 border-slate-100 border-t-2 border-t-orange-300 rounded-xl ${showLaws && 'h-[550px] transition-all'}`}>
                                    <div className='w-full h-[160px] bg-[#a32478] rounded-t-xl'>
                                        <IoPersonCircle className='mr-auto ml-auto text-7xl text-white cursor-pointer' />
                                        <div className='flex justify-center gap-x-[20px]'>
                                            <p className='flex justify-center text-lg text-[#ccc] cursor-pointer hover:text-white'>ورود</p>
                                            <p className='flex justify-center text-lg text-[#ccc]'>|</p>
                                            <p className='flex justify-center text-lg text-[#ccc] cursor-pointer hover:text-white'>ثبت نام</p>
                                        </div>
                                        <p className='flex justify-center text-lg text-white mt-[20px]'>فارسی</p>
                                    </div>
                                    <div className='mr-[30px]'>
                                        <div className='flex mt-[20px] cursor-pointer'>
                                            <FaHome className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>صفحه اصلی</p>
                                        </div>
                                        <div className='flex mt-[20px] cursor-pointer'>
                                            <ImTicket className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>پیگیری بلیط</p>
                                        </div>
                                        <div className='flex mt-[20px] cursor-pointer'>
                                            <FaHotel className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>هتل داخلی</p>
                                        </div>
                                        <div className='flex mt-[20px] cursor-pointer'>
                                            <MdOutlineCastForEducation className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>آموزش رزرو بلیط هواپیما</p>
                                        </div>
                                        <div className='flex mt-[20px] cursor-pointer'>
                                            <IoInformationSharp className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>درباره ما</p>
                                        </div>
                                        <div className='flex mt-[20px] cursor-pointer' onClick={handleShowLaws}>
                                            <GoLaw className='text-2xl ml-[20px] text-[#63696d]' />
                                            <p className='text-sm font-[500] mt-[5px] text-[#63696d]'>قوانین</p>
                                            <IoIosArrowDown className={`mr-[100px] mt-[5px] ${showLaws && 'transition-all rotate-180 duration-500'}`} />
                                        </div>
                                        <div className={`hidden mr-[5px] cursor-pointer ${showLaws && '!block transition-opacity duration-500'}`}>
                                            <p className='text-sm mt-[10px] text-[#3767aa] hover:text-black'>قوانین بلیط چارتر</p>
                                            <p className='text-sm mt-[10px] text-[#3767aa] hover:text-black'>جریمه استرداد بلیط سیستمی</p>
                                            <p className='text-sm mt-[10px] text-[#3767aa] hover:text-black'>بار همراه مسافر</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h5 className='flex text-white mt-[5px] ml-[25px] cursor-pointer'>وبلاگ <IoIosArrowDown className='mt-[6px] text-sm mr-[4px]' /></h5>
                    </div>
                </div>

                <div className='ml-[150px]'>
                    <p className='flex text-sm text-white mt-[7px] cursor-pointer'>پشتیبانی: 07691006118 <BsTelephone className='mt-[3px] mr-[4px]' /></p>
                </div>
            </div>

            <div className='flex justify-between w-full h-[80px] bg-white'>
                <img className='mr-[120px]' src='https://cdn.charter725.ir/uploads/c118/lange_logo_1538340636.jpg' alt='' />
                <div className='flex mt-[20px] ml-[90px]'>
                    <div className='flex gap-x-[10px] mt-[5px] cursor-pointer'>
                        <FaBed className='text-2xl text-[#63696d]' />
                        <h5 className='font-[500] text-[#00a2d5] ml-[10px]'>هتل</h5>
                    </div>
                    <h5 className='font-[100] text-[#63696d] text-2xl'>|</h5>
                    <div className='flex gap-x-[10px] mt-[5px] cursor-pointer'>
                        <FaHeadset className='text-2xl text-[#63696d]' />
                        <h5 className='font-[500] text-[#00a2d5] ml-[10px]'>جدول جریمه پرواز سیستمی داخلی</h5>
                    </div>
                    <h5 className='font-[100] text-[#63696d] text-2xl'>|</h5>
                    <div>
                        <div onClick={handleShowTours} className='flex gap-x-[10px] mt-[5px] cursor-pointer'>
                            <FaHotel className='text-2xl text-[#63696d]' />
                            <h5 className='font-[500] text-[#00a2d5] ml-[10px]'> تور داخلی و خارجی</h5>
                            <IoIosArrowDown className={`mt-[5px] ${showTours && 'transition-all rotate-180 duration-500'}`} />
                        </div>
                        {showTours && (
                            <div>
                                <IoIosArrowUp className='!text-[#d4d4d4] bg-white top-[90px] mr-[85px] text-[#ff9600] absolute text-xl z-[999999]' />
                                <div className='z-[999] absolute bg-white w-[220px] h-[500px] border-t border-t-slate-200 shadow mt-[15px]'>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تور استانبول ویژه از تهران</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <h5 className='font-[100] text-[#63696d] text-2xl'>|</h5>
                    <div>
                        <div onClick={handleShowApps} className='flex gap-x-[10px] mt-[5px] cursor-pointer'>
                            <GiCommercialAirplane className='text-2xl text-[#63696d]' />
                            <h5 className='font-[500] text-[#00a2d5] ml-[10px]'> اپلیکیشن و سایت همکاری</h5>
                            <IoIosArrowDown className={`mt-[5px] ${showApps && 'transition-all rotate-180 duration-500'}`} />
                        </div>
                        {showApps && (
                            <div>
                                <IoIosArrowUp className='!text-[#d4d4d4] bg-white top-[90px] mr-[85px] text-[#ff9600] absolute text-xl z-[999999]' />
                                <div className='z-[999] absolute bg-white w-[200px] h-[200px] border-t border-t-slate-200 shadow mt-[15px]'>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>کافه بازار اندروید</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>سیب چه ios</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>نمایندگی فروش همکار</p>
                                    </div>
                                    <div className='flex mt-[20px]'>
                                        <GiCommercialAirplane className='mr-[10px]' />
                                        <p className='mr-[20px] text-sm text-[#63696d]'>تعاون معنا</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
