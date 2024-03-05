'use client'

import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';
import ReactPlayer from 'react-player';


export default function Info(props) {

    const [number, setNumber] = useState(0)

    return (
    <div className='info'>
        <div className='info-image-wrapper'>
            {props.projectsInfo.image?
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper2"
                    onSlideChange={(swiper) => {setNumber(swiper.activeIndex)}}
                >
                    
                    {props.projectsInfo.video?
                    <SwiperSlide> 
                        <div className='info-video-wrapper'>
                            <ReactPlayer 
                                url={props.projectsInfo.video}
                                controls={true}
                                width='100%'
                                height='100%'
                                playing={!number}
                            />
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
                {number}
                
            </div>
            <div className='info-type'>
                <p>{props.projectsInfo.type}</p>
            </div>
            <div className='info-producer'>
                {props.projectsInfo.producer?<p>Producer: {props.projectsInfo.producer}</p>:null}
                {props.projectsInfo.artist?<p>Artist: {props.projectsInfo.artist}</p>:null}
            </div>
            <div className='info-director'>
                {props.projectsInfo.director?<p>Director: {props.projectsInfo.director}</p>:null}
            </div>
        </div>
    </div>
    )
}
