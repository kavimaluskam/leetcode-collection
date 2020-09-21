# [103] Binary Tree Zigzag Level Order Traversal

<https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/>

- Tags: `Stack`, `Tree`, `Breadth-first Search`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 47.2%

- Total Accepted: 364345

- Total Submissions: 771254

- Testcase Example: [3,9,20,null,null,15,7]

## Description

<p>Given a binary tree, return the <i>zigzag level order</i> traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).</p>

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
return its zigzag level order traversal as:<br />
<pre>
[
  [3],
  [20,9],
  [15,7]
]
</pre>
</p>

## Discussion

A problem very similar to [107. Binary Tree Level Order Traversal II](./107_binary-tree-level-order-traversal-ii).
While handling is needed for the zigzag level order.

For tree problems require operations on each level, we use BFS.

### Solution

A simple BFS basically solves the problem. And determine the level of the
current iteration in the input tree by checking the length of the final result
we are updating.

### Complexity Analysis

- Time Complexity: `O(n)`, as we use BFS to scan all nodes in the tree.

- Space Complexity: `O(n)`, as we use BFS to handle level-wise operations,
  and numbers of elements cached at each row is bounded by `n`.
