# immutable-sequence.js

[![Build Status](https://travis-ci.org/qiao/immutable-sequence.js.svg?branch=master)](https://travis-ci.org/qiao/immutable-sequence.js)

High performance implementation of Immutable Sequence in JavaScript, based on [Finger Tree](https://github.com/qiao/fingertree.js).

## Installation (Node.js)

```
npm install immutable-sequence
```

Then, in your program:

```javascript
var ImmutableSequence = require('immutable-sequence');
```

## Quick Examples

```javascript
// Empty sequence
var seq = ImmutableSequence.fromArray([]);
seq.isEmpty(); // true
seq.size(); // 0
seq.peekFirst(); // null
seq.peekLast(); // null
seq.get(0); // throws error

// Nonempty sequence
seq = ImmutableSequence.fromArray(['a', 'b', 'c']);
seq.isEmpty(); // false
seq.size(); // 3
seq.peekFirst(); // 'a'
seq.peekLast(); // 'b'
seq.get(0); // 'a'
seq.get(2); // 'c'

// Add and remove
var seq2 = seq.addFirst('1');
seq2.size(); // 4
seq2.peekFirst(); // '1'

var seq3 = seq.removeFirst();
seq3.size(); // 2
seq3.peekFirst(); // 'b'

var seq4 = seq.addLast('d');
seq4.peekLast(); // 'd'

var seq5 = seq.removeLast();
seq5.peekLast(); // 'b'

// Concatenate two sequences
var a = ImmutableSequence.fromArray([1, 2, 3]);
var b = ImmutableSequence.fromArray([4, 5, 6]);
var c = a.concat(b);
c.size(); // 6
c.peekFirst(); // 1
c.peekLast(); // 6

// Split into two sequences at given index
seq = ImmutableSequence.fromArray(['a', 'b', 'c']);
var split = seq.splitAt(1);
split[0].size(); // 1
split[0].peekFirst(); // 'a'
split[1].size(); // 2
split[1].peekFirst(); // 'b'
split[1].peekLast(); // 'c'
```


## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

&copy; 2014 Xueqiao Xu &lt;xueqiaoxu@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
