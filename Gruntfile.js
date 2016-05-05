module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! Copy by Dome <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            built: {
                src: 'src/**/*.js',
                dest: 'build/js/all.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqnull: true,
                eqeqeq: true,
                undef: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            all: ['Gruntfile.js', 'src/js/*.js']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.html', 'img/*'],
                        dest: 'build/',
                        filter: 'isFile'
                    }
                ]

            }
        },
        watch: {
            script: {
                files: ['src/**/*.js', 'src/**/*.css', 'src/**/*.html'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }

        },
        clean: ['build/**']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['clean', 'jshint', 'copy', 'uglify']);

};