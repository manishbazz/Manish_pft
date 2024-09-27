import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://menthosa.com/products/suparna" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://menthosa.com/products/suparna" target="_blank" rel="noreferrer"><h2>Suparna Drone </h2></a>
                <p>Designed a drone for menthosa solutions which was supplied to some of well reputed institutes in India, some of the problems I faced here were the overheating, fitting and structural integrity of the drone.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/document/d/1c86K6fzZKybqeY_gTJ7ihEwocNIKFXn8/edit?usp=drive_link&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/document/d/1c86K6fzZKybqeY_gTJ7ihEwocNIKFXn8/edit?usp=drive_link&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Drone Charger</h2></a>
                <p>Made a drone battery charger for the Suparna Drone, one of the thermal problems were the position of the fan, Ansys Icepack was used to figure the best position of the fan.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/document/d/10m6pc_VpxHwMyxJy8iW_yNePBy_38aR3/edit?usp=drive_link&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/document/d/10m6pc_VpxHwMyxJy8iW_yNePBy_38aR3/edit?usp=drive_link&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Diesel Filter Tube Cutting Machine </h2></a>
                <p>A machine was made to smoothly cut section of thick paper tubes that were to be used in a car diesel filter, one of the main problems were how to make a smooth cut and reducing the vibration of the machine.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/document/d/1TDga0UedJ3nlezBwUNBzgezcxJIn3PHB/edit?usp=sharing&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/document/d/1TDga0UedJ3nlezBwUNBzgezcxJIn3PHB/edit?usp=sharing&ouid=100455715208712223028&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Airfoil Shape optimization Using reinforcement model (in progress)</h2></a>
                <p>Shape optimization of a diamond shaped airfoil using ML, the task requires making a high accuracy pressure based CFD model in Ansys Fluent then taking the result (lift to drag coefficient) of the CFD model as a reward and Dimensions of the airfoil as target variables.</p>
            </div>
            <div className="project">
                <a href="https://menthosa.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://menthosa.com/" target="_blank" rel="noreferrer"><h2>Indoor Drone</h2></a>
                <p>Made an indoor drone with obstacle avoidance the main task was to determine the fitting and orientation of the Lidar sensor which was used for obstacle avoidance.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/15rCEtsd_LoMRu4OLSv74_LjGZ9_NkVVS/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/15rCEtsd_LoMRu4OLSv74_LjGZ9_NkVVS/view?usp=drive_link" target="_blank" rel="noreferrer"><h2>Aerothon 2024</h2></a>
                <p>Designed a drone for Aerothon 2024, here’s my computational analysis report which helped my team securing top 5 position in Phase 1(ongoing)</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;