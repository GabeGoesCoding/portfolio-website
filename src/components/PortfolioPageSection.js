import React, { useState } from 'react';
import Image1 from '../images/200x300.png'
import ProjectContent from './ProjectContent'

export default function PortfolioPageSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
      };


    return (
        <div className="portfolioPageSection">


            <div className="portfolioStyle">
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => setIsModalOpen(true)}>
                    <img src={Image1} alt="Image 1 " /><br />
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
                    <img src={Image1} alt="Image 2 " /><br />
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
                    <img src={Image1} alt="Image 3 " /><br />
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
            </div>



            <div className="portfolioStyle">
                <div className="portfolioItem">
                <div className="portfolioImageItem" onClick={() => setIsModalOpen(true)}>
                    <img src={Image1} alt="Image 4 " /><br />
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
                    <img src={Image1} alt="Image 5 " /><br />
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
                    <img src={Image1} alt="Image 6 " /><br />
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
            </div>



        </div>

    )
}