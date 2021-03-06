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
      <div className="Container">
        Algorithms Name: Move Zeros
        <p className="algo-single">
          Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of
          the non-zero elements.
        </p>
        <p>Insertion Sort || Selecti</p>
      </div>
      <div className="Container">
        Algorithms Name: TWO SUM
        <p className="algo-single">https://medium.com/swlh/understanding-leetcode-the-two-sum-problem-6428ed5cb18d</p>
        <p>Insertion Sort || Selecti</p>
      </div>
    </>
  );
};

export default AlgoSingle;
