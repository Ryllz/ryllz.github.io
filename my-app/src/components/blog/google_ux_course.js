import React, { Component } from 'react';

class google_ux_course extends Component {
        render() {
            return(
                <div>
                    <div className="fancy-title-card">          
                        <h1>Hello there</h1>
                        <h5>Welcome to my portfolio for the Coursera/Google UX design course!</h5>
                        <p>This ad-hoc blog page hosts the 3 case study slides required as part of the final assignment.</p>
                        <p>...I've always suspected I wasn't destined to be an artist, as these submissions will no doubt demonstrate &#128517;</p>
                    </div>
                    <div className="fancy-title-card2">          
                        <h2>Bedazzle</h2>
                        <p>This case study is for a webapp to provide a better shopping experience for bespoke jewelry; specifically with less cursive fonts and clear upfront pricing.</p>
                        <p>Not sure why I picked the name Bedazzle (my wife thinks it's disgustingly dorky for a hypothetically high end store) but nonetheless the double Z's spoke to me.</p>
                        <hr></hr>
                        <div className='resizeable-container2'>
                        <iframe src="/Google UX Course - Bedazzle Portfolio Project 1.pdf" title='Google UX Course — Bedazzle portfolio project' className="responsive-iframe"></iframe> 
                        </div>
                    </div>
                    <div className="fancy-title-card2">          
                        <h2>Sparks</h2>
                        <p>As a person with poor taste in interior design, this case study appealed to me as I've always felt "decorate my room" type collections are missing in most of the art studio pages.</p>
                        <p>Hopefully someone from Society6, Redbubble or similar platform sees this and executes on the idea :)</p>
                        <hr></hr>
                        <div className='resizeable-container2'>
                        <iframe src="/Google UX Course - Sparks Portfolio Project 2.pdf" title='Google UX Course — Sparks portfolio project' className="responsive-iframe"></iframe> 
                        </div>
                    </div>
                    <div className="fancy-title-card2">          
                        <h2>Empower</h2>
                        <p>The generated prompt for this one was "design a way to help tutor young adults in technical skills".</p>
                        <p>...so basically a blend of Wikihow/Coursera/Quora, but the intention being to fund via donations instead of paid subscriptions or ads.</p>
                        <hr></hr>
                        <div className='resizeable-container2'>
                        <iframe src="/Google UX Course - Empower Portfolio Project 3.pdf" title='Google UX Course — Empower portfolio project' className="responsive-iframe"></iframe> 
                        </div>
                    </div>
                    <div className="fancy-title-card2">          
                        <h2>...Closing comments</h2>
                        <p>My main motivation for taking this course was to learn the proper tools for quickly iterating and demonstrating user interfaces. I take pride in making the software tools I write as intuitive as possible, but I'd always hashed out interfaces in clunky WYSIWYG form editors that lacked real design features. Learning Figma and Adobe XD in a structured way means I can now spin up concepts substantially quicker.</p>
                        <br></br>
                        <p>I also enjoyed learning the science behind visual theme and typeface choices, which I'd previously picked by gut feel (and wasted a lot of time guessing at). And coming from an engineering background where slides are dense and detail-obsessed, it was a refreshing change to work with lighter visual templates and more subjective topics. (Please excuse any blatant copy/pasting across the case studies though, I rushed the deliverables a bit!)</p>
                        <br></br>
                        <h4>Thank you for viewing!</h4>
                    </div>
                </div>
            )
        }
}

export default google_ux_course;

