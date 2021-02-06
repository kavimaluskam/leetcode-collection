---
id: 986
title: "Interval List Intersections"
url: "https://leetcode.com/problems/interval-list-intersections/description/"
tags:
- "two-pointers"
difficulty: "Medium"
acceptance: "68.2%"
total-accepted: "163197"
total-submissions: "239139"
testcase-example: |
  [[0,2],[5,10],[13,23],[24,25]]\n[[1,5],[8,12],[15,24],[25,26]]
---

## Problem

<p>You are given two lists of closed intervals, <code>firstList</code> and <code>secondList</code>, where <code>firstList[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> and <code>secondList[j] = [start<sub>j</sub>, end<sub>j</sub>]</code>. Each list of intervals is pairwise <strong>disjoint</strong> and in <strong>sorted order</strong>.</p>

<p>Return <em>the intersection of these two interval lists</em>.</p>

<p>A <strong>closed interval</strong> <code>[a, b]</code> (with <code>a &lt; b</code>) denotes the set of real numbers <code>x</code> with <code>a &lt;= x &lt;= b</code>.</p>

<p>The <strong>intersection</strong> of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of <code>[1, 3]</code> and <code>[2, 4]</code> is <code>[2, 3]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/30/interval1.png" style="width: 700px; height: 194px;" />
<pre>
<strong>Input:</strong> firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
<strong>Output:</strong> [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> firstList = [[1,3],[5,9]], secondList = []
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> firstList = [], secondList = [[4,8],[10,12]]
<strong>Output:</strong> []
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> firstList = [[1,7]], secondList = [[3,10]]
<strong>Output:</strong> [[3,7]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= firstList.length, secondList.length &lt;= 1000</code></li>
	<li><code>firstList.length + secondList.length &gt;= 1</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>end<sub>i</sub> &lt; start<sub>i+1</sub></code></li>
	<li><code>0 &lt;= start<sub>j</sub> &lt; end<sub>j</sub> &lt;= 10<sup>9</sup> </code></li>
	<li><code>end<sub>j</sub> &lt; start<sub>j+1</sub></code></li>
</ul>

## Discussion

This problem requires us to find intersection between two list of intervals.

Given that each list of intervals is **pairwise disjoint** and **sorted**,
we do not have to handle the complicated case within each list.

We imagine this problem can be solved with a two-pointer approach.
We set up two individual pointers on each list and moving along the list.
In each iteration we only compare one interval from each list.

We keep updating the pointer in the list with a smaller interval and eventually
every pairs of interval with chance of intersecting will be evaluated.

Now the problem looks to have a linear solution, all left to be done is the
pair evaluation. Below we can list out 6 scenarios for possible interval.

|Interval A | Interval B | Intersection | Interval to be Updated|
|-----------|------------|--------------|-----------------------|
| [1, 2] | [2, 3] | [2, 2] | A |
| [3, 4] | [2, 3] | [3, 3] | B |
| [3, 4] | [5, 6] | [] | A |
| [7, 8] | [5, 6] | [] | B |
| [3, 4] | [2, 5] | [3, 4] | A |
| [1, 6] | [4, 5] | [4, 5] | B |

Based on the listed out scenarios, we can observe two action to be taken
in the evaluation step:

1. Intersection of two interval is `[max(low_a, low_b), min(high_a, high_b)]`,
   if exists.

2. The interval lower upper limit is to be updated.

Based on this we can implement our solution.

### Solution

The code implementation is simple.

After some empty case checking we initialize two pointers,
and the evaluation is done in a single while loop.

```py3
class Solution:
    def intervalIntersection(
        self,
        firstList: List[List[int]],
		secondList: List[List[int]]
	) -> List[List[int]]:
        if len(firstList) == 0 or len(secondList) == 0:
            return []

        i, j, result = 0, 0, []

        while i < len(firstList) and j < len(secondList):
            low = max(firstList[i][0], secondList[j][0])
            high = min(firstList[i][1], secondList[j][1])

            if low <= high:
                result.append([low, high])

            if firstList[i][1] < secondList[j][1]:
                i += 1

            else:
                j += 1

        return result
```

### Complexity Analysis

- Time Complexity: `O(m + n)`, as only a single loop with two pointers in
  two lists.

- Space Complexity: `O(n)`, as the answer for this problem is a list
  with size limited by input, `n`.
