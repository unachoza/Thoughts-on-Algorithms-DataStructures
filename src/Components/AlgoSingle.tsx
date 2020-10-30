import React from 'react';
import '../App.css';

const AlgoSingle: React.FC = () => {
  return (
    <>
      <div className="Container">
        Algorithms Name:
        <p className="algo-single">
          Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two
          trees are overlapped while the others are not. You need to merge them into a new binary tree. The merge rule
          is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT
          null node will be used as the node of new tree.
        </p>
      </div>
    </>
  );
};

export default AlgoSingle;
