---
id: 957
title: "Prison Cells After N Days"
url: "https://leetcode.com/problems/prison-cells-after-n-days/description/"
tags:
- "hash-table"
difficulty: Medium
acceptance: 40.4%
total-accepted: "101409"
total-submissions: "251106"
testcase-example: |
  [0,1,0,1,1,0,0,1]\n7
---

## Problem

<p>There are 8 prison cells in a row, and each cell is either occupied or vacant.</p>

<p>Each day, whether the cell is occupied or vacant changes according to the following rules:</p>

<ul>
	<li>If a cell has two adjacent neighbors that are both occupied or both vacant,&nbsp;then the cell becomes occupied.</li>
	<li>Otherwise, it becomes vacant.</li>
</ul>

<p>(Note that because the prison is a row, the first and the last cells in the row can&#39;t have two adjacent neighbors.)</p>

<p>We describe the current state of the prison&nbsp;in the following way:&nbsp;<code>cells[i] == 1</code> if the <code>i</code>-th cell is occupied, else <code>cells[i] == 0</code>.</p>

<p>Given the initial state of the prison, return the state of the prison after <code>N</code> days (and <code>N</code> such changes described above.)</p>

<p>&nbsp;</p>

<div>
<ol>
</ol>
</div>

<div>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong>cells = <span id="example-input-1-1">[0,1,0,1,1,0,0,1]</span>, N = <span id="example-input-1-2">7</span>
<strong>Output: </strong><span id="example-output-1">[0,0,1,1,0,0,0,0]</span>
<strong>Explanation: 
</strong><span id="example-output-1">The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]</span>

</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong>cells = <span id="example-input-2-1">[1,0,0,1,0,0,1,0]</span>, N = <span id="example-input-2-2">1000000000</span>
<strong>Output: </strong><span id="example-output-2">[0,0,1,1,1,1,1,0]</span>
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>cells.length == 8</code></li>
	<li><code>cells[i]</code> is in <code>{0, 1}</code></li>
	<li><code>1 &lt;= N &lt;= 10^9</code></li>
</ol>
</div>
</div>

## Discussion

The problems requires us to update a list based on the current values (state)
and a given logic rule, and evaluate the result after `N` iterations.

Let's start with the naive approach. Consider give integer `N`, we perform the
list update logic for `N` time, we will have the result in `O(n) time`. Simple.

To escape from the `O(n)`, our only hope is any looping pattern in this problem.
Detecting this, we cache the result into a list / map, and check if the latest
list exist in cache.

### Solution

Our solution iterates towards `N`, performing update to the list in each
iteration. And to search for repeat patterns, we cache the historical records
for the rows in Hash Map, and search for the updated rows to see if duplication
can be found.

Once we found a looping pattern, we can return the result from cache give days
= `(N - current day) % period + pattern start day`.

Well but if there's no looping pattern, we are doomed with `O(n)` being the best
time complexity.

```py3
from typing import List

class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        i = 0
        cache = {
            ','.join(str(x) for x in cells): i
        }
        pre = cells

        while i < N:
            i += 1
            new = [0,0,0,0,0,0,0,0]

            for j in range(1,7):
                if pre[j - 1] == pre[j + 1]:
                    new[j] = 1

            if ','.join(str(x) for x in new) in cache:
                j = cache.get(','.join(str(x) for x in new))
                period = i - j
                for snap, day in cache.items():
                    if day == j + (N - i) % period:
                        return [int(x) for x in snap.split(',')]

            cache[','.join(str(x) for x in new)] = i
            pre = new

        return new
```

### Complexity Analysis

- Time Complexity: `O(k)` if pattern with period `k` exists. Else `O(n)`.

- Space Complexity: `O(k)` if pattern with period `k` exists. Else `O(n)`.
