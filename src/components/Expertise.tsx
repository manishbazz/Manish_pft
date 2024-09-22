import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { SiAnsys, SiAutocad, SiBlender } from "react-icons/si";
import { TbHexagon3D } from "react-icons/tb";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Solidworks",
    "NX CAD",
    "Fusion 360",
    "Solidworks Visualize",
    "Space Claim",
    "AutoCAD",
    "GD&T",
    "Rendering",
];

const labelsSecond = [
    "Ansys Mechanical",
    "Ansys CFX",
    "Ansys Icepack",
    "Ansys Fluent",
    "Solidworks Flow Simulation",
    "Ansys Explicit-Dynamics",
    "Modal Analysis"
];

const labelsThird = [
    "Chitubox",
    "Ultimaker Cura",
    "Tool Proficiency",
    "Production Technology",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <SiAutocad size={50}/>
                    <h3>CAD Design</h3>
                    <p>Solidworks Certified CSWA, I have built many plastic products and have simplified models for several FEA and FVM analysis and  have decent GD&T knowledge.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Mech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <SiAnsys size={50}/>
                    <h3>FEA and FVM Analysis</h3>
                    <p>Achieved 100% in the "Computational Analysis" section at Aerothon 2024. Experienced in solving thermal issues using Computational Fluid Dynamics (CFD) and working on turbulence models for airfoils in both subsonic and supersonic regimes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Mech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <TbHexagon3D size={50}/>
                    <h3>Prototyping</h3>
                    <p>Hands-on experience with prototyping and error identification using technologies like FDM, SLA, and MJF 3D printing. I have also reverse-engineered products from STL files and have a solid understanding of various manufacturing technologies, ensuring designs are optimized for production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Mech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;