var elixir = require('laravel-elixir');

elixir.config.assetsDir = './';

var bower_path = "./bower_components";

var paths = {
  'bootstrap'  : bower_path + "/bootstrap-sass-official/assets",
  'flatui'	   : bower_path + "/flat-ui-sass/vendor/assets",
};
	
elixir(function(mix) {

    mix.sass('app.scss', null, {
    	includePaths: [
    		paths.bootstrap + '/stylesheets',
    		paths.flatui + '/stylesheets'
    	]
    }).copy(paths.bootstrap + '/fonts', 'public/fonts');

});

