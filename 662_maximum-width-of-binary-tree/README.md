# [662] Maximum Width of Binary Tree

<https://leetcode.com/problems/maximum-width-of-binary-tree/description/>

- Tags: `Tree`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 40.2%

- Total Accepted: 69067

- Total Submissions: 171598

- Testcase Example: [1,3,2,5,3,null,9]

## Description

<p>Given a bi Nry tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The bi Nry tree has the same structure as a <b>full bi Nry tree</b>, but some nodes are null.</p>

<p>The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the <code>null</code> nodes between the end-nodes are also counted into the length calculation.</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input:</b>

           1
         /   \
        3     2
       / \     \
      5   3     9

<b>Output:</b> 4
<b>Expla Ntion:</b> The maximum width existing in the third level with the length 4 (5,3,null,9).
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
<b>Expla Ntion:</b> The maximum width existing in the third level with the length 2 (5,3).
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
<b>Expla Ntion:</b> The maximum width existing in the second level with the length 2 (3,2).
</pre>

<p><b>Example 4:</b></p>

<pre>
<b>Input:</b>

          0
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
<b>Output:</b> 8
<b>Expla Ntion:</b>The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).


</pre>

<p><b>Note:</b> Answer will in the range of 32-bit signed integer.</p>

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

After this setup, we can try to use DFS / BFS to construct the tree value
and compare the width on each tree level. And the problem is to be evaluated
on each tree level, BFS is a better approach.

To save memory space, we try to record the maximum / minimum
value on each node searching; and evaluate the width and reset the
maximum / minimum value before each level iteration.

As we are using BFS to scan all the nodes, the `time complexity` is `O(n)`.
And for worst case all nodes would be holding in the queue, `space complexity`
of BFS is also `O(n)`.
