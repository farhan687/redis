module.exports = function(grunt) {
	grunt.initConfig({
		docbase: {
			def: {
				options: {
					generatePath: "docs_html/",
					generateSearchIndex : true,
					generateHtml : true,
					baseUrl: "./",
					urlToAccess: "http://localhost:9001/",
					assets: ['bower_components', 'styles', 'images', 'docbase-config.js'],
					checkLoadedSelector : '#navbar-collapse',
					endDocument: "<script>$(function(){  $('.search-form').searchAppbase('/search-index.json', true); })</script></html>"
				}
			},
			spa: {
				options: {
					onlysearchIndex: true,
					generatePath: "docs_html/",
					generateSearchIndex : true,
					generateHtml : true,
					baseUrl: "./",
					urlToAccess: "http://localhost:9001/",
					assets: ['bower_components', 'styles', 'images',],
					checkLoadedSelector : '#navbar-collapse',
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: './',
					protocol: 'http'
				}
			}
		},
		'gh-pages': {
			def: {
				options: {
					base: 'docs_html',
					user: {
						name: '',
						email: ''
					},
					repo: '',
					message: 'publish gh-pages (auto)',
					silent: false,
				},
				src: ['**']
			}
		},
		sass: { 
			dist: { 
				files: { 
					'styles/theme.css': 'styles/theme.scss',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-docbase');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task.
	
	var target = grunt.option('target') || 'def';
	
	grunt.registerTask('default', ['connect', 'sass', 'docbase:'+target]);
	grunt.registerTask('publish', ['connect', 'sass', 'docbase:'+target, 'gh-pages']);
	grunt.registerTask('spa', ['connect', 'sass', 'docbase:spa']);
	
};
