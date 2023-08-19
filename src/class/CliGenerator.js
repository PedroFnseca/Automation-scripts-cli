import yargs from "../lib/yargs.cjs";
import FileManager from "./FileManager.js";

class Cli {
  constructor() {
    this.commands = [];
    this.yargsInstance = yargs;
    this.fileManager = new FileManager();
  }

  addCommand(command, description, handler) {
    this.commands.push({ command, description, handler });
    return this;
  }

  createDefaultCommands() {
    this.yargsInstance.command(
      'upload <filePath>',
      'Make the upload of the file to the user.json', // Descrição aqui
      (yargs) => {
        yargs.positional('filePath', {
          describe: 'The path of the file to upload',
          type: 'string',
        });
      },
      (argv) => {
        this.fileManager.uploadConfig(argv.filePath);
      }
    );    

    this.yargsInstance.command(
      'showfile',
      'Show the user.json file',
      () => {
        this.fileManager.showConfigFile();
      })
  }

  init() {
    this.createDefaultCommands();

    this.yargsInstance
      .demandCommand(1, 'You need at least one command before moving on\n')
      .strict()
      .help()
      .epilog('For more information, visit https://github.com/PedroFnseca/Automation-scripts-cli#readme')
      .argv;
  }
}

export default Cli;
