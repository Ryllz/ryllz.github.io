import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div style={{width:'100%', margin: 'auto'}} id="root">
                <Cell col={12}>
                    <img src={'/rzselfie.png'} alt='avatar' className='avatar-main'></img>
                </Cell>
                <br></br>
                <h1 className="title">Hardware Engineering Manager</h1>
                <hr class="short1"/>
                <div className='intro-box'>
                    <Grid className="skill-grid">
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto', height: '100%'}}>
                                <CardTitle style={{color: '#fff', height: '3.5em',
                                    background: 'radial-gradient(circle, rgba(67, 206, 162, 0.6) -200%, rgba(200, 80, 40, 0.8) 100%) center / cover'}}>
                                    Robotics</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>General mechatronics expertise with robotic systems and their auxiliary modules.</p>
                                </CardText>
                                <img src={'./industrial-robot.png'} alt='robot_logo' className='skill-ico'></img>
                            </Card>
                            </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto', height: '100%'}}>
                                <CardTitle style={{color: '#fff', height: '3.5em', 
                                background: 'radial-gradient(circle, rgba(67, 206, 162, 0.6) -200%, rgba(12, 60, 5, 0.7) 100%) center / cover'}}>
                                    Machinery Design</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Experienced in the design of mechanisms and precision CNC platforms.</p>
                                </CardText>
                                <img src={'./machinery.png'} alt='machinery_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto', height: '100%'}}>
                                <CardTitle style={{color: '#fff', height: '3.5em', 
                                background: 'radial-gradient(circle, rgba(67, 206, 162, 0.6) -200%, rgba(55, 59, 68, 0.9) 100%) center / cover'}}>
                                    Manufacturing</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Skilled in DFM, and leading projects in both production & test environments.</p>
                                </CardText>
                                <img src={'./cogwheel.png'} alt='cogwheel_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto', height: '100%'}}>
                                <CardTitle style={{color: '#fff', height: '3.5em', 
                                background: 'radial-gradient(circle, rgba(67, 206, 162, 0.6) -200%, rgba(24, 90, 157, 0.9) 100%) center / cover'}}>
                                    Process Automation</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Driving continuous improvement across both production and R&D domains.</p>
                                </CardText>
                                <img src={'./automation.png'} alt='automation_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            <br></br>
            <h1 className='title'>About Me</h1>
            <hr class="short1"/> 
            <div className='about-box'>
            <Grid className="about-grid">
                <Cell col={12} align='middle'>
                    <div className='aboutme'></div>
                    <p1> I'm an avid learner who pursued a career in engineering to satisfy my natural curiosity in how things work.
                    <br></br> Although my experience is primarily in the mechanical space, I pride myself in a diverse range of interests and hobbies which add to my problem solving toolkit.
                    </p1>
                    <br></br>
                    <p2><br></br>...for example, building this website to learn some basics in git and frontend/backend web development &#128516;</p2>
                </Cell>
            </Grid>
            </div>
            <br></br>
            <h1 className='title'>Personal Project Highlights</h1>
            <hr class="short1"/>
            <div className='project-box'>
                <Grid className='project-grid'>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '28em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/cnc_1.jpg) center / cover no-repeat'}}><h3 class='project-title'>CNC Wood Router</h3></CardTitle>
                        <CardText>
                            First chapter of my journey in designing CNC platforms
                        </CardText>
                        <CardActions border>
                        <Link to="/projects/cnc_wood_router"><Button colored>Details</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '28em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/ringbox_1.jpg) center / cover no-repeat'}}><h3 class='project-title'>Engagement Ring Box</h3></CardTitle>
                        <CardText>
                            A mix of CAD, CAM, CNC milling, laser cutting and 3D printing
                        </CardText>
                        <CardActions border>
                        <Link to="/projects/engagement_ring_box"><Button colored>Details</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '28em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/ebike_1.png) center / cover no-repeat'}}><h3 class='project-title'>Electric BMX Bike</h3></CardTitle>
                        <CardText>
                            Who needs suspension, brakes and more than 1 gear anyways?
                        </CardText>
                        <CardActions border>
                        <Link to="/projects/electric_bmx_bike"><Button colored>Details</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
            <br></br>
            <h1 className='title'>Blog Highlights (WIP)</h1>
            <hr class="short1"/>
            <div className='blog-box'>
                <Grid className='project-grid'>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '20em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/voice_of_fire.png) center / contain no-repeat'}}></CardTitle>
                        <CardText>
                            <h5 style={{'margin-top': 0}}>Impact of scale on design choices</h5>
                            How I come to terms on level of detail when getting too entrenched on a design
                        </CardText>
                        <CardActions border>
                        <Link to="/blog/design_scale"><Button colored>Read</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '20em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/right_repair.jpg) center / contain no-repeat'}}></CardTitle>
                        <CardText>
                            <h4 style={{'margin-top': 0}}>Right to repair</h4>
                            My thoughts for and against stricter right to repair laws
                        </CardText>
                        <CardActions border>
                        <Link to="/blog/right_to_repair"><Button colored>Read</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', 'min-height': '20em', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/mess-chaos.png) center / contain no-repeat'}}></CardTitle>
                        <CardText>
                            <h4 style={{'margin-top': 0}}>The elegance of a simple storyline</h4>
                            Rants on why so many beloved fictional franchises stumble
                        </CardText>
                        <CardActions border>
                        <Link to="/blog/storylines"><Button colored>Read</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <br></br>
                </Grid>
            </div>
            <ParticlesBg color="#778899" type="cobweb" bg={true}/>
        </div>
        )
    }
}
export default Home;