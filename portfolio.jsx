import React, { useEffect } from 'react'
import './Portfolio.css'
function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
      },);
        // Scroll-based animations
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        

        function handleScroll() {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (isElementInViewport(section)) {
                    section.idList.add('visible');
                }
            });

            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.idList.add('scrolled');
            } else {
                header.idList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
    
  return (
    <>
         <section id="hero">
            <div id="container">
                <h1>Adhi Kesavan</h1>
                <p>Web Developer & Designer</p>
            </div>
        </section>

        <section id="about">
            <div id="container">
                <h2>About Me</h2>
                <div id="about-content">
                    <div id="about-image">
                        <img src="/placeholder.svg?height=300&width=300" alt="John Doe"/>
                    </div>
                    <div id="about-text">
                        <p>Hello! I'm John Doe, a passionate web developer with 5 years of experience in creating responsive and user-friendly websites. I specialize in front-end development and have a keen eye for design. My goal is to build web applications that not only look great but also provide an excellent user experience.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills">
            <div id="container">
                <h2>Skills</h2>
                <div id="skills-list">
                    <div id="skill-item">HTML5</div>
                    <div id="skill-item">CSS3</div>
                    <div id="skill-item">JavaScript</div>
                    <div id="skill-item">React</div>
                    <div id="skill-item">Node.js</div>
                    <div id="skill-item">MongoDB</div>
                    <div id="skill-item">Git</div>
                    <div id="skill-item">Responsive Design</div>
                </div>
            </div>
        </section>

        <section id="projects">
            <div id="container">
                <h2>Projects</h2>
                <div id="projects-grid">
                    <div id="project-card">
                        <img src="/placeholder.svg?height=200&width=300" alt="Project 1"/>
                        <div id="content">
                            <h3>Project 1</h3>
                            <p>A responsive e-commerce website built with React and Node.js.</p>
                        </div>
                    </div>
                    <div id="project-card">
                        <img src="/placeholder.svg?height=200&width=300" alt="Project 2"/>
                        <div id="content">
                            <h3>Project 2</h3>
                            <p>A real-time chat application using Socket.io and Express.</p>
                        </div>
                    </div>
                    <div id="project-card">
                        <img src="/placeholder.svg?height=200&width=300" alt="Project 3"/>
                        <div id="content">
                            <h3>Project 3</h3>
                            <p>A portfolio website template built with HTML, CSS, and JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div id="container">
                <h2>Contact Me</h2>
                <form id="contact-form">
                    <div id="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div id="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div id="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button className='but' type="submit">Send Message</button>
                </form>
            </div>
        </section>
   

    <footer>
        <div id="container">
            <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
    </footer>

    
    </>
  )
}

export default Portfolio