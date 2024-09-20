// experience
// education
// coursework
// projects

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
  ::----=#%%%%%%%%%*==+#%%##%###
  ---=+#%%%%%%%@@@%%%%%%%%%%%%##
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
          My github profile (and the source for this website) is:{" "}
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
      ];
      let str = "I am proficient in the following languages:\n\n";
      for (let i = 0; i < toolsArr.length; i++) {
        str += toolsArr[i] + "\n";
      }
      return str;
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
