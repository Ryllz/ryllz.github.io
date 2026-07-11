import React, { Component } from 'react';

class DaisyWheelStamper extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>A rare case of university course content being applied</h2>
                <hr/>
                <p>This project was developed for a client who needed a more permanent marking system than typical inkjet and percussion systems.
                <br></br>
                <p>For me this project stands out (as given away by the title) because it was the first application of some obscure course content learned during University.</p>
                <p>I specifically recall learning about force calculations for deforming metals in stamping, struggling and thinking: <em>"this is useless, what kind of chump still designs custom stamps from first principles"</em>. <br></br>Yet here I was a couple years out...the chump designing stamps :')</p>
                <br></br>
                The primary requirements of the project was to stamp alphanumeric sequences into very hard grades of steel (with also a last minute request to try accommodate Inconel) and to do so in any horizontal orientation.
                <br></br>
                In terms of the stamp capacity, the exact count escapes me, but I believe it was north of 30 to accommodate the english alphabet plus numerals and some punctuation/symbols.
                </p>
                <br></br>
                <p>A significant amount of time was spent working with a stamp vendor on getting the correct letter typeface and font, in order to minimise the forces required. <br></br>
                The final design hinged on a lot of small machining details and component material grades/post-processing in order to achieve the desired specification without pre-mature stamp or tool failure due to the crazy stress concentrations involved.</p>
                <br></br>
                <p>
                Lastly, it's worth highlighting that I tackled this design relatively early on in my career, and it wouldn't have been possible without the guidance and concept assistance from the other brilliant engineers at Kinetic! 
                </p>

                <h3>Cool features & backstory</h3>
                <hr/>
                <ul>
                    <li><b>The driving force of the Z-axis (stamping direction) is capable of over 3,000kg.</b></li>
                    <p>This was verified when the entire 2,500kg was alarmingly lifted up off the floor during testing on a partially assembled test machine.</p>
                    <li><b>To keep the entire tool compact, the 2 rotation axis are driven through a concentric shaft arrangement.</b></li>
                    <p>Staggered servo motors are at the top of the tool assembly, to drive a respective set of staggered timing pulleys. <br></br>
                    The outer shaft provides rotation of the entire "fork" which houses the stamping wheel, while the inner shaft drives a bevel geared pinion shaft at 90 degrees - this being connected to the rotation of the stamping wheel itself via a final timing pulley (hidden under the red belt cover).</p>
                    <li><b>Compensating for the shaft system</b></li>
                    <p>From the point above, the mechanical design presents a problem - when turning the "fork" (changing the angle of letter placement), the bevel gear system means the wheel will also turn and end up selecting the wrong stamp!
                    Thus in order to counteract this, some clever software was written to compensate for this motion coupling interaction.</p>
                    <li><b>Bearing selection for high momentary static loads</b></li>
                    <p>Typically for such environments/applications I would use bushings with a lubrication system for all the rotary shaft supports. <br></br>
                    However, this tool had to index as fast as possible in order to stamp at the speeds required, so bearings were selected.<br></br>
                    Very very heavy duty roller bearings on the wheel, and combined needle/roller bearings for the fork.</p>
                    <li><b>"R" is one of the hardest letters to stamp clearly</b></li>
                    <p>During a design review meeting, I was jokingly hazed for populating the production CAD model wheel with all "R" stamps as an egotistic way of inserting my initials. <br></br>
                    ...but really it was mostly engineering reasons as it's one of the "worst case" stamps in terms of force requirement :)</p>
                    <li><b>Designed and built to last</b></li>
                    <p>Almost every component in the fork and wheel assembly was manufactured using 4340 steel with an intended safety factor >3.<br></br>
                    Due to the criticality of some of the assembly alignments we also couldn't risk corrosion in the case of dis-assembly/re-assembly for servicing, so all parts were nickel plated where possible.
                    <br></br>Overall it was a wickedly shiny and robust bit of kit!</p>
                    <li><b>Timing belt backlash compensation</b></li>
                    <p>Due to the drive mechanisms and forces involved, there was a ton of learnings in belt profile/width selection as well as backlash management solutions (both mechanical and software/controls).</p>
                </ul>
                <h3>Video</h3>
                <hr/>
                <iframe style={{'padding-bottom':'2em'}} width="560" height="315" src="https://www.youtube.com/embed/aby1Ti0bFpY" title="YouTube video player" frameborder="0" mute="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default DaisyWheelStamper;