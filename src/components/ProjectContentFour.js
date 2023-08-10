import ProjectImageFour from '../images/projectImages/projectFour.png'

export default function ProjectContentFour() {
    return(

        <div className="projectContent">
            <div className="projectOverview">
                <h3>Digital Nomad</h3>
                <hr />
                <p>Full stack group project to practice/learn web development and API skills. This project was a simple website interface that pulled data from DynamoDB to display and save vacation destinations.
                </p>
                <ul>
                    <li><b>Industry:</b> Full Stack Web Development</li>
                    <li><b>Duration:</b> 3 Weeks</li>
                    <li><b>Project Contributors:</b> Alex Murillo, Erika Smith, Steve Winters, Matt Marotta</li>
                </ul>
                <img src={ProjectImageFour} alt="Main Project Picture" style={{ width: '200px', height: '300px' }} />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ol><b>Project Objectives:</b>
                            <li>Learn Javascript, HTML, and CSS</li>
                            <li>Build on backend development skills with Java and AWS Services</li>
                        </ol>
                    </div>
                    <div className="projectTechnologies">
                        <ul><b>Technologies Utilized:</b> 
                        <li>Java</li> 
                            <li>Javascript </li>
                            <li>HTML </li>
                            <li>CSS </li>
                            <li>Docker</li>
                            <li>Bash</li>
                            <li>wsl</li>
                            <li>Git</li>
                            <li>GitHub </li>
                            <li>npm </li>
                            <li>AWS S3</li>
                            <li>AWS Cloudfront</li>
                            <li>AWS DynamoDB</li>
                            <li>AWS SAM</li>
                            <li>AWS Cloudfront</li>
                            <li>AWS Cloudformation</li>
                            <li>AWS Lambda</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <ol><b>Challenges / Lessons Learned:</b> 
                    <li>Concise and detailed initial planning will pay dividends, this also speaks to breaking down tasks into manageable pieces</li>
                    <li>Knowing Java helped with learning Javascript</li>
                    <li>Switching roles can slow down development</li>
                </ol>
            </div>

        </div>
    )
}