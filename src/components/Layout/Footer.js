import React from 'react'
import { SiAparat } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className='w-full h-[550px] bg-[#690e4a] relative'>
                <div className='absolute w-[100%] top-[-1px] overflow-hidden'>
                    <svg width="1998" height="109" version="1.1" x="0px" y="0px" viewBox="0 0 1998.1 109" style={{ backgroundColor: 'new 0 0 1998 109', enableBackground: 'new 0 0 1998 109' }}>
                        <path opacity="0.2" fill="#ffffff" d="M-1,107.6c346,0.6,524.3,4.7,878.4-4.4c286.6-7.4,442.5-54,608.3-51.2c205.4,3.5,310.3,72.8,513.3,49.7V1.2L-1,1.7V107.6z"></path>
                        <path opacity="0.2" fill="#ffffff" d="M1997.5,83.8c-251.3,30.8-441.2-38.7-499.9-52.4c-54.7-12.8-122.5-12-186.7,5.3c-154.2,41.6-315.5,70.9-475.2,67.5c-159.6-3.4-324.4-22.4-484.1-19.7C218.6,86.8,49,82.8-1,80.8C-1,59.5-1,1.1-1,1.1h1998.8L1997.5,83.8z"></path>
                        <path opacity="0.4" fill="#ffffff" d="M-2,88.7c139.8,12.7,219.9,10.7,360.2,11.1c285.5,0.8,487.5-18.1,736.2-51.2C1351,14.4,1451.5,13.3,1799,76.2c58.9,10.6,140,8,200,1.3V0H-1.5L-2,88.7z"></path>
                        <path fill="#f7f7f7" d="M362.6,79.6c193.8-11.8,366.7-24.8,568.8-49.9c110.2-13.7,221.1-21.6,332.2-19.6c187,3.3,344.8,29.7,561.3,69.8c122.2,22.6,173.2,4,173.2,4V0H0v83.7C0,83.7,166.1,91.7,362.6,79.6z"></path>
                    </svg>
                </div>
                <div className='absolute top-[150px] right-[130px]'>
                    <div className='border-b border-b-[#520638] pb-[20px] flex gap-x-[240px] justify-center ml-auto mr-auto'>
                        <div className='flex gap-x-[60px]'>
                            <img src='https://tursab118.com/templates/charter118/footer_logo.png' alt='' />
                            <div className='flex mt-[20px] gap-x-[20px]'>
                                <SiAparat className='text-2xl text-white cursor-pointer' />
                                <FaFacebookF className='text-2xl text-white cursor-pointer' />
                                <FaTwitter className='text-2xl text-white cursor-pointer' />
                                <FaTelegramPlane className='text-2xl text-white cursor-pointer' />
                                <FaInstagram className='text-2xl text-white cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex gap-x-[10px]'>
                            <img className='w-[120px]' src='https://charterdesign.ir/templates/charter118/Blue.svg' alt='' />
                            <img className='h-[50px]' src='https://charterdesign.ir/templates/charter118/download2.png' alt='' />
                            <img className='h-[50px]' src='https://charterdesign.ir/templates/charter118/download3.png' alt='' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex w-[50%] gap-x-[40px]'>
                            <div className='w-[40%]'>
                                <p className='flex justify-center text-white font-[500] mb-[20px] mt-[20px]'>ارتباط با ما</p>
                                <div className='flex gap-x-[10px] mb-[20px]'>
                                    <FaHeadset className='text-[#ff8d41] text-3xl' />
                                    <p className='text-white text-sm'>07691006118 برای تماس تلفنی کلیک کنید</p>
                                </div>
                                <div className='flex gap-x-[10px] mb-[20px]'>
                                    <GiVibratingSmartphone className='text-[#ff8d41] text-2xl' />
                                    <p className='text-white text-sm'>09027006118</p>
                                </div>
                                <div className='flex gap-x-[10px] mb-[20px]'>
                                    <MdEmail className='text-[#ff8d41] text-2xl' />
                                    <p className='text-white text-sm'>charter118@gmail.com</p>
                                </div>
                                <div className='flex gap-x-[10px] mb-[20px]'>
                                    <FaRegCreditCard className='text-[#ff8d41] text-2xl' />
                                    <p className='text-white text-sm'>5054-1670-0019-3467</p>
                                </div>
                                <div className='flex gap-x-[10px] mb-[20px]'>
                                    <MdLocationOn className='text-[#ff8d41] text-2xl' />
                                    <p className='text-white text-sm'>کیش : بازار سارینا 1طبقه 2 واحد209</p>
                                </div>
                            </div>
                            <div className='w-[40%] cursor-pointer'>
                                <p className='flex justify-center text-white font-[500] mb-[20px] mt-[20px]'>دسترسی سریع</p>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>هتل داخلی</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>پیگیری بلیط</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>آموزش رزرو بلیط هواپیما</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>راهنمای پرداخت</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>درباره ما</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>قوانین بلیط چارتر</p>
                                </div>
                                <div className='flex mb-[15px]'>
                                    <p className='text-white text-sm hover:text-[#ff8d41] transition-all duration-300'>جریمه استرداد بلیط سیستمی</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <p className='flex justify-center text-white font-[500] mb-[20px] mt-[20px]'>مجوزها و نمادها</p>
                            <div className='flex justify-center gap-x-[70px]'>
                                <div className='w-[110px] h-[120px] bg-white rounded'>
                                    <img src='https://cdn.charter725.ir/template/backc118/images/namad1.png' alt='' />
                                </div>
                                <div className='w-[110px] h-[120px] bg-white rounded'>
                                    <img src='https://cdn.charter725.ir/template/backc118/images/samandehi.png' alt='' />
                                </div>
                            </div>
                            <div className='w-full h-[100px] bg-[#5c083f] rounded mt-[10px] pt-[10px] pr-[20px]'>
                                <p className='mb-[10px] text-white text-sm'>ما دنیا را نزدیکتر میکنیم</p>
                                <p className='text-white text-sm'>تمام بلیط‌های این وب‌سایت توسط آژانس مقتدر سیر ایرانیان صادر می‌شود و کلیه‌ی </p>
                                <p className='text-white text-sm'>مسئولیت‌های صدور بلیط برعهده‌ی این آژانس است.</p>
                            </div>
                            <p className='text-white text-sm float-left'>کلیه حقوق این سایت محفوظ و متعلق به چارتر118 می باشد.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
