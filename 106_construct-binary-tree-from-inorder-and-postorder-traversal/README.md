# [106] Construct Binary Tree from Inorder and Postorder Traversal

<https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/>

- Tags: `Array`, `Tree`, `Depth-first Search`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 46.1%

- Total Accepted: 229543

- Total Submissions: 497651

- Testcase Example: [9,3,15,20,7]\n[9,15,7,20,3]

## Description

<p>Given inorder and postorder traversal of a tree, construct the binary tree.</p>

<p><strong>Note:</strong><br />
You may assume that duplicates do not exist in the tree.</p>

<p>For example, given</p>

<pre>
inorder =&nbsp;[9,3,15,20,7]
postorder = [9,15,7,20,3]</pre>

<p>Return the following binary tree:</p>

<pre>
    3
   / \
  9  20
    /  \
   15   7
</pre>

## Discussions

First of all, we clarify that `in-order traversal` and `post-order traversal`
display binary trees as:

- in-order traversal: [`...left`, `root`, `...right`]

- post-order traversal: [`...left`, `...right`, `root`]

Hence we have to come up with algorithm reading the tree structure
based on these two traversal's ordering.

Besides, we can imagine that recursive algorithm is more
straight forward for tree construction problems.

Our solution will go with the above two ideas.
We would start with a rather straight forward algorithm and
see if any enhancement can be made.

### Trial 1

[Trial 1](./submission_v0.py3) gives a straight forward implementation based on
breaking down the in-order and post-order traversal.

Considering the example input:

- in-order: `[9, 3, 15, 20, 7]`

- post-order: `[9, 15, 7, 20, 3]`

As stated above, the root element of the current subtree can always be found
in the end the of the post-order traversal.

Hence we can use the element to break down the in-order traversal into:
`left`, `root` and `right` component.

Then as the in-order and post-order traversal of the same sub-tree must be of
same length, we can find the three component by the length of the components
in in-order traversal.

After breaking down both traversal, we can construct the tree recursively as:
`build(left) - root - build(right)`

The time complexity of this trial would be `O(n^2)`. As considering a binary
tree with all sub-trees on left side, we have to search the whole
in-order traversal with size `(n-i)` with every i-th iteration, which gives
iteration of `n * (n + 1) / 2` = `O(n^2)`.

The space complexity of this trial would be `O(n^2)` as well. Considering
the same binary tree with all sub-trees on left side, we construct the tree
recursively and pass the trimmed left traversals and right traversals to the
next level. Here the order of recursion is at most `n`,
and traversals' length is also limited at `n`.

### Solution

[The final solution](./submission.py3) improves *trial 1* by caching the
master in-order traversal as dictionary globally, and the construction function
pass index instead of the whole sub-traversals to the next level. Hence the
iteration at each recursive iteration is improved to a `O(1)` selection, and
the space complexity is also improved.

### Complexity Analysis

- Time Complexity: `O(n)`, as the most time consuming step would be the cache
  map construction, or the recursion down to the bottom level, which are both
  `O(n)`.

- Space Complexity: `O(n)`, as we only maintain the cache in-order traversal
  dictionary in space globally, which is `O(n)`.
  More over the order of recursion is also `O(n)`.
