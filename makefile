all: concat construct minify
concat:
	cat src/re.js src/re/*.js > dist/re.js
construct:
	echo "window.re = new window.re();" >> dist/re.js
minify:
	minify dist/re.js > dist/re.min.js
