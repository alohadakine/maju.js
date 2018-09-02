re.js
=======

  **RE**usable

  **J**avaScript

  **S**nippets



## Methods

  - [re.adBlockEnabled](#readblockenabled)
  - [re.after](#reafter)
  - [re.ajax](#reajax)
  - [re.append](#reppend)
  - [re.attr](#reattr)
  - [re.before](#rebefore)
  - [re.compareJson](#recomparejson)
  - [re.create](#recreate)
  - [re.domready](#reomready)
  - [re.find](#refind)
  - [re.getUnixtime](#regetunixtime)
  - [re.getUrlParams](#regeturlparams)
  - [re.html](#rehtml)
  - [re.loadcss](#reloadcss)
  - [re.loadjs](#reloadjs)
  - [re.on](#reon)
  - [re.prepend](#reprepend)



### re.adBlockEnabled

Check if user is using an AdBlocker

```javascript
re.adBlockEnabled(function(adBlockEnabled){
        window.console.log("Client " + ((adBlockEnabled) ? "is" : "isn't") + " using AdBlock");
});
```



### re.after

Wrapper for appending elements `after` some element.

```javascript
var newListElement = re.create("li")
        .attr("style", "color:red;").html("New List Element");
// Appends a new list element after the 3rd li found in the DOM
re.find("li").get(2).after(newListElement);
```



### re.ajax

Simple ajax request wrapper.

```javascript
re.ajax({
        url: "/pokemon.json",
        method: "POST",
        cache: true,
        requestContentType: "application/x-www-form-urlencoded",
        headers: [
                {
                        key: "Foo",
                        value: "Moo"
                }
        ]
        params: {
                format: "json"
                query: "all"
        }
        cb: function( err, result ) {
                if (!err)
                        console.log(result);
        }
});
```



### re.append

Wrapper for `appendChild`.

```javascript
var newListElement = re.create("li")
        .attr("style", "color:red;").html("New List Element");
re.find("ul").get(0).append(newListElement);
```



### re.attr

Wrapper for `setAttribute` and `getAttribute`.

```javascript
// retrieve `href` value of first link
re.find("a").get(0).attr("href")

// set href value of first link
re.find("a").get(0).attr("href", "#foo");
```



### re.before

Wrapper for `insertBefore`.

```javascript
var newFirstListElement = re.create("li").html("First List Element");
// Insert `newFirstListElement` before the first `li` found.
re.find("li").get(0).before(newFirstListElement);
```



### re.compareJson

Compares to JSON structures and returns either `true` if they are _identical_
in terms of properties, or `false` if they don't have each others properties.

```javascript
var json1 = {
        foo: true,
        moo: false
};

var json2 = {
        foo: true,
        moo: false
};

var json3 = {
        foo: true,
        moo: true
};

var json4 = {
        foo: false,
        moo: false
};

// This should return true, because they are seen as "equal"
console.log(re.compareJson(json1, json2);

// This should return false, because they lack have the same
// properties, but not the same values for each property
console.log(re.compareJson(json3, json4);
```



### re.create

Wrapper for `document.createElement`.

```javascript
re.create("input")
        .attr("type", "text")
        .attr("placeholder", "E-Mail");
```



### re.domready

Simple domready wrapper.

```javascript
re.domready(function() {
        alert("dom is ready!");
});
```



### re.find

Advanced `querySelectorAll` with attaching convenience methods to elements.
This method always returns an array of objects and you either need to use the
`get` method or the `find("selector")[3]` element by index method to get the
element.

```javascript
re.find("ul").get(0)
        .find("li").get(2)
        .find("a").get(0)
        .on("click", function(evt) {
                evt.preventDefault();
                alert("click");
        });
```



### re.getUnixtime

Returns the current UNIX-Timestamp.

```javascript
console.log(re.getUnixtime());
```



### re.getUrlParams

Returns a URL params object.

```javascript
console.log(re.getUrlParams("index.php?param1=value1&param2=value2"));
```

Should return;

```json
{
        "param1": "value1",
        "param2": "value2"
}
```



### re.html

Wrapper for `innerHTML`.

```javascript
re.find("a").get(0).html("This is a Hyperlink.");
```



### re.loadcss

Easy to use CSS file loader.
Creates a `<link rel="stylesheet" href="">` tag and fires a callback function.

```javascript
re.loadcss("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.css", function(err, obj) {
        if (err)
                return console.log('error loading css file..');
        alert("all good..");
});
```

or multiple files at once..

```javascript
var cssfiles = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.css",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.css"
];
var loaded = [];
re.loadcss(cssfiles, function(err, obj) {
        if (err)
                return console.log("error loading css file..");
        loaded.push(obj.src);
        if (cssfiles.length === loaded.length)
                alert("all files loaded..");
});
```



### re.loadjs

Easy to use JavaScript file loader.
Create a `<script>` tag and fires a callback function.

```javascript
re.loadjs("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.js", function(err, obj) {
        if (err)
                return console.log('error loading js file..');
        alert("all good..");
});
```

or multiple files at once..

```javascript
var jsfiles = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"
];
var loaded = [];
re.loadjs(jsfiles, function(err, obj) {
        if (err)
                return console.log("error loading js file..");
        loaded.push(obj.src);
        if (jsfiles.length === loaded.length)
                alert("all files loaded..");
});
```

### re.on

Simple wrapper for addEventListener.
Each element that was returned by `re.find` has a method `on` attached to
it.

```javascript
re.find("a").get(0).on(function(evt) {
        evt.preventDefault();
        alert("click");
});
```



### re.prepend

Wrapper for `insertBefore`.

```javascript
var newFirstListElement = re.create("li").html("First List Element");
// Insert `newFirstListElement` before the first `li` found.
re.find("li").get(0).prepend(newFirstListElement);
```

