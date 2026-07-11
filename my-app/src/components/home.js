import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div id="root">
                <section className="hero">
                    <div className="hero-inner">
                        <div className="hero-photo">
                            <img src={'/rzselfie.png'} alt='Ryllian Zhang' className='avatar-main' />
                        </div>
                        <div className="hero-text">
                            <h1 className="hero-name">Ryllian Zhang</h1>
                            <p className="hero-role">Hardware Engineering Manager</p>
                            <div className="hero-bio">
                                <p>I'm an avid learner who pursued a career in engineering to satisfy my natural curiosity about how things work. Although my experience is primarily in the mechanical space, I pride myself in a diverse range of interests and hobbies which add to my problem solving toolkit.</p>
                                <p>...for example, building this website to learn some basics about git and frontend/backend web development &#128516;</p>
                                <p><b>Update 2026:</b> now spiced up with LLM magic! &#10024;</p>
                            </div>
                            <div className="hero-ctas">
                                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                                <Link to="/resume" className="btn btn-outline">Resume</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="title" style={{paddingTop: '1em'}}>Areas of Expertise</h1>
                <hr className="short1"/>
                <div className='intro-box'>
                    <div className="grid-row skill-grid">
                        <div className="col-3">
                            <div className="skill-card">
                                <div className="skill-chip">
                                    <img src={'./industrial-robot.png'} alt='robot_logo'/>
                                </div>
                                <div className="skill-body">
                                    <h3 className="skill-name">Robotics</h3>
                                    <p>General mechatronics expertise with robotic systems and their auxiliary modules.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill-card">
                                <div className="skill-chip">
                                    <img src={'./machinery.png'} alt='machinery_logo'/>
                                </div>
                                <div className="skill-body">
                                    <h3 className="skill-name">Machinery Design</h3>
                                    <p>Experienced in the design of mechanisms and precision CNC platforms.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill-card">
                                <div className="skill-chip">
                                    <img src={'./cogwheel.png'} alt='cogwheel_logo'/>
                                </div>
                                <div className="skill-body">
                                    <h3 className="skill-name">Manufacturing</h3>
                                    <p>Skilled in DFM, and leading projects in both production & test environments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill-card">
                                <div className="skill-chip">
                                    <img src={'./automation.png'} alt='automation_logo'/>
                                </div>
                                <div className="skill-body">
                                    <h3 className="skill-name">Process Automation</h3>
                                    <p>Driving continuous improvement across both production and R&D domains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <h1 className='title'>Personal Project Highlights</h1>
                <hr className="short1"/>
                <div className='project-box'>
                    <div className='grid-row project-grid'>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '28em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/cnc_1.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>CNC Wood Router</h3>
                                </div>
                                <div className="card-text">The first janky platform I cobbled together during university</div>
                                <div className="card-actions">
                                    <Link to="/projects/cnc_wood_router"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '28em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/ringbox_1.jpg) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Engagement Ring Box</h3>
                                </div>
                                <div className="card-text">A mix of CAD, CAM, CNC milling, laser cutting and 3D printing</div>
                                <div className="card-actions">
                                    <Link to="/projects/engagement_ring_box"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '28em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/ebike_1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Electric BMX Bike</h3>
                                </div>
                                <div className="card-text">Who needs suspension, brakes and more than 1 gear anyways?</div>
                                <div className="card-actions">
                                    <Link to="/projects/electric_bmx_bike"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <h1 className='title'>Professional Project Highlights</h1>
                <hr className="short1"/>
                <div className='blog-box'>
                    <div className='grid-row project-grid'>
                        <div className="col-4">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/meca500_cover.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>6-Axis Robot Calibration</h3>
                                </div>
                                <div className="card-text">GUI driven Python calibration tool for reference frame calibration/manipulation using Euler angles</div>
                                <div className="card-actions">
                                    <Link to="/projects/euler_angles"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
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
                        <div className="col-4">
                            <div className="card" style={{width: '100%', height: '100%', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '20em', color: '#fff', background: 'url(/unloader_cover1.png) center / cover no-repeat'}}>
                                    <h3 className='project-title'>Steel Plate Unloading Robot</h3>
                                </div>
                                <div className="card-text">Industrial AGV-like multi-axis platform for picking and palletizing plasma cut steel parts</div>
                                <div className="card-actions">
                                    <Link to="/projects/part_unloader"><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
