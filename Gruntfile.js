module.exports = function (grunt) {

    // load all tasks in all plugins
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // grunt-karma config
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        // grunt-contrib-watch config
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            compass: {
                files: ['src/main/resources/scss/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            }
        },

        wiredep: {
            task: {
                src: [
                    'src/main/webapp/index.html',
                    'src/main/resources/scss/main.scss'
                ],

                options: {}
            }
        },

        // grunt-contrib-compass config
        compass: {
            options: {
                importPath: 'src/main/webapp/bower_components',
                sassDir: 'src/main/resources/scss',
                cssDir: 'src/main/webapp/assets/css',
                javascriptsDir: 'src/main/webapp/scripts',
                imagesDir: 'src/main/webapp/assets/images',
                generatedImagesDir: 'src/main/webapp/assets/images/generated',
                httpImagesPath: '/assets/images',
                httpGeneratedImagesPath: '/assets/images/generated',
                fontsDir: 'src/main/webapp/assets/fonts',
                httpFontsPath: '/assets/fonts',
                relativeAssets: false
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            },
            dev: {}
        },


    });

    // when we type 'grunt test'
    grunt.registerTask('test', [
        'wiredep',
        'compass:dev',
        'karma'
    ]);

    // when we type 'grunt build'
    grunt.registerTask('build', [
        'compass:dist',
    ]);

    // default behavior when we type just 'grunt'
    grunt.registerTask('default', ['test', 'build']);
};