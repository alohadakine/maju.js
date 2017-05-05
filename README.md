re.js
=======

  **RE**usable

  **J**avaScript

  **S**nippets



## Methods

  - [re.after](#yayuafter)
  - [re.ajax](#yajuajax)
  - [re.append](#yayuappend)
  - [re.attr](#yajuattr)
  - [re.before](#yajubefore)
  - [re.create](#yajucreate)
  - [re.domready](#yajudomready)
  - [re.find](#yajufind)
  - [re.html](#yajuhtml)
  - [re.loadjs](#yajuloadjs)
  - [re.on](#yajuon)
  - [re.prepend](#yajuprepend)



### re.after

  Wrapper for appending elements `after` some element.

    var newListElement = re.create('li')
      .attr('style', 'color:red;').html('New List Element');
    // Appends a new list element after the 3rd li found in the DOM
    re.find('li').get(2).after(newListElement);



### re.ajax

  Simple ajax request wrapper.

    re.ajax({
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



### re.append

  Wrapper for `appendChild`.

    var newListElement = re.create('li')
      .attr('style', 'color:red;').html('New List Element');
    re.find('ul').get(0).append(newListElement);



### re.attr

  Wrapper for `setAttribute` and `getAttribute`.

    // retrieve `href` value of first link
    re.find('a').get(0).attr('href')

    // set href value of first link
    re.find('a').get(0).attr('href', '#foo');



### yaju.before

  Wrapper for `insertBefore`.

    var newFirstListElement = re.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    re.find('li').get(0).before(newFirstListElement);



### re.create

  Wrapper for `document.createElement`.

    re.create('input')
      .attr('type', 'text')
      .attr('placeholder', 'E-Mail');



### re.domready

  Simple domready wrapper.

    re.domready(function(){
      alert('dom is ready!');
    });



### re.find

  Advanced `querySelectorAll` with attaching convenience methods to elements.
  This method always returns an array of objects and you either need to use the
  `get` method or the `find('selector')[3]` element by index method to get the
  element.

    re.find('ul').get(0)
        .find('li').get(2)
        .find('a').get(0)
        .on('click', function(evt){
          evt.preventDefault();
          alert('click');
        });



### re.html

  Wrapper for `innerHTML`.

    re.find('a').get(0).html('This is a Hyperlink.');



### re.loadjs

  Easy to use JavaScript file loader.
  Create a `<script>` tag and fires a callback function.

      re.loadjs('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/core.js', function( err, obj ) {
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
      re.loadjs(jsfiles, function( err, obj ) {
        if ( err ) {
          alert('error loading js file..');
          return;
        }
        loaded.push(obj.src);
        if (jsfiles.length === loaded.length) {
          alert('all files loaded..');
        }
      });

### re.on

  Simple wrapper for addEventListener.
  Each element that was returned by `re.find` has a method `on` attached to
  it.

      re.find('a').get(0).on(function(evt){
        evt.preventDefault();
        alert('click');
      });



### re.prepend

  Wrapper for `insertBefore`.

    var newFirstListElement = re.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    re.find('li').get(0).prepend(newFirstListElement);

