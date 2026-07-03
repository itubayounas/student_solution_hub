import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  { icon: "graduation-cap", title: "Semester Project Guidance" },
  { icon: "laptop-code", title: "Web Development Projects" },
  { icon: "tablet-screen-button", title: "Mobile App Projects" },
  { icon: "database", title: "Database Projects" },
  { icon: "desktop", title: "Operating System Projects" },
  { icon: "code", title: "Programming Assignments" },
  { icon: "file-lines", title: "PowerPoint Presentations" },
  { icon: "book-open", title: "Research Assistance" },
  { icon: "diagram-project", title: "Documentation & Reports" },
  { icon: "shield-halved", title: "Plagiarism-Free Assignments" },
  { icon: "layer-group", title: "Final Year Project Guidance" },
  { icon: "wand-magic-sparkles", title: "Code Debugging" },
  { icon: "rocket", title: "Deployment Support" },
];

const whyChoose = [
  "Free Consultation",
  "Plagiarism-Free Work",
  "Clean & Well-Structured Code",
  "On-Time Delivery",
  "Student-Friendly Guidance",
  "Real Project Support",
  "Affordable Solutions",
  "Support After Delivery",
  "Clear Documentation",
  "Fast Response",
];

const steps = [
  "Share Your Requirements",
  "Get a Free Consultation",
  "Development Begins",
  "Regular Progress Updates",
  "Delivery + Post-Delivery Support",
];

const projects = [
  {
    title: "Inventory Management System",
    tech: "React, Node.js, MongoDB",
    link: "https://nexus-core-frontened.vercel.app/",
    image:
      // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/projects/inventory.png",
      description:
      "A modern stock tracking solution with reporting, filters, and admin controls.",
  },

  // {
  //   title: "Library Management System",
  //   tech: "HTML5, CSS3, JavaScript",
  //   image:
  //     "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   description:
  //     "A responsive library portal with book search, issue tracking, and dashboard views.",
  // },
  {
    title: "Hospital Management System",
    tech: "React, MongoDB, Node.js",
    link: "https://med-vise-frontened.vercel.app/",
    image:
      "/projects/hospital.png",
    description:
      "A patient workflow platform with scheduling, records, and secure access.",
  },
    {
    title: "Employee Management System",
    tech: "C#, .NET, SQL Server",
    image:
      "/projects/employee.png",
    description:
      "A clean and separate dashboard for admin and employees.",
  },
  // {
  //   title: "Online Examination System",
  //   tech: "PHP, MySQL, JavaScript",
  //   image:
  //     "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   description:
  //     "An exam workflow with timed tests, scoring, and results reporting.",
  // },
];

const techStack = [
  ["HTML5", "html5"],
  ["CSS3", "css3"],
  ["JavaScript", "js"],
  ["PHP", "php"],
  ["MySQL", "database"],
  ["Bootstrap", "bootstrap"],
  ["React", "react"],
  ["React Native", "mobile-screen-button"],
  ["Node.js", "node-js"],
  ["Firebase", "fire"],
  ["Git", "git-alt"],
  ["GitHub", "github"],
  ["Python", "python"],
  ["OS", "desktop"],
  ["Others", "code"],
];

const testimonials = [
  {
    name: "Areeba Khan",
    program: "BS Computer Science",
    text: "The project was well organized and delivered on time. Everything was explained clearly before submission.",
  },
  {
    name: "Ahmed Raza",
    program: "BS Software Engineering",
    text: "I received guidance throughout my semester project. The code was clean, easy to understand, and well documented.",
  },
  {
    name: "Hira Ali",
    program: "BS Information Technology",
    text: "My presentation and database project were completed professionally. The support after delivery was excellent.",
  },
];

