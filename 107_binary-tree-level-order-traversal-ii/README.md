# [107] Binary Tree Level Order Traversal II

<https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/>

- Tags: `Tree`, `Breadth-first Search`

- Diffculty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 53.2%

- Total Accepted: 351580

- Total Submissions: 660468

- Testcase Example: [3,9,20,null,null,15,7]

## Description

<p>Given a binary tree, return the <i>bottom-up level order</i> traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).</p>

<p>
For example:<br />
Given binary tree <code>[3,9,20,null,null,15,7]</code>,<br />
<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>
</p>
<p>
return its bottom-up level order traversal as:<br />
<pre>
[
  [15,7],
  [9,20],
  [3]
]
</pre>
</p>

## Discussion

For tree problems require operations on each level, we use BFS.
Bare in mind the result require reverse of node's value. Hence we always
insert the level scanning to the beginning of result.

### Solution

A simple BFS basically solves the problem. And we each level's result to the
beginning of result but not reordering it, to give a better time performance.

### Complexity Analysis

- Time Complexity: `O(n)`, as we use BFS to scan all nodes in the tree.

- Space Complexity: `O(n)`, as we have to return the traversal of all nodes
  in the tree. And we use BFS to handle level-wise operations,
  and numbers of elements cached at each row is bounded by `n`.
