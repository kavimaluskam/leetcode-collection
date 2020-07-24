# [994] Prison Cells After N Days

<https://leetcode.com/problems/prison-cells-after-n-days/description/>

- Tags: `Hash Table`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 41.1%

- Total Accepted: 88590

- Total Submissions: 215450

- Testcase Example: [0,1,0,1,1,0,0,1]\n7

## Description

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

Let's start with the naive approach. Consider give integer `N`, we perform the
list update logic for `N` time, we will have the result in `O(n) time`. Simple.

To escape from the `O(n)`, our only hope is any looping pattern in this problem.
Detecting this, we cache the result into a list / map, and check if the latest
list exist in cache.

Once we found a looping pattern, we can return the result from cache give days
= `(N - current day) % period + pattern start day`.

Well but if there's no looping pattern, we are doomed with `O(n)` being the best
time complexity.

### Complexity Analysis

If no pattern exist, we shall stick with the naive approach. Giving
`time complexity` being `O(n)`, `space complexity` being `O(1)`.

If pattern exist, let's say pattern with period `k`, we have
`time Complexity` being `O(2k) = O(k)`, when we use map as the cache,
with `space complexity` being `O(k)`.