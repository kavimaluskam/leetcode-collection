# [50] Pow(x, n)

<https://leetcode.com/problems/powx-n/description/>

- Tags: `Math`, `Binary Search`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 29.9%

- Total Accepted: 481857

- Total Submissions: 1609551

- Testcase Example: 2.00000\n10

## Description

<p>Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(<em>x</em>, <em>n</em>)</a>, which calculates&nbsp;<em>x</em> raised to the power <em>n</em> (x<sup><span style="font-size:10.8333px">n</span></sup>).</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 2.00000, 10
<strong>Output:</strong> 1024.00000
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> 2.10000, 3
<strong>Output:</strong> 9.26100
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> 2.00000, -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>-100.0 &lt; <em>x</em> &lt; 100.0</li>
	<li><em>n</em> is a 32-bit signed integer, within the range&nbsp;[&minus;2<sup>31</sup>,&nbsp;2<sup>31&nbsp;</sup>&minus; 1]</li>
</ul>

## Discussion

This problem requires numerous (`n`) but identical operations (multiplication),
which is a good set up of *reduce and base* algorithms. That is, we can easily
reduce the data size in each iteration, and end up solve the problem by
recursion. It's a type of questions like *binary search*.

### Solution

We try to reduce the size of `n` by half in each iteration. For case
where n is odd, we minus 1 from `n` and perform multiplication directly.

Moreover we have to handle the root case (`n == 0`) and negative `n`, as stated
in the problem.

### Complexity Analysis

- Time Complexity: `O(log(n))`, as the algorithm involves log_2(n)
  iterations, which is similar to binary search.

- Space Complexity: `O(log(n))`, as the algorithm is recursive and involves
  log_2(n) iterations, the root execution would hold maximum log_2(n) instance.
