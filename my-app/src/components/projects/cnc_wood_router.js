import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class cnc_wood_router extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Baby steps in CNC machine design</h2>
                    <hr/>
                    <p>I built this CNC mill during university, having gotten interested in CAM processes during my final year project. 
                        It began as a simple Shapeoko build, but quickly grew into something almost 10x the original footprint size. From my somewhat rusty recollection, the build consisted of the below key components:
                    </p>
                    <ul>
                        <li><b>Arduino Uno + gShield, later upgraded to a TinyG board.</b></li>
                        <li><b>V-wheel guide system and GT timing belt.</b></li>
                        <li><b>2.5kW air cooled ER11 collet 10k RPM spindle</b></li>
                    </ul>
                    <h3>Lessons Learned</h3>
                    <hr/>
                    <ul>
                    <li><b>Acoustic noise & dust</b></li>
                        Cutting MDF (the most common material I used on this machine) irritated the hell out of my family.<br></br>
                        If I were building this again I would definitely invest in a water cooled spindle, with an enclosure and proper dust extraction. <br></br>
                        At the time, I had an old vacuum cleaner hooked up to a dust cyclone firmly taped to an old protein tub.
                    <li><b>Electrical noise</b></li>
                        Weeks were spent trying to figure out why there was a huge amount of noise causing problems with the controller (limit switches triggering randomly as well as erratic motion).
                        <br></br>In my efforts to fix this, I changed high frequency line to the spindle with some very heavy duty shielded cable; and stuck ferrites, grounding straps and EMI filters everywhere.<br></br>
                        ...In the end it turned out my garage at the time just didn't have the ground wired properly.
                    <li><b>DFM</b></li>
                        I designed a lot of parts that were beyond my hobbyist capabilities to machine/weld. There was a lot of messy grinding and touch up paint.
                    <li><b>Big picture cost/benefit analysis</b></li>
                        A big mistake during the design of the frame was attempting to cut cost by using very lightweight extrusion (shipping cost to NZ is hellishly expensive). <br></br>
                        However, this ended up costing more (in materials and time) to rectify with steel bracing profiles and angle supports.
                    </ul>
                    <h3>Build Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{height: '30vh', background: 'url(/vfd_wiring_1.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">The VFD in the process of figuring out setup and wiring (AliExpress instructions weren't great)</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{height: '30vh', background: 'url(/frame_setup_1.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Extrusion frame with mild steel angle braces</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_base_setup.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">All components wired for testing, MDF base boards being mounted</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_z.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Z-axis, assembled from AliExpress roller/rail/ballscrew and welded scrap angles</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_firstcut.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">First engraving job, so much dust...</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_sidepanel.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Side panels for a archery bow case - deep cuts got a bit smoky from rubbing</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_endresults.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Wedding gift portrait engraving, ~0.7x1.0m in size</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image" id="photo-card">
                                <div className="gallery-card-photo" style={{background: 'url(/cnc_me.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Me fresh out of university, assembling the control box; can almost smell the leather jacket and deodorant through the photo...</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        }
}

export default cnc_wood_router;

