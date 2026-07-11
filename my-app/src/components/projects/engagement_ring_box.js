import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class engagement_ring_box extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Crash course in DFM and form vs. function</h2>
                    <hr/>
                    <p>For this project I took a simple task (get a box for an engagement ring) and turned it into an engineering project. </p>
                     <p>Originally, I'd given myself a week to complete the design and build - unfortunately due to breaking some long-reach tooling I'd depended on, I had to re-design on the fly with what was available.</p>
                    <p>After drawing out the box exterior in record time, I figured why not challenge myself by adding an unnecessarily complicated mechanism which raises the ring on a platform as the lid is opened, for that extra wow factor.</p>
                    <p>A few things which I experimented with on this particular project was:</p>
                    <ol>
                    <strong><li>Altering machining path in CAM to create a subtle sunburst patterned surface finish (who said engineers are all about function?).</li></strong>
                    <strong><li>3D printing custom gear profiles.</li></strong>
                    <strong><li>Laser-cutting of exotic materials (Paua shell inlay panels).</li></strong>
                    </ol>
                    <p>The cosmetic "sunburst" milling paths worked surprisingly well. 
                        I started this project in Fusion360 as it was free for hobbyist use (not anymore though I think?). 
                        I was pleasantly surprised by the user friendliness of the CAM module; beating out edgeCAM, NX CAM, MasterCAM and CAMWorks for UX. 
                        While to achieve this it cuts a lot of advanced settings for surfacing and milling cycles, this is a good compromise in my opinion (as that a lot of it was clutter anyways for 1% edge case operations).</p>
                    <p>3D printing gear profiles on a resin jet printer was however a huge pain, for a few reasons:</p>
                    <ul>
                        <li>Unpredictable warpage from water absorption during the wash processes</li>
                        <li>When printing with a gloss finish, the "flashing" from the matte support areas messes with uniformity of the gear profile.</li>
                        <li>When printing with a matte finish, the surface roughness causes pre-mature wear on the gear contact points, leading to sloppiness in the engagement.</li>
                    </ul>
                    <p>I've since built a halogen light rig to address both the water absorption issue by giving a more thorough and even cure than leaving it on bench.
                    As for the other pain points - possible I could've worked around it by changing print orientation and splitting some complex parts, but resin amount limitations prevented experimenting with this.</p>
                    <p>Overall I was happy with the exterior aesthetics but the interior surfaces and mechanisms left plenty of room for improvement:</p>
                    <ul>
                        <li><span>The lid needed to be made super light otherwise the key/lock mechanism would jam, but this ended up in the underside looking very &ldquo;space-age&rdquo; which I wasn&rsquo;t happy with.</span></li>
                        <li><span>The mechanism itself doesn&rsquo;t run particularly smoothly due to flex in the 3D printed parts (esp. the linkages). But as pointed out to me by a coworker at the time: &ldquo;it only needs to open well once&rdquo;.</span></li>
                    </ul>
                    <h3>Equipment Used</h3>
                    <hr/>
                    <li><strong>Datron Neo 3-Axis CNC mill</strong></li>
                    <li><strong>Trotec Speedy400 laser cutter</strong></li>
                    <li><strong>Stratasys Objet24 resin jet 3D printer</strong></li>
                    <h3>Lessons Learned</h3>
                    <hr/>
                    <ul>
                        <li><strong>Coolant type is critical.</strong></li>
                        <p>Different coolant strategies for material types, as well as trade-offs in cut finish and rubbing marks.</p>
                        <li><strong>Milling techniques for ultra small parts.</strong></li>
                        <p>Lots of double sided tape and conservative cutting strategies. Pneumatic vice setup on the Datron Neo used for this project were also amazingly handy.</p>
                        <li><strong>3D printing tolerances and the importance of post-processing.</strong></li>
                        <p>...and the design tweaks required to get around them.</p>
                    </ul>
                    <h3>Build Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/ringbox_2.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Lid opened with ring platform raised</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/ringbox_1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Lid closed, raised edge on opening side</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/ringbox_4.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Test fit with a keychain ring</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/ringbox_3.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Billet aluminum frame, with "ejection" holes for the wooden inlay panels for serviceability</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/ringbox_5.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">The secret sauce inside - POM guide plates for the raise/open mechanism, geared cross-shaft, and aluminum lid supports</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default engagement_ring_box;

