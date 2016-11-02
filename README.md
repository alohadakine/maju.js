yaju.js
=======

  **Y**zzis

  **A**wesome

  **J**avascript

  **U**tils



## Methods

  - [yaju.after](#yayuafter)
  - [yaju.ajax](#yajuajax)
  - [yaju.append](#yayuappend)
  - [yaju.attr](#yajuattr)
  - [yaju.before](#yajubefore)
  - [yaju.create](#yajucreate)
  - [yaju.domready](#yajudomready)
  - [yaju.find](#yajufind)
  - [yaju.html](#yajuhtml)
  - [yaju.loadjs](#yajuloadjs)
  - [yaju.on](#yajuon)
  - [yaju.prepend](#yajuprepend)



### yaju.after

  Wrapper for appending elements `after` some element.

    var newListElement = yaju.create('li')
      .attr('style', 'color:red;').html('New List Element');
    // Appends a new list element after the 3rd li found in the DOM
    yaju.find('li').get(2).after(newListElement);



### yaju.ajax

  Simple ajax request wrapper.

    yaju.ajax({
      url: '/pokemon.json',
      method: 'POST',
      cache: true,
      requestContentType: 'application/x-www-form-urlencoded',
      headers: [
        {
          key: 'Foo',
          value: 'Moo'
        }
      ]
      params: {
        format: 'json'
        query: 'all'
      }
      cb: function( err, result ) {
        if (!err) {
          console.log(result);
        }
      }
    });



### yaju.append

  Wrapper for `appendChild`.

    var newListElement = yaju.create('li')
      .attr('style', 'color:red;').html('New List Element');
    yaju.find('ul').get(0).append(newListElement);



### yaju.attr

  Wrapper for `setAttribute` and `getAttribute`.

    // retrieve `href` value of first link
    yaju.find('a').get(0).attr('href')

    // set href value of first link
    yaju.find('a').get(0).attr('href', '#foo');



### yaju.before

  Wrapper for `insertBefore`.

    var newFirstListElement = yaju.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    yaju.find('li').get(0).before(newFirstListElement);



### yaju.create

  Wrapper for `document.createElement`.

    yaju.create('input')
      .attr('type', 'text')
      .attr('placeholder', 'E-Mail');



### yaju.domready

  Simple domready wrapper.

    yaju.domready(function(){
      alert('dom is ready!');
    });



### yaju.find

  Advanced `querySelectorAll` with attaching convenience methods to elements.
  This method always returns an array of objects and you either need to use the
  `get` method or the `find('selector')[3]` element by index method to get the
  element.

    yaju.find('ul').get(0)
        .find('li').get(2)
        .find('a').get(0)
        .on('click', function(evt){
          evt.preventDefault();
          alert('click');
        });



### yaju.html

  Wrapper for `innerHTML`.

    yaju.find('a').get(0).html('This is a Hyperlink.');



### yaju.loadjs

  Easy to use JavaScript file loader.
  Create a `<script>` tag and fires a callback function.

      yaju.loadjs('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.js', function( err, obj ) {
        if ( err ) {
          alert('error loading js file..');
          return;
        }
        alert('all good..');
      });

  or multiple files at once..

      var jsfiles = [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js'
      ];
      var loaded = [];
      yaju.loadjs(jsfiles, function( err, obj ) {
        if ( err ) {
          alert('error loading js file..');
          return;
        }
        loaded.push(obj.src);
        if (jsfiles.length === loaded.length) {
          alert('all files loaded..');
        }
      });

### yaju.on

  Simple wrapper for addEventListener.
  Each element that was returned by `yaju.find` has a method `on` attached to
  it.

      yaju.find('a').get(0).on(function(evt){
        evt.preventDefault();
        alert('click');
      });



### yaju.prepend

  Wrapper for `insertBefore`.

    var newFirstListElement = yaju.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    yaju.find('li').get(0).prepend(newFirstListElement);

