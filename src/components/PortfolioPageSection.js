import React, { useState } from 'react';
import ProjectImageOne from '../images/projectImages/projectOne.png'
import ProjectImageTwo from '../images/projectImages/projectTwo.png'
import ProjectImageThree from '../images/projectImages/projectThree.png'
import ProjectImageFour from '../images/projectImages/projectFour.png'
import ProjectContentOne from './ProjectContentOne'
import ProjectContentTwo from './ProjectContentTwo'
import ProjectContentThree from './ProjectContentThree'
import ProjectContentFour from './ProjectContentFour'


export default function PortfolioPageSection() {
    const [modalStates, setModalStates] = useState([false, false, false, false]);

    const openModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
        setModalStates(newModalStates);
    };

    const closeModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        setModalStates(newModalStates);
    };



    return (
        <div className="portfolioPageSection">


            <div className="portfolioStyle">
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(0)}>
                    <img src={ProjectImageOne} alt="Image 1 " style={{ width: '200px', height: '300px' }} /><br />
                    <div className="projectTitleOverlay">
                        <p>Portfolio Website</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>JSX</li>
                            <li>Node.js</li>
                            <li>AWS S3</li>
                        </ul>
                    </div></div>

                    {modalStates[0] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(0)}>
                                <ProjectContentOne />
                            </div>
                        </div>
                    )}

                    {/* <a href="" target="_blank">Video Demo</a><br /> */}
                    <a href="https://github.com/emergency22/portfolio-website" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(1)}>
                    <img src={ProjectImageTwo} alt="Image 2 " style={{ width: '200px', height: '300px' }} /><br />
                    <div className="projectTitleOverlay">
                        <p>The Resignator</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML / CSS</li>
                            <li>AWS Lambda</li>
                            <li>Postman</li>
                        </ul>
                    </div></div>

                    {modalStates[1] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(1)}>
                                <ProjectContentTwo />
                            </div>
                        </div>
                    )}

                    <a href="https://www.youtube.com/watch?v=TVAu_UHDRqA" target="_blank">Video Demo</a><br />
                    <a href="https://github.com/emergency22/TheResignator" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(2)}>
                    <img src={ProjectImageThree} alt="Image 3 " style={{ width: '200px', height: '300px' }} /><br />
                    <div className="projectTitleOverlay">
                        <p>Firefighter Cheatsheet</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML / CSS</li>
                            <li>AWS Cloudformation</li>
                            <li>AWS Lambda</li>
                        </ul>
                    </div></div>

                    {modalStates[2] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(2)}>
                                <ProjectContentThree />
                            </div>
                        </div>
                    )}

                    <a href="https://www.youtube.com/watch?v=FYJvZrxUK0c" target="_blank">Video Demo</a><br />
                    <a href="https://github.com/emergency22/Firefighter-Cheatsheet" target="_blank">GitHub Repo</a>
                </div>
            </div>



            <div className="portfolioStyle">
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(3)}>
                    <img src={ProjectImageFour} alt="Image 4 " style={{ width: '200px', height: '300px' }} /><br />
                    <div className="projectTitleOverlay">
                        <p>Digital Nomad</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML / CSS</li>
                            <li>Axios</li>
                            <li>AWS Lambda</li>
                        </ul>
                    </div></div>

                    {modalStates[3] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(3)}>
                                <ProjectContentFour />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                {/* <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => setIsModalOpen(true)}>
                    <img src={ProjectImageOne} alt="Image 5 " /><br />
                    <div className="projectTitleOverlay">
                        <p>Project Title</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div></div>

                    {isModalOpen && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={closeModal}>
                                {<ProjectContent />}
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => setIsModalOpen(true)}>
                    <img src={ProjectImageOne} alt="Image 6 " /><br />
                    <div className="projectTitleOverlay">
                        <p>Project Title</p>
                    </div>
                    <div className="techStackOverlay">
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                            <li>Technology 4</li>
                            <li>Technology 5</li>
                        </ul>
                    </div></div>

                    {isModalOpen && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={closeModal}>
                                {<ProjectContent />}
                            </div>
                        </div>
                    )}
                    
                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div> */}
            </div>

        </div>

    )
}