---
id: "103"
title: "Binary Tree Zigzag Level Order Traversal"
url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/"
tags:
- "stack"
- "tree"
- "breadth-first-search"
difficulty: Medium
acceptance: 48.9%
total-accepted: "421565"
total-submissions: "861227"
testcase-example: |
   [3,9,20,null,null,15,7]
---

## Problem

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

A problem very similar to [107. Binary Tree Level Order Traversal II](./107_binary-tree-level-order-traversal-ii.md).
While handling is needed for the zigzag level order.

For tree problems require operations on each level, we use BFS.

### Solution

A simple BFS basically solves the problem. And determine the level of the
current iteration in the input tree by checking the length of the final result
we are updating.

```py3
from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        result = []
        if not root:
            return result

        queue = [root]

        while queue:
            if len(result) % 2 == 0:
                result.append([n.val for n in queue])
            else:
                result.append([n.val for n in queue[::-1]])

            temp = []

            for node in queue:
                if node.left:
                    temp.append(node.left)
                if node.right:
                    temp.append(node.right)

            queue = temp

        return result
```

### Complexity Analysis

- Time Complexity: `O(n)`, as we use BFS to scan all nodes in the tree.

- Space Complexity: `O(n)`, as we use BFS to handle level-wise operations,
  and numbers of elements cached at each row is bounded by `n`.
