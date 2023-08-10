import ProjectImageTwo from '../images/projectImages/projectTwo.png'

export default function ProjectContentTwo() {
    return(

        <div className="projectContent">
            <div className="projectOverview">
                <h3>The Resignator</h3>
                <hr />
                <p>A job-resignation service that creates a mock resignation notice via an API post request.</p>
                <ul>
                    <li><b>Industry:</b> Career Advancement</li>
                    <li><b>Duration:</b> 3 Weeks</li>
                    <li><b>Project Contributor:</b> Alex Murillo</li>
                </ul>
                <img src={ProjectImageTwo} alt="Main Project Picture" style={{ width: '200px', height: '300px' }} />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ol><b>Project Objectives:</b>
                            <li>Reinforce front end development skills in Javascript, HTML, and CSS</li>
                            <li>Reinforce back end development skills in Java, AWS Lambda, and AWS SAM</li>
                            <li>Learn how to parse a CSV file in Javascript</li>
                        </ol>
                    </div>
                    <div className="projectTechnologies">
                        <ul><b>Technologies Utilized:</b>
                            <li>Java</li>
                            <li>Javascript </li>
                            <li>HTML </li>
                            <li>CSS </li>
                            <li>Windows Powershell</li>
                            <li>Git</li>
                            <li>GitHub </li>
                            <li>Axios</li>
                            <li>Node.js </li>
                            <li>npm </li>
                            <li>http-server</li>
                            <li>AWS SAM</li>
                            <li>CSV</li>
                            <li>JSON</li>
                            <li>Jackson library</li>
                            <li>Log4J</li>
                            <li>Gradle (using Groovy)</li>
                            <li>Amazon SDK</li>
                            <li>AWS Lambda</li>
                            <li>Docker </li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <ol><b>Challenges / Lessons Learned:</b> 
                    <li>Browsers don't like pulling CSV files without a server enabled.</li>
                    <li>How to parse a CSV file in Javascript.</li>
                    <li>There's more than one script type that can be accepted into the head section of an HTML file.</li>
                    <li>HTML's "font" tag has been deprecated in favor of CSS. Back in my day, we had to use font tags in the snow. Both ways.</li>
                    <li>An "await" before using sessionStorage.setItem() will save a lot of headache.</li>
                    <li>CORS errors. Nuff said. </li>
                </ol>
            </div>

        </div>
    )
}