# [100] Same Tree

<https://leetcode.com/problems/same-tree/description/>

- Tags: `Tree`, `Depth-first Search`

- Difficulty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 52.7%

- Total Accepted: 550536

- Total Submissions: 1044101

- Testcase Example: [1,2,3]\n[1,2,3]

## Description

<p>Given two binary trees, write a function to check if they are the same or not.</p>

<p>Two binary trees are considered the same if they are structurally identical and the nodes have the same value.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong>     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

<strong>Output:</strong> false
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong>     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

<strong>Output:</strong> false
</pre>

## Discussion

A DFS algorithm would be able to scan down both tree at the same time, and
pointing out difference when spotted.

### Solution

A simple DFS algorithm on both tree would works.
Note that after we compare the value for both nodes, passing child node to
recursion is sufficient enough for scanning.

### Complexity Analysis

- Time complexity: `O(n)`, for simple DFS scanning the whole tree

- Space complexity:  `O(n)`, for simple DFS holding all nodes in recursion.
  Note that for perfect balanced binary tree, space complexity would be just
  `O(log(n))` as the depth of the tree would be `log(n)`.
