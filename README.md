hrefer
======
So you've got users with fat fingers, huh?

#Usage
Just dress your website up in a suit and tie and <i>this fella</i>: <code>&lt;script src=&quot;hrefer.js&quot;&gt;&lt;/script&gt;</code>.</p>
Hey cool, that was easy. Now what?
Next, instantiate a new <code>Hrefer{}</code> object like this:
<code>
// Give all `a` elements inside the `body` a 'fudge-factor' of 5px.<br>
var h = new Hrefer('body', 'a', 5);
</code>

The first two arguments are jQuery selectors. Have fun.

#Now what?
Okay you're done.
