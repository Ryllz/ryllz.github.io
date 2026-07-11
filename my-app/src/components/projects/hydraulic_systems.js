import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PlateDragga extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>High Force Grippers & Lift Platforms</h2>
                <hr></hr>
                <p style={{color:'red'}}><b><em>The below content is not intended to be a "review" of the K5600 machines, and is likely out of date with respect to some features. 
                    <br></br>All commentary is focused solely on my own contributions and personal opinions.</em></b></p>
                <br></br>
                <p>Fundamentally, almost all CNC plasma cutting machines are some form of gantry + table design; <br></br>
                Fixed table for the raw plate to be loaded on, and a moving gantry which traverses the length of the table with tools to process the plate.
                <br></br>
                </p>  
                <p>
                The K5600 "Plate Dragga" flips this paradigm, so the gantry and cutting tools are fixed while the plate is fed (by separate motion platforms with grippers) over a variable-aperture cutting platform for processing. 
                <br></br>
                This provides a lot of benefits, but most significantly it reduces the job times for batches of small parts; 
                they can be cut and dropped onto a outfeed conveyor, as opposed to needing to be picked out by an operator. Scroll down to the video section for a visual explanation!
                </p>
                <br></br>
                <p>
                I was responsible for designing the hydraulic sub-systems that made this model possible, and it was one of the hardest solo responsibilities I undertook during my time at Kinetic.
                <br></br>
                This was because hydraulics were an all new addition for Kinetic at the time; we'd generally preferred using pneumatics for many reasons, so there was no tribal knowledge to fall back on.
                </p>
                <br></br>
                <p>Thus beyond the purely mechanical aspects (gripper system and tracks and <Link to="/projects/plate_conveyor">plate conveyor</Link>) the design scope included specifying the pump, oil cooler, accumulator, control valves, all the hosing types, couplings, fittings, cylinders and countless accessories.
                What really kicked stress levels up a notch was the severe safety implications; erratic piston velocities or a wrong coupling breaking had serious consequences.
                </p>
                <br></br>
                In the end our Kinetic engineering team pulled together and we produced an awesome new machine category though!
                <br></br>
                The sections below are just some design notes and general comments on some of the unique/integral features of the machine.

                <h3 style={{'background-color':'#A9A9A9', padding:'0.2em'}}>Lift platform hydraulics</h3>
                <p>During post-processing operations such as drilling or stamping, up to a few tons of load can be applied to just one side of the cutting platform.</p>
                <p>As the cutting platform is held up by a cylinder on each side, this uneven loading obviously isn't favourable for producing accurate results.</p>
                <p>Before getting into this project, I vastly under-appreciated the system complexity required in heavy machinery just to lift a platform evenly...</p>
                <img src={'/cylinder_synch.png'} width="50%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                <p>To prevent the cutting platform on the K5600 machine from dropping even a fraction of a mm on either side, we implemented both hydraulic and mechanical means of synchronizing cylinder motion.</p>
                <p>On the hydraulics end we used a dual vane pump style flow divider, and for the mechanical aspect it was a extremely rigid cross-shaft rack/pinion system that spans across the table.</p>

                <h3 style={{'background-color':'#A9A9A9', padding:'0.2em'}}>Gripper system design</h3>
                <p>
                The early machines featured a primary feed robot with 2 to 3 grippers, alongside 1 or 2 independent side gripper carriages to assist.
                <br></br>
                The operator would load a plate against the datum points built into the gripper back-stops, and the grippers would then engage and move the plate back/forth as needed through the main cutting platform.
                <br></br>
                Essentially, the plate would be moved by a combination of these gripper "robots" to provide the necessary motion to cut in the X axis, whilst the fixed gantry had processing tools attached that traversed in Y + Z axis.
                </p>
                <h4>Some neat features in the designs of these grippers:</h4>
                <p>
                <li><b>The rear grippers can all individually retract</b></li>
                Required to dynamically ungrip and position away to allow clearance for bevelled cutting processes (and also significantly reduce wastage as parts can thus be cut right up to the edge of the processed plate).
                <br></br>
                For serviceability each gripper can also be removed from the front in a cartridge-like bolt-on assembly.
                <li><b>The side grippers freely pivot</b></li>
                This additional axis of rotational up/down movement is to allow easier grip/un-grip of the processed plate as it's cut.
                <li><b>Gripper geometry and force multiplication</b></li>
                To keep the grippers low profile and still able to apply a consistent clamping force across a large range of plate thickness, a pivoting "jaw" style design was used as opposed to a more direct and traditional pancake cylinder.
                This design provides for higher perpendicular clamping force component at larger openings (i.e. thicker, heavier plates) and lower perpendicular force component with smaller openings (thinner plates).
                <li><b>Hydraulic hose routing</b></li>
                Underneath the steel skin of the rear gripper assembly, is a series of hydraulic hose loops, UHMWPE guides/supports and valve mounts.
                <br></br>
                The bend radii of the hose, as well as the fitting clearances and motion allowance, required a huge amount of attention to detail to package successfully into such a tight form factor.
                </p>

                <h3 style={{'background-color':'#A9A9A9', padding:'0.2em'}}>Cool Features + Lessons Learned</h3>
                <p>
                <h4>Brass lined cutting chamber</h4>
                <p>Plasma cutting is messy - especially the initial "pierce" as the plasma torch penetrates the plate to begin cutting. 
                <br></br>
                There's a fume extraction system and slag/dross bin trolley in the cutting platform to deal with the majority of the by-product, but splatter coating the entire inside of the cutting aperture/chamber was a real concern.
                <br></br>
                To address this, the entire chamber is lined with a replaceable set of folded brass sheet lining; providing a relatively non-stick surface.
                <br></br>
                Looking inside this chamber while a plasma cut is initiated is an awesome sight to see - bursts of golden light and stream of fireworks:
                <img src={'/k5600_cut1.png'} width="50%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                </p>
                <h4>Always always check the center of mass</h4>
                One of my responsiblities towards the conclusion of a project is to provide the container layout schematics on how to pack an entire disassembled machine into 40ft/20ft shipping containers.
                <br></br>
                For this machine, due to the gantry leg/column design being shortened we found it was very determined to tip over left un-bolted to the floor (due to all the front-heavy tooling axis).
                <br></br>
                There was numerous measures put in to address the safety aspect (shipping braces, custom lifting frame, placards/stickers indicating critical bolts etc.) - but nonetheless it was a major learning moment for me that I should've anticipated this during the concept design stage.
                <h4>Hardened steel exterior wear plates</h4>
                The top surface of the platform is covered in hardened steel plate, which features a range of chamfer features to allow smooth plate movement over the platform.
                <br></br>
                This was all milled on the <Link to="/projects/M100_cam">enormous 3+2 axis in-house M100 mill</Link> and despite something which may look simple, required a huge amount of CAM program tweaks and fixturing to manufacture reliably.
                Mostly this was due to the hardness of the plate, coupled with the relative low thickness, plus the chamfers being exceptionally shallow. 
                <br></br>
                It was the perfect recipe for extreme tool wear and vibrations, so reliably hitting the high standards seen in the final platform was a major achievement.
                </p>
                <h3 style={{'background-color':'#A9A9A9', padding:'0.2em'}}>Video</h3>
                <iframe style={{'padding-bottom':'2em'}} width="560" muted="true" height="315" src="https://www.youtube.com/embed/nOyjXuZbA7M?start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default PlateDragga;