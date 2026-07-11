import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/main';
import { NavLink, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import CircleLoader from 'react-spinners/CircleLoader';

function App() {
    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            borderRadius: '25px',
            backgroundColor: '#787878',
            color: '#e8e8e8',
        },
        overlay: { zIndex: 1000 }
    };

    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1200);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll-reveal: re-observe on every route change
    useEffect(() => {
        setMenuOpen(false);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
        );

        const timer = setTimeout(() => {
            const selectors = [
                '.intro-box', '.project-box', '.blog-box',
                '.resume-grid',
                '.tab-content', '.blog-content',
                '.fancy-title-card', '.fancy-title-card2',
                '.password-gate-card',
                '.tabs-container',
                'h1.title', '.project-tabs h2', '.project-tabs > p',
                'hr.short1'
            ].join(', ');

            document.querySelectorAll(selectors).forEach(el => {
                if (!el.closest('.hero') && !el.closest('.resume-grid h1')) {
                    observer.observe(el);
                }
            });
        }, 60);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [location.pathname]);

    return (
        <div className="app">
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <NavLink to="/" end className="nav-brand">Ryllian Zhang</NavLink>
                <button
                    className={`nav-hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                    <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
                    <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                </div>
            </nav>

            {loading && (
                <div className="loader-container">
                    <CircleLoader color={'#fff'} size={100} />
                </div>
            )}

            <main className="page-content">
                <Main />
            </main>

            <footer className="app-footer">
                <span>Copyright &copy; Ryllian Zhang 2022</span>
                <a onClick={() => setIsOpen(true)}>Attributions</a>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    contentLabel="Attributions Modal"
                    style={modalStyle}
                >
                    <h3 style={{ color: '#e8e8e8' }}>Thanks &amp; credit to...</h3>
                    <div>
                        <li><a href="https://www.flaticon.com/free-icons/robot-arm" style={{ color: '#e8e8e8' }}>Robot arm icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/robot" style={{ color: '#e8e8e8' }}>Robot icons created by Eucalyp - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/cog" style={{ color: '#e8e8e8' }}>Cog icons created by Pause08 - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/python" style={{ color: '#e8e8e8' }}>Python icons created by Nadiinko - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/automation" style={{ color: '#e8e8e8' }}>Automation icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/microsoft" style={{ color: '#e8e8e8' }}>Microsoft icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/html" style={{ color: '#e8e8e8' }}>Html icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/css" style={{ color: '#e8e8e8' }}>Css icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/javascript" style={{ color: '#e8e8e8' }}>Javascript icons created by Smashicons - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/github" style={{ color: '#e8e8e8' }}>Github icons created by riajulislam - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/print" style={{ color: '#e8e8e8' }}>Print icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/diving" style={{ color: '#e8e8e8' }}>Diving icons created by istar_design_bureau - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/reading" style={{ color: '#e8e8e8' }}>Reading icons created by mangsaabguru - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/car" style={{ color: '#e8e8e8' }}>Car icons created by Smashicons - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/hiking" style={{ color: '#e8e8e8' }}>Hiking icons created by Smashicons - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/fishing" style={{ color: '#e8e8e8' }}>Fishing icons created by wanicon - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/game-controller" style={{ color: '#e8e8e8' }}>Game controller icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/c-sharp" style={{ color: '#e8e8e8' }}>C sharp icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/chaos" style={{ color: '#e8e8e8' }}>Chaos icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/repeat" style={{ color: '#e8e8e8' }}>Repeat icons created by Freepik - Flaticon</a></li>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
                        <b>Click anywhere to close</b>
                    </button>
                </Modal>
            </footer>
        </div>
    );
}

export default App;
