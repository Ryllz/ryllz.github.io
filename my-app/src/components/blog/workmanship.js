import React, { Component } from 'react';
import { Grid, Cell } from '../layout';

class Workmanship extends Component {
        render() {
            return(
                <div className="tab-content" style={{width:'70%'}}>
                    <h2>Doing it right</h2>
                    <hr/>
                    <Grid>
                        <Cell col={8} phone={12} style={{'text-align':'left', padding: '2.5em'}}>
                            <h4>I have a really love/hate relationship with DIY.</h4>
                            <br></br>
                            <p>Time is what I'm constantly short of - and ideally I would structure my DIY projects based on savings and enjoyment factor.</p>
                            <br></br>
                            <p>The unpleasant third contending factor is considering the likely quality of work I would receive if I were to pay someone else to do it. This bothers me greatly because the expectation should be to receive better-than-DIY quality if I pay a professional.</p>
                            <br></br>
                            <p>Yet it seems the trend is that most trades businesses will have a few actual professionals on hand, and rely on them to direct cheap general labourers and endless "trainees" to perform the work. 
                                All that cost cutting goes right into the pockets of the business owners. Having friends in the industry it's infuriating how underpaid they are.</p>
                            <br></br>
                            <p>This then creates a vicious cycle where the competent professionals leave to open their own business - as that's the only way to earn a fair living and make up for the years
                                of suppressed wages. It's then "their turn" at doing the same thing to their peers.</p>
                            <br></br>
                            <p>The kind of blasé businesses this creates particularly saddens me as a car enthusiast, as the low quality standard of the work in the mechanic industry is shocking. 
                                This is not just "cheap" places either - I've gone to places for repairs which charged 3x above the average quote, and still received shoddy work. Sealant in oil filters, under-torqued bolts, leaking pinched seals, broken clips etc.</p>
                            <br></br>
                            <p>Overall I think I'm writing this because I feel saddened that this is the state of the industry, and if/when I'm in either of the below positions I sincerely hope to be better.</p>
                            <ul>
                                <li>Crappy customers always demanding rock bottom prices, ignorant of the quality sacrifices and disrespectful of the skills required.</li>
                                <li>The business owners, exploiting and squeezing every penny out of their workers while complaining about attrition rates and laziness.</li>
                            </ul>
                            <p><b>P.S. - Check your brakes and wheels after getting work done! You'd be amazed at how many places mess up these simple yet critical jobs...</b></p>
                        </Cell>
                        <Cell col={4} phone={12}>
                            <img src={'/mechanic_needed.jpg'} width="100%" height="70%" style={{'horizontal-align':'right'}} class='inline-img'></img>
                            <figcaption><em>Replacing the front top shock mounts of my car - supposed to be an easy morning job, but ended up an entire day of cursing.
                                All because I have trust issues...</em></figcaption>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        }
}

export default Workmanship;

