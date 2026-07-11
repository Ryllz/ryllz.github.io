import React, { Component } from 'react';
import { Grid, Cell } from '../layout';
import { Link } from 'react-router-dom';

class laser_turret extends Component {
        render() {
            return(
                <div className="tab-content">
                <h2>Making fun from scraps</h2>
                    <hr/>
                    <p>During peak lockdown (I forget which one at this point), I decided to overhaul my home security system.
                        <br></br>
                        After settling on some XiaoMi cameras due to price, the feature I found lacking most was a face/human figure tracker.
                    <br></br></p>
                    <p>It was a bit baffling that a motorized 360 degree camera didn't offer this feature - after all, what good is the coverage if an intruder can just walk off frame?<br></br>
                    Naturally I figured I'd try build my own camera turret and learn some more about machine vision in the process.
                    <br></br></p>
                    <br></br>
                    <p>The build consisted of the key components below:
                    </p>
                    <ul>
                        <li><b>Logitech C920 HD webcam</b></li>
                        <li><b>Salvaged aluminum flanged shaft</b></li>
                        <li><b>3D printed base and frame, designed while trying out some generative design features in Fusion360</b></li>
                        <li><b>Arduino Uno and gShield 3-axis controller </b></li>
                        <li><b>NEMA14 stepper motors leftover from a NEMA23 upgrade for my old <Link to="/projects/cnc_wood_router">CNC router</Link></b></li>
                    </ul>
                    <br></br>
                    <p>Note: Due to coming out of COVID lockdown and accidentally breaking some parts relocating my home office, this project is on hiatus for now :(</p>
                    <h2>Lessons Learned</h2>
                    <hr/>
                    <h4>Optimized image processing is HARD</h4>
                    <p>Initially I had planned this to run the image processing and machine control on one board if possible. 
                        Specifically something like a Raspberry Pi 4, driving some stepper motor drivers via the GPIO pins.</p>
                    <p>After much deliberation and playing around with Dlib vs. OpenCV using various options, I realised this wasn't realistic at the resolution I wanted to run the camera feed.</p>
                    <p>Another aspect was that actually rendering the camera preview with the object detection overlays, took a surprising amount of tweaking to optimise on MacOS.</p>
                    <p>Interestingly on a similar spec Windows PC, the same Python preview window code ran at substantially higher FPS without requiring tweaks.</p>
                    <h4>Overcoming choice paralysis</h4>
                    <p>
                    Setting out, I'd expected there to be a much more definitive knowledge base on what to use for this kind of project. A part of me was sure I'd stumble on a StackOverflow post that basically was a copy/paste job :)
                    </p>
                    <p>
                    However I found that there's so many options (both in hardware and software aspects), many times I found myself just blankly staring at yet another wiki page wondering if I should backtrack on an earlier decision. 
                    </p>
                    <h4>Understanding my own limits</h4>
                    <p>
                    I didn't feel that I learned/understood as much "under the hood" as I'd expected, as so much was nicely and neatly packaged up by OpenCV and Dlib.
                    </p>
                    <p>
                    Of course nothing stops me from diving as deep as I want - but the difficulty curve felt like a sheer cliff once the layers are peeled back.
                    </p>
                    <p>
                    I quickly realised this wasn't really a field I was particularly wanting (or even intellectually capable) to do a PhD in, which played a big part in placing this project on hiatus.
                    </p>
                    <h2>Build Photos</h2>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/gui_turret1.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Face recognition and tracking working using OpenCV, with basic control loop to keep face centered</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/laser_turret.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">The very crude tilt and pan arrangement, mounted on a selection of posts from the "scrapped shafts" bin</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        }
}

export default laser_turret;

