# Automation-script-cli

### The Automation-script-cli is a powerful command-line tool designed to simplify task automation using terminal scripts. It allows users to define custom commands in a JSON configuration file, making it easy to execute complex operations with a single command.

---

<br>

## Getting Started

### Installation

```bash
npm install -g automation-scripts-cli
```

### Upload configuration file

```bash
automation-scripts-cli --upload <path-to-config-file>
```

### Execute command

```bash
automation-scripts-cli --command-name
```

<br>

## Example configuration
> The configuration file must be a JSON file with the following structure:

```json
[
  {
    "name": "example",
    "description": "Description of the example",
    "options": [
      {
        "name": "--verbose",
        "alias": "-v",
        "description": "Activate verbose mode"
      },
      {
        "name": "--output",
        "alias": "-o",
        "description": "Specify the output file",
        "required": true
      }
    ],
    "exec": [
      "echo 'Executing the example command'", 
      "node script.js example"
    ]
  }
]
```

<br>

<div>

| Field         | Type            | Value                                   |
| ------------- | --------------- | --------------------------------------- |
| `name`        | String          | example                                 |
| `description` | String          | Description of the example              |
| `options`     | Array -> object |                                         |
|               | String          | 1. `name` --verbose                     |
|               | String          | - `alias` -v                            |
|               | String          | - `description` Activate verbose mode   |
|               | String          | 2. `name` --output                      |
|               | String          | - `alias` -o                            |
|               | String          | - `description` Specify the output file |
|               | Boolean         | - `required` true                       |
| `exec`        | Array -> String |                                         |
|               | String          | 1. echo 'Executing the example command' |
|               | String          | 2. node script.js example               |

</div>

<br>

## More examples of configuration files
> in this repository: [examples](./examples/) have more examples of configuration files

- [x] [backup](./examples/backup.json) - Backup files and folders
- [x] [start development](./examples/start-development.json) - Start development environment

<br>