import React, { Component } from 'react';
import { Grid, Cell } from '../layout';
class PartUnloader extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>The Ultimate Back and Time Saver</h2>
                <hr></hr>
                <p style={{color:'red'}}><b><em>The below content is not intended to be a "review", and is likely out of date with respect to the latest versions/variants  .
                    <br></br>All commentary is focused solely on my own contributions and personal opinions.</em></b></p>
                <br></br>
                <p>One of the biggest bottlenecks in plasma cutting production is needing to pause the machine for the operator to unload the processed parts from the cutting table.</p>
                <p>The requirement brief when I designed this machine was to automate that aspect, and enable significant improvements to production planning by eliminating plasma cutting downtime.</p>
                <p>In simplistic terms - instead of humans climbing all over the cutting table and picking out parts, a motion platform with some really clever software and adjustable electromagnets do the job!</p>
                <br></br>
                <p>To breakdown the differences in operation procedure:</p>
                <Grid>
                    <Cell col={6} phone={12} style={{'background-color':'#F0EEEE', 'padding':'1.5em', 'padding-top':'0', 'padding-bottom':'0'}}>
                        <h4>Without</h4>
                        <ol>
                        <li>Plates to be processed are loaded onto the cutting bed via crane</li>
                        <li>Job is run and parts are cut</li>
                        <li>Cutting gantry is parked and E-stopped</li>
                        <li>Cut parts are picked out of the plate skeletons</li>
                        <li>Plate skeletons are removed, and process repeated from the step 1</li>
                        </ol>
                    </Cell>
                    <Cell col={6} phone={12} style={{'background-color':'#F0EEEE', 'padding':'1.5em', 'padding-top':'0', 'padding-bottom':'0'}}>
                        <h4>With Unloader</h4>
                        <ol>
                        <li>Plates to be processed are loaded onto the cutting bed via crane</li>
                        <li>Job is run and parts are cut on the first plate</li>
                        <li>Cutting gantry starts processing parts from the next plate, <b>while</b> unloader picks out cut parts from the finished plate and places them onto pallet stations</li>
                        <li>Cut plate skeleton is removed and a fresh new plate loaded via crane, <b>while</b> cutting gantry is uninterrupted</li>
                        <li>Repeat step 3-4 until consumables require changing</li>
                        </ol>
                    </Cell>
                </Grid>
                <p>
                    This project evolved dramatically from early stages to the built design. Early detailed concepts were more akin to a automated crane, but ultimately the design was completely redone to the nested frame design seen in the video below.
                    <br/>
                    The ultra-compact profile of the unloader is what allows it to pass underneath the main cutting gantry and fundamentally enables its un-interrupted processing capabilities.
                </p>
                <h3>Cool Features & Lessons Learned</h3>
                <hr></hr>
                <ul>
                    <li><b>Designed for a huge range of part sizes</b></li>
                    <p>For the unloader to operate effectively, it must be able to pickup >90% of parts.</p>
                    <p>To enable this, a range of magnet sizes and shapes are used, with controllable adjustable spacing on the most popular size </p>
                    <li><b>Telescoping mechanisms</b></li>
                    <p>The unloader's pick/place unit telescopes in order to have pickup coverage of the entire work area, while also able to extend into the palletizing zone.</p>
                    <p>A lot of time was spent looking into the mechanisms used in forklifts and compact cranes, but a unique hybrid solution was eventually developed specific to our application.</p>
                    <p>There's a host of cool design features that enable the compact yet powerful pickup unit</p>
                    <li><b>AGV on rails</b></li>
                    <p>To ensure the safety of operators who may wander into the palletizing zones (or even the cutting table), all sides of the unloader are covered by LiDAR.</p>
                    <p>This required the sensors to be housed on pneumatic arms in order to raise/lower as needed for appropriate coverage, as well as positive pressure enclosures designed to prevent dust accumulation on any sensor lens.</p>
                    <p>These systems were all tied together by some brilliant programming from the software team, dynamically adjusting zones and platform behaviour.</p>
                    <p>All in all, with all the dynamic logic and electro-mechanical safety systems added, at the end of the project it felt like we'd almost built an AGV on rails!</p>
                    <li><b>Electromagnets are magic when applied correctly</b></li>
                    <p>A significant effort was involved in learning about and sourcing electromagnets with the right mix of properties; shape, pickup force, temperature resistance etc.</p>
                    <p>In addition to the magnets themselves, they needed to be mounted with enough flex to accommodate natural plate deflection between each magnet due to gravity.</p>
                    <p>Without this flex system (which also needs to reset after each pickup), pickup payload is significantly reduced due to "peeling" effect.</p>
                </ul>
                <h3>Video</h3>
                <hr></hr>
                <iframe width="560" height="315" style={{'padding-bottom':'2em'}} src="https://www.youtube.com/embed/LIZbw8HBWYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default PartUnloader;