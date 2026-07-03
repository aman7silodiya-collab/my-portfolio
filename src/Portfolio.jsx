import { useState, useEffect, useRef } from "react";
import Img from "G:/Portfolio/Portfolio/src/Aman Passport.png";

// ── Icons ──
const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{color:"#555"}}>
    <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.99 16.5 2 15 2H9C7.5 2 6 2.99 6 4.66c0 .46.11.9.18 1.34H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6c0 0 0 .66 0 .66H9C9 3.57 9 4 9 4zM20 19H4V8h16v11z"/>
  </svg>
);

const IconGraduation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{color:"#555"}}>
    <path d="M12 3L1 9l4 2.18V16l7 4 7-4v-4.82L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const IconUniversity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{color:"#555"}}>
    <path d="M12 2L2 7l1 1v8H2v2h20v-2h-1V8l1-1-10-5zm5 14H7V9h10v7zM12 4.24L18.54 7H5.46L12 4.24zM9 11h2v3H9zm4 0h2v3h-2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg width="40" height="25" viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
  </svg>
);

// ── Data ──
const skills = [
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="React"/>, label: "React.js" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="JS"/>, label: "JavaScript" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="HTML5"/>, label: "HTML5" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="CSS3"/>, label: "CSS3" },
  { icon: <TailwindIcon />, label: "Tailwind CSS" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="Bootstrap"/>, label: "Bootstrap" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="Node"/>, label: "Node.js" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="Express"/>, label: "Express.js" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="MongoDB"/>, label: "MongoDB" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="Git"/>, label: "Git" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="GitHub"/>, label: "GitHub" },
  { icon: <span style={{fontSize:"13px",fontWeight:900,color:"#e63946",letterSpacing:"-1px",fontFamily:"monospace"}}>JWT</span>, label: "JWT Auth" },
  { icon: <span style={{fontSize:"1.7rem"}}>🔐</span>, label: "RBAC" },
  { icon: <span style={{fontSize:"1.5rem"}}>⚡</span>, label: "TanStack Q" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" style={{width:"40px",height:"40px",objectFit:"contain"}} alt="Axios"/>, label: "Axios" },
];

const projects = [
  {
    title: "WhatsApp Business API Dashboard",
    desc: "A modern React-based dashboard for managing WhatsApp Business API communication. Includes real-time messaging, conversation tracking, message templates, contact management, delivery status, analytics, and bulk campaign management with a responsive user interface.",
    tech: "React.js, Vite, Tailwind CSS, Axios, Context API",
  },
  {
    title: "Lingofly - AI Translation Extension",
    desc: "An AI-powered Chrome extension that provides real-time translation across web applications. Supports multiple languages with smart tone suggestions and seamless integration with platforms like WhatsApp, Instagram, LinkedIn, and other web tools.",
    tech: "React.js, Gemini API, Chrome Extension, Tailwind CSS",
  },
  {
    title: "AI-Powered Interview Platform",
    desc: "A full-stack AI interview platform with secure authentication, AI-generated questions, automated answer evaluation, scoring system, and performance reports. Built with a scalable backend and responsive frontend architecture.",
    tech: "MERN, OpenAI API, MongoDB",
  },
  {
    title: "E-Commerce Web Application",
    desc: "A complete e-commerce platform with product catalog, shopping cart, user authentication, admin dashboard, order management, and role-based access control. Designed with reusable components and optimized APIs.",
    tech: "MERN, RBAC, MongoDB",
  },
];

const timeline = [
  { icon: <IconBriefcase />, company: "Arvi Technologies", action: "Started working as", role: "Frontend Developer", location: "Indore, MP, India", date: "Feb 2026" },
  { icon: <IconBriefcase />, company: "Ypsilon IT Solutions", action: "Started working as", role: "MERN Stack Intern", location: "Indore, MP, India", date: "July 2025" },
  { icon: <IconGraduation />, company: "Universal Informatics", action: "Completed", role: "MERN Stack Training", location: "Indore, MP, India", date: "2024" },
  { icon: <IconUniversity />, company: "APJ Abdul Kalam Univ.", action: "Completed", role: "BCA Degree", location: "Indore, MP, India", date: "2023" },
];

