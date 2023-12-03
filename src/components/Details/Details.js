import React, { useState } from 'react'

const Details = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            <div className={`mr-auto ml-auto bg-white w-[75%] h-[450px] rounded shadow-lg  overflow-y-hidden ${showMore && 'overflow-y-visible h-fit transition-all duration-500'}`}>
                <div className="pt-[70px] mr-[60px]">
                    <h2 className="text-2xl font-[600] text-[#2aacd5]">بلیط چارتر هواپیما</h2>
                    <p className="text-[#63696d] mt-[20px]">زمانی که مسافران قصد خرید <strong className="text-[#ff8d41]">بلیط چارتر</strong>&nbsp;هواپیما را دارند، ملاک&zwnj;هایی را برای آن در نظر می&zwnj;گیرند. اما نکته&zwnj;ای که شاید کمتر بدان توجه کنند، چارتری یا سیستمی بودن بلیط هواپیما است. فرق این دو نوع بلیط در مقصدهای خارجی بیشتر نمایان می&zwnj;شود و مسافران باید قبل از خرید حتما&nbsp;به آن توجه کنند.</p>
                </div>
                <img className="w-[50%] ml-auto mr-auto" src="https://s2.uupload.ir/files/dycp_118_(3).jpg" alt="" />
                <div className='mr-[60px]'>
                    <h2 className="text-2xl font-[600] text-[#2aacd5]">بلیط چارتر</h2>
                    <p className='text-[#63696d] mt-[20px]'>بلیط چارتر به این روش فروخته می‌شود که یک آژانس مسافرتی اقدام به اجاره تمام صندلی‌های یک هواپیما در یک مسیر مشخص می‌کند. سپس متناسب با نرخ مصوب سازمان هواپیمایی کشوری روی این بلیط‌ها قیمت‌گذاری می‌کند. چارترکننده‌ها مجاز به قیمت‌گذاری مورد نظر خود روی بلیط چارتری هستند.</p>
                    <p className='text-[#63696d] mt-[20px]'>قیمت بلیط چارتر دارای نوسانات بسیاری است. بدین شکل که در زمان اوج مسافر، شاهد افزایش قیمت در بلیط‌های چارتری هستیم. اما در زمانی که از شدت مسافران بنابر دلایلی کاسته می‌شود؛ چارترکننده برای آنکه صندلی پیش خرید کرده را به فروش برساند؛ قیمت بلیط چارتری را کاهش می‌دهد.</p>
                    <h2 className="text-2xl font-[600] text-[#ff8d41] mt-[40px]">اجاره صندلی چارتر هواپیما</h2>
                    <p className='text-[#63696d] mt-[20px]'>«سیت چارتر» اصطلاح دیگری است که در خصوص شرایط چارتری وجود دارد. زمانی که یک آژانس هواپیمایی اقدام به اجاره برخی از صندلی‌های پرواز سیستمی از یک شرکت هواپیمایی کند؛ گفته می‌شود سیت چارتر انجام داده است. در این وضعیت، چارتر کننده فقط می‌تواند روی صندلی‌های اجاره شده قیمت‌گذاری کند و اجازه‌ای مبنی بر تعیین و تاریخ پرواز ندارد.</p>
                    <p className='text-[#63696d] mt-[20px]'>سیت چارتر به سه صورت انجام می‌شود:</p>
                    <ul>
                        <li>
                            <p className='text-[#63696d] mt-[20px]'>اجاره شناور صندلی</p>
                        </li>
                        <li>
                            <p className='text-[#63696d] mt-[20px]'>اجاره صندلی رفت‌ و برگشت</p>
                        </li>
                        <li>
                            <p className='text-[#63696d] mt-[20px]'>اجاره صندلی‌های مشخص شده</p>
                        </li>
                    </ul>
                    <h2 className="text-2xl font-[600] text-[#2aacd5] mt-[40px]">خرید بلیط چارتر در مسیرهای پرطرفدار</h2>
                    <p className='text-[#63696d] mt-[20px]'>ارزانی نسبی خرید بلیط چارتر باعث شده تا مسافران برای خرید بلیط هواپیما خارجی به‌سمت بلیط چارتری خارجی جذب شوند. برخی از مسیرهای پرواز به‌علت حجم بالای مسافر در زمان‌های گوناگون دارای بالاترین حجم بلیط چارتر خارجی هستند. به‌طور کل چارترکنندگان در مسیرهای پرطرفدار داخلی و خارجی بیشتر فعالیت دارند.</p>
                    <p className='text-[#63696d] mt-[20px]'>از جمله مسیرهای پر ترافیک چارتری می‌توان به <strong className='text-[#0f6698]'>بلیط هواپیما مشهد تهران، بلیط هواپیما تهران تبریز، بلیط هواپیما مشهد کرمان</strong> و موارد دیگری اشاره کرد.</p>
                    <h2 className="text-2xl font-[600] text-[#2aacd5] mt-[40px]">چگونه بلیط چارتر بخریم؟</h2>
                    <p className='text-[#63696d] mt-[20px]'>باری خرید بلیط چارتر شما می‌توانید به ابتدا همین صفحه مراجعه کرده و مبدا و مقصد و تاریخ پرواز خود را مشخص کنید. بعد از جستجو لیستی از تمامی پروازهای موجود بین مبدا و مقصد شما به نمایش در می‌آید. در این قسمت آن دسته از پروازهایی که برچسب اکونومی دارند را می‌توانید انتخاب کنید و نسبت به رزرو آنها اقدام کنید.</p>
                    <h2 className="text-2xl font-[600] text-[#2aacd5] mt-[40px]">تفاوت پرواز چارتری و سیستمی در بلیط هواپیما </h2>
                    <p className='text-[#63696d] mt-[20px]'>عمده‌ترین تفاوت پرواز چارتری و سیستمی در نحوه قیمت‌گذاری و فروش بلیط هواپیما است. همان طور که در بالاتر هم اشاره کردیم فروش بلیط چارتر بر عهده آژانس چارترکننده است و بلیط سیستمی را ایرلاین‌ها و آژانس‌های هواپیمایی به فروش می‌رسانند.</p>

                </div>
            </div>
            <div className="mr-auto ml-auto bg-white w-[75%] h-[100px]">
                <button onClick={handleShowMore} className='w-[120px] h-[40px] border border-slate-300 rounded relative top-[60px] flex ml-auto mr-auto justify-center items-center'>
                    {showMore ? 'کمتر...' : 'بیشتر...'}
                </button>
            </div>
        </div>
    )
}

export default Details
