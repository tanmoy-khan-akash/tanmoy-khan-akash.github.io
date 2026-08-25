import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'Pandas',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.w3schools.com/python/pandas/default.asp',
  },
  {
    name: 'NumPy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.w3schools.com/python/numpy/default.asp',
  },
  {
    name: 'Matplotlib',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.w3schools.com/python/matplotlib_intro.asp',
  },
  {
    name: 'Seaborn',
    img: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
    href: 'https://www.tutorialspoint.com/seaborn/index.htm',
  },
  {
    name: 'NLTK',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Noun_phrase_chunking_with_NLTK.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.geeksforgeeks.org/nlp/nltk-tutorial/',
  },
  {
    name: 'spaCy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.tutorialspoint.com/spacy/index.htm',
  },
  {
    name: 'Scikit-learn',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.tutorialspoint.com/scikit_learn/index.htm',
  },
  {
    name: 'TensorFlow',
    img: 'https://www.svgrepo.com/show/473805/tensorflow.svg',
    href: 'https://www.tensorflow.org/tutorials',
  },
  {
    name: 'PostgreSQL',
    img: 'https://www.svgrepo.com/show/303301/postgresql-logo.svg',
    href: 'https://www.w3schools.com/postgresql/index.php',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'Oracle',
    img: 'https://www.svgrepo.com/show/448245/oracle.svg',
    href: 'https://www.oracle.com/database/technologies/oracle-free-sql/',
  },
  {
    name: 'AWS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.w3schools.com/aws/index.php',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'Microsoft',
    img: 'https://www.svgrepo.com/show/452062/microsoft.svg',
    href: 'https://www.microsoft.com/en-us/microsoft-365',
  },
  {
    name: 'Power BI',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    href: 'https://www.tutorialspoint.com/power_bi/index.htm',
  },
  {
    name: 'Data Analysis',
    img: 'https://www.svgrepo.com/show/16148/person-in-data-analytics-presentation-with-a-graphic-on-a-screen.svg',
    href: 'https://www.geeksforgeeks.org/data-analysis/data-analysis-tutorial/',
  },
  {
    name: 'Data Visualization',
    img: 'https://www.svgrepo.com/show/307754/data-visualization-data-scientist-visualize-data.svg',
    href: 'https://www.geeksforgeeks.org/data-visualization/python-data-visualization-tutorial/',
  },
  {
    name: 'Machine Learning',
    img: 'https://www.svgrepo.com/show/340628/machine-learning-model.svg',
    href: 'https://www.tutorialspoint.com/machine_learning/index.htm',
  },
  {
    name: 'Deep Learning',
    img: 'https://www.svgrepo.com/show/450794/deep-learning.svg',
    href: 'https://www.geeksforgeeks.org/deep-learning/deep-learning-tutorial/',
  },
  {
    name: 'NLP',
    img: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxhdg1wddbjxo847dz5ae.png',
    href: 'https://www.tutorialspoint.com/natural_language_processing/index.htm',
  },
  {
    name: 'Data Science (DS)',
    img: 'https://cdn.iconscout.com/icon/free/png-512/free-data-science-icon-svg-download-png-1170621.png?f=webp&w=512',
    href: 'https://www.w3schools.com/datascience/',
  },
];

function About() {
  return (
    <div className={styles.me}>
      <h2>Who I am and more about me</h2>
      <p>
        My name is Tanmay Khan Akash, and I am a Data Scientist and Data Analyst
        from Bangladesh who has a deep passion for technology. I am eager to
        learn more about new technologies every day.
        <br />
        <br />
        In my journey into the world of Data Science, I have been involved in
        various projects, challenged myself, and learned from my mistakes in
        Data Engineering.
        <br />
      </p>
      <h2>Career Path</h2>
      <p>
        A devoted computer engineering graduate with a solid background in data
        analysis and process optimization. Supervised analyst teams, managed
        projects, and displayed great problem-solving and presentation
        abilities. I am passionate about solving complex problems with data and
        desire to contribute to a company that values my input. I welcome
        connections from those seeking a dedicated individual eager to tackle
        real-world data challenges in collaborative settings.
        <br />
        <br />
        I am fluent in English, which is enough to communicate and read
        documentation in this language.
        <br />
      </p>
      <h2>Interests and Hobbies</h2>
      <p>
        Interested in learning more about testing, clean code principles,
        improving myself, and scalability in general. In my free time, I usually
        travel and read books.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Skills – Technologies - Tools</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>
        B.Sc. in Computer Science and Engineering (CSE) (2019-2023) (Degree)
      </h2>
      <h4>World University of Bangladesh (WUB)</h4>
      <span>
        Address: Avenue 6, Lake Drive, Uttara Sector 17H, Dhaka 1230,
        Bangladesh.
      </span>
      <p>
        During my studies at WUB, I gained responsibility, effort, and
        sacrifice. I was part of work teams and worked on AI projects.
      </p>
    </div>
  );
}

