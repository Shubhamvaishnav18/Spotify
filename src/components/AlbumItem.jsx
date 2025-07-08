import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ name, id, image, desc, isPodcast }) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(isPodcast ? `/podcast/${id}` : `/album/${id}`)} 
            className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
        >
            <img className='rounded' src={image} alt={name} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
            {isPodcast && <span className='text-xs text-purple-300'>PODCAST</span>}
        </div>
    )
}

export default AlbumItem