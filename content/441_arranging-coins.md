---
id: 441
title: "Arranging Coins"
url: "https://leetcode.com/problems/arranging-coins/description/"
tags:
- "math"
- "binary-search"
difficulty: Easy
acceptance: 42.1%
total-accepted: "171794"
total-submissions: "408355"
testcase-example: |
   5
---

## Problem

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

Intuitively, we have `k` smaller than `n`, searching for the largest
`k`, binary search would be our good old friend.

### Solution

Our solution starts with a basic binary search setup, with the evaluation
of the above formula.

Note that to prevent infinity loop issue, we limit our searching range by an
extra 1 in every iteration.

And for the last case, we return `tail` instead of `head` as `tail` <= `head`
after breaking the loop.

```py3
class Solution:
    def arrangeCoins(self, n: int) -> int:
        head = 0
        tail = n

        while head <= tail:
            ptr = (tail + head) // 2
            temp = ptr * (ptr + 1) / 2

            if temp == n:
                return ptr

            elif temp < n:
                head = ptr + 1

            elif temp > n:
                tail = ptr - 1

        return tail
```

### Complexity Analysis

- Time Complexity: `O(log(n))`, for binary search algorithm.

- Space Complexity: `O(1)`, as no special data is cached in memory.
