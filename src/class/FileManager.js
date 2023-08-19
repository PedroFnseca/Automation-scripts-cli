import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

class FileManager {
  constructor() {
    this.currentDir = process.cwd();
    this.pathConfigFile = path.join(this.currentDir, 'src/config/user.json');
  }

  _validate(filePath) {
    const possibleErrors = [
      {
        message: 'The file does not exist',
        validation: !fs.existsSync(filePath),
      },
      {
        message: 'The file extension must be .json',
        validation: path.extname(filePath) !== '.json',
      }
    ];

    possibleErrors.forEach(({ message, validation }) => {
      if (validation) {
        console.log(chalk.red(message));
        process.exit(1);
      }
    });

    fs.writeFileSync(this.pathConfigFile, '{}');
  }

  uploadConfig(filePath) {
    const absolutePath = path.resolve(this.currentDir, filePath);

    this._validate(absolutePath);

    const data = fs.readFileSync(absolutePath, 'utf-8');

    const json = JSON.parse(data);

    fs.writeFileSync(this.pathConfigFile, JSON.stringify(json, null, 2));

    console.log(chalk.green('Upload successfully!'));
  }

  pullConfig() {
    if (!fs.existsSync(this.pathConfigFile)) {
      console.log(chalk.red('There is no file to download'));
      process.exit(1);
    }

    const data = fs.readFileSync(this.pathConfigFile, 'utf-8');

    const json = JSON.parse(data);

    return json;
  }

  showConfig() {
    const configFile = this.pullConfig();

    console.log(JSON.stringify(configFile, null, 2));
  }
}

export default FileManager;
