import React from 'react';
//we are already in items since video makes reference to map from videos array (response.data.items)
const VideoDetails = ({ video }) => {

    return (
 
    <div>
    {(!video) ? (
        <div>No selected videos</div>
    ) : (
        
        <div>
            <div className="ui embed">
          
                 <iframe title="video" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
             </div>
        <div className="ui segment">
       
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>
        </div>
        )}
    </div>
    )
}

export default VideoDetails;