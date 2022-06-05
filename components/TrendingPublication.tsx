import React, { FC } from 'react'
import Avatar from './Avatar';

interface Props {
    position: number | string;
    imgUrl: string;
    author: string;
    publicationTitle: string;
    publishedDate: string;
}

const TrendingPublication: FC<Props> = ({position, imgUrl, author, publicationTitle, publishedDate}) => {
  return (
    <div className="flex items-start mb-6">
        <div className='font-black text-gray-300 text-2xl mr-6'>{position}</div>
        <div className=''>
            <div className='flex items-center'>
                <Avatar uri={"https://source.unsplash.com/random/50×50/?human"} handle = {author} size = {40}/>
                <p className='ml-4'>{author}</p>
            </div>
            <div>
                <p className='font-black text-xl mt-4'>{publicationTitle}</p>
                <span className='text-gray-500'>{publishedDate}</span>
            </div>
        </div>
    </div>
  )
}

export default TrendingPublication