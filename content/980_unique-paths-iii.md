---
id: "980"
title: "Unique Paths III"
url: "https://leetcode.com/problems/unique-paths-iii/description/"
tags:
- `backtracking`
- `depth-first-search`
difficulty: Hard
acceptance: 76.9%
total-accepted: "56420"
total-submissions: "73323"
testcase-example: "[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]"
---

## Problem

<p>On a 2-dimensional&nbsp;<code>grid</code>, there are 4 types of squares:</p>

<ul>
	<li><code>1</code> represents the starting square.&nbsp; There is exactly one starting square.</li>
	<li><code>2</code> represents the ending square.&nbsp; There is exactly one ending square.</li>
	<li><code>0</code> represents empty squares we can walk over.</li>
	<li><code>-1</code> represents obstacles that we cannot walk over.</li>
</ul>

<p>Return the number of 4-directional walks&nbsp;from the starting square to the ending square, that <strong>walk over every non-obstacle square&nbsp;exactly once</strong>.</p>

<p>&nbsp;</p>

<div>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-1-1">[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]</span>
<strong>Output: </strong><span id="example-output-1">2</span>
<strong>Explanation: </strong>We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-2-1">[[1,0,0,0],[0,0,0,0],[0,0,0,2]]</span>
<strong>Output: </strong><span id="example-output-2">4</span>
<strong>Explanation: </strong>We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-3-1">[[0,1],[2,0]]</span>
<strong>Output: </strong><span id="example-output-3">0</span>
<strong>Explanation: </strong>
There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
</pre>
</div>
</div>
</div>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= grid.length * grid[0].length &lt;= 20</code></li>
</ol>

## Discussion

This problem requires us to find all unique paths from point `1` to `2`.

As this requires iterations through all elements and all paths between two
points, we may come up with the idea of using DFS. Things become straight
forward now as actually this problem is very similar to
[79. Word Search](../79_word-search), which is obvious a DFS and back-tracking
problem.

Besides DFS and back-tracking to find all unique paths, we also have to make
sure all `0` is being used exactly once in the paths, and no other values
besides `0` and `1` are used. Achieving this we simply count all the `0` in grid
and do validation.

### Solution

We begin our solution with a loop finding all the `0` in the grid, and scanning
`1` to begin our DFS method. We use DFS by recursion here for simplicity.

In the DFS, we temporary update the visited node to some special value (`999`)
to prevent re-use of the same element in the grid and we restore the value after
each iteration.

Besides we maintain a variable `step` to see how many `0` or `1` is visited.
When we reach `2`, we check the value of `step` to see if all `0`
are being passed through exactly once. Then we update our result number if
a new unique path is founded.

```py3
from typing import List

class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        self.grid = grid
        self.result = 0
        self.number_of_zero = 0

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 0:
                    self.number_of_zero += 1

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    self.dfs(i, j, 0)
        return self.result


    def dfs(self, i, j, step):
        if self.grid[i][j] == 2:
            if step == self.number_of_zero + 1:
                self.result += 1
            return


        if self.grid[i][j] in (0, 1):
            temp, self.grid[i][j] = self.grid[i][j], 999

            if i > 0:
                self.dfs(i - 1, j, step + 1)

            if j > 0:
                self.dfs(i, j - 1, step + 1)

            if i < len(self.grid) - 1:
                self.dfs(i + 1, j, step + 1)

            if j < len(self.grid[0]) - 1:
                self.dfs(i, j + 1, step + 1)

            self.grid[i][j] = temp

        return
```

### Complexity Analysis

- Time Complexity: `O(3^n)`, as although we have 4 directions go search in each
  iteration, we have at most 3 directions to go in each iteration.

- Space Complexity: `O(n)`, as we apply recursion which at most holding `n`
  layer of instances. Besides only the input grid and other constant variables
  are maintained in memory.
