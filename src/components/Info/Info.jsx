import React from 'react'

export default function Info(props) {

    const clearProject = () =>{
        props.setIsExpanded(false)
    }
    return (
    <div className='info' style={{ height: props.isExpanded ? "100%" : "0", visibility: props.isExpanded ? "visible" : "hidden"}}>
        <div className='info-image-wrapper'>
            {props.projectsInfo.image?<img src={props.projectsInfo.image[1]} alt={props.projectsInfo.name} loading='lazy'/>:null}
        </div>
        <div className='info-text-wrapper'>
            <div className='info-name'>
                <h4>{props.projectsInfo.name}</h4>
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
        <div className='info-exit' onClick={()=>clearProject()}>
            {props.projectsInfo.name?<p>X</p>:null}
        </div>
    </div>
    )
}
