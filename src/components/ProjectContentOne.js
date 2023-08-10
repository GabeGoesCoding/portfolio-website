import ProjectImageOne from '../images/projectImages/projectOne.png'

export default function ProjectContentOne() {
    return(

        <div className="projectContent">
            <div className="projectOverview">
                <h3>Portfolio Website</h3>
                <hr />
                <p>A portfolio website to display projects and technical skills/abilities.</p>
                <ul>
                    <li><b>Industry:</b> Full Stack Web Development (React)</li>
                    <li><b>Duration:</b> 3 Weeks</li>
                    <li><b>Project Contributors:</b> Alex Murillo & Gabe Guio</li>
                </ul>
                <img src={ProjectImageOne} alt="Main Project Picture" style={{ width: '200px', height: '300px' }} />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ol><b>Project Objectives:</b>
                            <li>Learn React and JSX fundamentals</li>
                            <li>Reinforcement front end concepts</li>
                            <li>Build portfolio website to showcase projects</li>
                        </ol>
                    </div>
                    <div className="projectTechnologies">
                        <ul><b>Technologies Utilized:</b> 
                            <li>Javascript </li>
                            <li>React </li>
                            <li>JSX</li>
                            <li>HTML </li>
                            <li>CSS </li>
                            <li>Windows Powershell / Bash </li>
                            <li>Git</li>
                            <li>GitHub </li>
                            <li>Node.js </li>
                            <li>npm </li>
                            <li>AWS Route 53 </li>
                            <li>AWS S3</li>
                            <li>AWS Cloudfront</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <ol><b>Challenges / Lessons Learned:</b> 
                    <li>How to build a website with React and JSX</li>
                    <li>How BrowserRouter creates pages with Routes</li>
                    <li>ReactDOM.Render versus createRoot</li>
                    <li>How to apply CSS to subcomponents</li>
                    <li>How to create a modal overlay</li>
                </ol>
            </div>

        </div>
    )
}