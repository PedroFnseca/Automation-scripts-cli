import yargs from "../lib/yargs.cjs";
import FileManager from "./FileManager.js";
import Generator from "./Generator.js";

class Cli {
  constructor() {
    this.commands = [];
    this.yargsInstance = yargs;
    this.fileManager = new FileManager();
    this.generator = new Generator();
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
      'show',
      'Show the user.json file',
      () => {
        this.fileManager.showConfig();
      })
  }

  init() {
    this.yargsInstance
    .demandCommand(1, 'You need at least one command before moving on\n')
    .strict()
    .help()
    .epilog('For more information, visit https://github.com/PedroFnseca/Automation-scripts-cli#readme')
    .argv;

    this.createDefaultCommands();

    this.generator.init(this.yargsInstance);
  }
}

export default Cli;
