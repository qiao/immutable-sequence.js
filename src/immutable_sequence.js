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
   * Get the size of the sequence.
   * @return {Number}
   */
  ImmutableSequence.prototype.size = function () {
    return this.tree_.measure();
  };

  /**
   * Get the element at the specified index.
   * @param {Number} i Index of the element.
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
   * Add an element to the front of the sequence.
   * @param {*} v
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.addFirst = function (v) {
    return new ImmutableSequence(this.tree_.addFirst(v));
  };

  /**
   * Add an element to the end of the sequence.
   * @param {*} v
   * @return {ImmutableSequence}
   */
  ImmutableSequence.prototype.addLast = function (v) {
    return new ImmutableSequence(this.tree_.addLast(v));
  };

  return ImmutableSequence;
}));
