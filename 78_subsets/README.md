# [78] Subsets

<https://leetcode.com/problems/subsets/description/>

- Tags: `Array`, `Backtracking`, `Bit Manipulation`

- Difficulty: Medium

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

## Discussion

The problem requires all possible subsets given a distinct set of integers.
We know the size of the answer would be of size `2 ^ n` for subset problem.

Further more, we can consider the subset solutions to be different combination
of each element in the input set. Consider the example with input `[1, 2, 3]`:

|      Subset |  Integer Combination | Binary Form | Decimal Form |
| ----------- | -------------------- | ----------- | ------------ |
|        `[]` | `[None, None, None]` |       `000` |          `0` |
|       `[1]` |    `[None, None, 1]` |       `001` |          `1` |
|       `[2]` |    `[None, 2, None]` |       `010` |          `2` |
|    `[1, 2]` |       `[None, 2, 1]` |       `011` |          `3` |
|       `[3]` |    `[3, None, None]` |       `100` |          `4` |
|    `[1, 3]` |       `[3, None, 1]` |       `101` |          `5` |
|    `[2, 3]` |       `[3, 2, None]` |       `110` |          `6` |
| `[1, 2, 3]` |          `[3, 2, 1]` |       `111` |          `7` |

We can see the result is a set of combination of *switching on/off* of each
element in the input list. And we can map the combination into binary string,
then decimal integers below `n`.

Thus we can solve the problem by mapping all those integers into different
subsets.

### Solution

Given input with size `n`, we have result with size `2 ^ n`.
For all integers in `[0, 2^n)`, we can change it to binary string format, and
thus integer combination of set integers, and finally different subsets.

The most difficult part is converting integer to binary string.
Simply apply `bin(i)` will yield binary string `0b*****` from integer `i`.

Yet to allow binary string carrying all `n` digits, we should add leading `0`s
for small integers. Achieving this we add `n` to every integer `i`, so every
binary string will be `0b1*****`. Omitting the first 3 characters and we can
extract the binary form string.

Thus viewing the binary form string as a list of index respect to the input
list, we can obtain the corresponding subset.

### Complexity Analysis

- Time Complexity: `O(n * 2 ^ n)`, considering the solution set of size
  `2 ^ n`, with each subset have at most `n` elements

- Space Complexity: `O(n * 2 ^ n)`, considering the solution set of size
  `2 ^ n`, with each subset have at most `n` elements
