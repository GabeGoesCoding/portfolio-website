import AWS from '../images/icons/aws.svg'
import JavaIcon from '../images/icons/java.svg'
import JavascriptIcon from '../images/icons/javascript.svg'
import HTMLicon from '../images/icons/html-5.svg'
import CSSicon from '../images/icons/css-3.svg'
import NodeIcon from '../images/icons/nodejs.svg'
import ReactIcon from '../images/icons/reactPNG.png'
import GitIcon from '../images/icons/git.svg'
import GitHubIcon from '../images/icons/github.svg'

export default function Introduction() {
    return (
        <div className="introduction">
            <h1>Alex Murillo</h1>
            <h2>Full Stack Developer</h2>
            <h3>Hey! Thanks for visiting my portfolio website. I am a junior-level full stack developer with a hard skill set in Java, Javascript, HTML, CSS, Amazon Web Services, SQL, and I have a working knowledge of Spring Boot and React.</h3>
            <ul className="introductionTechStackItems">
                <li><img src={AWS} alt="AWS" width="60" /></li>
                <li><img src={JavaIcon} alt="Java" width="60" /></li>
                <li><img src={JavascriptIcon} alt="Javascript" width="60" /></li>
                <li><img src={HTMLicon} alt="HTML" width="60" /></li>
                <li><img src={CSSicon} alt="CSS" width="60" /></li>
                <li><img src={NodeIcon} alt="Node" width="60" /></li>
                <li><img src={ReactIcon} alt="React" width="60" /></li>
                <li><img src={GitIcon} alt="Git" width="60" /></li>
                <li><img src={GitHubIcon} alt="GitHub" width="60" /></li>

            </ul>
        </div>
    )
}