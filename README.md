maju.js
=======

  **M**arco's

  **A**wesome

  **J**avascript

  **U**tils



## Methods

  - maju.after
  - maju.ajax
  - maju.append
  - maju.attr
  - maju.before
  - maju.create
  - maju.domready
  - maju.find
  - maju.html
  - maju.on
  - maju.prepend



### maju.after

  Wrapper for appending elements `after` some element.

    var newListElement = maju.create('li')
      .attr('style', 'color:red;').html('New List Element');
    // Appends a new list element after the 3rd li found in the DOM
    maju.find('li').get(2).after(newListElement);



### maju.ajax

  Simple ajax request wrapper.

    maju.ajax({
      url: '/pokemon.json',
      method: 'POST',
      cache: true,
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



### maju.append

  Wrapper for `appendChild`.

    var newListElement = maju.create('li')
      .attr('style', 'color:red;').html('New List Element');
    maju.find('ul').get(0).append(newListElement);



### maju.attr

  Wrapper for `setAttribute` and `getAttribute`.

    // retrieve `href` value of first link
    maju.find('a').get(0).attr('href')

    // set href value of first link
    maju.find('a').get(0).attr('href', '#foo');



### maju.before

  Wrapper for `insertBefore`.

    var newFirstListElement = maju.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    maju.find('li').get(0).before(newFirstListElement);



### maju.create

  Wrapper for `document.createElement`.

    maju.create('input')
      .attr('type', 'text')
      .attr('placeholder', 'E-Mail');



### maju.domready

  Simple domready wrapper.

    maju.domready(function(){
      alert('dom is ready!');
    });



### maju.find

  Advanced `querySelectorAll` with attaching convenience methods to elements.
  This method always returns an array of objects and you either need to use the
  `get` method or the `find('selector')[3]` element by index method to get the
  element.

    maju.find('ul').get(0)
        .find('li').get(2)
        .find('a').get(0)
        .on('click', function(evt){
          evt.preventDefault();
          alert('click');
        });



### maju.html

  Wrapper for `innerHTML`.

    maju.find('a').get(0).html('This is a Hyperlink.');



### maju.on

  Simple wrapper for addEventListener.
  Each element that was returned by `maju.find` has a method `on` attached to
  it.

      maju.find('a').get(0).on(function(evt){
        evt.preventDefault();
        alert('click');
      });



### maju.prepend

  Wrapper for `insertBefore`.

    var newFirstListElement = maju.create('li').html('First List Element');
    // Insert `newFirstListElement` before the first `li` found.
    maju.find('li').get(0).prepend(newFirstListElement);

