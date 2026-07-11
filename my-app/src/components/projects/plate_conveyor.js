import React, { Component } from 'react';
import { Grid, Cell } from '../layout';
import { Link } from 'react-router-dom';
class PlateConveyor extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>Efficient Approaches to Safety Considerations</h2>
                <hr></hr>
                <Grid>
                    <Cell col={4} phone={12}>
                    <Cell col={12} style={{'text-align':'center', margin: 'auto'}}>
                    <img src={'/plate_conveyor1.JPG'} width="90%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                    </Cell>
                    <Cell col={12} style={{width:"80%", 'text-align':'center', margin: 'auto'}}>
                        <br></br>
                    <em>The conveyor was completely electrically disconnected and motor un-coupled when I took this picture for reference. <br></br>Yet my finger was still tingling when I took this picture...</em>
                    </Cell>
                    </Cell>
                    <Cell col={8} phone={12}>
                    <p>Operator safety is always a priority when designing heavy machinery involving frequent interactions.</p>
                    <p>One of the most interesting projects I'd tackled in terms of safety challenges was actually a relatively plain and simple conveyor for moving heavy cut plate parts.
                        This was due to the following perfect storm of use case and environmental constraints:
                    </p>
                    <ul>
                        <li><b>No control over part size and geometry</b></li>
                        <p>Since the parts being placed on the conveyor are fed from a <Link to="/projects/hydraulic_systems">K5600 plasma cutting machine</Link>, the combination of parts wildly varies from job to job.</p>
                        <p>This meant that the conveyor design needed to accommodate even the most troublesome parts (generally long snaggly strips).</p>
                        <li><b>No access restrictions possible</b></li>
                        <p>As the conveyor fed a parts bin/crate which needed emptying by an operator, it wasn't possible to fully fence off or physically bar access to the moving parts.</p>
                        <li><b>Limited reliance on administrative controls</b></li>
                        <p>Following from the above, it was impossible to fully remove the need for operator proximity to the machine.</p>
                        <p>Of course, the standard operating procedure (SOP) is to turn the machine off before reaching in - but people are people, and relying on that alone is asking for trouble.</p>
                        <li><b>No useful PPE controls to fall back on </b></li>
                        <p>Unfortunately due to the torque required to do it's job, the conveyor motor wouldn't hesitate to shred an appendage with or without even the sturdiest of safety gloves.</p>
                    </ul>

                    <Cell col={12}>
                    <p>So how did we overcome this challenge? By following the "Elimination > Substitution > Engineering Controls > Admin. Controls > PPE" hierarchy of controls:</p>
                    <br></br>
                    <p>First and foremost we <b>eliminated</b> any hazards we could via design; for example, the heeby-jeeby inducing picture to the left (on the in-feed side of the conveyor) in particular was safely guarded away under a brightly hazard striped cover to prevent any plausible hand insertion near that zone.</p>
                    <br></br>
                    <p>Next, we <b>substituted</b> any components which could cause a snag hazard, and any components which required servicing were substituted with the alternatives with longest interval options possible. 
                    For example, instead of using standard steel flat bar (which would cause even larger gaps that could entrap appendages) they were substituted with profile cut bars of flush fit size. Bearing support blocks were also substituted with versions where all grease points are facing outwards and away.
                    </p>
                    <br></br>
                    <p>Lastly, <b>engineering controls</b> were implemented in the form of guard rails + integrating an additional E-stop system (in addition to the standard perimeter pull-rope) within in the area the operator was most likely to be - the outfeed area.
                     We designed a "bonnet" style cover over the hazardous section with 2 E-stops integrated into it; a touch bar along the entry edge, and a switch monitored free-swinging flap at the "drop chute".
                    </p>
                    <br></br>
                    Of course, administrative controls and PPE were implemented too - but my personal experiences have bestowed upon me a healthy skepticism in relying on this in any capacity.
                    </Cell>
                    </Cell>
                </Grid>
                <h3>Lessons Learned</h3>
                <ul>
                    <li><strong>Implement early and thoroughly</strong></li>
                    <p>Always do the FMEA at the start, and not at the end. Clearly defining use cases and potential hazard outcomes helps not only in understanding the level of safety systems needed, but also gives time to mitigate in other ways.
                    For example, adjusting requirements or...
                    </p>
                    <li><strong>Better design vs. better protection</strong></li>
                    <p>Often times it's more efficient to spend time on designing a system that eliminates the need for dangerous maintenance/intervention, than to design safety systems to ensure safe intervention.</p>
                    <p>i.e. often times it's easier to engineer around the cause of a possible jam, than to make a foolproof way to allow operators to un-jam it.</p>
                    <li><strong>Consistent visual cues and operational models</strong></li>
                    <p>If control schemes (especially button layouts, naming and operation sequence) are consistent across an entire machine, this significantly reduces the likelihood of
                        an operator making a mistake. For example, if a machine has multiple control panels with a button that moves something "forward", this button should always be the same color + labelled clearly with respect to what "forward" looks like from that perspective + positioned in the same relative placement with other buttons.
                    </p>
                </ul>
                <h3>Video</h3>
                <p>See the conveyor in action below!</p>
                <em>Note: Certain safety elements are excluded this video for better process visibility, as this is a partial demo machine running examples in an enclosed area for a tradeshow.</em>
                <hr></hr>
                <iframe style={{'padding-bottom':'2em'}} width="560" height="315" src="https://www.youtube.com/embed/nOyjXuZbA7M?start=173" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default PlateConveyor;