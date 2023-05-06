import "./Home.css";
import img from "../../images/3.JPG";
import img1 from "../../images/4.jpg";
import {
  BsWhatsapp,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFan,
  BsMenuButton,
} from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../../utils/darkmode";
import { useState } from "react";
import axios from "../../axios/axios.instance";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [posts, setPosts] = useState([]);

  function handleToggleTheme() {
    setTheme(!theme);
  }
  const [openMenu, setOpenMenu] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("articles")
  //     .then((res) => {
  //       setPosts(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div className="home">
      {/* NavBar */}
      <div className="mobile-menu">
        <div
          className="title"
          onClick={() => {
            navigate("/login");
          }}
        >
          Joshua Bizima
        </div>
        <div>
          {openMenu ? (
            <FaTimes
              className="icons"
              onClick={() => {
                setOpenMenu((value) => !value);
              }}
            />
          ) : (
            <TbGridDots
              className="icons"
              onClick={() => {
                setOpenMenu((value) => !value);
              }}
            />
          )}
        </div>
      </div>
      <div className={`nav-bar ${openMenu ? "drop-down" : "hide-menu"}`}>
        <div>
          <div
            className="title"
            onClick={() => {
              navigate("/login");
            }}
          >
            Joshua Bizima
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to="intro-container"
                offset={-100}
                smooth={true}
                duration={700}
                onClick={() => {
                  setOpenMenu((value) => !value);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                offset={-100}
                smooth={true}
                duration={700}
                onClick={() => {
                  setOpenMenu((value) => !value);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                offset={-100}
                smooth={true}
                duration={700}
                onClick={() => {
                  setOpenMenu((value) => !value);
                }}
              >
                Skills & Projects
              </Link>
            </li>
            <li>
              <Link
                to="blogs-link"
                offset={-100}
                smooth={true}
                duration={700}
                onClick={() => {
                  setOpenMenu((value) => !value);
                }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                offset={-100}
                smooth={true}
                duration={700}
                onClick={() => {
                  setOpenMenu((value) => !value);
                }}
              >
                Contacts
              </Link>
            </li>
            <li>
              {/* <label class="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
              </label> */}
              {theme ? (
                <FaMoon onClick={handleToggleTheme} />
              ) : (
                <FaSun onClick={handleToggleTheme} />
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="main-body">
        {/* Welcom msg */}
        <div className="welcome-msg">Welcome to my portfolio </div>
        {/* Intro */}
        <div className="intro-container" id="intro-container">
          <div className="starter">
            <h1>Hi! I'm Joshua Software Engineer</h1>
            <div className="pic-0">
              <img src={img} alt="" />
            </div>
            <p>
              Out-of-the-box thinker, I'm a passionate software engineer with
              expertise in creating and executing innovative software solutions
              that meet the needs of modern businesses.
            </p>
            <a
              href="https://docs.google.com/document/d/1_u-pHM7IvJeuFicFwDY7p-A-ruCNI4lR1FnQDOmch6Q/edit?usp=sharing"
              target="_blank"
            >
              <button>Check my resume</button>
            </a>
          </div>
          <div className="pic-1">
            <img src={img} alt="" />
          </div>
        </div>

        {/* About me */}
        <div className="about about-me" id="about-me">
          <h6>About me!</h6>
          <p>
            A young man from a low-income family in Rwanda pursuing a career as
            a software engineer with the aim to leverage your software
            engineering and accounting skills to create innovative solutions
            that enhance business productivity and promote sustainable economic
            growth. I am an avid learner and enjoy exploring new interests and
            hobbies. Currently, Seeking opportunities to work with software
            companies and apply both my technical and analytical skills. Took
            courses in Computer Science, Data Analytics, Mathematics, and
            Accounting (ACCA).
          </p>
        </div>

        {/* Skills and projects */}
        <div className="about projects" id="projects">
          <h6> Skills and projects</h6>
          <p>
            I have a diverse set of technical skills that span across frontend
            development, backend development, DevOps, and data analytics. This
            broad skill set allows me to work on various aspects of web
            development and software engineering, from designing and developing
            user interfaces to building and deploying scalable backend systems,
            as well as analyzing data to make informed decisions.
          </p>

          <ul>
            <li> Frontend: HTML, CSS, JavaScript, and React,</li>
            <li>Design tools such as Figma.</li>
            <li>Backend: Python, SQL, and Node.js.</li>
            <li>
              DevOps: Experience with GitHub, Nginx, NPM, Postman, Shell
              Scripts, and Linux.
            </li>
            <li>
              Data analytics: Proficiency in SQL, R, Tableau, Python, and
              experience working with Google Apps Script, Google BigQuery, and
              Google Sheets.
            </li>
          </ul>
        </div>

        {/* Blogs */}
        <div className="about blogs-link" id="blogs-link">
          <h6>Blogs</h6>
          {/* <div className="blogs-container">
            {posts.map((blog) => {
              return (
                <div className="blogs" key={blog._id}>
                  <img src={blog.image} alt="" />
                  <p className="title">{blog.title}</p>
                  <p>{blog.description}</p>
                  <p
                    className="read"
                    onClick={() => {
                      navigate(`/blog/${blog._id}`);
                    }}
                  >
                    Read article
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>
        {/* Contacts */}
        <div className="contacts-main contacts" id="contacts">
          <div className="contacts-container">
            <div className="contacts">
              <h1>Ping me here!</h1>
              <p>
                I am always eager to work on new challenges and learn new
                things! Please feel free to reach out.
              </p>
              <div className="contact-buttons">
                <a href="mailto:bizimajoshua111@gmail.com" target="_blank">
                  <button>Email</button>
                </a>

                <a href="tel:+250781070614">
                  <button>Phone</button>
                </a>
              </div>
            </div>
            <div className="pic-2">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer-container">
        <div className="footer-name">
          <div id="first-child">Joshua</div>
          <div>
            Software <br /> Engineer
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/joshua-bizima-2484ba203/"
            target="_blank"
          >
            <BsLinkedin className="icons" />
          </a>
          <a href="https://github.com/jbizima" target="_blank">
            <BsGithub className="icons" />
          </a>
          <a href="https://wa.me/250781070614" target="_blank">
            <BsWhatsapp className="icons" />
          </a>
          <a href="https://www.instagram.com/josh_bizima/" target="_blank">
            <BsInstagram className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
