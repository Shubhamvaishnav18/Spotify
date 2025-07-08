import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { podcastAlbums, podcastEpisodes } from '../assets/assets'
import { assets } from '../assets/assets'
import Navbar from './Navbar'

const DisplayPodcast = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const displayRef = useRef()
    const location = useLocation()

    const podcast = podcastAlbums.find(item => item.id === Number(id))
    const episodes = podcastEpisodes.filter(episode => Math.floor(episode.id / 10) === Number(id))

    useEffect(() => {
        if (podcast) {
            displayRef.current.style.background = `linear-gradient(${podcast.bgColor},#121212)`
        }
    }, [podcast])

    if (!podcast) {
        return <div>Podcast not found</div>
    }

    return (
        <div ref={displayRef} className='text-white min-h-screen pb-20'>
            <Navbar />
            <div className='px-6 pt-4'>
                <div className='flex flex-col md:flex-row gap-6 items-end'>
                    <img 
                        src={podcast.image} 
                        alt={podcast.name} 
                        className='w-48 h-48 md:w-60 md:h-60 shadow-2xl rounded-md object-cover'
                    />
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-semibold'>PODCAST</p>
                        <h1 className='text-4xl md:text-6xl font-bold'>{podcast.name}</h1>
                        <p className='text-gray-300'>{podcast.desc}</p>
                        <div className='flex items-center gap-2 text-sm mt-2'>
                            <span className='font-bold'>Spotify</span>
                            <span>•</span>
                            <span>{episodes.length} episodes</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='flex gap-4 items-center mb-6'>
                        <img 
                            src={assets.play_icon} 
                            className='w-12 h-12 bg-green-500 rounded-full p-3 cursor-pointer hover:scale-105 transition'
                            alt="Play"
                        />
                        <img 
                            src={assets.like_icon} 
                            className='w-8 h-8 cursor-pointer opacity-70 hover:opacity-100'
                            alt="Like"
                        />
                    </div>

                    <div className='mb-4'>
                        <div className='grid grid-cols-12 border-b border-gray-800 pb-2 px-4 text-gray-400 text-sm'>
                            <div className='col-span-1'>#</div>
                            <div className='col-span-5'>TITLE</div>
                            <div className='col-span-4'>DESCRIPTION</div>
                            <div className='col-span-2 flex justify-end'>
                                <img src={assets.clock_icon} className='h-4 w-4' alt="Duration" />
                            </div>
                        </div>

                        {episodes.map((episode, index) => (
                            <div 
                                key={episode.id}
                                className='grid grid-cols-12 hover:bg-gray-800 rounded-md p-4 items-center cursor-pointer'
                                onClick={() => navigate(`/episode/${episode.id}`)}
                            >
                                <div className='col-span-1 text-gray-400'>{index + 1}</div>
                                <div className='col-span-5 flex items-center gap-4'>
                                    <img 
                                        src={episode.image} 
                                        className='w-10 h-10 rounded'
                                        alt={episode.name}
                                    />
                                    <div>
                                        <p className='font-medium'>{episode.name}</p>
                                    </div>
                                </div>
                                <div className='col-span-4 text-gray-400 text-sm'>{episode.desc}</div>
                                <div className='col-span-2 text-gray-400 text-sm flex justify-end'>
                                    {episode.duration}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayPodcast