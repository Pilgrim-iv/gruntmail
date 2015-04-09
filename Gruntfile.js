module.exports = function(grunt) {
  // Load grunt tasks automatically
require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

                    uncss: {  //ink supplies a vast array of css styles. This removes the ones not used
                      dist: {
                        src: ['sidebar-hero.html'],
                        dest: 'dist/needed-styles.css',
                        options: {
                          report: 'min' // optional: include to report savings
                        }
                      }
                    },

                    processhtml: {    //merge css files (see top of html file for injection)
                      dist: {
                        files: {
                          'dist/email-merged.html': ['sidebar-hero.html']
                        }
                      }
                    },

                    premailer: {  //makes css inline 
                      main: {
                        options: {
                          verbose: true
                        },
                        files: {
                          'dist/email-inline.html': ['dist/email-merged.html']
                        }
                      }
                    },

                    copy: {  //copy the images to the distribution folder. Just for testing, real email will need links
                      main: {
                        src: ['images/*.jpg', 'images/*.png'],
                        dest: 'dist/',
                      },
                    },

                    autoprefixer: {  //add prefixes where applicable to 2 versions back and ie9 and 10
                      single_file: {
                        options: {
                          browsers: ['last 2 versions', 'ie 9', 'ie 10']
                        },
                        src: 'dist/needed-styles.css',
                        dest: 'dist/needed-styles.css'
                      }
                    }

  });

  // Default task(s).
  grunt.registerTask('default', ['autoprefixer']); //default css task. 
  grunt.registerTask('build',   ['uncss','processhtml','autoprefixer', 'premailer', 'copy']); // build task 
  grunt.registerTask('move',    ['copy']); // copy task
};