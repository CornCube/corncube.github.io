// fortune
// play music
// resume
// weather
// guess
// roll

// tools
// skills
// interests
// experience
// education
// coursework
// projects

import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

export const GetCommandOutput = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const commands = {
    help: () => {
      const commandList = Object.keys(commands).join("\n");
      return `Here are all the available commands: \n\n${commandList}`;
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
    about: () => {
      return "Hello! I'm Manas Malla.\nThanks for checking out my terminal styled page!\nEnter 'help' for a list of available commands.";
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
          My github profile (and the source for this website) is at:{" "}
          <a href="https://github.com/CornCube">https://github.com/CornCube</a>
        </div>
      );
    },
    linkedin: () => {
      return (
        <div>
          My linkedin profile is:{" "}
          <a href="https://www.linkedin.com/in/manas-malla/">
            https://www.linkedin.com/in/manas-malla/
          </a>
        </div>
      );
    },
    resume: () => {
      return (
        <div>
          You can find my current resume here:{" "}
          <a href="https://drive.google.com/file/d/1wu4N1g3S-amh6CpcBisv7I5AC5Od7SmI/view?usp=drive_link">
            resume
          </a>
        </div>
      );
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
