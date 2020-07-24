# [441] Arranging Coins

<https://leetcode.com/problems/arranging-coins/description/>

- Tags: `Math`, `Binary Search`

- Diffculty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 41.9%

- Total Accepted: 155181

- Total Submissions: 370130

- Testcase Example: 5

## Description

<p>You have a total of <i>n</i> coins that you want to form in a staircase shape, where every <i>k</i>-th row must have exactly <i>k</i> coins.</p>

<p>Given <i>n</i>, find the total number of <b>full</b> staircase rows that can be formed.</p>

<p><i>n</i> is a non-negative integer and fits within the range of a 32-bit signed integer.</p>

<p><b>Example 1:</b>
<pre>
n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
</pre>
</p>

<p><b>Example 2:</b>
<pre>
n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
</pre>
</p>

## Discussion

First of all, let's reformulate the problem into mathematical format:

```
given a positive integer `n`, determine the largest integer `k` such that:

k (k + 1) / 2 <= n
```

Intuitively, we have `k` smaller than `n`, locating / searching for the largest
`k`, binary search would be our good old friend.

Note that to prevent infinity loop issue, we limit our searching range by an
extra 1 in every iteration.

And for the last case, we return `tail` instead of `head` as `tail` <= `head`
after breaking the loop.

### Complexity Analysis

For binary search problem. our `time complexity` would be `O(log(n))`;
`space complexity` would be `O(1)`.
