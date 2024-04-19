import React,{ useState,useEffect } from 'react'
import axios from 'axios'

export default function thumbnail(props) {
    //State variable used to store the thumbnail image URL from the YouTube API response.
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    //The fetchThumbnail function is responsible for making an asynchronous request to the YouTube API to retrieve the thumbnail image URL based on the provided video ID.
    const fetchThumbnail = async () => {
        //The API key is stored in an environment variable called NEXT_PUBLIC_YOUTUBE_API_KEY, which is accessed using the process.env object.
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; 
        //The video ID is extracted from the projectsInfo prop, which contains information about the project, including the video ID.
        const videoId = props.projectsInfo.video;
        //The axios library is used to make an HTTP GET request to the YouTube API, passing the video ID and API key as query parameters.
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`);
            //The thumbnail URL is extracted from the API response and stored in the thumbnailUrl state variable.
            const thumbnails = response.data.items[0].snippet.thumbnails;
            //The max resolution thumbnail is preferred, but if it is not available, the high resolution thumbnail is used instead.
            const thumbnailUrl = thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url;
            //The setThumbnailUrl function is used to update the thumbnailUrl state variable with the fetched thumbnail URL.
            setThumbnailUrl(thumbnailUrl);
        } catch (error) {
            //If an error occurs during the API request, an error message is logged to the console.
            console.error('Error fetching thumbnail:', error);
        }
    };

    //The useEffect hook is responsible for fetching the thumbnail image URL when the component mounts.
    //It calls the fetchThumbnail function, which makes an asynchronous request to the YouTube API to retrieve the thumbnail URL based on the provided video ID. 
    //The fetched URL is then stored in the thumbnailUrl state variable using the setThumbnailUrl function.
    useEffect(() => {
        fetchThumbnail();
    },);
    
    return (
        <>
            {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
        </>
    );
}
