---
id: "662"
title: "Maximum Width of Binary Tree"
url: "https://leetcode.com/problems/maximum-width-of-binary-tree/description/"
tags:
- "tree"
difficulty: Medium
acceptance: 40.4%
total-accepted: "96881"
total-submissions: "239919"
testcase-example: "[1,3,2,5,3,null,9]"
---

## Problem

<p>Given a binary tree, write a function to get the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels.</p>

<p>The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the <code>null</code> nodes between the end-nodes are also counted into the length calculation.</p>

<p>It is <strong>guaranteed</strong> that the answer will in the range of 32-bit signed integer.</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input:</b> 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

<b>Output:</b> 4
<b>Explanation:</b> The maximum width existing in the third level with the length 4 (5,3,null,9).
</pre>

<p><b>Example 2:</b></p>

<pre>
<b>Input:</b> 

          1
         /  
        3    
       / \       
      5   3     

<b>Output:</b> 2
<b>Explanation:</b> The maximum width existing in the third level with the length 2 (5,3).
</pre>

<p><b>Example 3:</b></p>

<pre>
<b>Input:</b> 

          1
         / \
        3   2 
       /        
      5      

<b>Output:</b> 2
<b>Explanation:</b> The maximum width existing in the second level with the length 2 (3,2).
</pre>

<p><b>Example 4:</b></p>

<pre>
<b>Input:</b> 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
<b>Output:</b> 8
<b>Explanation:</b>The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The&nbsp;given binary tree will have between&nbsp;<code>1</code>&nbsp;and&nbsp;<code>3000</code>&nbsp;nodes.</li>
</ul>

## Discussion

The first challenge of this problem is:

> How to evaluate the `leftness` / `rightness` of the nodes, and thus
find the `distance` between nodes?

Imagine given a tree:

```tree
            1
          /   \
         3     2
        / \     \
       5   3     9
```

The problem would be easier to solve if we interpret the tree as:

```tree
            0
          /   \
         0     1
        / \     \
       0   1     3
```

wheres each node carries a value specifying its order in the level, thus we
have:

- `node.left.value = node.value * 2`

- `node.right.value = node.value * 2 + 1`

- `width(depth) = leftest_node(depth).value - rightest_node(depth).value + 1`

And as we are doing level-based operation, we would aim for solving the above
problems with a BFS algorithm.

### Solution

We try to use BFS to construct the tree value and compare the width on
each tree level. To save memory space, we try to record the maximum / minimum
value on each node searching; and evaluate the width and reset the
maximum / minimum value before each level iteration.

```py3
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        r = 0
        q = [(root, 0)]
        t_max = 0
        t_min = 0

        while q:
            s = len(q)
            r = max(r, t_max - t_min +1)
            t_max = 0
            t_min = -1

            while s > 0:
                n, v = q.pop(0)
                s -= 1
                if n:
                    t_max = max(v, t_max)
                    t_min = min(v, t_min) if t_min > -1 else v
                    q.append((n.left, v*2))
                    q.append((n.right, v*2+1))

        return r
```

### Complexity Analysis

- Time Complexity: `O(n)`, as we use BFS to scan all nodes in the tree.

- Space Complexity: `O(n)`, as we have to return the traversal of all nodes
  in the tree. And we use BFS to handle level-wise operations,
  and numbers of elements cached at each row is bounded by `n`.
