import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, Chip, Button } from './layout';
import ReactToPrint from "react-to-print";

const SectionHead = ({ icon, children }) => (
    <div className="resume-section-head">
        <span className="resume-section-icon"><span className="material-icons">{icon}</span></span>
        <h3 className="resume-section-title">{children}</h3>
    </div>
);

class Resume extends Component {
    render() {
        return(
            <div className="resume" id='root'>
                <Grid className="resume-grid">
                    <Cell col={4} tablet={12} phone={12}>
                        <img src={'/rzselfie2.png'} alt='so hireable' className='avatar-resume'/>
                        <div className="resume-intro">
                            <h1 className="title">Ryllian Zhang</h1>
                            <table className="center">
                                <tbody>
                                    <tr>
                                        <td className='center'>
                                            <a href="www.linkedin.com/in/ryllian-zhang"><img src={'/linkedin.png'} alt='LinkedIn' className='ico-resume-mini'/></a>
                                            <em>www.linkedin.com/in/ryllian-zhang</em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='center'>
                                            <a href="mailto: ryllianz@gmail.com"><img src={'/email.png'} alt='Email' className='ico-resume-mini'/></a>
                                            <em>ryllianz@gmail.com</em>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Card id='resume-entry'>
                            <SectionHead icon="school">Education</SectionHead>
                            <Grid style={{width: '100%'}}>
                                <Cell col={2} hidePhone={true} style={{margin: 'auto', textAlign: 'center', minWidth: '2em'}}>
                                    <img src={'/UoA_logo.png'} alt='University of Auckland' className='ico-resume'/>
                                </Cell>
                                <Cell col={10}>
                                    <h4 id='edu-heading'>Bachelor of Mechanical Engineering (Honours)</h4>
                                    <hr className='low-margin'/>
                                    <p><b className='sub-heading'>University of Auckland</b></p>
                                    <p><i>2010 - 2013</i></p>
                                </Cell>
                            </Grid>
                        </Card>
                        <Card id='resume-entry'>
                            <SectionHead icon="workspace_premium">Professional Certificates</SectionHead>
                            <CardText>
                                <ul className='cert-list'>
                                    <li><span className='cert-name'>Agile Project Management</span><span className='cert-issuer'>Google</span></li>
                                    <li><span className='cert-name'>UX Design</span><span className='cert-issuer'>Google</span></li>
                                    <li><span className='cert-name'>Full Stack Cloud Developer</span><span className='cert-issuer'>IBM</span></li>
                                    <li><span className='cert-name'>Data Analytics for Six Sigma</span><span className='cert-issuer'>University of Amsterdam</span></li>
                                    <li><span className='cert-name'>Inferential Statistics</span><span className='cert-issuer'>Duke University</span></li>
                                    <li><span className='cert-name'>Communicating with Competence and Confidence</span><span className='cert-issuer'>University of Auckland</span></li>
                                    <li><span className='cert-name'>Embedded Software and Hardware Architecture</span><span className='cert-issuer'>University of Colorado Boulder</span></li>
                                    <li><span className='cert-name'>Programming with JavaScript</span><span className='cert-issuer'>Meta</span></li>
                                </ul>
                            </CardText>
                        </Card>
                        <Card id='resume-entry'>
                            <SectionHead icon="construction">Technical Skills</SectionHead>
                            <CardText>
                                <table style={{width: '100%', paddingLeft: '1em', paddingRight: '1em'}}>
                                    <tbody>
                                        <tr><th>CAD</th></tr>
                                        <tr><td><Chip>SolidWorks</Chip><Chip>Siemens NX</Chip><Chip>AutoCAD LT</Chip><Chip>AutoCAD Electrical</Chip></td></tr>
                                        <tr><td><Chip>KiCAD</Chip></td></tr>
                                        <tr><td><hr className='low-margin'/></td></tr>
                                        <tr><th>CAM</th></tr>
                                        <tr><td><Chip>edgeCAM</Chip><Chip>NX CAM</Chip><Chip>Fusion360</Chip><Chip>MasterCAM</Chip></td></tr>
                                        <tr><td><hr className='low-margin'/></td></tr>
                                        <tr><th>Simulation (FEA)</th></tr>
                                        <tr><td><Chip>Ansys Workbench</Chip><Chip>Ansys Icepak</Chip></td></tr>
                                        <tr><td><hr className='low-margin'/></td></tr>
                                        <tr><th>Programming</th></tr>
                                        <tr><td><Chip>Python</Chip><Chip>C#</Chip><Chip>VBA</Chip><Chip>C++</Chip><Chip>MATLAB</Chip><Chip>NI LabView</Chip><Chip>HTML</Chip><Chip>CSS</Chip></td></tr>
                                        <tr><td><hr className='low-margin'/></td></tr>
                                        <tr><th>Productivity</th></tr>
                                        <tr><td><Chip>Confluence</Chip><Chip>Adobe Photoshop</Chip><Chip>GIMP</Chip><Chip>VS Code</Chip><Chip>PyCharm</Chip><Chip>Adobe XD</Chip><Chip>Figma</Chip></td></tr>
                                    </tbody>
                                </table>
                            </CardText>
                        </Card>
                        <Card id='resume-entry'>
                            <SectionHead icon="interests">Interests</SectionHead>
                            <Grid style={{width: '100%'}}>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/hiking.png'} alt='Hiking' className='ico-resume-interests'/></Cell>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/diving.png'} alt='Diving' className='ico-resume-interests'/></Cell>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/cars.png'} alt='Cars and engines in general!' className='ico-resume-interests'/></Cell>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/reading.png'} alt='Reading, mostly fiction' className='ico-resume-interests'/></Cell>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/fishing.png'} alt='Fishing' className='ico-resume-interests'/></Cell>
                                <Cell col={2} style={{margin: 'auto', width: 'auto'}}><img src={'/gaming.png'} alt='Gaming, especially in VR' className='ico-resume-interests'/></Cell>
                            </Grid>
                        </Card>
                    </Cell>
                    <Cell col={8}>
                        <Card id='resume-entry'>
                            <SectionHead icon="work">Experience</SectionHead>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/apple_logo.png'} alt='Apple' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Apple</h4>
                                                <p><b className='sub-heading'>Staff Engineer</b></p>
                                                <p><i>2025 - Current</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>...same focus on R&D automation, but with broader scope across the Sensing, Power and Haptics org :)</p>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/apple_logo.png'} alt='Apple' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Apple</h4>
                                                <p><b className='sub-heading'>Engineering Manager</b></p>
                                                <p><i>Aug 2022 - 2025</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Leading a small team of mechatronics, software engineers and lab managers to improve the R&D automation infrastructure across Powertech.</li>
                                    <li>Implementing new lab management processes (purchasing, equipment tracking, work requests, calibration schedules) across NZ and USA Powertech R&D labs.</li>
                                    <li>Responsible for roadmap planning of robotics automation and test fixtures across all Powertech product portfolios.</li>
                                    <li>Responsible for driving CapEx budgeting across Powertech - both infrastructure and lab instrumentation.</li>
                                    <li>Developed Gage R&R GUI tools in Python for post-processing and visualising coil design data collected across sites.</li>
                                    <li>Developed modular, standalone test stations for Vision Pro and iPhone touch team, enabling both hardware and software verification of key components/features on both programmes.</li>
                                </ul>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/apple_logo.png'} alt='Apple' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Apple</h4>
                                                <p><b className='sub-heading'>Senior Hardware Engineer</b></p>
                                                <p><i>Aug 2018 - 2022</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Leading automation projects for various teams across HWE/HWT groups, from initial design through to deployment.</li>
                                    <li>Development of a universal device fixture ecosystem used across Powertech & HID orgs, enabling significant UX improvements for both R&D and feature verification teams.</li>
                                    <li>Implementing Gage R&R processes and operator documentation required to unify data collection processes across regional sites.</li>
                                    <li>Developed end-to-end (from hardware & software to documentation/training) toolkits for 6-axis robot calibration co-ordinate frames.</li>
                                    <li>Management, continuous recruitment and improvement of a robotics and automation wiki/forum built on the Confluence platform.</li>
                                    <li>Responsible for on-going feature additions plus fixture updates for over 70+ automated data collection stations spread across sites in New Zealand, USA and China.</li>
                                </ul>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/kinetic_logo.png'} alt='Kinetic Engineering' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Kinetic Engineering</h4>
                                                <p><b className='sub-heading'>Mechanical Design Engineer</b></p>
                                                <p><i>Sep 2014 - Aug 2018</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Responsible for all CAM programming of standard and custom CNC milling machines.</li>
                                    <li>Responsible for the continuous improvement of CAM processes.</li>
                                    <li>Design of industrial CNC plasma cutting platforms, and post-processing modules and motion systems.</li>
                                    <li>Design of hydraulic and pneumatic sub-systems.</li>
                                    <li>Design of AGV for pick and placing/palletizing of processed parts up to 750kg.</li>
                                    <li>Automation of engineering admin processes using C#, especially with regards to end-user manual generation.</li>
                                    <li>Creation of CAD assistant plug-ins in C# for streamlining SolidWorks PDM and manufacturing drawing workflow management.</li>
                                </ul>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/compac_logo.png'} alt='Compac Sorting Equipment' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Compac Sorting Equipment</h4>
                                                <p><b className='sub-heading'>R&D Engineer</b></p>
                                                <p><i>Oct 2013 - Sep 2014</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Design of machined and sheetmetal parts for various sensor products.</li>
                                    <li>Driving production process improvements, yielding substantial quality and assembly cost improvements.</li>
                                    <li>On-site installation + commissioning of prototypes, including scientific data collection (using LabView "language") and post-processing (MATLAB).</li>
                                    <li>Continuous improvements to MATLAB scripts to decrease statistical model generation times.</li>
                                    <li>Documentation and continuous improvement of production assembly processes.</li>
                                </ul>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/scottphs_logo.png'} alt='Scott PHS' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Scott PHS</h4>
                                                <p><b className='sub-heading'>Junior Design Engineer</b></p>
                                                <p><i>Apr 2012 - Feb 2013</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Responsible for creating tools in C# and VBA which interface with SolidWorks 2012, to fully automate the BOM creation and review process.</li>
                                    <li>Creation of parts library management/cleanup C++ scripts to analyze component CAD data within model and assembly files.</li>
                                    <li>Creation of expression-driven part templates to dynamically generate common profiles for conveyor designs.</li>
                                    <li>Responsible for basic manufacturing drawings + assisting senior engineers in the design of depalletiser, conveyor and palletiser systems.</li>
                                </ul>
                            </CardText>
                            <hr className='low-margin'/>
                            <CardText id='resume-indent'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src={'/liongarage_logo.png'} alt='Lion Garage' className='ico-resume'/></td>
                                            <td>
                                                <h4 id='exp-heading'>Lion Garage</h4>
                                                <p><b className='sub-heading'>Assistant Mechanic</b></p>
                                                <p><i>Nov 2011 - Feb 2012</i></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    <li>Assisting with day to day customer service.</li>
                                    <li>Repair and assembly/disassembly of various petrol engines + transmissions, MIG welding, bodywork repair, and general labour tasks.</li>
                                </ul>
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>
                <br/>
                <style>{`
                    @media print {
                        .avatar-resume { width: 2cm; height: auto; margin: auto; border-radius: 15px; border: thin solid #a7a7a733; box-shadow: 0px 0px 10px -5px rgba(0,0,0,1); }
                        #edu-heading { margin: 0 !important; font-size: medium; font-weight: bolder; }
                        #cert-heading { margin: 0 !important; font-size: small; font-weight: bolder; }
                        #exp-heading { margin: 0 !important; line-height: 1.5em; font-size: large; font-weight: bolder; }
                        .ico-resume { width: 1cm; padding: 0.5em; margin-right: 0.5em; }
                        .print-banner { display: none; }
                        .ico-resume-mini { width: 0.5cm; margin: 0.2em; padding-right: 0.5em; }
                        .ico-resume-interests { max-width: 1cm !important; padding: 0.2cm; }
                        hr.low-margin { margin: 0.05cm; }
                        .resume-section-head { background: none !important; border-bottom: 1px solid #ccc; }
                        .resume-section-title, .resume-section-icon { color: #000 !important; }
                        a[href]:after { content: none !important; }
                    }
                `}</style>
            </div>
        );
    }
}

class PrintWrapper extends React.Component {
    render() {
        return (
            <div className='gradient-background'>
                <Resume ref={el => (this.componentRef = el)} />
                <ReactToPrint
                    trigger={() => <div className="print-banner"><img src={'/printer.png'} alt='Print' className='ico-print'/><Button>Print Me</Button></div>}
                    content={() => this.componentRef}
                />
            </div>
        );
    }
}

export default PrintWrapper;
