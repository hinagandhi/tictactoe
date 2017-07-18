import path from 'path'
import webpack from 'webpack';

export default{
	
	entry: 
	[
	 'webpack-hot-middleware/client?reload=true', 
	  path.join(__dirname,'/client/index.js'), // giving client side file path
	],
	
	// webpack middleware will send bundle.js file from memory so path is /
	
	output: {
		filename: "bundle.js",
		path: '/',
		publicPath: '/'
	},
   
   // plugins for react hot reloading to enjoy magic of not refreshing page

	plugins: [
	   new webpack.NoErrorsPlugin(),
	   new webpack.optimize.OccurrenceOrderPlugin(),
	   new webpack.HotModuleReplacementPlugin()
	],

	// webpack does not know anything about js files configuration 

    module: {
    	loaders: [
    	{
    		test: /\.js$/, // include files with js extension
    		include: path.join(__dirname, 'client'), // client side files in client folder
    		loaders: [ 'babel-loader']  // loader is babel
    	},
        
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            //include: /flexboxgrid/ 
        }

    	]
    },
    resolve: {
    	extensions: ['.js', '.css'] // babel loader will transpile .js files
    }
}