---
id: 1007
title: "Minimum Domino Rotations For Equal Row"
url: "https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/description/"
tags:
- "array"
- "greedy"
difficulty: "Medium"
acceptance: "50.8%"
total-accepted: "105898"
total-submissions: "208413"
testcase-example: |
  [2,1,2,4,2,2]\n[5,2,6,2,3,2]
---

## Problem

<p>In a row of dominoes, <code>A[i]</code> and <code>B[i]</code> represent the top and bottom halves of the <code>i<sup>th</sup></code> domino.&nbsp; (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)</p>

<p>We may rotate the <code>i<sup>th</sup></code> domino, so that <code>A[i]</code> and <code>B[i]</code> swap values.</p>

<p>Return the minimum number of rotations so that all the values in <code>A</code> are the same, or all the values in <code>B</code>&nbsp;are the same.</p>

<p>If it cannot be done, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/03/08/domino.png" style="height: 161px; width: 200px;" />
<pre>
<strong>Input:</strong> A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> A = [3,5,1,2,3], B = [3,6,3,3,4]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
In this case, it is not possible to rotate the dominoes to make one row of values equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= A.length == B.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= A[i], B[i] &lt;= 6</code></li>
</ul>

## Discussion

Nothing special for this problem. Given two list of dominos of a sized-6-enum,
we can easily setup counters for them and perform comparison. We can easily
imagine that the solution would be linear.

### Solution

Our solution begins with construction of two counters based on the input lists.

Then we can find the most frequent elements among them and decide what list
is the dominant one. Afterwards we locate the most frequent element in the
dominant list, and perform linear operation on both list.

As long as elements need to be flipped exists, we compare the same index in
another list. We then accumulate the number of elements needed to be flipped
or return `-1` indicating impossibility of dominoes rotation.

```py3
from collections import Counter

class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        counter_a = Counter(A)
        counter_b = Counter(B)

        max_a, max_b = max(counter_a, key=counter_a.get), max(counter_b, key=counter_b.get)
        if counter_a[max_a] >= counter_b[max_b]:
            val, main, aux = max_a, A, B
        else:
            val, main, aux = max_b, B, A

        result = 0

        for i in range(len(main)):
            if main[i] is val:
                continue

            if main[i] is not val and aux[i] is val:
                result += 1

            if main[i] is not val and aux[i] is not val:
                return -1

        return result
```

### Complexity Analysis

- Time Complexity: `O(n)`, as all operations are linear.

- Space Complexity: `O(1)`, as domino is a sized-6-enum, our counter cache is
  only `O(6) == O(1)`.
