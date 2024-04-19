'use client'
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Thumbnail from '@/components/Thumbnail/thumbnail';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import { projectlist } from '@/app/projectlist';
import { Icon } from '@iconify/react';

export default function Info(props) {

    //State variable used to store the video modal window's open/closed state.
    const [isOpen, setOpen] = useState(false)
    //State variable used to store the video ID of the project.
    const [videoId,setVideoId] = useState(" ")

    //Function to get the video ID of the project and open the video modal window.
    const getVideo = (videoid) =>{
        setVideoId(videoid)
        if(videoid){
          setOpen(true)
        }
      }

    //Function to close the info window.
    const closeWindow = () =>{
        props.setProjectsInfo(projectlist)
        setOpen(false)
    }
    return (

        <div className='info'>
            {/* The ModalVideo component is used to display the video modal window when the user clicks on the play button overlay. */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} />
            
            
            <div className='info-image-wrapper'>
                {/* Check if the project has an image, if it does, display the image in a Swiper component. */}
                {props.projectsInfo.image?
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                        }}
                        navigation={true}
                        modules={[ Navigation]}
                        className="mySwiper2"
                    >
                        {/* Check if the project has a video, if it does, display the video in the Swiper component. */}
                        {props.projectsInfo.video?
                        <SwiperSlide> 
                            <div className='info-video-wrapper'>
                                <div className='play-button-overlay' onClick={()=>getVideo(props.projectsInfo.video)}></div>
                                <Thumbnail projectsInfo={props.projectsInfo} />
                            </div>
                        </SwiperSlide>:null}

                        {/* Map through the project images and display them in the Swiper component. */}
                        {props.projectsInfo.image.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={props.projectsInfo.name} loading='lazy'/>
                                </SwiperSlide>
                            )
                        })}           
                    </Swiper>
                :null}
            </div>

            {/* The info-text-wrapper div contains the project information, including the project name, type, artist, director, and producer. */}
            <div className='info-text-wrapper'>
                <div className='info-name-wrapper'>
                    <div className='info-name'>
                        <h4>{props.projectsInfo.name}</h4>                
                    </div>
                    {props.projectsInfo.name?
                    <div className='info-exit'>
                        <Icon className='icon'icon="material-symbols:close" onClick={()=>{closeWindow()}} />
                    </div>:null}
                </div>
                <div className='info-type'>
                    <p>{props.projectsInfo.type}</p>
                </div>
                <div className='info-artist'>
                    {props.projectsInfo.artist?<p>Artist: {props.projectsInfo.artist}</p>:null}
                </div>
                <div className='info-director'>
                    {props.projectsInfo.director?<p>Director: {props.projectsInfo.director}</p>:null}
                </div>
                <div className='info-producer'>
                    {props.projectsInfo.producer?<p>Producer: {props.projectsInfo.producer}</p>:null}
                </div>
            </div>
        </div>
    )
}
