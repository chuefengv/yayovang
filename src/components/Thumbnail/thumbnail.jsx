import React,{ useState,useEffect } from 'react'
import axios from 'axios'

export default function thumbnail(props) {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    const fetchThumbnail = async () => {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; 
        const videoId = props.projectsInfo.video;
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`);
            const thumbnails = response.data.items[0].snippet.thumbnails;
            const thumbnailUrl = thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url;
            setThumbnailUrl(thumbnailUrl);
            console.log(apiKey)
        } catch (error) {
            console.error('Error fetching thumbnail:', error);
        }
    };

    useEffect(() => {
        fetchThumbnail();
    },);
    
    return (
        <>
            {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
        </>
    );
}
