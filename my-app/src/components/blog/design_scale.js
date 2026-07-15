import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class DesignScale extends Component {
        render() {
            return(
                <div className="tab-content" style={{width:'60%'}}>
                    <h2>Size matters</h2>
                    <hr/>
                    <Grid>
                        <Cell col={12} >
                            <p>Working over a wide range of scale (from hand-sized to warehouse-sized), I often lose a sense of what certain details will look like in real life.</p>
                            <p>The industrial designer within me has always needed to maintain a certain level of aesthetic appeal, but it's often easy to over-complicate designs in this pursuit.</p>
                            <br></br>
                            <p>This could be things such as tweaking the bend configuration of an exterior sheetmetal cover - does 2x 45 degree bends look better than 1x 90 degree to justify the cost?</p>
                            <br></br>
                            <p>Or for mechanism designs where endless tweaks can be made to the geometry of weight saving cutouts - should I use a hex grid? circle? truss?</p>
                            <br></br>
                            <p>The thought behind this post was to capture a pair of photos which helped me with perspective in these kind of situations.</p>
                            <p>Specifically, a reminder to focus on details that provide the most impact and be mindful of the size and scale of the design.</p>
                            <br></br>
                            <hr/>
                        </Cell>
                        <Cell col={6} phone={12} style={{textAlign:'center', margin: 'auto'}}>
                            <h4>This is an artwork called Voice of Fire by Barnett Newman. It resides at the National Gallery of Canada and is worth an estimated $40 million.</h4>
                            <br></br>
                            <p>Taking a look at it from your device screen, it's likely unremarkable - and probably seems to be an outrageously bad value proposition.</p>
                            <br></br>
                            <p>For the price tag one would typically expect intricate details and masterful painting techniques, yet it boils down to 2 colors and 3 lines.</p>
                        </Cell>
                        <Cell col={6} phone={12}>
                            <img src={'voice_of_fire.png'} alt='Voice of Fire painting by Barnett Newman as it appears on a small screen' width="95%" height="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                        </Cell>
                        <Cell col={12} phone={12} style={{textAlign:'center', margin: 'auto'}}>
                            <hr/>
                            <h4>When taking into perspective the size of the piece though, it becomes pretty clear why it 'works' and resonates with people.</h4>
                            <p>Namely the focus on getting the colours right and really leveraging the simplicity and size of the piece to create impact.</p>
                            <br></br>
                            <p>I won't say that I'd personally pay $40million for this piece - but nonetheless it has always popped into my mind when I find myself over-thinking the minutiae of a design.</p>
                        </Cell>
                        <Cell col={12} phone={12}>
                            <img src={'voice_of_fire2.jpg'} alt='Voice of Fire painting shown at scale with a viewer for size reference' width="95%" height="90%" style={{verticalAlign:'middle'}} className='inline-img'/>
                            <figcaption><em>Source - National Gallery of Canada</em></figcaption>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        }
}

export default DesignScale;

