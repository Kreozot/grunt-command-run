# grunt-command-run

> Grunt plugin for easily run command line tools for your files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-command-run --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-command-run');
```

## The "command_run" task

### Overview
In your project's Gruntfile, add a section named `command_run` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    command_run: {
        your_target: {
            options: {
                getCommand: function(file, dest) {
                    var commandLine = 'tool ' + file + ' ' + dest;
                    return commandLine;
                }
            },
            files: ['./path/file'],
        },
    },
});
```

### Options

#### options.getCommand
Type: `function`

Callback function that returns command line which would be executed.

##### Parameters:
* **file**: Path to the file that processing now
* **dest**: Destination for the file


### Usage Examples

#### XSLT templates compilation

```js
grunt.initConfig({
    command_run: {
        your_target: {
            options: {
                getCommand: function(file, dest) {
                    var fileName = file.split("/").pop();
                    return './tools/msxsl.exe ' + file + ' schema.xsl -o ' + dest + fileName;
                }
            },
            files: [{
                expand: false,
                src: ['templates/*.*'],
                dest: 'build/'
            }],
        },
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
