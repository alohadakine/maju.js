all: concat minify
concat:
	cat src/re.js src/re/*.js > dist/re.js
minify:
	minify dist/re.js > dist/re.min.js
