import { Component } from 'react';
import { Grid, Cell, Card, CardActions } from './layout';

class Contact extends Component {
    render() {
        return (
            <div className='resume'>
                <Grid className='resume-grid'>
                    <Cell col={4}>
                        <img src={'/me_contact.jpg'} alt='hire me :)' className='avatar-contact'/>
                        <div className='contact-fade2'>
                            <h1 className="title">Say hello!</h1>
                            <table className="center">
                                <tbody>
                                    <tr>
                                        <td className='center'>
                                            <a href="www.linkedin.com/in/ryllian-zhang"><img src={'/linkedin.png'} alt='LinkedIn' className='ico-resume-mini'/></a>
                                            <em>www.linkedin.com/in/ryllian-zhang</em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='center'>
                                            <a href="mailto: ryllianz@gmail.com"><img src={'/email.png'} alt='Email' className='ico-resume-mini'/></a>
                                            <em>ryllianz@gmail.com</em>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Cell>
                    <Cell col={8} className='contact-fade'>
                        <Card style={{width: '100%', height: '100%', minHeight: '35vh', maxHeight: '672px', background: 'url(/location.jpg) center / cover'}}>
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>Currently around...</span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={12} className='contact-fade'>
                        <Card style={{width: '100%', height: '60vh', maxHeight: '1300px', background: 'url(/rangitoto_sunrise.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: 'auto'}}>
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>...probably here to be specific :)</span>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
