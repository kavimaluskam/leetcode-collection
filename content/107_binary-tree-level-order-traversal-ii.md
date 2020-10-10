---
id: "107"
title: "Binary Tree Level Order Traversal II"
url: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/"
tags:
- `Tree`
- `Breadth-first Search`
difficulty: Easy
acceptance: 54.1%
total-accepted: "376345"
total-submissions: "695498"
testcase-example: "[3,9,20,null,null,15,7]"
---

## Problem

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

A simple BFS basically solves the problem. And we add each level's result to the
beginning of final result instead of reordering it,
for a better time performance.

```py3
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        q = [root]
        r = []

        while q:
            count = len(q)
            t = []

            for i in range(count):
                node = q.pop(0)
                t.append(node.val)

                if node.left:
                    q.append(node.left)

                if node.right:
                    q.append(node.right)

            r.insert(0, t)

        return r
```

### Complexity Analysis

- Time Complexity: `O(n)`, as we use BFS to scan all nodes in the tree.

- Space Complexity: `O(n)`, as we have to return the traversal of all nodes
  in the tree. And we use BFS to handle level-wise operations,
  and numbers of elements cached at each row is bounded by `n`.
