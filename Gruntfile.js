"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
    	style: {
    		files: {
    			"css/style.css": "less/*.less"
    		}
      }
    },

    postcss: {
    	style: {
    		options: {
    			processors: [
    				require("autoprefixer")()
    		]
    	},
    	src: "css/*.css"
    }
   },

  browserSync: {
    server: {
    	bsFiles: {
    		 src: [
    		 	"*.html",
    		 	"css/*.css"
    		 ]        			
    		},
    		options: {
    			server: "./.",
    			watchTask: true,
    			notify: false,
    			open: true,
    			cors: true,
    			ui: false
    		}
    	}
    },

    watch: {
    	html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
    	style: {
    		files: ["less/**/*.less"],
    		tasks: ["less", "postcss"]
    	}
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-postcss");

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", ["less", "postcss"]);
};
 