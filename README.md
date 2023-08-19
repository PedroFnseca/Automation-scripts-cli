# Automation-script-cli
> ## The Automation-script-cli is a powerful command-line tool designed to simplify task automation using terminal scripts. It allows users to define custom commands in a JSON configuration file, making it easy to execute complex operations with a single command.

<br>

## Example configuration

```json
[
  {
    "name": "example",
    "shortcut": "e",
    "description": "this is an example description",
    "command": [
      "echo 'hello world'",
      "echo 'this is an awesome cli tool!'"
    ],
    "options": {
      "newTab": false,
      "newWindow": false
    },
    "args": [
      {
        "name": "arg1",
        "description": "this is an example argument",
        "required": true
      },
      {
        "name": "arg2",
        "description": "this is an example argument",
        "required": false
      }
    ]
  }
  // add more configurations/options here
]
```

<br>

# Getting Started

## Installation

```bash
npm install -g automation-scripts-cli
```

## Upload configuration file

```bash
automation-scripts-cli --upload <path-to-config-file>
```

## Execute command

```bash
automation-scripts-cli --command-name
```

## General

| Option   | Description                  | Default | Required | Type   | Example                |
| -------- | ---------------------------- | ------- | -------- | ------ | ---------------------- |
| name     | name to call the command     | -       | true     | string | "example"              |
| shortcut | shortcut to call the command | -       | false    | string | "h"                    |
| command  | command to execute           | -       | true     | array  | ["echo 'hello world'"] |
| options  | options to configure         | -       | false    | object | { "newTab": false }    |
| args     | arguments to configure       | -       | false    | array  | [{ "name": "arg1" }]   |

<br>

## Options

| Option    | Description                   | Default | Required | Type    | Example |
| --------- | ----------------------------- | ------- | -------- | ------- | ------- |
| newTab    | open a new tab on terminal    | false   | false    | boolean | true    |
| newWindow | open a new window on terminal | false   | false    | boolean | true    |

<br>