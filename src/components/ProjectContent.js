import Picture from '../images/200x300.png'

export default function ProjectContent() {
    return(
        <div className="projectContent">
            <div className="projectOverview">
                <h3>Project Title</h3>
                <hr />
                <p>Quick project description. Quick project description. Quick project description. Quick project description. </p>
                <ul>
                    <li><b>Industry:</b> Tech</li>
                    <li><b>Duration:</b> 2 Weeks</li>
                    <li><b>Project Contributors:</b> Alex & Gabe</li>
                </ul>
                <img src={Picture} alt="Main Project Picture" />
            </div>

            <div className="projectDetails">
                <div className="projectDetails-row">
                    <div className="projectServices">
                        <ol><b>Project Objectives:</b>
                            <li>First Objective</li>
                            <li>Second Objective</li>
                            <li>Third Objective</li>
                        </ol>
                    </div>
                    <div className="projectTechnologies">
                        <ul><b>Technologies Utilized:</b> 
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>AWS</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projectChallenges">
                <ol><b>Challenges / Lessons Learned:</b> 
                    <li>Challenge / Lesson Learned</li>
                    <li>Challenge / Lesson Learned</li>
                    <li>Challenge / Lesson Learned</li>
                </ol>
            </div>

        </div>
    )
}