import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h1>test</h1>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="tab-content">
                <div>
                <h1 className='quote-title'><em>&ldquo;Just because you can, doesn&rsquo;t mean you should&rdquo; </em></h1>
                </div>
                <div>
                <div>This project makes no sense from a performance perspective - I built it because I wanted a BMX bike that went really really fast, and it delivered on that end in spades.&nbsp;</div>
                <br></br>
                <div>The build consisted of the following key components:</div>
                <ul>
                <li>Adaptto Mini-E controller and BMS (4kW nominal output)</li>
                <li>4x 8Ah 4s1p LiPo packs (59.2V nominal, 67.2V max, 30C continuous/40C burst)</li>
                <li>MXUS v3 3kW &ldquo;Turbo&rdquo; motor, 4T winding</li>
                </ul>
                <div>The really cool feature of the Adaptto controller is also the integrated charging feature, where the windings in the hub motor itself are used as part of the buck/boost circuit.</div>
                <br></br>
                <h2>Highlights</h2>
                <div>From calculations based on wheel size, motor winding turns and battery pack voltage, I was expecting a top speed of ~60km/h. In practice my courage topped out at 50km/h.</div>
                <br></br>
                <div>Thus the peak current output capability of 180A was never tested, which is a shame&hellip;</div>
                <h2>Downsides</h2>
                <ul>
                <li>The bike had rear v-brakes only, so while 50km/h was a smooth ~2.5s throttle blip away, slowing down was a much more dramatic ordeal.</li>
                <li>Complete lack of suspension made it impractical when riding bumpy roads or hopping curbs are necessary. The hub motor was also HEAVY (I had over-spec'ed with plans to upgrade to a 12kW controller initially).</li>
                <li>Torque arm design which is susceptible to fatigue failure, due to the cyclic loading of heavy acceleration and regen braking.</li>
                </ul>
                <h2>Lessons Learned</h2>
                <ul>
                <li>I massively overestimated my bike-riding capabilities when I set out to build this.</li>
                <li>Straight spokes somehow work?? Defies load calculations (even assuming a few degrees deflection, it shouldn&rsquo;t work for the forces involved - but yet it does).</li>
                <li>Circuit breaker ratings can be very finicky to choose.</li>
                <li>Tons of battery related things (how to build packs from various battery types, battery management systems, charging profiles etc.).&nbsp;</li>
                </ul>
                <h2>Build Photos</h2>
                <h2>System Diagram</h2>
                <p>&nbsp;</p>
                </div>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>test2</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h1>test2</h1></div>
            )
        }        
    }

    render() {
        return(
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>CNC Wood Router</Tab>
                    <Tab>Electric BMX Bike</Tab>
                    <Tab>Engagement Ring Box</Tab>
                    <Tab>Electric Foil Board</Tab>
                </Tabs>
                <section className="project-section">
                {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;

