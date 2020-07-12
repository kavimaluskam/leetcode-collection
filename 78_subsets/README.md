# [78] Subsets

<https://leetcode.com/problems/subsets/description/>

- Tags: `Array`, `Backtracking`, `Bit Manipulation`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 61.2%

- Total Accepted: 580886

- Total Submissions: 948907

- Testcase Example: [1,2,3]

## Description

<p>Given a set of <strong>distinct</strong> integers, <em>nums</em>, return all possible subsets (the power set).</p>

<p><strong>Note:</strong> The solution set must not contain duplicate subsets.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong>
[
  [3],
&nbsp; [1],
&nbsp; [2],
&nbsp; [1,2,3],
&nbsp; [1,3],
&nbsp; [2,3],
&nbsp; [1,2],
&nbsp; []
]</pre>

# Discussion

This problem is solved with mathematical / binary approach.

First of all we know that the solution of a list with size `n` would be
a set of size `2^n`. Considering the above example:

```python
input = [1,2,3]

result = [
  [],         # [None, None, None]
  [1],        # [1, None, None]
  [2],        # [None, 2, None]
  [3],        # [None, None, 3]
  [1, 2],     # [1, 2, None]
  [1, 3],     # [1, None, 3]
  [2, 3],     # [None, 2, 3]
  [1, 2, 3]   # [1, 2, 3]
]
```

We can see the result is a set of combination of *switching on/off* of each
element in the input list.

Hence, we can easily obtain the list of element state by the binary form of
integers smaller than `n`.

### Complexity Analysis

Consider the result set would be of size `2^n`, and each result would be of
a state with size `n`, we can conclude both `Time Complexity` and `Space
Complexity` would be `O(n * 2^n)`.
