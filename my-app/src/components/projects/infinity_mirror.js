import React, { Component } from 'react';

class infinity_mirror extends Component {
        render() {
            return(
                <div className="tab-content">
                <h2>Mirror mirror on the wall</h2>
                <hr/>
                    <p>Late in my early 20s I was fortunate enough to get my own living area, and quickly realised I didn't own a mirror.</p>
                    <p>Of course, buying a mirror would've been too easy - so I made an infinity mirror out of some reclaimed Kauri, one way mirror film and two glass sheets.</p>
                    <br/>
                    <p>While I built this, naturally to 'save' on shipping I also purchased a bunch of extra LED pixels from the same store.</p>
                    <p>So while I built the mirror I also made an ambient lighting setup for my dual monitor computer setup at the time: essentially a frame of LED pixels attached to the rear of the monitors, which changed color with respect to whatever was on the screen.</p>
                    <br></br>
                    <p>Unfortunately while the infinity mirror worked great, the ambient lighting setup was a bit of a disappointment:</p>
                    <ul>
                        <li>Windows 8 at the time kind of sucked with my particular setup, and there was numerous glitches when executing the screen sampling and LED control code written in <a href='https://www.arduino.cc/education/visualization-with-arduino-and-processing'>Processing</a>.</li>
                        <li>I'd assumed the sampling process would be somewhat transparent in terms of processor workload. I was very wrong about this no matter how much I tried to optimize.</li>
                        <li>When the screen sampling daemon worked great it would still take ~30% FPS hit on games. When it wasn't working, it would be triggering anti-cheat systems or crashing the GPU drivers.</li>
                        <li>Increasing performance by lowering the sampling rate or decreasing number of sampling zones around the screen border, just made the ambient lighting effect look laggy and distracting.</li>
                    </ul>
                    <p>I've yet to find any pictures of the "ambilight" setup I built, but a quick video of the infinity mirror can be seen at the bottom of this page!</p>
                    <h3>Lessons Learned</h3>
                    <hr/>
                    <ul>
                        <li><b>Wood is the absolute worst material to work with</b></li>
                        <p>Having worked with engineering plastics before, I thought I knew all about water absorption issues and internal stress relieving.
                            <br></br>Working with Kauri wood has taught me that I should be grateful for modern materials because I sure as heck could never build anything precise otherwise.
                            During the course of trying to make a simple grooved and bevelled frame, it was a close call between running out of money or running out of patience with all the drying/staining/sealing.
                        </p>
                        <li><b>Always check current draw when specifying power components</b></li>
                        <p>When I built the ambient lighting setup I thought I'd save cash by buying a cheap 5V DC-DC converter and just running the system off the 12V rail of my computer PSU.</p>
                        <p>This would've been a great idea - if I had noticed that the 60mA current draw was <b>per pixel</b> and not for the entire chain of ~40.</p>
                        <p>The end result of this mistake was a very gooey patch on the back of my monitor where I'd mounted the DC-DC board - and a lingering stench of burnt electronics and shame.</p>
                        <li><b>How to account for flex</b></li>
                        <p>
                        Tying in to the first point about wood being a PITA to work with, this project really taught me a lot about designing things with flex in mind.
                        <br></br>
                        Specifically dowel/fastener placement relative to flex direction, and the clearances needed for mating parts of different dimensional stability due to humidity/temp. 
                        </p>
                    </ul>
                    <h3>Build Video</h3>
                    <hr className='low-margin'></hr>
                    <video width="640" height="360" controls muted style={{paddingBottom:'2em'}}>
                        <source src='infinity_mirror.mp4' type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
        }
}

export default infinity_mirror;

