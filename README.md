# grunt-command-run

Grunt plugin for easily run command line tools for your files.

Have an external tool and want to process your source file with it? Use this plugin!

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


### Usage Example

XSLT templates compilation:

```js
grunt.initConfig({
    // The task
    command_run: {
        // Your target
        compile_xslt: {
            options: {
                // Callback function that returns command for processing one of your files
                getCommand: function(filepath, dest) {
                    // Do some stuff, e.g. take just filename from relative filepath
                    var fileName = filepath.split("/").pop();
                    // Return command line for processing the file
                    return './tools/msxsl.exe ' + file + ' schema.xsl -o ' + dest + fileName;
                },
                // Output only errors
                quiet: true
            },
            // Standart files declaration
            files: [{
                expand: false,
                src: ['templates/*.*'],
                dest: 'build/'
            }],
        },
    },
});
```

### Options

#### options.getCommand
Type: `function`

Callback function that returns command line which would be executed.

##### Parameters:
* **filepath**: Path to the file that processing now
* **dest**: Destination for the file (Depends on "expand" parameter in your files declaration, see below)

#### files

Files must be described as usual in Grunt. You can read about it [here](http://gruntjs.com/configuring-tasks#files).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

If you see any textual errors, please feel free to correct.

## Release History

* **0.1.1** Quiet mode
* **0.1.0** First version