all: coffee concat construct minify
coffee:
	coffee -c src
concat:
	cat src/yaju.js src/yaju/*.js > dist/yaju.js
construct:
	echo "window.yaju = new window.yaju();" >> dist/yaju.js
minify:
	minify dist/yaju.js > dist/yaju.min.js
