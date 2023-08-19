import FileManager from './class/FileManager.js';

const fileManager = new FileManager();

fileManager.uploadConfig('C:/Users/pedro/Documents/test.formulario_template.json');

fileManager.showConfigFile();