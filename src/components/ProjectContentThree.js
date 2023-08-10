import ProjectImageThree from '../images/projectImages/projectThree.png'

export default function ProjectContentThree() {
    return(

        <div className="projectContent">
            <div className="projectOverview">
                <h3>Firefighter Cheatsheet</h3>
                <hr />
                <p>A firefighter tool to track hoses and their corresponding hose pressures in PSI.</p>
                <ul>
                    <li><b>Industry:</b> Full Stack Web Development</li>
                    <li><b>Duration:</b> 4 Weeks</li>
                    <li><b>Project Contributor:</b> Alex Murillo</li>
                </ul>
                <img src={ProjectImageThree} alt="Main Project Picture" style={{ width: '200px', height: '300px' }} />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ol><b>Project Objectives:</b>
                            <li>Reinforce concepts learned while attending Nashville Software School's Software Engineering Program</li>
                            <li>Practice design and coding front end and back end while maintaining professional communication with scrum master</li>
                            <li>As this was the final capstone project, graduation hinged on completing this project.</li>
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
                            <li>Log4J</li>
                            <li>AWS Cloudformation</li>
                            <li>AWS Lambda</li>
                            <li>AWS Cognito</li>
                            <li>AWS Cloudwatch</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <ol><b>Challenges / Lessons Learned:</b> 
                    <li>How easier it is to work on the front end and back end simultaneously</li>
                    <li>Focus on working and getting code to work locally before deployment</li>
                    <li>Learning and reinforcing Javascript, HTML, and CSS</li>
                    <li>How RESTFUL web services work under the hood</li>
                </ol>
            </div>

        </div>
    )
}