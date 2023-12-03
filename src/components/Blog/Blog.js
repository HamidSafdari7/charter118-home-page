import React, { useState } from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            <div className={`w-full h-[300px] flex flex-wrap justify-center gap-x-[15px] gap-y-[25px] overflow-y-hidden ${showMore && 'overflow-y-visible h-max transition-all duration-500'}`}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="mr-auto ml-auto w-[75%] h-[100px]">
                <button onClick={handleShowMore} className='w-[120px] h-[40px] border border-slate-300 rounded relative flex ml-auto mr-auto justify-center items-center'>
                    {showMore ? 'کمتر...' : 'بیشتر...'}
                </button>
            </div>
        </div>
    )
}

export default Blog
