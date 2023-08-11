import React, { useState } from 'react';
import Image1 from '../images/200x300.png'
import ProjectContent from './ProjectContent'

export default function PortfolioPageSection() {
    const [modalStates, setModalStates] = useState([false, false, false, false, false, false]);

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
                    <img src={Image1} alt="Image 1 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[0] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(0)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(1)}>
                    <img src={Image1} alt="Image 2 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[1] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(1)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(2)}>
                    <img src={Image1} alt="Image 3 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[2] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(2)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
            </div>



            <div className="portfolioStyle">
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(3)}>
                    <img src={Image1} alt="Image 4 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[3] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(3)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(4)}>
                    <img src={Image1} alt="Image 4 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[4] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(3)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => openModal(5)}>
                    <img src={Image1} alt="Image 4 " style={{ width: '200px', height: '300px' }} /><br />
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

                    {modalStates[5] && (
                        <div className="modalBackdrop">
                            <div className="modalContent" onClick={() => closeModal(3)}>
                                <ProjectContent />
                            </div>
                        </div>
                    )}

                    <a href="" target="_blank">Video Demo</a><br />
                    <a href="" target="_blank">GitHub Repo</a>
                </div>


            </div>

        </div>

    )
}