const faMap = {
  "graduation-cap": "graduation-cap",
  "laptop-code": "laptop-code",
  "tablet-screen-button": "tablet-screen-button",
  database: "database",
  desktop: "desktop",
  code: "code",
  "file-lines": "file-lines",
  "book-open": "book-open",
  "diagram-project": "diagram-project",
  "shield-halved": "shield-halved",
  "layer-group": "layer-group",
  "wand-magic-sparkles": "wand-magic-sparkles",
  rocket: "rocket",
  "check-circle": "check-circle",
  star: "star",
  play: "play",
  "paper-plane": "paper-plane",
  comments: "comments",
  "arrow-right": "arrow-right",
  "arrow-up": "arrow-up",
  "circle-chevron-right": "circle-chevron-right",
  sun: "sun",
  moon: "moon",
  xmark: "xmark",
  instagram: ["fab", "instagram"],
  github: ["fab", "github"],
  react: ["fab", "react"],
  "node-js": ["fab", "node-js"],
  bootstrap: ["fab", "bootstrap"],
  js: ["fab", "js"],
  php: ["fab", "php"],
  python: ["fab", "python"],
  "git-alt": ["fab", "git-alt"],
  html5: ["fab", "html5"],
  css3: ["fab", "css3"],
  fire: ["fas", "bolt"],
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [activeScenario, setActiveScenario] = useState(0);
  const [typingStage, setTypingStage] = useState("typing");
  const [countersVisible, setCountersVisible] = useState(false);
  const [stats, setStats] = useState([0, 0, 0]);
  const [backToTop, setBackToTop] = useState(false);

  const heroScenarios = useMemo(
    () => [
      {
        label: "Semester project help",
        text: "Plan the architecture, build the solution, and submit with confidence.",
      },
      {
        label: "Programming assignments",
        text: "Turn complex requirements into clean, readable, student-friendly code.",
      },
      {
        label: "Presentation support",
        text: "Craft slides, explanation flow, and viva-ready talking points in real time.",
      },
      {
        label: "Research guidance",
        text: "Shape ideas into structured documentation, references, and practical outcomes.",
      },
    ],
    [],
  );

  useEffect(() => {
    const theme = window.localStorage.getItem("ssh-theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("ssh-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 24);
      setBackToTop(current > 520);
      setCountersVisible(current > 260);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!countersVisible) {
      return;
    }

    const targets = [25, 15, 100];
    const duration = 1100;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setStats(targets.map((target) => Math.round(target * progress)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [countersVisible]);

  useEffect(() => {
    const currentScenario = heroScenarios[activeScenario];
    let timer;

    if (typingStage === "typing") {
      if (typedText.length < currentScenario.text.length) {
        timer = window.setTimeout(() => {
          setTypedText(currentScenario.text.slice(0, typedText.length + 1));
        }, typedText.length < 8 ? 70 : 26);
      } else {
        timer = window.setTimeout(() => setTypingStage("pausing"), 1400);
      }
    }

    if (typingStage === "pausing") {
      timer = window.setTimeout(() => setTypingStage("deleting"), 380);
    }

    if (typingStage === "deleting") {
      if (typedText.length > 0) {
        timer = window.setTimeout(() => {
          setTypedText(currentScenario.text.slice(0, typedText.length - 1));
        }, 18);
      } else {
        timer = window.setTimeout(() => {
          setActiveScenario((current) => (current + 1) % heroScenarios.length);
          setTypingStage("typing");
        }, 220);
      }
    }

    return () => window.clearTimeout(timer);
  }, [activeScenario, heroScenarios, typingStage, typedText]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className={`app-shell ${darkMode ? "dark-mode" : ""}`}>
      {loading && <LoadingScreen />}

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-bar">
          <button
            className="brand"
            onClick={() => scrollToId("home")}
            aria-label="Student Solution Hub home"
          >
            <span className="brand-mark">
              <img src="/favicon.svg" alt="Student Solution Hub logo" />
            </span>
            <span>
              <strong>Student Solution Hub</strong>
              <small>SSH</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["home", "about", "services", "projects", "faq", "contact"].map(
              (item) => (
                <button key={item} onClick={() => scrollToId(item)}>
                  {item === "home"
                    ? "Home"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ),
            )}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setDarkMode((value) => !value)}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon
                icon={darkMode ? ["fas", "sun"] : ["fas", "moon"]}
              />
            </button>
            <button
              className="menu-btn icon-btn mobile-only"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={menuOpen ? ["fas", "xmark"] : ["fas", "diagram-project"]}
              />
            </button>
            <button
              className="button button-primary desktop-only"
              onClick={() => scrollToId("contact")}
            >
              Get Free Consultation
              <FontAwesomeIcon icon={["fas", "arrow-right"]} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-background" />
          <div className="container hero-grid reveal">
            <div className="hero-copy">
              <div className="eyebrow">
                <FontAwesomeIcon icon={["fas", "rocket"]} />
                Premium educational support for CS students
              </div>
              <h1>Your Academic Success Starts Here.</h1>
              <div className="scenario-chip-row" aria-label="Support scenarios">
                {heroScenarios.map((scenario, index) => (
                  <span key={scenario.label} className={`scenario-chip ${index === activeScenario ? 'active' : ''}`}>
                    {scenario.label}
                  </span>
                ))}
              </div>
              <p className="hero-typing">
                Helping Computer Science students with semester projects,
                assignments, presentations, research guidance, programming
                support, and technical consultation.
              </p>
              <div className="typing-line" aria-label="Animated phrase">
                <span>{typedText}</span>
                <span className="cursor" />
              </div>
              <p className="typing-support">{heroScenarios[activeScenario].label}</p>
              <div className="hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => scrollToId("contact")}
                >
                  Get Free Consultation
                  <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => scrollToId("services")}
                >
                  Explore Our Services
                  <FontAwesomeIcon icon={["fas", "circle-chevron-right"]} />
                </button>
              </div>
              <div className="hero-trust">
                <span>
                  <FontAwesomeIcon icon={["fas", "star"]} /> Trusted by CS
                  students
                </span>
                <span>
                  <FontAwesomeIcon icon={["fas", "shield-halved"]} />{" "}
                  Plagiarism-free support
                </span>
              </div>
            </div>

            <div className="hero-visual glass-panel">
              <div className="visual-top">
                <div className="avatar-stack">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-chip">Live academic guidance</div>
              </div>
              <div className="hero-image-shell">
                <img
                  className="hero-illustration"
                  src="/hero-illustration.svg"
                  alt="Students working together on laptops and code"
                />
                <div className="floating-badge badge-left">
                  <FontAwesomeIcon icon={["fas", "code"]} />
                  Clean code
                </div>
                <div className="floating-badge badge-right">
                  <FontAwesomeIcon icon={["fas", "book-open"]} />
                  Guided learning
                </div>
              </div>
            </div>
          </div>

          <div className="container stats-grid reveal">
            {[
              { value: `${stats[0]}+`, label: "Projects Completed" },
              { value: `${stats[1]}+`, label: "Students Assisted" },
              { value: `${stats[2]}%`, label: "Plagiarism-Free Work" },
              { value: "Free", label: "Initial Consultation" },
            ].map((item) => (
              <article key={item.label} className="stat-card glass-panel">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split-grid reveal">
            <SectionHeading
              title="Who We Are"
              subtitle="Student Solution Hub is an educational platform dedicated to supporting Computer Science students throughout their academic journey."
            />
            <div className="content-card glass-panel">
              <p>
                We provide guidance on semester projects, programming
                assignments, presentations, documentation, research support,
                debugging, and technical consultation.
              </p>
              <p>
                Our goal is not just to deliver projects, but to help students
                understand their work and build practical skills.
              </p>
              <div className="mini-points">
                {[
                  "Student-first approach",
                  "Clear communication",
                  "Practical mentoring",
                ].map((item) => (
                  <span key={item}>
                    <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="services">
          <div className="container">
            <SectionHeading
              title="Our Services"
              subtitle="Everything Computer Science students need in one premium support hub."
              centered
            />
            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card glass-panel reveal-card"
                >
                  <div className="service-icon">
                    <FontAwesomeIcon icon={["fas", service.icon]} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>
                    Guided support built for academic quality, clarity, and
                    strong presentation.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-choose">
          <div className="container">
            <SectionHeading
              title="Why Choose Student Solution Hub"
              subtitle="A student-friendly process with real support before and after delivery."
              centered
            />
            <div className="feature-grid">
              {whyChoose.map((item) => (
                <div
                  key={item}
                >
                  <FontAwesomeIcon icon={["fas", "check-circle"]} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <SectionHeading
              title="How It Works"
              subtitle="A simple five-step path from idea to submission."
              centered
            />
            <div className="timeline-panel glass-panel">
              <div className="timeline-track" />
              <div className="timeline">
              {steps.map((step, index) => (
                <div key={step} className="timeline-item reveal-card">
                  <div className="timeline-number">0{index + 1}</div>
                  <div className="timeline-card glass-panel">
                    <h3>{step}</h3>
                    <p>
                      We keep the process clear, collaborative, and easy to
                      follow from start to finish.
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeading
              title="Recent Project Showcase"
              subtitle="Modern academic projects with clean structure and practical technology choices."
              centered
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card glass-panel reveal-card"
                >
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="project-media">
                        <img
                          className="project-thumb"
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                        />
                        <div className="project-overlay">
                          <FontAwesomeIcon icon={["fas", "circle-chevron-right"]} />
                        </div>
                      </div>
                      <div className="project-body">
                        <span className="project-tech">
                          Technologies: {project.tech}
                        </span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="project-media">
                        <img
                          className="project-thumb"
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                        />
                        <div className="project-overlay">
                          <FontAwesomeIcon icon={["fas", "circle-chevron-right"]} />
                        </div>
                      </div>
                      <div className="project-body">
                        <span className="project-tech">
                          Technologies: {project.tech}
                        </span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="technologies">
          <div className="container">
            <SectionHeading
              title="Technologies"
              subtitle="Tools and stacks we use across student projects and technical support."
              centered
            />
            <div className="tech-marquee">
              {techStack.map(([label, icon], index) => (
                <div
                  key={`${label}-${index}`}
                  className="tech-pill glass-panel"
                >
                  <FontAwesomeIcon icon={faMap[icon]} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section consultation-section" id="consultation">
          <div className="container cta-panel glass-panel reveal">
            <SectionHeading
              title="Need Help With Your Semester Project?"
              subtitle="Whether you need help with a semester project, programming assignment, presentation, database design, debugging, documentation, or research, we're here to support you."
              centered
            />
            <button
              className="button button-primary"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/student_solution_hub/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Get Free Consultation
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </button>
          </div>
        </section>

        <section className="section" id="support">
          <div className="container split-grid reverse reveal">
            <div className="content-card glass-panel">
              <span className="support-tag">Post-Delivery Support</span>
              <h2>We're Still Here After Delivery</h2>
              <p>
                Our support doesn't end after your project is delivered. Need
                changes? Need project explanation? Need viva preparation? Need
                deployment help? Need debugging? We'll continue supporting you.
              </p>
            </div>
            <div className="support-list glass-panel">
              {[
                "Need changes?",
                "Need project explanation?",
                "Need viva preparation?",
                "Need deployment help?",
                "Need debugging?",
              ].map((item) => (
                <div key={item}>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="reviews">
          <div className="container">
            <SectionHeading
              title="What Students Say"
              subtitle="A short rotating set of student testimonials."
              centered
            />
            <div className="testimonial-slider glass-panel reveal">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className={`testimonial-card ${index === activeTestimonial ? "active" : ""}`}
                >
                  <div className="testimonial-avatar">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FontAwesomeIcon
                          key={starIndex}
                          icon={["fas", "star"]}
                        />
                      ))}
                    </div>
                    <p>“{testimonial.text}”</p>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.program}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <SectionHeading
              title="FAQ"
              subtitle="Common questions answered clearly and simply."
              centered
            />
            <div className="faq-grid">
              {[
                "Do you provide plagiarism-free assignments?",
                "Can you help with semester projects?",
                "Do you explain the project after delivery?",
                "Can I request revisions?",
                "Do you provide presentations?",
                "Can you help with database projects?",
              ].map((question) => (
                <details key={question} className="faq-item glass-panel">
                  <summary>{question}</summary>
                  <p>
                    Yes. We provide student-focused support, clear
                    communication, and guidance suited to your requirements.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container contact-grid reveal">
            <div className="content-card glass-panel">
              <SectionHeading
                title="Let's Build Your Project Together"
                subtitle="Have questions? Need guidance? Want a free consultation? Send us a DM on Instagram and we'll respond as soon as possible."
              />
              <div className="contact-row">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
                <a
                  href="https://www.instagram.com/student_solution_hub/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @student_solution_hub
                </a>
              </div>
              <button
                className="button button-primary"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/student_solution_hub/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
                Instagram
              </button>
            </div>
            <div className="instagram-card glass-panel">
              <div className="instagram-top">
                <span>Instagram</span>
                <FontAwesomeIcon icon={["fas", "comments"]} />
              </div>
              <p>
                <strong>@student_solution_hub</strong>
                <span>
                  Fast academic guidance for Computer Science students.
                </span>
              </p>
              <a
                href="https://www.instagram.com/student_solution_hub/"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Open Instagram
                <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <span className="brand-mark">
                <img src="/favicon.svg" alt="Student Solution Hub logo" />
              </span>
              <strong>Student Solution Hub</strong>
            </div>
            <p>Modern academic support for Computer Science students.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              {["Services", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToId(link.toLowerCase())}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/student_solution_hub/"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary footer-ig"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              Follow Us
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2026 Student Solution Hub All Rights Reserved.
        </div>
      </footer>

      {backToTop && (
        <button
          className="back-to-top"
          onClick={() => scrollToId("home")}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={["fas", "arrow-up"]} />
        </button>
      )}

      <a
        className="floating-instagram"
        href="https://www.instagram.com/student_solution_hub/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    </div>
  );
}

function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="section-kicker">Student Solution Hub</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-card glass-panel">
        <div className="loading-logo">
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
        </div>
        <div className="loading-bar">
          <span />
        </div>
      </div>
    </div>
  );
}

export default App;
