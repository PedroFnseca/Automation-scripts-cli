import { spawn } from 'child_process';
import FileManager from "./FileManager.js";

class Generator {
  constructor() {
    this.fileManager = new FileManager();
  }

  init(yargsInstance) {
    const commands = this.fileManager.pullConfig();

    const cli = yargsInstance

    commands.forEach((command) => {
      cli.command(
        command.name,
        command.description,
        (yargs) => {
          if (command.options) {
            command.options.forEach((option) => {
              yargs.option(option.name, {
                alias: option.alias,
                describe: option.description,
                demandOption: option.required,
              });
            });
          }
        },
        (argv) => {
          const terminalCommands = command.exec;

          terminalCommands.forEach((cmd) => {
            spawn(cmd, {
              shell: true
            });
          });
        }
      );
    });

    cli.argv;
  }
}

export default Generator;