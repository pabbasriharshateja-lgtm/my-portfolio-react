
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Harsha Teja</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm <span>P Sri Harsha Teja</span></h1>
      <h2>Computer Science Engineering Student</h2>
      <p>
        Passionate about Software Development, Artificial Intelligence
        and Machine Learning.
      </p>
      <a href="#projects" className="btn">Explore My Projects</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I am a third-year Computer Science Engineering student at
        Kakatiya Institute of Technology and Science, Warangal.
        I enjoy learning new technologies and developing real-world
        applications using programming and AI.
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    'Python', 'Java', 'C', 'HTML', 'CSS',
    'JavaScript', 'React', 'SQL', 'Machine Learning',
     'GitHub'
  ];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      name: 'AI Resume Screening',
      description: 'An AI-based system to analyze and screen resumes.'
    },
    {
      name: 'Road Analysis Using YOLO',
      description: 'Computer vision project using YOLO and OpenCV for road analysis.'
    },
    
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="education-card">
        <h3>B.Tech - Computer Science and Engineering</h3>
        <p>Kakatiya Institute of Technology and Science, Warangal</p>
        <p>Currently in 3rd Year</p>
        <p>CGPA: 8.0</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Email: yourmail@gmail.com</p>
      <p>
        GitHub: <a href="https://github.com/" target="_blank">
          Visit GitHub
        </a>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/" target="_blank">
          Visit LinkedIn
        </a>
      </p>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <footer>
        <p>© 2026 Harsha Teja | Portfolio</p>
      </footer>
    </>
  );
}

export default App;
