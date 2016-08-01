maju.js
=======

  **M**arco's

  **A**wesome

  **J**avascript

  **U**tils



## Methods

  - maju.ajax
  - maju.domready
  - maju.find
  - maju.on



### maju.ajax

  Simple ajax request wrapper.

    maju.ajax({
      url: 'https://api.aloha.li/getWeatherInfo',
      method: 'POST',
      cache: true,
      params: {
        format: 'json'
        zipcode: '53757'
      }
      cb: function( err, result ) {
        if (!err) {
          console.log(result);
        }
      }
    });



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



### maju.on

  Simple wrapper for addEventListener.
  Each element that was returned by `maju.find` has a method `on` attached to
  it.

      maju.find('a').get(0).on(function(evt){
        evt.preventDefault();
        alert('click');
      });

