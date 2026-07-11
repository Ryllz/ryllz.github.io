import React, { Component } from 'react';
import { Grid, Cell, Card } from '../layout';

class storylines extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>What makes a good story?</h2>
                    <hr/>
                    <p>I think it really boils down to a simple requirement:</p>
                    <br></br>
                    <p><em>A good story shall start with a captivating promise, and needs to fulfil that promise to arrive at a satisfying pay-off.</em></p>
                    <br></br>
                    <p>It feels like much of modern media content has strayed from this template for "surprise" twists and cliffhanger endings to try keep consumers hooked.</p>
                    <p>The motivation behind this seeming to be driven by the need to squeeze every penny out of an IP, and padding the bottom line with sequels and spin-offs.</p>
                    <br></br>
                    <p>To give some more concrete examples of poorly executed plotlines, I'd like to continue this rambling post by pointing to 2 examples to back up my complaints:</p>
                    <ul>
                        <li><b>A Song of Ice and Fire (both TV and book series)</b></li>
                        <li><b>Kingdom Hearts</b></li>
                    </ul>
                    <hr/>
                    <Grid>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <h3>A Song of Ice and Fire (AKA Game of Thrones)</h3>
                            <b>Where to even begin with this...</b>
                            <p>I was a huge fan of George RR Martin before he was cool; I read all his works (even the weird vampire one) and Game of Thrones defined books for me in my mid-teens.</p>
                            <p>I'd never read a series before with such momentum chapter after chapter. Notably, my young self at the time also didn't know books could have sex scenes (let alone so many of them).</p>
                            <br></br>
                            <b>Fast forward ~10 years</b>
                            <p>I'm in University and Dance with Dragons has just come out. The TV series has also just started, but I don't care as I'm a loyalist to the book.</p>
                            <p>I spent a week frantically reading it and came away puzzled and disappointed...did I outgrow the series, or was this sequel just bad?</p>
                            <p>After chatting with others about it, I realised it was mostly the latter. The pacing had slowed dramatically and the number of plot threads had reached absurd levels; needing a wiki to keep track of all the new characters being introduced.</p>
                            <br></br>
                            <b>Fast forward to 2021</b>
                            <p>Winds of Winter is still "coming soon" after half decade of hyping how close it is to release.</p>
                            <p>The TV show has also concluded a few years prior, and I'd sadly caved and watched it all to find out how the series ends. It was heartbreakingly bad.</p>
                            <br></br>
                        </Cell>
                        <Cell col={4} phone={12} style={{'text-align':'top', margin: 'auto'}}>
                            <img src={'/got_timeline.png'} width="95%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <Cell col={8} phone={12} style={{'text-align':'top', margin: 'auto'}}>
                            <b>Why does this bother me so much?</b>
                            <p>The series just had so much potential, and my disappointment stems from an overwhelming sense of pity when thinking about <em>what could have been.</em></p>
                            <br></br>
                            <p>All the fantastic mysteries and intrigue promised in the first few books, just fizzled out in a moist mess of a finale.</p>
                            <br></br>
                            <p>What's worse is that some people still recommend the books and TV shows as "the first few seasons are epic".</p>
                            <p>I find this akin to being recommended turd burger, and being told to just eat around the turd patty because the buns are amazing.</p> 
                            <p>No thanks.</p>
                        </Cell>
                    </Grid>
                    <h3>Kingdom Hearts</h3>
                    <p>The first game in this series was an absolute brilliant collaboration between Square Enix and Disney, appealing to a huge audience and nailing a plot centered on friendship.</p>
                    <p>The story starts on the aptly named Destiny Islands, and the prologue crafts a touching scene of childhood friendship (and foreshadowed love triangle) between 3 main characters who are then catastrophically separated.</p>
                    <p>Going through the game, the main plot thread is to reunite the trio - exploring the themes of self sacrifice and friendship along the way. After adventuring through numerous Disney themed sets, everything culminates in a bittersweet cliffhanger ending where the heroes are separated yet again.</p>
                    <Grid>
                        <Cell col={7} style={{'text-align':'top', margin: 'auto'}}>
                            <img src={'/kh_timeline.jpg'} width="95%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <Cell col={5} style={{'text-align':'top', margin: 'auto'}}>
                            <b>Fast forward to 2021</b>
                            <p>I've totally lost track of the number of sequels, which have been spread across every platform possible to milk money out of the series' fans.</p>
                            <p>Multi-hour long Youtube lectures can be found aplenty to explain the unrecognizable spaghetti ball of a plot.</p>
                            <br></br>
                            <p>Time travel is now a big thing, as is cloning, weird behind-the-scenes illuminati groups and sub-groups, along with plenty of deus ex machina. The cast has also ballooned to the point where even "main" characters had the depth of a puddle.</p>
                            <br></br>

                        </Cell>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                        <br></br>
                        <b>Why do I care so much?</b>
                            <p>This was a series that could've grown with the fanbase and defined JRPGs + Disney characters for a generation.</p>
                            <p>The first game built a solid foundation on a promise of adventure, friendship and the triumph of good vs. evil in peoples' hearts.</p>
                            <p>Later games added levels and levels of rickety M.C. Escher apartments on top of this foundation - with Disney wallpaper raggedly plastered on for merchandising.</p>
                            <p>Overall I guess I'm just plain sad I'll never get a straightforward happy ending to satisfy my childhood nostalgia.</p>
                            <br></br>
                        </Cell>
                    </Grid>
                    <hr></hr>
                </div>
            )
        }
}

export default storylines;

