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

A typical reduce and base algorithm will do. Consider we reduce the size of
numbers to be multiply by twice, and handle the case where numbers are odd, the
algorithms are mostly finished.

Similar to the binary search issue, this algorithm's `time complexity` is
`O(log n)`, with constant `space complexity`.
