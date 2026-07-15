import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class euler_angles extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Friendly Euler angles</h2>
                    <hr/>
                    <Grid>
                        <Cell col={4} phone={12}>
                        <img src={'/Meca500.jpg'} alt='The compact and versatile Mecademic Meca500 robot' width="90%" style={{'padding':'auto'}} className='inline-img'/> <br></br>
                        <em>The amazingly compact and versatile Meca500</em>
                        <img src={'/euler_angles.png'} alt='Wikipedia diagram illustrating Euler angles' width="90%" style={{'padding':'auto'}} className='inline-img'/>    
                        <em>Wikipedia diagram on Euler angles. Super clear and intuitive /s</em>  
                        </Cell>
                        <Cell col={8} phone={12} style={{textAlign:'top', margin: 'auto'}}>
                            <h4>Background</h4>
                            <p>One of the projects I undertook during my time at Apple was to try and improve the accuracy of some Mecademic Meca500 R3 robots.</p>
                            <p>During the course of improving the performance of some pick/place type test cells, I'd resolved most of the other "low hanging fruit" in the error stack which were mostly fixture design improvements.</p>
                            <br></br>
                            <p>This left 2 key things on the to-do list:</p>
                            <ol>
                                <li>Create a semi-automatic probe based calibration system to replace the pre-existing visual alignment process, for setting the positions of the co-ordinate frames used by the test cell.</li>
                                <br></br>
                                <li>Improve the calibration of the robot itself somewhere along the below scale:</li>
                                <ul>
                                    <li><b>Level 1</b> <p>Improved joint mastering, i.e. take real measurements to update joint homing offsets closer to real life vs. OEM nominal.</p></li>
                                    <li><b>Level 2</b> <p>Full kinematic calibration, i.e. joint lengths and other angular offsets as defined in the 4x4 transform matrix for each joint.</p></li>
                                    <li><b>Level 3</b> <p>Throw everything else we can think of into a dynamic model, i.e. joint deflection, backlash, temperature variation etc.</p>
                                    <p>This typically requires a 3rd party software like ROS or RoboDK as an interface to control the robot, as opposed to just updating controller parameters.</p>
                                    </li>
                                </ul>
                            </ol>
                            <p>To keep things brief I'll skip the discussing too deep around item 2, and focus on the key learning from accomplishing item 1:
                            <br></br>Specifically, what are Euler angles and how the heck does the math work behind the general solutions given.</p>
                            <h4>What?</h4>
                            <p>Euler angles are a set of 3 values, which can be used to define the angular orientation of a point in space. </p>
                            <p>To fully define a point in 3D space we require an XYZ value to determine the linear cartesian position, alongside a set of Euler angles to determine the angular orientation.</p>
                            <p><a href="https://www.mecademic.com/en/how-is-orientation-in-space-represented-with-euler-angles">This excellent article from Mecademic explains this concept further in great detail.</a></p>
                            <h4>Why?</h4>
                            <p>As the accuracy of a robot movement heavily depends on the accurate definition of the tool "tip" location and any key work area co-ordinates, attempting to set these values manually would be an extremely tedious process; hence the need for an automated tool to accomplish this.</p>
                          
                            </Cell>
                            <Cell col={12} style={{textAlign:'top', margin: 'auto'}}>
                         
                            <h4>How?</h4>
                            <p>So what I wanted to cover in this post (and will hopefully help anyone who stumbles on this via googling Euler angles for a Meca500), is how do we arrive at the general solution presented on that page? <br></br>I hope you enjoy the following refresher in trigonometric functions/identities :)</p>
                            <hr></hr>
                            <img src={'/meca_euler_1.PNG'} alt='Euler angle derivation, part 1' width="90%" style={{'padding':'auto'}} className='inline-img'/>
                            <hr></hr>
                            <img src={'/meca_euler_2.PNG'} alt='Euler angle derivation, part 2' width="90%" style={{'padding':'auto'}} className='inline-img'/>
                            <hr></hr>
                            <img src={'/meca_euler_3.PNG'} alt='Euler angle derivation, part 3' width="90%" style={{'padding':'auto'}} className='inline-img'/>
                            <hr></hr>
                            <img src={'/meca_euler_4.PNG'} alt='Euler angle derivation, part 4' width="80%" style={{'padding':'auto'}} className='inline-img'/>
                            <hr></hr>
                            <p>While I can't dive too much into the application I did specifically (most of it to do with re-creating the OEM web UI with pyQT to wrap the calibration functions), <a href="https://support.mecademic.com/support/solutions/articles/64000248048-how-do-i-calculate-the-wrf-using-a-3-point-method-">this article from Mecademic expresses the 2/3 of the core logic much more elegantly.</a></p>
                        </Cell>
                        <Cell col={12}>
                        <br></br>
                        <p><b>TLDR;</b> Calibrating 6-axis robots is a pain, but at least Euler angles are more intuitive than quaternions.</p>
                        <br></br>
                        <br></br>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default euler_angles;

