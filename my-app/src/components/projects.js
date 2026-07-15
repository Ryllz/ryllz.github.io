import { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <div className="project-tabs">
                <h2 className="section-title">Personal Projects</h2>
                <p style={{textAlign:'center'}}><em>Small bits and pieces that have added to my engineering experience</em></p>
                <div className='project-box'>
                    <div className='grid-row project-grid'>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/garage_opener2.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>RF Key Repeater</h3>
                                </div>
                                <div className="card-text">PCB design is a far cheaper hobby than cars and bikes...so far</div>
                                <div className="card-actions">
                                    <Link to="/projects/"><button className="btn btn-primary">TBC</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/ringbox_1.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Engagement Ring Box</h3>
                                </div>
                                <div className="card-text">A mix of design, CAM + CNC milling, laser cutting and 3D printing</div>
                                <div className="card-actions">
                                    <Link to="/projects/engagement_ring_box"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/ebike_1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Electric BMX Bike</h3>
                                </div>
                                <div className="card-text">Who needs suspension, brakes and gears anyways?</div>
                                <div className="card-actions">
                                    <Link to="/projects/electric_bmx_bike"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/this_page.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>This Website</h3>
                                </div>
                                <div className="card-text">Getting more familiar with web oriented programming languages</div>
                                <div className="card-actions">
                                    <Link to="/projects/this_page"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/bottle_design1.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Mead Brewing</h3>
                                </div>
                                <div className="card-text">The flavours of process control, repeatability and reproducibility</div>
                                <div className="card-actions">
                                    <Link to="/projects/mead_brewing"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/infinity_mirror1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Disco Infinity Mirror</h3>
                                </div>
                                <div className="card-text">...and other LED + Arduino projects</div>
                                <div className="card-actions">
                                    <Link to="/projects/infinity_mirror"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/laser_turret.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Webcam/Laser Turret</h3>
                                </div>
                                <div className="card-text">Pew pew pew with OpenCV</div>
                                <div className="card-actions">
                                    <Link to="/projects/laser_turret"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/cnc_1.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>CNC Wood Router</h3>
                                </div>
                                <div className="card-text">Baby steps on my journey in designing CNC platforms</div>
                                <div className="card-actions">
                                    <Link to="/projects/cnc_wood_router"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h2 className="section-title">Professional Projects</h2>
                <p style={{textAlign:'center'}}><em>...or at least, the few not covered by NDAs</em></p>
                <div className='project-box'>
                    <div className='grid-row project-grid'>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/meca500_cover.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>6-Axis Robot Calibration</h3>
                                </div>
                                <div className="card-text">GUI driven Python calibration tool for reference frame calibration and manipulation using Euler angles</div>
                                <div className="card-actions">
                                    <Link to="/projects/euler_angles"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/daisy_stamper1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Roller Stamper</h3>
                                </div>
                                <div className="card-text">Material hardness, and learnings in high force timing belt applications</div>
                                <div className="card-actions">
                                    <Link to="/projects/daisywheel_stamper"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/hydraulic_systems.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Hydraulic System Design</h3>
                                </div>
                                <div className="card-text">The familiarity of pneumatics, but much less forgiving</div>
                                <div className="card-actions">
                                    <Link to="/projects/hydraulic_systems"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/plate_conveyor1.JPG) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Designing for Safety</h3>
                                </div>
                                <div className="card-text">Ensuring operator safety of heavy plate conveyors</div>
                                <div className="card-actions">
                                    <Link to="/projects/plate_conveyor"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/m100_cover.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Workshop-scale Milling</h3>
                                </div>
                                <div className="card-text">High stakes CAM programming on a 13.3m x 2.7m x 1.8m CNC mill</div>
                                <div className="card-actions">
                                    <Link to="/projects/M100_cam"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/unloader_cover1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Steel Plate Unloading Robot</h3>
                                </div>
                                <div className="card-text">Industrial AGV-style platform for picking and palletizing plasma cut steel parts with 5 axis of motion</div>
                                <div className="card-actions">
                                    <Link to="/projects/part_unloader"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/tastetech1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Optical Spectrum Analysis Modules</h3>
                                </div>
                                <div className="card-text">Add-on sensor equipment for agricultural produce sorting machinery</div>
                                <div className="card-actions">
                                    <Link to="/projects/tastetech_sensors"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/solidworks_csharp.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>C++/C# SolidWorks Tools</h3>
                                </div>
                                <div className="card-text">Apps and add-ons built in C#/C++ to streamline processes and reduce technical debt, using SolidWorks/PDMWorks APIs</div>
                                <div className="card-actions">
                                    <Link to="/projects/csharp_solidworks"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Projects;
