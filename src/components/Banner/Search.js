import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Search = () => {
    return (
        <div>
            <div className='relative z-[1]'>
                <img src='https://tursab118.com/templates/charter118/header.jpg' alt='' />
                <img className='absolute bottom-0 h-[108px] w-[100%]' src='https://tursab118.com/templates/charter118/header-svg-bg.png' alt='' />
                <div className='absolute bottom-[-10px] right-[300px]'>
                    <div className='flex gap-x-[10px]'>
                        <div className='text-[#a02777] flex justify-center w-[120px] h-[50px] bg-[#f2f2f2] rounded-t'>
                            <h5 className='mt-[10px] font-[600]'>بلیط هواپیما</h5>
                        </div>
                        <div className='text-[#a02777] flex justify-center w-[90px] h-[50px] bg-[rgba(242,242,242,.85)] rounded-t cursor-pointer hover:bg-[#f2f2f2]'>
                            <h5 className='mt-[10px] font-[500]'>هتل داخلی</h5>
                        </div>
                        <div className='text-[#a02777] flex justify-center w-[90px] h-[50px] bg-[rgba(242,242,242,.85)] rounded-t cursor-pointer hover:bg-[#f2f2f2]'>
                            <h5 className='mt-[10px] font-[500]'>هتل خارجی</h5>
                        </div>
                        <div className='text-[#a02777] flex justify-center w-[100px] h-[50px] bg-[rgba(242,242,242,.85)] rounded-t cursor-pointer hover:bg-[#f2f2f2]'>
                            <h5 className='mt-[10px] font-[500]'>پرواز خارجی </h5>
                        </div>
                        <div className='text-[#a02777] flex justify-center w-[120px] h-[50px] bg-[rgba(242,242,242,.85)] rounded-t cursor-pointer hover:bg-[#f2f2f2]'>
                            <h5 className='mt-[10px] font-[500]'>حجوزات العرب</h5>
                        </div>
                        <div className='text-[#a02777] flex justify-center w-[80px] h-[50px] bg-[rgba(242,242,242,.85)] rounded-t cursor-pointer hover:bg-[#f2f2f2]'>
                            <h5 className='mt-[10px] font-[500]'>پکیج تور </h5>
                        </div>
                    </div>
                    <div className='bg-[#f2f2f2] w-[780px] h-[150px] shadow-xl'>
                        <div className='flex justify-between gap-x-[20px]'>
                            <select className='mr-[15px] mt-[30px] !z-[999] w-[100%] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#a02777]'>
                                <option selected>مبدا</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                            </select>
                            <div className='mt-[35px]'>
                                <FaLongArrowAltRight className='text-xl text-[#a02777]' />
                                <FaLongArrowAltLeft className='text-xl text-[#a02777]' />
                            </div>
                            <select className='mt-[30px] !z-[999] w-[100%] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#a02777]'>
                                <option selected>مقصد</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                                <option>Tehran (THR) تهران</option>
                            </select>
                            <input placeholder='تاریخ رفت' className='ml-[15px] mt-[30px] !z-[999] w-[100%] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:!border-[#a02777]'>

                            </input>
                        </div>
                        <div className='float-left'>
                            <p className='text-xs text-[#63696d] ml-[15px]'>نمایش کمترین نرخ در صورت عدم ورود تاریخ</p>
                            <button className='w-[160px] h-[40px] float-left ml-[15px] mt-[10px] bg-[#ffa903] rounded text-[#a02777] font-[600] text-xl pb-[5px] hover:border border-[#f60] hover:bg-[#f2f2f2] transition-all duration-500'>جستجو</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
