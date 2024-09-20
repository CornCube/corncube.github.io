import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

export const GetCommandOutput = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const ascii = `
  ..-:..........................
  ..............-*##%*+==-:.....
  ...........:*%%@@@@%%####=....
  ......    .#%%@@@@%%%#%%%*:...
  .......   *@@@@%##*+===*%#*:..
  ::....... -@@%##**++**+=#%*-..
  :::::..-:..=####%#++#+=-*#=...
  :::--.--....:***#*=-=+=--=....
  -::-:--:.:-:.+**##*===--:.....
  ::=---::=-...-*##**+=+=-:.....
  :==:-::=:.... -*##*+====::....
  --::::::::--::*#####*****++...
  :::::::--====%==%######*-*+==:
  ::::---=-=#%%%%**###**+#*#*###
  :::-=--:+%##%%%%++*-=+*#%#####
  `;

  const commands = {
    about: () => {
      return "Hello! I'm Manas Malla.\nThanks for checking out my terminal styled page!\nEnter 'help' for a list of available commands.";
    },
    help: () => {
      const commandList = Object.keys(commands).join("\n");
      return `Here are all the available commands: \n\n${commandList}`;
    },
    neofetch: () => {
      return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <pre style={{ marginRight: "15px" }}>{ascii}</pre>
          <div>
            <br />
            <strong>manas@corncube.github.io</strong>
            <br />
            -------------------------
            <br />
            <strong>Name:</strong> Manas Malla
            <br />
            <strong>Resume:</strong>{" "}
            <a
              href="https://drive.google.com/file/d/1wu4N1g3S-amh6CpcBisv7I5AC5Od7SmI/view?usp=drive_link"
              style={{ color: "orange" }}
              target="_blank"
            >
              View Resume
            </a>
            <br />
            <strong>Alternate Website:</strong>{" "}
            <a
              href="https://manas@corncube.github.io"
              style={{ color: "orange" }}
              target="_blank"
            >
              Portfolio
            </a>
            <br />
            -------------------------
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:mmalla2002@gmail.com" style={{ color: "orange" }}>
              mmalla2002@gmail.com
            </a>
            <br />
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/CornCube" style={{ color: "orange" }}>
              github.com/CornCube
            </a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/manas-malla"
              style={{ color: "orange" }}
            >
              linkedin.com/in/manas-malla
            </a>
            <br />
            -------------------------
            <br />
            <strong>Location:</strong> Nashville, TN
            <br />
            <strong>Education:</strong> Vanderbilt University
            <br />
            <strong>Degree:</strong> B.S. in Computer Science & Mathematics
            <br />
            <strong>Hobbies:</strong> Mystery Novels / Plastic Model Kits /
            Electronics / Puzzle Games / 3D Printing / Traveling
          </div>
        </div>
      );
    },
    email: () => {
      return (
        <div>
          You can reach me at:{" "}
          <a href="mailto:mmalla2002@gmail.com">mmalla2002@gmail.com</a>
        </div>
      );
    },
    github: () => {
      return (
        <div>
          My github profile is:{" "}
          <a
            href="https://github.com/CornCube"
            style={{ color: "orange" }}
            target="_blank"
          >
            https://github.com/CornCube
          </a>
        </div>
      );
    },
    linkedin: () => {
      return (
        <div>
          My linkedin profile is:{" "}
          <a
            href="https://www.linkedin.com/in/manas-malla/"
            style={{ color: "orange" }}
            target="_blank"
          >
            https://www.linkedin.com/in/manas-malla/
          </a>
        </div>
      );
    },
    resume: () => {
      return (
        <div>
          You can find my current resume{" "}
          <a
            href="https://drive.google.com/file/d/1wu4N1g3S-amh6CpcBisv7I5AC5Od7SmI/view?usp=drive_link"
            style={{ color: "orange" }}
            target="_blank"
          >
            here
          </a>
        </div>
      );
    },
    languages: () => {
      const languagesArr = [
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "Assembly",
        "C",
        "Kotlin",
        "PHP",
        "SQL",
        "R",
      ];
      let str = "I am proficient in the following languages:\n\n";
      for (let i = 0; i < languagesArr.length; i++) {
        str += languagesArr[i] + "\n";
      }
      return str;
    },
    tools: () => {
      const toolsArr = [
        "PyTorch",
        "FastAPI",
        "Docker",
        "Apache Kafka",
        "Express",
        "NestJS",
        "React",
        "Vite",
        "Selenium",
        "Flask",
        "Github/Gitlab",
        "Jira",
      ];
      let str = "I am proficient with the following tools:\n\n";
      for (let i = 0; i < toolsArr.length; i++) {
        str += toolsArr[i] + "\n";
      }
      return str;
    },
    experience: () => {
      return (
        <div>
          <br />
          <strong>Iron Galaxy Studios</strong>
          <br />
          <i>Software Development Intern</i> (May 2024 - August 2024)
          <ul>
            <li>
              - Developed a brick breaker clone using 68K assembly with the
              EASy68K simulator (
              <a
                href="https://github.com/CornCube/68k-brickbreaker"
                style={{ color: "orange" }}
                target="_blank"
              >
                here
              </a>
              )
            </li>
            <li>
              - Fixed several UI bugs in an unreleased game that utilizes C++
              and Unreal Engine 4
            </li>
            <li>
              - Implemented various online-facing screens based on artist
              mockups
            </li>
          </ul>
          <br />
          <strong>IMC Companies</strong>
          <br />
          <i>Software Development Intern</i> (May 2022 - August 2023)
          <ul>
            <li>
              - Created an automated process running in a docker-in-docker setup
              that logs into a website, obtains relevant data, and updates an
              internal website with the new data
            </li>
            <li>
              - Devised a Selenium script to circumvent Google's reCAPTCHA v2,
              which involved creating an image classification model off of the
              Resnet-18 architecture
            </li>
            <li>
              - Designed a file logging system utilizing Apache Kafka to flag
              outdated files
            </li>
            <li>
              - Built multiple ReactJS frontend pages with Ant Design and Redux
              for features like shipment timeline views, file logging, and
              process resubmission
            </li>
            <li>
              - Designed and implemented FastAPI endpoints integrated with
              PostgreSQL and GraphQL to power key functionalities, including an
              optimized resending process and a responsive React search bar
              component
            </li>
          </ul>
        </div>
      );
    },
    education: () => {
      return (
        <div>
          <br />
          <strong>Vanderbilt University, School of Engineering</strong> (August
          2020 - May 2024)
          <br />
          Bachelor of Science in Computer Science & Mathematics, Minor in Data
          Science
        </div>
      );
    },
    coursework: () => {
      const coursesArr = [
        "Program Design and Data Structures",
        "Algorithms",
        "Data Visualization",
        "Computer Networks",
        "Database Management",
        "Autonomous Vehicles",
        "Applied Machine Learning",
        "Reverse Engineering for Cybersecurity",
        "Deep Learning",
        "Operating Systems",
        "Programming Languages",
        "Fundamentals of Data Science",
        "Calculus I-III",
        "Ordinary Differential Equations",
        "Linear Algebra",
        "Applied Statistics",
      ];
      let str = "Here's an overview of the courses I've taken:\n\n";
      for (let i = 0; i < coursesArr.length; i++) {
        str += coursesArr[i] + "\n";
      }
      return str;
    },
    projects: () => {
      return (
        <div>
          <br />
          <ul>
            <li>
              <a
                href="https://github.com/CornCube/captcha-solver"
                style={{ color: "orange" }}
                target="_blank"
              >
                captcha-solver
              </a>{" "}
              - a project that uses image classification to break Google
              reCAPTCHA v2
            </li>
            <li>
              <a
                href="https://github.com/CornCube/earthlink-app"
                style={{ color: "orange" }}
                target="_blank"
              >
                earthlink-app
              </a>{" "}
              - a social networking app written in Kotlin, allowing users to
              leave messages in geographical locations
            </li>
            <li>
              <a
                href="https://github.com/CornCube/68k-brickbreaker"
                style={{ color: "orange" }}
                target="_blank"
              >
                68k-brickbreaker
              </a>{" "}
              - a brick breaker clone written from the ground up in 68k
              assembly, along with a level editor in Python
            </li>
            <li>
              <a
                href="https://github.com/CornCube/tempo-shift"
                style={{ color: "orange" }}
                target="_blank"
              >
                tempo-shift
              </a>{" "}
              - a Python utility that lets users download/convert songs into
              different bpms
            </li>
            <li>
              <a
                href="https://github.com/CornCube/corncube.github.io"
                style={{ color: "orange" }}
                target="_blank"
              >
                personal-website
              </a>{" "}
              - this website!
            </li>
          </ul>
        </div>
      );
    },
    theme: (args: string[]) => {
      if (args.length === 0 || (args[0] !== "light" && args[0] !== "dark")) {
        return `'theme' expects an argument light | dark`;
      }

      if (args[0] === "light" && theme !== "light") {
        toggleTheme();
        return "Switched to light theme.";
      } else if (args[0] === "dark" && theme !== "dark") {
        toggleTheme();
        return "Switched to dark theme.";
      }
    },
    echo: (args: string[]) => {
      if (args.length === 0) {
        return `'echo' expects an argument`;
      } else {
        return args.join(" ");
      }
    },
  };

  const executeCommand = (commandName: string, args: string[]) => {
    const command = commands[commandName as keyof typeof commands];

    if (command) {
      return command(args);
    } else {
      return `'${commandName}' is not recognized as an internal or external command.`;
    }
  };

  return executeCommand;
};