function Certificates() {
  return (
    <>
      <h2>Certificates and Courses</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="Data Analytics with Python Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.DataAnalyticswithPython}
          >
            • Data Analytics with Python
            <p>
              Authorized by Simplilearn & offered through Coursera 
              <br />
              Issued: 06 June, 2026 
            </p>
          </a>
        </li>

        <li>
          <a
            title="SQL (Basic) Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.SQLBasic}
          >
            • SQL (Basic) Certificate
            <p>
              HackerRank 
              <br />
              Issued: 02 – 03 June, 2026
            </p>
          </a>
        </li>
        
        <li>
          <a
            title="SQL (Intermediate) Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.SQLIntermediate}
          >
            • SQL (Intermediate) Certificate
            <p>
              HackerRank 
              <br />
              Issued: 02 – 03 June, 2026
            </p>
          </a>
        </li>

        <li>
          <a
            title="SQL (Advanced) Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.SQLAdvanced}
          >
            • SQL (Advanced) Certificate
            <p>
              HackerRank 
              <br />
              Issued: 02 – 03 June, 2026
            </p>
          </a>
        </li>

        <li>
          <a
            title="Python for Data Science, AI and Development Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.PythonforDataScienceAIandDevelopment}
          >
            • Python for Data Science, AI and Development
            <p>
              Authorized by IBM and offered through Coursera
              <br />
              Issued: 30 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="Machine Learning with Python Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.MachineLearningwithPython}
          >
            • Machine Learning with Python
            <p>
              Authorized by IBM and offered through Coursera
              <br />
              Issued: 30 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="Databases and SQL for Data Science with Python Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.DatabasesandSQL}
          >
            • Databases and SQL for Data Science with Python
            <p>
              Authorized by IBM and offered through Coursera
              <br />
              Issued: 30 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="Data Analysis and Visualization with Power BI Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.PowerBI}
          >
            • Data Analysis and Visualization with Power BI
            <p>
              Authorized by Microsoft and offered through Coursera
              <br />
              Issued: 24 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="Data Modeling in Power BI Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.DataModeling }
          >
            • Data Modeling in Power BI
            <p>
              Authorized by Microsoft and offered through Coursera
              <br />
              Issued: 22 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="Problem Solving (Basic) Certificate Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.ProblemSolvingBasic}
          >
            • Problem Solving (Basic) Certificate
            <p>
              HackerRank
              <br />
              16 December, 2025
            </p>
          </a>
        </li>

                <li>
          <a
            title="Problem Solving (Intermediate) Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.ProblemSolvingIntermediate}
          >
            • Problem Solving (Intermediate) Certificate
            <p>
              HackerRank
              <br />
              16 December, 2025
            </p>
          </a>
        </li>

        <li>
          <a
            title="BSA Divisional Science Olympiad Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.BAS}
          >
            • BSA Divisional Science Olympiad
            <p>
              Bangladesh Academy of Sciences (BAS)
              <br />
              Issued: 9 January, 2015
            </p>
          </a>
        </li>

        <li>
          <a
            title="13th Regional Scout Rally Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.Scout}
          >
            • 13th Regional Scout Rally
            <p>
              Bangladesh Scouts
              <br />
              Issued: Dec 2012
            </p>
          </a>
        </li>

        <li>
          <a
            title="Volunteering Certificate"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.courses.Volunteering}
          >
            • General Member - Volunteering Certificate
            <p>
              WUBian Students Society - WUB SS
              <br />
              Issued: Apr 2021 - Mar 2022
            </p>
          </a>
        </li>

        {/*  <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.IntroduccionAPIRest}
          >
            • Escuela Js - Platzi - 20%
          </a>
        </li> */}
      </ul>
    </>
  );
}

function Experience() {
  return (
    <div className={styles.experienceSection}>
      <h2>Junior Data Analyst (10 Apr 2025 – Present) (Remote)</h2>
      <h4>MERKLE</h4>
      <span>Address: London Area, United Kingdom.</span>
      <p>
        Merkle is a leading CXM and media company with over 10K+ professionals
        globally. It's a part of Dentsu International.
        <br />
        Developed a strategic product line based on analysis of ad campaigns,
        clickstream, and survey data, addressing rising demand. Used time series
        forecasting (92% accuracy) to optimize budgets and ran A/B tests with
        statistical rigor, achieving a 20% MoM conversion lift.
      <br />
      <br />
      <h2>Entry - level Data Analyst (January 2024 – March 2025) (Remote)</h2>
      <h4>iQuanti</h4>
      <span>Address: Jersey City, NJ.</span>
      <p>
        iQuanti is a data-driven digital marketing analytics & solutions
        provider for the top 100 global brands.
        <br />
        Drove ~100% website growth and a 30% conversion lift via market research
        and online pages. Delivered analytics training (SQL, Excel, Power BI,
        Python). Enhanced merchandising dashboard through data integration and
        feature improvements.
      </p>
    </div>
  );
}

function Resume() {
  return (
    <>
      <h2>Personal Resume</h2>
      <p>Go to the contact section.</p>
      <button type="button" className="boxShadow" disabled>
        DOWNLOAD RESUME {href: 'https://github.com/tanmoy-khan-akash/Tanmoy-Khan-Akash-Resume/blob/main/Tanmoy%20Khan%20Akash%20-%20(Resume).pages.pdf'}
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Updated January 05, 2025</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="Tanmoy Khan Akash Profile"
              className={styles.img}
            />
            <h1>{'<Tanmoy Khan Akash/>'}</h1>
            <br />
            <p>Data Science & Analytics</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            {/* <span>Actualizado el 5 de Marzo, 2022</span> */}
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="education"
                >
                  formación
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificates"
                >
                  Certificados
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experience"
                >
                  Experiencia
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="resume"
                >
                  Resume
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Certificates />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <Resume />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
