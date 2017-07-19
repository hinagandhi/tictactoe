// to run express server
import express from 'express'; 
import path from 'path'; // path package
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express(); // initialize our app as express for all the functions
let port = process.env.port || 3000;
// configuring webpackmiddleware that uses webpackConfig
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req,res) => { // request to catch all routes
   res.sendFile(path.join(__dirname, './index.html')); //redirect to index page
});

// running application on localhost:3000

//app.listen(3000, () => console.log('Running on localhost:3000'))
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
