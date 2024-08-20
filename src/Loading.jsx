import './Loading.css';
import AudioPlayer from './AudioPlayer';
import video1 from './assets/intro.mp4';
import video2 from './assets/intro2.webm';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="video-container">
                <video 
                    className="loading-video" 
                    autoPlay 
                    muted 
                    loop
                >
                    <source src={video1} type="video/mp4" />
                    <source src={video2} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <AudioPlayer />
        </div>
    );
};

export default Loading;
