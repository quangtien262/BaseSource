var path = require('path');
module.exports = config();

///////

function config() {

    // MAIN PATHS
    var paths = {
        app: '../app/',
        components: 'components/',
        markup: 'jade/',
        styles: 'less/',
        scripts: 'js/'
    }

    var config = {

        paths: paths,

        // SOURCES CONFIG
        source: {
            scripts: [
                paths.components + 'app.js',
                paths.components + '**/*.js'
            ],
            templates: {
                index: [paths.components + 'index.*'],
                views: [
                    paths.components + '**/*.html',
                    paths.components + '**/*.jade',
                    '!' + paths.components + '*/*.layout.jade',
                    '!' + paths.components + '*/*.tpl.jade'
                ],
                watch: [
                    paths.components + '**/*.html',
                    paths.components + '**/*.jade'
                ]
            },
            styles: {
                app: [
                    paths.components + 'app.less',
                    paths.components + '**/*.less'
                ],
                watch: [paths.components + '**/*']
            },
            images: [
                'images/**/*',
                paths.app + 'vendor/mjolnic-bootstrap-colorpicker/dist/img/**/*',
                paths.app + 'vendor/datatables/media/images/**/*',
                paths.app + 'vendor/x-editable/dist/bootstrap3-editable/img/**/*',
                paths.app + 'vendor/blueimp-gallery/img/**/*'
            ],
            fonts: [
                // - All font files
                // paths.app + 'vendor/**/*.{eot,svg,ttf,woff,woff2}'
                // - Glyphicons
                // paths.app + 'vendor/bootstrap/dist/fonts/' + '**/*.{eot,svg,ttf,woff,woff2}',
                // - Font Awesome
                // paths.app + 'vendor/font-awesome/fonts/' + '**/*.{eot,svg,ttf,woff,woff2}',
                paths.app + 'vendor/ionicons/fonts/' + '**/*.{eot,svg,ttf,woff,woff2}',
                paths.app + 'vendor/summernote/dist/font/' + '**/*.{eot,svg,ttf,woff,woff2}'
            ]
        },

        // BUILD TARGET CONFIG
        build: {
            scripts: paths.app + 'js',
            styles: paths.app + 'css',
            templates: {
                index: '../',
                views: paths.app
            },
            images: paths.app + 'img',
            fonts: paths.app + 'fonts'
        },

        // PLUGINS OPTIONS

        prettifyOpts: {
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'pre', 'code']
        },

        jadeOpts: {
            pretty: true
        },

        uglify: {
            preserveComments: 'some'
        },

        uglifyVendor: {
            preserveComments: false,
            mangle: {
                except: ['$super'] // rickshaw requires this
            }
        },

        minifyCss: {
            processImport: false,
            keepSpecialComments: 0
        }

    }

    return config;
} // config()