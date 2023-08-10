import ProImage from '../images/aboutMeImages/pro_image.png'
import FunImage from '../images/aboutMeImages/fun_image.png'

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
                <img src={ProImage} alt="Developer-Image" style={{ width: '300px', height: '450px' }} />
                <div className="aboutMeImageOverlay">
                    <p>This website was created with React, a skill I learned on my own.</p>
                </div>
            </div>
            <h3>Alex Murillo</h3>
        </div>

        <div className="aboutMeItem">
            <h3>Full Stack Developer</h3>
            <div className="aboutMeImageItem">
                <img src={FunImage} alt="Personal-Image" style={{ width: '300px', height: '450px' }} />
                <div className="aboutMeImageOverlay">
                    <p className="bumpedText">Sequoia National Park, 2021.</p>
                </div>
            </div>
        </div>

        </div>

        <div className="aboutMeStory">
            <p>As a former Firefighter/Paramedic, I responded to incidents of all types to include structrual and wildland firefighting, vehice fires, hazardous materials incidents, and motor vehicle accidents, just to name a few. I was also the Team Lead for a local Fire Investigation Team where I helped in the investigation and adjudication of individuals setting incendiary fires.</p>
            <p>Following my experience as a Firefighter/Paramedic, I became an Emergency Manager for the State of Tennessee, eventually finding myself in the position of State Individual Assistance Officer. In that position, I coordinated with hundreds of people and agencies across local, state, and federal government as well as volunteer organizations on behalf of disaster survivors. I was involved with incidents such as the Nashville tornado, COVID-19, the Waverly flood, and the Tennesse tornado outbreak of 2021.</p>
            <p>I found myself with the opportunity, motivation, and curiosity to pursue a life-long interest in software development. So in 2022, I decided to resign from work in government and enroll in Nashville Software School's Software Engineering Program. The program was a collaboration between NSS and Amazon to teach students Java and Amazon Web Services, in addition to basic web development and API skills.</p>
            <p>In my free time, I enjoy powerlifting at the gym, visiting national parks, hiking, climbing, and eating delicious food.</p>
        </div>
    </div>
    )
}