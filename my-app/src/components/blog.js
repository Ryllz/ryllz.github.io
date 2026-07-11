import { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            verifiedPw: false
        };
        this.checkPw = this.checkPw.bind(this);
    }

    checkPw() {
        const answer = document.getElementById("password").value;
        if (answer === "hi123") {
            this.setState({ verifiedPw: true });
        } else {
            alert("Nope!\n\n...if you really must see my terrible blog writing skills, poke around the dev console to get around :)");
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="blog-content">
                    <div className="grid-row">
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/mess-chaos.png) center / contain no-repeat'}}></div>
                                <div className="card-text">
                                    <h4 style={{marginTop: 0}}>The elegance of a simple storyline</h4>
                                    Rants about my ex-favourite fictional franchises
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/storylines"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/repeat.png) center / contain no-repeat'}}></div>
                                <div className="card-text">
                                    <h4 style={{marginTop: 0}}>The rat race</h4>
                                    Thoughts on attaining material goals
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/rat_race"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.activeTab === 1) {
            return (
                <div className="blog-content">
                    <div className="grid-row">
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/voice_of_fire.png) center / cover no-repeat'}}></div>
                                <div className="card-text">
                                    <h5 style={{marginTop: 0}}>Impact of scale on design choices</h5>
                                    A neat reminder on how to approach level of detail on form related design features
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/design_scale"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/right_repair.jpg) center / contain no-repeat'}}></div>
                                <div className="card-text">
                                    <h4 style={{marginTop: 0}}>Right to repair</h4>
                                    My thoughts for and against right to repair laws
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/right_to_repair"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/mechanic_needed.jpg) center / cover no-repeat'}}></div>
                                <div className="card-text">
                                    <h4 style={{marginTop: 0}}>The decline in pride of workmanship</h4>
                                    Frustrations around finding good mechanics
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/workmanship"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 align-middle">
                            <div className="card" style={{width: '100%', minHeight: '25em', margin: 'auto'}}>
                                <div className="card-title project-title-pic" style={{height: '8em', color: '#fff', background: 'url(/google_coursera.jpg) center / cover no-repeat'}}></div>
                                <div className="card-text">
                                    <h4 style={{marginTop: 0}}>Google UX design course</h4>
                                    My submitted portfolio and thoughts on the course content
                                </div>
                                <div className="card-actions">
                                    <Link to="/blog/google_ux_course"><button className="btn btn-primary">Read</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    tabPage() {
        return (
            <div className="category-tabs">
                <div className="tabs-container">
                    <div className="tabs-nav">
                        <button
                            className={`tab-btn${this.state.activeTab === 0 ? ' active' : ''}`}
                            onClick={() => this.setState({ activeTab: 0 })}
                        >2021</button>
                        <button
                            className={`tab-btn${this.state.activeTab === 1 ? ' active' : ''}`}
                            onClick={() => this.setState({ activeTab: 1 })}
                        >2022</button>
                    </div>
                </div>
                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.state.verifiedPw ? this.tabPage() : (
                    <div className="password-gate">
                        <div className="password-gate-card">
                            <span className="material-icons password-gate-icon">lock</span>
                            <h2>Hello there</h2>
                            <p>Find the password?</p>
                            <form onSubmit={this.checkPw} className="password-gate-form">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="password-input"
                                    autoComplete="off"
                                />
                                <button type="submit" className="btn btn-primary">Enter</button>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Blog;
