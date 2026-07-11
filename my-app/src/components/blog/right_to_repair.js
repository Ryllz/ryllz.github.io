import React, { Component } from 'react';
import { Grid, Cell} from '../layout';

class RightToRepair extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Mixed feelings</h2>
                    <hr/>
                    <p>Being an avid DIY enthusiast and an engineer, the right to repair movement has been really interesting to follow over the years.</p>
                    <p>I would describe myself as a big supporter but I can definitely see why it's such a battle - plus it also makes my job difficult...</p>
                    <hr/>
                    <Grid>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <h3>Why it's important to me</h3>
                            <ul>
                                <li>Charging insane markup on consumables and parts (to try and maximise profits on repairs) results in a lot of thrown away goods which could've lived longer.</li>
                                <li>Distribution exclusivity contracts are cancerous practice. It shouldn't be substantially cheaper to buy + ship parts internationally than from the official local supplier. *Cough* Looking at you VWAG and Yamaha.</li>
                                <li>Software lockouts and proprietary diagnostic tools are just a long-winded way of turning a one-off purchase into a lease or subscription.</li>
                                <li>Following from the above, it's a slippery slope until we don't really "own" anything anymore.</li>
                                <li>As someone who keeps things long term and cares about repair/service quality, it sucks being forced into paying someone else to do what's likely to be a worse job.</li>
                            </ul>
                            TL;DR - Environmentalism and independence.
                        </Cell>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <h3>Problems problems problems</h3>
                            <ul>
                                <li>It's almost impossible to predict all the whacky issues which can arise from botched DIY jobs; this is super bad when it's safety related.</li>
                                <li>Difficulty of repairs can be hard to convey. I'm sure every shade tree mechanic has been in the situation where a quick morning job turns into a weekend commitment :')</li>
                                <li>There can be co-existence issues between components which are calibrated out or otherwise accounted for, which can't reasonably be DIY'd.</li>
                                <li>Crappy repairs result in a crappy product perception. I've lost count of the number of friends who complain their iPhone sucks after repairing a screen or home button with a trashy eBay part.</li>
                                <li>Most people don't actually want to repair stuff, and the concessions in cost/form-factor/complexity to make something repairable is a PITA.</li>
                            </ul>
                            TL;DR - People suck, we want cheaper stuff. 
                        </Cell>
                    </Grid>
                  <br></br>
                  <br></br>
                </div>
            )
        }
}

export default RightToRepair;

