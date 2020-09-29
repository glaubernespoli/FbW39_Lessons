Basic folder structure for an Express Application using the livereload and the node-sass-middleware modules.

>     root
>     ├── public
>     │   ├── css
>     │   │   └── main.css
>     │   ├── img
>     │   │   ├── img1.jpg
>     │   │   └── img2.jpg
>     │   │── js
>     │   │   └── main.js
>     │   └── index.html
>     ├── sass
>     │   └── main.scss
>     ├── src
>     │   └── index.js
>     ├── .gitignore
>     └── package.json

Important note about the SASS folder: [Learn how to properly structure it in order to keep it maintainable.](http://thesassway.com/beginner/how-to-structure-a-sass-project)

## Creating an User Snippet to generate the server file

By going to: ***File > Preferences > User Snippets*** and typing ***javascript***, you'll be prompted to the ***javascript.json*** file where you can create some JavaScript snippets.

The code below is a snippet with the ***!exs*** shortcut that will generate the server code compatible with the file structure presented above:

```json
"Create an Express Server":  {
	"prefix":  "!exs",
	"description":  "Creates an Express Server with Live Reload and SASS",
	"body":  [
		"const express = require('express');",
		"const livereload = require('livereload');",
		"const connectLivereload = require('connect-livereload');",
		"const path = require('path');",
		"const sassMiddleware = require('node-sass-middleware');",
		"",
		"const server = express();",
		"const lrServer = livereload.createServer({",
		"  \"extraExts\": \"scss\"",
		"});",
		"",
		"const PORT = ${1:PortNumber};",
		"const publicPath = path.join(__dirname, '../public');",
		"const sassFolder = path.join(__dirname, '../sass');",
		"",
		"/* Middleware */",
		"server.use(",
		" sassMiddleware({",
		" src: sassFolder,",
		" dest: path.join(publicPath, '/css'),",
		" debug: true,",
		" outputStyle: 'expanded',",
		" prefix: '/css'",
		" })",
		");",
		"",
		"server.use(connectLivereload());",
		"server.use(express.static(publicPath));",
		"lrServer.watch([publicPath, sassFolder]);",
		"",
		"server.listen(PORT, () => console.log(`Server up on port \\${PORT}.`));"
	]
}
