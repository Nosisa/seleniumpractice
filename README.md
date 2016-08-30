# seleniumpractice

1. Install Node.js
2. Install Grunt-cli (Get more details here)





Example project to setup protractor
1. npm init
2. set up git repository
3. npm install protractor —save-dev
4.add Gruntfile.js
 (module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'specs/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
)

5.npm install grunt-contrib-jshint --save-dev

6.npm install grunt-protractor-runner --save-dev

7. touch cons.js
8. touch spec.js
9. node ./node_modules/protractor/bin/webdriver manager update
10. node ./node_modules/protractor/bin/webdriver-manager start
11. open new tab—npm test


Git process
1. create git repo
2. clone
3. git status
4. git add 
5. git commit
6. git remote set-url origin https://Nosisa@github.com/Nosisa/seleniumpractice.git
7. git push
