import React from 'react';
import '../App.css';

const AlgoSingle: React.FC = () => {
  return (
    <>
      <div className="Container">
        Algorithms Name: Merge Two Trees
        <p className="algo-single">
          Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two
          trees are overlapped while the others are not. You need to merge them into a new binary tree. The merge rule
          is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT
          null node will be used as the node of new tree.
        </p>
        https://repl.it/@unachoza/HuskyVigilantFunction#main.js
        https://repl.it/@unachoza/HandyBurdensomeObservatory#index.js
        {/* * Definition for a binary tree node.
         * function TreeNode(val, left, right) {
         *     this.val = (val===undefined ? 0 : val)
         *     this.left = (left===undefined ? null : left)
         *     this.right = (right===undefined ? null : right)
         * }
         */
        /**
         * @param {TreeNode} t1
         * @param {TreeNode} t2
         * @return {TreeNode}
         */}
        <p className="psudeocode">
          const mergeTrees = function(t1, t2)
          <ul style={{ textAlign: 'left' }}>
            Pseudocode::
            <li>check arguments to make sure there are two and they both are typeof numbers</li>
            <li> create new tree variable</li>
            <li>create tree data structure entirely</li>
            <li>need to traverse two trees depth first;</li>
            <li>every node stop and combine value</li>
            <li>!two nodes? add single node to new tree</li>
            <li>return new true</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AlgoSingle;
