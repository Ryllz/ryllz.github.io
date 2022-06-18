
import React, { Component } from 'react';

class this_page extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h1>Full stack dev, but not really</h1>

                    <p>I've dabbled before in graphical design and HTML/CSS, but I've always wanted to learn more about what's behind the scenes. </p>
                    <p>A lot of automation projects I was involved in at Apple, also started involved integration with internal web services - so I took the leap and did a IBM Full Stack Cloud Development course.
                    </p>
                    <br></br>
                    <p>Why did I choose an IBM course? The content seemed like a good mix of stuff I was already semi-familiar with and new topics, which is always a comfortable learning environment.</p>
                    <p>Admittedly, I also park my car in an IBM building and all the IBM branded signage everywhere must've worked their subliminal magic...</p>
                    <br></br>
                    <p>Despite finishing the course, I still wouldn't qualify myself as a full stack dev. <br></br>
                        This is due to a mixture of narrow scope covered in the course, shallow depth of content, and of course also a good dose of imposter syndrome :')</p>

                    <h2>Lessons Learned</h2>
                    <ul>
                    <li><strong>Interoperability is a nightmare</strong></li>
                    <p>Making sure all design elements are supported by common browsers (and resize correctly), is something that I think most people take for granted when visitng websites.
                    The sheer effort required to create a seamless experience across mobile + tablet + desktop browser(s) is staggering. 
                    For the most part I implemented some flex grids and called it a day :)</p>
                    <li><strong>The cascade in CSS is real</strong></li>
                    The ability to hone in and tweak a specific sub-element is really neat, while the "superset" default nature of CSS really makes changing themes site wide a breeze.
                    Finally perfecting a CSS palette and rolling it out across all pages with a click, is a joyful experience.
                    <li><strong>It's turtles all the way down</strong></li>
                    One of the most frustrating things when trying to really understand why something doesn't work, is chasing the bug through layers and layers of abstraction.
                    My experience with debugging C# and Python apps, which both had very robust tools for stepping through code and figuring out why X input gives Y results.
                    However, with React.js and HTML/CSS, often times weird behaviour is significantly more difficult to understand and fix.
                    <li><strong>Readability and commenting across languages </strong></li>
                    I found commenting in JS/HTML/CSS a pain.
                    The flow just isn't the same, as my habitual commenting in Python and C# felt more effortless (the // and # markers are incredibly easy to write in line).
                    Probably just me not being familiar with VSCode (and laziness).
                    <li><strong>Nested curly brackets, ugh</strong></li>
                    Sometimes a line of code will have just a soup of />)} characters and it honestly makes me want to cry when debugging.
                    Nesting data objects within data objects within an inline function also just looks plain wrong a lot of times.
                    </ul>

                    <h2>Thoughts on the IBM Course</h2>
                    <ul>
                    <li><strong>Listed as suitable for a beginners course</strong></li>
                    I personally would've struggled without prior programming experience (and a smart SWE brother I could bug for nitty gritty questions!).
                    <li><strong>Too much reliance on copy/pasting, not enough deep technical explanations</strong></li>
                    A lot of the guided online labs were "do X when Y, as we showed you" as opposed to "X is used when Y, because of Z".
                    <li><strong>Cheating was rife - when going on the Q&A forums, I saw a LOT of people requesting shady quid-pro-quo peer marking arrangements. The IBM team didn't seem to care about this.</strong></li>
                    Of course as with all online courses, cheating is inevitable (the exam work handed in is hosted on public github repos), but seeing it brazenly happen in the official Q&A forum without moderators stepping in was baffling.
                    </ul>

                    <h2>Fancy Certificate</h2>
                    <em><b>Note</b> - I did this course before they were 100% finished, and there's since been an extra quiz and seperate Git section added.
                        Hopefully future me will get around to updating this certificate...
                    </em>
                    <div class='resizeable-container'>
                        <iframe src="/Coursera YQDRP53VVFA6.pdf" class="responsive-iframe"></iframe> 
                    </div>
                    <br></br>
                </div>
            )
        }
}

export default this_page;





