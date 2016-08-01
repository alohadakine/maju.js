all: coffee concat construct minify
coffee:
	coffee -c src
concat:
	cat src/maju.js src/maju/*.js > dist/maju.js
construct:
	echo "window.maju = new window.maju();" >> dist/maju.js
minify:
	minify dist/maju.js > dist/maju.min.js
