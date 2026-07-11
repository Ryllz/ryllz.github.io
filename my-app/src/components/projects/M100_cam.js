import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class M100CAM extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>Turtles all the way down</h2>
                <hr></hr>
                <Grid>
                    <Cell col={4} phone={12}>
                    <img src={'/m100_cover2.png'} width="95%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                    </Cell>
                    <Cell col={8} phone={12}>
                    <p>How do you make the parts for precision CNC machines that can span dozens of meters? With an even bigger CNC milling machine of course!</p>
                    <br></br>
                    <p>One of my main responsibilities at Kinetic in addition to mechanical design, was looking after the CNC manufacturing of all our machines.</p>
                    <p>This was a comprehensive task that involved a continuous improvement in a variety of aspects:</p>
                    <ul>
                        <li>CAM process templates and milling strategies in edgeCAM + trials with alternate solutions (MasterCAM)</li>
                        <li>Post-processor improvements and bug fixing (or workarounds! i.e. edgeCAM had some fundamental limits in milling parts beyond 9999mm which required some creative co-ordinate shuffling to manage)</li>
                        <li>Tooling library population and improvements...so so many extension holders and special boring tools</li>
                        <li>Fixture standardisation across common parts/assemblies</li>
                        <li>Process improvements - standardised run sheets, tooling reviews, setup reviews and operator training</li>
                    </ul>
                    </Cell>
                </Grid>
                <h3>Lessons Learned</h3>
                <ul>
                    <li><strong>Double, triple check drilling depths</strong></li>
                    <p>During my entire time as the sole CAM person, the most common mistakes always occur during drilling.</p>
                    <p>Despite the simplicity of the generated drill paths, the speed/feed and depth are by far the most critical and yet easy to get wrong (esp. as drilling & tapping paths are overlaid). Likewise drilling into a misplaced weld or baffle is a constant concern.</p>
                    <li><strong>When in doubt, ask the experts</strong></li>
                    <p>When I first started in this role I was confident that I could figure everything out from the technical sheets and calculators, and spent an extraordinary amount of time populating tool library data which was promptly discarded.</p>
                    <p>I quickly discovered it was far more efficient to rely more on feedback from the operator and the application engineers at Kennametal (our primary tooling supplier).</p>
                    <li><strong>Be kind and mindful of the operator</strong></li>
                    <p>
                    One of the keys to my smooth running of manufacturing processes, was keeping a good relationship with the CNC operators.
                    </p>
                    <p>
                    First and foremost was building a foundation of respect for each others roles in the process; this means taking responsibility for mistakes and also going that extra mile to make each others jobs easier.
                    </p>
                    <p>
                    For example: when I programmed for the M100, I always ensured that tool-changes were executed at comfortable heights and positions for the operator. 
                    Similarly, the operator would often help make my job easier by working clamps and fixturing around to suit my program for tricky parts.
                    </p>
                    <li><strong>Be clever with reducing and re-using tools/inserts</strong></li>
                    <p>
                    Due to the size of the parts/assemblies machined on the M100, it wasn't uncommon to wear out a set of tooling by the end of a job.
                    </p>
                    <p>
                    By optimizing the order of CAM operations, we reduced the per-job cost of tooling by almost 50%. Specifically, programming (and designing parts) in a way such that once a finishing cutter is dulled it can be re-used immediately as a roughing cutter in the next operation.     
                    </p>
                    <p>
                    Also, figuring out that conventional instead of climb milling is a LOT less punishing on tools when it comes to milling any steel parts with hardened edges (i.e. due to welding or plasma profile cutting).   
                    </p>
                    <li><strong>3D surfacing tools takes a lot of processing power</strong></li>
                    <p>
                    My typical approach when tackling a part with complex features, is to try different settings and quickly iterate on the generated toolpath.
                    <br></br>
                    Unfortunately this strategy doesn't work so well when the feature requires an hour to update the generated path when a setting is changed.
                    <br></br>
                    This was a major challenge during the milling paths I worked on for large foil moulds for the company owner's carbon fibre racing catamaran, which we addressed by batching the heaviest toolpath regenerations to run overnight rather than iterating on them live.
                    </p>
                </ul>
                <h3>Video</h3>
                <iframe style={{'padding-bottom':'2em'}} width="560" height="315" src="https://www.youtube.com/embed/ZMSxkgCGnX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default M100CAM;