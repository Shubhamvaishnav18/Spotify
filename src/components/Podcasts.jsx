import React from 'react'
import Navbar from './Navbar'
import { assets, podcastAlbums, podcastEpisodes } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const PodcastsPage = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Popular Podcasts</h1>
                <div className='flex overflow-auto'>
                    {podcastAlbums.map((item, index) => (
                        <AlbumItem 
                            key={index} 
                            name={item.name} 
                            id={item.id} 
                            image={item.image} 
                            desc={item.desc} 
                            isPodcast={true}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Latest Episodes</h1>
                <div className='flex overflow-auto'>
                    {podcastEpisodes.map((item, index) => (
                        <SongItem 
                            key={index} 
                            name={item.name} 
                            id={item.id} 
                            image={item.image} 
                            desc={item.desc} 
                            isPodcast={true}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PodcastsPage