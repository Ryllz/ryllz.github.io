import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class electric_bmx_bike extends Component {
        render() {
            return(
                <div className="tab-content">
                    <figure><h2 className='quote-title'><em>&ldquo;Just because you can, doesn&rsquo;t mean you should&rdquo; </em></h2>
                    <figcaption>—Coworker, <cite>upon falling off immediately from a starting wheelie</cite></figcaption>
                    </figure>
                    <hr/>
                        <p>This project makes no sense from a performance perspective; I built it because I wanted a BMX bike that went really really fast, and it delivered on that end 100%.
                        <br></br>The build consisted of the following key components:</p>
                        <ul>
                        <li><b>Adaptto Mini-E controller and BMS (4kW nominal output)</b></li>
                        <li><b>4x 8Ah 4s1p LiPo packs (59.2V nominal, 67.2V max, 30C continuous/40C burst)</b></li>
                        <li><b>MXUS v3 3kW &ldquo;Turbo&rdquo; motor, 4T winding</b></li>
                        </ul>
                        <p>The really cool feature of the Adaptto controller is also the integrated charging feature, 
                            where the windings in the hub motor itself are used as part of the buck/boost circuit.
                            From calculations based on wheel size, motor winding turns and battery pack voltage, I was expecting a top speed of ~60km/h. In practice my courage topped out at 50km/h.</p>
                        <p>Thus the peak max speed at ~67V and max accelerations at 180A remains untested...&hellip;</p>
                    <h3>Future Improvements</h3>
                    <hr/>
                    <ul>
                        <li>The bike had rear v-brakes only, so while 50km/h was a smooth ~2.5s throttle blip away, slowing down was a much more dramatic ordeal.</li>
                        <li>Complete lack of suspension made it impractical when riding bumpy roads or hopping curbs are necessary. The hub motor was also HEAVY (I had over-spec'ed with plans to upgrade to a 12kW controller initially).</li>
                        <li>Torque arm design which is susceptible to fatigue failure, due to the cyclic loading of heavy acceleration and regen braking.</li>
                        <li>An enclosure for the battery/controller that's rated for some puddle smashing (IP64/5 or thereabouts), and more aesthetically pleasing (though the scrap copper sheet and recycled hose clamps do give it some character).</li>
                    </ul>
                    <h3>Lessons Learned</h3>
                    <hr/>
                        <ul>
                        <li><b>I massively overestimated my bike-riding capabilities when I set out to build this.</b><br></br>
                        In other words, always remember spec things to the lowest common denominator...
                        </li>
                        <li><b>Simple ideas are worth trying first.</b><br></br>
                        Due to the large hub motor size, I struggled to find a suitable rim given the desired spoke angle I'd calculated (based on normal spoke gauges). 
                        Poking around on Google, I'd initially found some other people using 0 degree spoke angles but with extra thick gauge spokes;
                        I quickly dismissed this as being too 'simple', plus it also felt wrong defying the spoke load calculation assumptions on all loads being purely tension). 
                        I then spent the longest time fussing around with custom rim designs, before caving in and giving this a go first - and it was a bittersweet experience when I found it worked great!</li>
                        <li><b>Always have a healthy distrust for component specifications.</b><br></br>
                        Specifically, cheap circuit breakers definitely have a lot of wiggle room with respect to their specified trip current curves.
                        </li>
                        <li><b>Tons of battery related things</b><br></br>
                        How to build packs from LiPo and Li-ion batteries, battery management systems, charging profiles etc.</li>
                        </ul>
                    <h3>Build Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_8.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">4kW worth of brakes baby!</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_7.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">400W server PSU for charging + chonky inductor add-on adapter</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_9.jpg) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Front charging port and 3D printed main support profile</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_5.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Battery pack with BMS strapped on-top, with foam inserts between each battery to prevent bumping</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_6.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Spaghetti wiring harness with C32 breaker (supposedly rated for 5-10x 32A for instantaneous trip)</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_3.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">HUD with twist throttle and regen thumb brake</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_4.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">MXUS 3k-Turbo, of course for "future-proofing" incase I ever got a 12kW controller</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_1.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Bike build in progress, heatshrinking in the living room</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div className="gallery-card-image">
                                <div className="gallery-card-photo" style={{background: 'url(/ebike_2.png) center / cover'}} >             
                                </div>
                                <div className="card-actions">
                                    <span className="card-image-caption">Completed prototype bike!</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <h3>System Diagram</h3>
                    <hr/>
                        <img src="/ebike_system_diagram.jpg" alt="Adaptto system diagram" width="100%" height="auto"/>
                    <p><i>Diagram courtesy of Adappto - http://adaptto.com/</i><br></br></p>
                </div>
            )
        }
}

export default electric_bmx_bike;

