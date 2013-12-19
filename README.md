hrefer
======
So you've got users with fat fingers, huh?

#Usage
Just dress your website up in a suit and tie and <i>this fella</i>: <code>&lt;script src=&quot;hrefer.js&quot;&gt;&lt;/script&gt;</code>.</p>
Hey cool, that was easy. Now what?
Next, instantiate a new `Hrefer{}` object like this:

    // Give all `a` elements inside the `body` a 'fudge-factor' of 5px.
    var h = new Hrefer('body', 'a', 5);
    
    // Give all elements with the class `.fatfinger` elements inside an element, `.container` a 'fudge-factor' of 25px.
    var h = new Hrefer('body', 'a', 25);

The first two arguments are jQuery selectors. Have fun.

#Now what?
Okay you're done.
