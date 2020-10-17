---
id: 74
title: "Search a 2D Matrix"
url: "https://leetcode.com/problems/search-a-2d-matrix/description/"
tags:
- "array"
- "binary-search"
difficulty: "Medium"
acceptance: "37.0%"
total-accepted: "377109"
total-submissions: "1018072"
testcase-example: |
  [[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3
---

## Problem

<p>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>

<ul>
	<li>Integers in each row are sorted from left to right.</li>
	<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
<strong>Output:</strong> false
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> matrix = [], target = 0
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>0 &lt;= m, n &lt;= 100</code></li>
	<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>

## Discussion

It's trivial that this problem is modified from the classic
binary search problem, with input list becoming 2D-array.

We can imagine the 2D-array to be flatten as an normal array, then the problem
is simplified as a binary search problem. Handling the search criteria and
evaluation from the 2D-array input and it's done.

### Solution

Our problem begins with a classic binary search setup. As the input become
2D-array, we set the `tail` to be `size_i * size_j - 1`.

And in each evaluation, we have to project the temporary value `mid` back to
index of the 2D-array as `mid // size_j` and `mid % size_j`.

```py3
from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not len(matrix) or not matrix[0]: return False

        size_i, size_j = len(matrix), len(matrix[0])
        head, tail = 0, size_i * size_j - 1

        while head < tail:
            mid = (head + tail) // 2

            i, j = mid // size_j, mid % size_j

            value = matrix[i][j]

            if value == target:
                return True

            if value > target:
                tail = mid - 1

            if value < target:
                head = mid + 1

        return matrix[head  // size_j][head % size_j] == target
```

### Complexity Analysis

- Time Complexity: `O(log(n))`, as for a binary search algorithm,
  wheres `n` indicates numbers of elements in the 2D-array here.

- Space Complexity: `O(1)`, as only constant variable is involved.
