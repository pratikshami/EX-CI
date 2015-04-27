module.exports = function(grunt) {


  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'D:/projects/project/public/controllers.js','server.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
	
    uglify: {
      options: {
      mangle: false
      },
    my_target: {
      files: {
        'dest/output.min.js': ['D:/projects/project/public/controllers.js','server.js']
      }
    }
  },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	

 /* plato: {
  your_task: {
    options : {
      complexity : {
        logicalor : false,
        switchcase : false,
        forin : true,
        trycatch : true
      }
    },
    files: {
      'reports': ['D:/projects/project/public/controllers.js']
    }
  }
}*/
plato: {
  your_task: {
    options : {
      jshint : grunt.file.readJSON('D:/projects/project/node_modules/grunt-plato/.jshintrc')
    },
    files: {
      'reports': ['D:/projects/project/public/controllers.js','server.js']
    }
  }
}

});


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-plato');//for stataic analysic report

 grunt.registerTask('default', ['uglify','jshint','plato']);
 grunt.registerTask('report', ['plato']); 
    grunt.registerTask('rupali', ['jshint']);

};