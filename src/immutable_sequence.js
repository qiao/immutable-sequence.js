/**
 * @fileoverview Implementation of Immutable Sequence based on Finger Tree.
 * @author Xueqiao Xu <xueqiaoxu@gmail.com>
 */


// universal module loader
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['fingertree'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('fingertree'));
  } else {
    // browser global
    root.ImmutableSequence = factory(root.FingerTree);
  }
}(this, function (FingerTree) {

  'use strict';

  /**
   * An immutable sequence.
   * @private
   * @constructor
   * @param {FingerTree} tree
   */
  function ImmutableSequence(tree) {
    /**
     * @private
     * @type {FingerTree}
     */
    this.tree_ = tree;
  }

  /**
   * Construct an immutable sequence from an array.
   * Complexity: O(n)
   * @param {Array} array
   * @return {ImmutableSequence}
   */
  ImmutableSequence.fromArray = function (array) {
    var measurer = {
      identity: function () {
        return 0;
      },
      measure: function (x) {
        return 1;
      },
      sum: function (a, b) {
        return a + b;
      }
    };
    var tree = FingerTree.fromArray(array, measurer);
    return new ImmutableSequence(tree);
  };

  /**
   * Check whether the sequence is empty.
   * Complexity: O(1)
   * @return {boolean}
   */
  ImmutableSequence.prototype.isEmpty = function () {
    return this.tree_.isEmpty();
  };

  /**
   * Get the size of the sequence.
   * Complexity: O(1)
   * @return {number}
   */
  ImmutableSequence.prototype.size = function () {
    return this.tree_.measure();
  };

  /**
   * Get the element at the specified index.
   * Complexity: O(log(min(i, n - 1)))
   * @param {number} i Index of the element.
   * @return {*} 
   */
  ImmutableSequence.prototype.get = function (i) {
    var split = this.tree_.split(function (m) {
      return i < m;
    });
    if (split[1].isEmpty()) {
      throw new Error('index out or range');
    }
    return split[1].peekFirst();
  };

  /**
   * Set the element at the specified index to be some value.
   * Complexity: O(log(min(i, n - 1)))
   * @param {number} i Index of the element.
   * @param {*} v Value to set.
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.set = function (i, v) {
    var split = this.tree_.split(function (m) {
      return i < m;
    });
    if (split[1].isEmpty()) {
      throw new Error('index out or range');
    }
    return new ImmutableSequence(split[0].addLast(v).concat(split[1].removeFirst()));
  };

  /**
   * Get the first element in the sequence.
   * Complexity: O(1)
   * @return {*}
   */
  ImmutableSequence.prototype.peekFirst = function () {
    return this.tree_.peekFirst();
  };

  /**
   * Get the last element in the sequence.
   * Complexity: O(1)
   * @return {*}
   */
  ImmutableSequence.prototype.peekLast = function () {
    return this.tree_.peekLast();
  };

  /**
   * Add an element to the front of the sequence.
   * Complexity: O(1)
   * @param {*} v
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.addFirst = function (v) {
    return new ImmutableSequence(this.tree_.addFirst(v));
  };

  /**
   * Add an element to the end of the sequence.
   * Complexity: O(1)
   * @param {*} v
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.addLast = function (v) {
    return new ImmutableSequence(this.tree_.addLast(v));
  };

  /**
   * Remove an element from the front of the sequence.
   * Complexity: O(1)
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.removeFirst = function () {
    return new ImmutableSequence(this.tree_.removeFirst());
  };

  /**
   * Remove an element from the end of the sequence.
   * Complexity: O(1)
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.removeLast = function () {
    return new ImmutableSequence(this.tree_.removeLast());
  };

  /**
   * Concatenate the sequence with another one.
   * Complexity: O(log(min(n1, n2)))
   * @param {ImmutableSequence} other
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.concat = function (other) {
    return new ImmutableSequence(this.tree_.concat(other.tree_));
  };

  /**
   * Split into two sequences at the given index.
   * Complexity: O(log(min(i, n - i)))
   * @param {number} i
   * @return {Array.<ImmutableSequence>}
   */
  ImmutableSequence.prototype.splitAt = function (i) {
    var split = this.tree_.split(function (m) {
      return i < m;
    });
    return [new ImmutableSequence(split[0]), new ImmutableSequence(split[1])];
  };

  return ImmutableSequence;
}));
