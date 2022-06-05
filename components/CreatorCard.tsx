import clsx from 'clsx'
import React, { FC } from 'react'
import { addressShortner } from '../utils/helpers'
import Avatar from './Avatar'

interface Props {
    name: string,
    handle: string,
    bio: string,
    address: string,
    followersCount: number,
    followingsCount: number,
    picture: string | null
    index: number
  }

const CreatorCard: FC<Props> = ({address, bio, followersCount, followingsCount, handle, index, name, picture}) => {
  return (
    <div className={clsx({'bg-theme-yellow': index % 2 === 0, 'bg-theme-blue opacity-70': index % 2 === 1, 'p-8 rounded-2xl flex flex-col items-center': true})}>
        <Avatar uri={picture} handle = {handle} />
        <div className='flex flex-col items-center'>
            <p className='font-black text-2xl'>{name}</p>
            <p className='font-normal'>{`@${handle}`}</p>
            <p className=''>{addressShortner(address)}</p>
            <p className='text-gray-600 mt-6'>{bio}</p>
        </div>
        <div className='flex justify-between gap-6 mt-6 text-base'>
            <p><span className='text-xl'>{followersCount}</span> Followers</p>
            <p><span className='text-xl'>{followingsCount}</span> Following</p>
        </div>
    </div>
  )
}

export default CreatorCard