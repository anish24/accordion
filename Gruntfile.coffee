userhome = require 'userhome'
YAML = require 'yamljs'
module.exports = (grunt) ->
  sshKey = userhome ".ssh", "id_rsa"
  CSS_DIR = '/css'
  styles =
    scss: 'scss/styles.scss'
    css: 'css/styles.css'
  (require "load-grunt-tasks")(grunt)
  grunt.initConfig
    sass:
      options:
        sourceMap: true
        title: "sass"
        message: "sassy"
        sourceMappingURL:"css/styles.css.map"
      development:
        options:
          outputStyle: 'compressed'
        files:
          'css/styles.css' : 'scss/styles.scss'
    watch:
      styles:
        files: ['**/*.scss', '**/*.scss']
        tasks: ['sass']
        options:
          livereload: true

  grunt.registerTask 'default', ['sass','watch']
