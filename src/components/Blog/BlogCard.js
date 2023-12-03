import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


const BlogCard = () => {
    return (
        <div className='w-[300px] h-[290px]'>
            <div className='w-[100%] h-[50px] border-b border-b-[#a02777]'>
                <h3 className='text-sm font-[500] mr-[10px] pt-[15px]'>راهنمای سفر چارتر118</h3>
            </div>
            <div className='mr-[10px]'>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>مراکز خرید قم | زیارت و یادگاری</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>غذاهای سنتی گرجستان را بشناسید!</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>10 تا از بهترین جاهای دیدنی ازمیر</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>10 تا از زیباترین جاهای دیدنی مسقط</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>مهم‌ترین سوغات تبریز را بشناسید!</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>10 از بهترین جاهای دیدنی مهاباد</p>
                </div>
                <div className='flex gap-x-[10px] cursor-pointer pt-[10px]'>
                    <IoIosArrowBack className='text-sm text-[#63696d] mt-[5px]' />
                    <p className='text-sm '>جاهای دیدنی لیختن اشتاین</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
