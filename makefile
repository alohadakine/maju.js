all: coffee concat
coffee:
	coffee -c src
concat:
	cat src/maju.js src/maju/*.js > dist/maju.js
