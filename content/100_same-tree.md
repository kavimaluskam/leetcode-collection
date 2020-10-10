---
id: "100"
title: "Same Tree"
url: "https://leetcode.com/problems/same-tree/description/"
tags:
- "tree"
- "depth-first-search"
difficulty: Easy
acceptance: 53.7%
total-accepted: "619870"
total-submissions: "1155244"
testcase-example: "[1,2,3]\n[1,2,3]"
---

## Problem

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

```py3
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:

        if not p and not q:
            return True

        if not p or not q:
            return False

        if p.val != q.val:
            return False

        return self.isSameTree(p.right, q.right) and \
            self.isSameTree(p.left, q.left)
```

### Complexity Analysis

- Time Complexity: `O(n)`, for simple DFS scanning the whole tree

- Space Complexity:  `O(n)`, for simple DFS holding all nodes in recursion.
  Note that for perfect balanced binary tree, space complexity would be just
  `O(log(n))` as the depth of the tree would be `log(n)`.
