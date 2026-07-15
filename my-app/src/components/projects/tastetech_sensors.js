import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class taste_tech extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Divining produce properties with light and fancy math</h2>
                    <hr/>
                    <Grid>
                        <Cell col={3} phone={12} style={{textAlign: 'center'}}>
                        <img src={'/tastetech1.png'} alt="Tastetech 'T2' sensor units mounted on an apple sorting line" width="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        <figcaption><em>Tastetech 'T2' units on an apple sorting line</em></figcaption>
                        </Cell>
                        <Cell col={9} phone={12} style={{textAlign:'top', margin: 'auto'}}>
                            <p>My first real job graduating university was at Taste Technologies, a small startup offshoot of Compac Sorting Equipment which focused on sensor equipment related to characterising internal qualities of a piece of fruit/produce.</p>
                            <p>Being a startup of course meant I was responsible for a range of tasks, with free reign to innovate across the board.</p>
                            <br></br>
                            <p>To summarise as concisely as possible, I've broken down the 3 main product lines I contributed to below with some brief descriptions.</p>
                            <br></br>
                            <p><b>Please note, this page was written almost a decade after working on the projects in question. </b><br></br> Certain details may be a bit fuzzy due to NDAs - others due to just plain poor memory.</p>
                        </Cell>
                        <Cell col={12}><hr/></Cell>
                        <Cell col={2} phone={12} style={{textAlign: 'center'}}>
                        <img src={'/tastetech_t2.png'} alt="Diagram of how a 'T2' sensor unit works" width="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        <figcaption><em>ELI5 diagram of how a 'T2' unit works</em></figcaption>
                        <img src={'/tastetech_t1.png'} alt="Diagram of how a 'T1' sensor unit works" width="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        <figcaption><em>ELI5 diagram of how a 'T1' unit works</em></figcaption>
                        </Cell>
                        <Cell col={10} phone={12} style={{textAlign:'top', margin: 'auto'}}>
                            <h3>Product & Process Development</h3>
                            <p>To put it simply, for both units in production at the time (the T2 and T1) worked on the same core principles:</p>
                            <ol>
                                <li>Fruit/produce moves under the sensor unit (blue)</li>
                                <li>Bright halogen lights (yellow) shine on the fruit</li>
                                <li>Light reflects and refracts through the fruit and into a spectrometer sensor (red)</li>
                                <li>An FFT is run on the filtered frequency data captured, and statistical magic is applied</li>
                                <li>A simple score is returned - and fed into the host sorting machine as a quality metric for how to route the surveyed fruit/produce</li>
                            </ol>
                            <p>My role focused on driving progress in the below areas:</p>
                            <ul>
                                <li>Production process improvements, such as producing detailed assembly drawings enabling faster on-boarding of new technicians.</li>
                                <li>Field failure analysis and mechanical design improvements.</li>
                                <li>DFM improvements - reducing parts count and cost of core components.</li>
                                <li>Optimisation improvements, specifically in regards to solving heating/cooling/condensation challenges.</li>
                                <li>Matlab script optimisation (attempting to utilize more OpenCL/CUDA for faster model processing).</li>
                            </ul>
                        </Cell>
                        <Cell col={12}><hr/></Cell>
                        <Cell col={5} phone={12} style={{textAlign: 'center'}}>
                        <img src={'/tastetech_firmness.png'} alt='Diagram of how the non-contact firmness measurement prototype works' width="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        <figcaption><em>ELI5 diagram of how the firmness measurement prototype works</em></figcaption>
                        </Cell>
                        <Cell col={7} phone={12} style={{textAlign:'top', margin: 'auto'}}>
                            <h3>Prototyping & Experimentation</h3>
                            <p>There was a lot of cool cutting edge research I had the privilege of working on. What stands out though, was a prototype system which enabled non-contact measurement of firmness; loosely working by the following principles:</p>
                            <ol>
                                <li>Hit the fruit with an air blast (dramatically simplifying the work here)</li>
                                <li>Measure vibration response of the fruit using a vibrometer</li>
                                <li>Fancy math produces an estimated score of firmness</li>
                            </ol>
                            <p>My role in this was primarily the mechanical design involved in rigging/packaging of the system components, some labView "coding", and fabrication + field testing of the end results.</p>
                        </Cell>
                        <Cell col={12}><hr/></Cell>
                        <Cell col={5} phone={12} style={{textAlign: 'center'}}>
                        <img src={'/tastetech_oranges.jpg'} alt='Aftermath of running Sumo orange sensor trials in Bakersfield, CA' width="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        <figcaption><em>A wild night of running Sumo orange trials around Bakersfield, CA</em></figcaption>
                        </Cell>
                        <Cell col={7} phone={12} style={{textAlign:'top', margin: 'auto'}}>
                            <h3>Field Testing & Servicing</h3>
                            <p>A large part of my early responsibilities was travelling across various sites spread around California in a technical support role. This gave me both valuable experience in regards to mechanical improvements (feedback from operators), and better understanding the overall environments the products operate within.</p>
                            <br></br>
                            <p>A very notable experience was a last minute trial on one particular visit, which involved verifying the sensor data and statistical model on some oranges. The aftermath being the photo on the left.</p>
                            <br></br>
                            <p>Naturally I cleaned the scene thoroughly before I left - but a part of me did wonder what kind of list I'd get put on if I hadn't...</p>
                        </Cell>
                        <Cell col={12}><hr/></Cell>
                    </Grid>
                </div>
            )
        }
}

export default taste_tech;

