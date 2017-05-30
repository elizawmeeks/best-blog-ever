module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
          src: ['../js/**/*.js'],
          dest: '../dist/app.js'
      },
      options: {
          transform: ['hbsfy'],
          browserifyOptions: {
            paths: ["./node_modules"]
          }
      }
    },
    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"$": true}, //name value pairs, allows to define global vars used in many files.
        browserify: true,
        ignores: ["../js/jquery.js", "../js/materialize.js"]
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/main.css': '../scss/main.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'], 
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};