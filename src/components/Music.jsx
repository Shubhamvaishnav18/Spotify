import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const Music = () => {
    const musicAlbums = albumsData.filter(album => !album.name.includes("Podcast"));
    const musicSongs = songsData.filter(song => !song.name.includes("Podcast"));

    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Music Charts</h1>
                <div className='flex overflow-auto'>
                    {musicAlbums.map((item, index) => (
                        <AlbumItem key={index} name={item.name} id={item.id} image={item.image} desc={item.desc} />
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Top Hits</h1>
                <div className='flex overflow-auto'>
                    {musicSongs.map((item, index) => (
                        <SongItem key={index} name={item.name} id={item.id} image={item.image} desc={item.desc} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Music