'use client'

import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';
import ModalVideo from 'react-modal-video';

export default function Info(props) {

    const [isOpen, setOpen] = useState(false)
    const [videoId,setVideoId] = useState(" ")

    const getVideo = (videoid) =>{
        setVideoId(videoid)
        if(videoid){
          setOpen(true)
        }
      }

    return (

        <div className='info'>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={()=>setOpen(false)} />

            <div className='info-image-wrapper'>
                {props.projectsInfo.image?
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                        }}
                        navigation={true}
                        modules={[ Navigation]}
                        className="mySwiper2"
                        
                    >
                        
                        {props.projectsInfo.video?
                        <SwiperSlide> 
                            <div className='info-video-wrapper'>
                                <div className='play-button-overlay' onClick={()=>getVideo(props.projectsInfo.video)}></div>
                                <img src={props.projectsInfo.image[0]}/>
                            </div>
                        </SwiperSlide>:null}

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

            <div className='info-text-wrapper'>
                <div className='info-name'>
                    <h4>{props.projectsInfo.name}</h4>                
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
