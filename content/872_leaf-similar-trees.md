---
id: 872
title: "Leaf-Similar Trees"
url: "https://leetcode.com/problems/leaf-similar-trees/description/"
tags:
- "tree"
- "depth-first-search"
difficulty: "Easy"
acceptance: "64.5%"
total-accepted: "102011"
total-submissions: "158087"
testcase-example: |
  [3,5,1,6,2,9,8,null,null,7,4]\n[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
---

## Problem

<p>Consider all the leaves of a binary tree, from&nbsp;left to right order, the values of those&nbsp;leaves form a <strong>leaf value sequence</strong><em>.</em></p>

<p><img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png" style="width: 400px; height: 336px;" /></p>

<p>For example, in the given tree above, the leaf value sequence is <code>(6, 7, 4, 9, 8)</code>.</p>

<p>Two binary trees are considered <em>leaf-similar</em>&nbsp;if their leaf value sequence is the same.</p>

<p>Return <code>true</code> if and only if the two given trees with head nodes <code>root1</code> and <code>root2</code> are leaf-similar.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg" style="width: 750px; height: 297px;" />
<pre>
<strong>Input:</strong> root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1], root2 = [1]
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1], root2 = [2]
<strong>Output:</strong> false
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1,2], root2 = [2,2]
<strong>Output:</strong> true
</pre>

<p><strong>Example 5:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg" style="width: 450px; height: 165px;" />
<pre>
<strong>Input:</strong> root1 = [1,2,3], root2 = [1,3,2]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each tree will be in the range <code>[1, 200]</code>.</li>
	<li>Both of the given trees will have values in the range <code>[0, 200]</code>.</li>
</ul>

## Discussion

The problem requires us to find compare two trees with the sequence
of their leaf nodes. As the leaf nodes may not by lying on the same level,
we are going to use DFS to scan for the leaf nodes as array and perform
comparison.

### Solution

Our solution starts with writing an standard DFS function
to scan for leaf nodes. Leaf nodes are then appended to target array.
A complete DFS function should scan all the leaf nodes and put them to
an array with maintained sequence.

We simply compare the two array and result is obtained.

```py3
class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        self.arr = []

        self.dfs(root1)
        arr1, self.arr = self.arr, []

        self.dfs(root2)
        arr2, self.arr = self.arr, []

        return arr1 == arr2

    def dfs(self, root):
        if not root:
            return
        if root.left:
            self.dfs(root.left)
        if not root.left and not root.right:
            self.arr += [root.val]
        if root.right:
            self.dfs(root.right)
```

### Complexity Analysis

- Time Complexity: `O(n)`, as DFS scan all the nodes in a tree and giving a
  linear time complexity. Perform it twice gives an linear solution as well.

- Space Complexity: `O(n)`, regardless of the deep recursion memory for DFS,
  we are caching all the leaf nodes in a array, which causing linear
  space complexity already.
