import Image from '../images/200x300.png'

export default function AboutMe() {
    return (
    <div id="aboutMe">

        <div className="video-responsive">
            <iframe
                src={`https://www.youtube.com/embed/kAEJyZJHaFg`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube video"
            />
        </div>

        <div className="aboutMeItems">
        <div className="aboutMeItem">
            <div className="aboutMeImageItem">
                <img src={Image} alt="Developer-Image" />
                <div className="aboutMeImageOverlay">
                    <p>Text text text text. Text text text text.</p>
                </div>
            </div>
            <h3>FirstName LastName</h3>
        </div>

        <div className="aboutMeItem">
            <h3>Full Stack Developer</h3>
            <div className="aboutMeImageItem">
                <img src={Image} alt="Personal-Image" />
                <div className="aboutMeImageOverlay">
                    <p className="bumpedText">Text text text text. Text text text text.</p>
                </div>
            </div>
        </div>

        </div>

        <div className="aboutMeStory">
            <p>Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. </p>
            <p>Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. </p>
            <p>Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. Paragraph telling your personal story. </p>
        </div>
    </div>
    )
}