const navLinks = ["about", "skills", "projects", "timeline", "contact"];

// ── Main Component ──
export default function AmanPortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [nameWidth, setNameWidth] = useState("0%");
  const [showCard, setShowCard] = useState(false);
  const [isVisible, setIsVisible] = useState({
    skills: false,
    projects: false,
    timeline: false,
    contact: false,
  });

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setNameWidth("100%"), 100);
    const t2 = setTimeout(() => setShowCard(true), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    const refs = [skillsRef, projectsRef, timelineRef, contactRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = () => {
      const secs = document.querySelectorAll("section[id]");
      let cur = "";
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 70) cur = s.id; });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const scaleIn = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.85)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const slideInLeft = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-60px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const nameStyle = {
    fontFamily: "'Courier Prime', monospace",
    fontSize: "clamp(1.6rem, 4vw, 3rem)",
    fontWeight: 700,
    color: "#FFA500",
    letterSpacing: "8px",
    textTransform: "uppercase",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "3px solid #FFA500",
    width: nameWidth,
    transition: "width 2s steps(14)",
    animation: "blink 0.7s step-end infinite",
    display: "block",
    textAlign: "left",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes typing { to { width: 100%; } }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.03)} }
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; scroll-behavior: smooth; background: #000; }
        body { font-family: 'Courier Prime', monospace; color: #fff; }
        .skill-card { transition: all 0.3s ease; cursor: default; }
        .skill-card:hover { transform: translateY(-5px) !important; box-shadow: 0 8px 20px rgba(255,165,0,0.35); }
        .proj-card-hover { transition: all 0.3s ease; display: flex; flex-direction: column; height: 100%; }
        .proj-card-hover:hover { transform: translateY(-6px) !important; box-shadow: 0 8px 30px rgba(255,165,0,0.2); }
        .proj-card-hover .proj-body { flex: 1; display: flex; flex-direction: column; }
        .proj-card-hover .proj-desc { flex: 1; }
        .soc-btn { transition: all 0.3s ease; }
        .soc-btn:hover { color: #fff !important; transform: translateY(-4px) !important; }
        .nav-resume:hover { background: #000 !important; color: #FFA500 !important; opacity: 1 !important; }
        .nav-link:hover { opacity: 0.6; }
        .timeline-card { transition: all 0.3s ease; }
        .timeline-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(255,165,0,0.25); }
        .about-card { transition: all 0.4s ease; }
        .about-card:hover { box-shadow: 0 10px 50px rgba(255,165,0,0.15); }
        .avatar-img { transition: transform 0.5s ease; }
        .avatar-img:hover { transform: scale(1.05); }
        .proj-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        background: "#FFA500", height: "52px",
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        padding: "0 2.5rem", gap: "2rem", zIndex: 999
      }}>
        {navLinks.map(id => (
          <a key={id} href={`#${id}`}
            onClick={e => { e.preventDefault(); scrollTo(id); }}
            className="nav-link"
            style={{
              textDecoration: activeSection === id ? "underline" : "none",
              color: "#000", fontFamily: "'Courier Prime',monospace",
              fontWeight: 700, fontSize: "15px"
            }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#" className="nav-resume" style={{
          border: "2px solid #000", padding: "3px 16px", borderRadius: "4px",
          textDecoration: "none", color: "#000",
          fontFamily: "'Courier Prime',monospace", fontWeight: 700, fontSize: "15px"
        }}>
          Resume
        </a>
      </nav>

      {/* ── ABOUT SECTION ── */}
      <section id="about" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "52px",
        background: "#000",
        width: "100%",
      }}>
        <div style={{
          width: "95%",
          maxWidth: "1000px",
          margin: "0 auto",
          paddingLeft: "0",
          marginBottom: "1rem",
        }}>
          <p style={{
            fontStyle: "italic",
            fontSize: "1rem",
            marginBottom: "2px",
            color: "#fff",
            textAlign: "left",
          }}>
            Hello, I am
          </p>
          <h1 style={nameStyle}>Aman Silodiya</h1>
        </div>

        <div className="about-card" style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "2.5rem 3.5rem",
          textAlign: "center",
          color: "#000",
          maxWidth: "1000px",
          width: "90%",
          margin: "0 auto",
          opacity: showCard ? 1 : 0,
          transform: showCard ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}>
          <div style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "4px solid #ddd",
            margin: "0 auto 1.2rem",
            overflow: "hidden",
            background: "#f5f5f5",
          }}>
            <img 
              src={Img} 
              alt="Aman Silodiya" 
              className="avatar-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }} 
            />
          </div>

          <p style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "850px",
            margin: "0 auto",
          }}>
            I am a <strong>Full Stack Developer</strong> who enjoys building smooth, user-friendly
            frontend experiences while supporting them with reliable backend work. I have{" "}
            <strong>10 months of experience</strong> working with{" "}
            <strong>React.js, JavaScript, Node.js,</strong> and <strong>MongoDB,</strong> and I
            hold a <strong>Bachelor of Computer Applications</strong> from Dr. A.P.J. Abdul Kalam
            University, Indore.
          </p>

          <p style={{
            marginTop: "1.2rem",
            color: "#cc8400",
            fontSize: "15px",
          }}>
            Take a stroll and explore my portfolio!
          </p>

          <span style={{
            color: "#FFA500",
            fontSize: "1.4rem",
            marginTop: "0.6rem",
            display: "inline-block",
            animation: "bounce 1.5s infinite",
          }}>⌄</span>
        </div>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section id="skills" ref={skillsRef} style={{ padding: "80px 0", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", ...fadeUp(isVisible.skills) }}>
          <h2 style={{
            textAlign: "center", letterSpacing: "10px", fontSize: "1.6rem",
            fontWeight: 700, textTransform: "uppercase", color: "#fff", marginBottom: "3rem"
          }}>S K I L L S</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {skills.map((sk, i) => (
              <div key={i} className="skill-card" style={{
                background: "#fff", borderRadius: "16px", width: "110px",
                padding: "1.1rem 0.5rem 0.8rem",
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "0.5rem",
                ...scaleIn(isVisible.skills, i * 0.05),
              }}>
                <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {sk.icon}
                </div>
                <span style={{
                  fontSize: "12px", fontWeight: 700, color: "#111",
                  textAlign: "center", fontFamily: "'Courier Prime',monospace"
                }}>{sk.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" ref={projectsRef} style={{ padding: "80px 0", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", ...fadeUp(isVisible.projects, 0.1) }}>
          <h2 style={{
            textAlign: "center", letterSpacing: "10px", fontSize: "1.6rem",
            fontWeight: 700, textTransform: "uppercase", color: "#fff", marginBottom: "3rem"
          }}>P R O J E C T S</h2>
          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card-hover" style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                color: "#000",
                ...slideInLeft(isVisible.projects, 0.1 + i * 0.1),
              }}>
                <div className="proj-body" style={{ padding: "1.6rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.7rem", minHeight: "2.5rem" }}>{p.title}</h3>
                  <p className="proj-desc" style={{ fontSize: "13.5px", color: "#444", lineHeight: "1.7", marginBottom: "1rem" }}>
                    {p.desc}
                  </p>
                  <div>
                    <a href="#" style={{ color: "#cc8400", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
                      ⌂ Github
                    </a>
                  </div>
                </div>
                <div style={{ 
                  background: "#FFA500", 
                  padding: "0.65rem 1.6rem", 
                  fontSize: "13px", 
                  fontWeight: 700, 
                  color: "#000",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => e.target.style.background = "#cc8400"}
                onMouseLeave={(e) => e.target.style.background = "#FFA500"}
                >
                  {p.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE SECTION ── */}
      <section id="timeline" ref={timelineRef} style={{ padding: "80px 0", background: "#000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", ...fadeUp(isVisible.timeline, 0.1) }}>
          <h2 style={{
            textAlign: "center", letterSpacing: "10px", fontSize: "1.6rem",
            fontWeight: 700, textTransform: "uppercase", color: "#fff", marginBottom: "3rem"
          }}>T I M E L I N E</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            padding: "1rem 0",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              right: "10%",
              height: "2px",
              background: "#fff",
              transform: "translateY(-50%)",
              zIndex: 0,
            }} />

            {timeline.map((item, i) => (
              <div key={i} className="timeline-card" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
                ...scaleIn(isVisible.timeline, 0.1 + i * 0.1),
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(204, 132, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "1.4rem 1.2rem 1rem",
                  width: "100%",
                  textAlign: "center",
                  color: "#000",
                  borderBottom: "5px solid #FFA500",
                  marginBottom: "1.2rem",
                  boxShadow: "0 4px 20px rgba(255,165,0,0.15)",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#cc8400"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#FFA500"}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "0.4rem",
                  }}>
                    {item.icon}
                  </div>
                  <p style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#cc8400",
                    marginBottom: "2px",
                  }}>{item.company}</p>
                  <p style={{
                    fontSize: "11px",
                    color: "#888",
                    fontStyle: "italic",
                  }}>{item.action}</p>
                  <p style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#111",
                    margin: "3px 0",
                  }}>{item.role}</p>
                  <p style={{
                    fontSize: "11px",
                    color: "#777",
                  }}>{item.location}</p>
                </div>

                <div style={{
                  width: "14px",
                  height: "14px",
                  background: "#FFA500",
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  position: "relative",
                  zIndex: 2,
                  marginBottom: "6px",
                  boxShadow: "0 0 0 3px #FFA500",
                  animation: isVisible.timeline ? "pulse 2s infinite" : "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#cc8400";
                  e.currentTarget.style.boxShadow = "0 0 0 3px #cc8400";
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFA500";
                  e.currentTarget.style.boxShadow = "0 0 0 3px #FFA500";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                />

                <p style={{
                  color: "#FFA500",
                  fontSize: "14px",
                  fontWeight: 700,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#cc8400"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#FFA500"}
                >{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" ref={contactRef} style={{ background: "#000", padding: "60px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", ...fadeUp(isVisible.contact, 0.1) }}>
          <div style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "3rem 3.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            color: "#000",
            ...scaleIn(isVisible.contact, 0.1),
          }}>
            <div>
              <h2 style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#FFA500",
                fontStyle: "italic",
                marginBottom: "1.2rem",
              }}>
                Let's Talk!
              </h2>
              <p style={{
                fontSize: "14px",
                color: "#cc8400",
                lineHeight: "1.9",
              }}>
                I'm just a ping away.<br />
                Whether you have an opportunity to discuss, questions to ask, ideas to brainstorm,
                or simply want to say hello, feel free to reach me at{" "}
                <a href="mailto:aman7silodiya@gmail.com" style={{
                  color: "#000",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#FFA500"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#000"}
                >
                  aman7silodiya@gmail.com
                </a>.
              </p>
            </div>
            <div>
              <p style={{
                fontSize: "13px",
                color: "#cc8400",
                fontWeight: 700,
                marginBottom: "0.8rem",
                textAlign: "right",
              }}>
                Connect with me
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.9rem",
              }}>
                {[
                  { href: "https://www.linkedin.com/in/aman-silodiya-2108b1307/", icon: <LinkedInIcon /> },
                  { href: "", icon: <GithubIcon /> },
                  { href: "https://www.instagram.com/ethereal7aman/", icon: <InstagramIcon /> },
                  { href: "mailto:aman7silodiya@gmail.com", icon: <EnvelopeIcon /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="soc-btn" style={{
                    width: "80px",
                    height: "80px",
                    background: "#111",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFA500",
                    textDecoration: "none",
                    ...scaleIn(isVisible.contact, 0.15 + i * 0.05),
                  }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#000",
        padding: "1.2rem",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "13px",
        color: "#555",
        borderTop: "1px solid #111",
      }}>
        <p>Developed and Designed by <span style={{ color: "#FFA500" }}>Aman Silodiya</span>.</p>
      </footer>
    </>
  );
}
