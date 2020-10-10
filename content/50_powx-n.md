---
id: "50"
title: "Pow(x, n)"
url: "https://leetcode.com/problems/powx-n/description/"
tags:
- `Math`
- `Binary Search`
difficulty: Medium
acceptance: 30.5%
total-accepted: "538442"
total-submissions: "1762789"
testcase-example: "2.00000\n10"
---

## Problem

<p>Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(<em>x</em>, <em>n</em>)</a>, which calculates&nbsp;<em>x</em> raised to the power <em>n</em> (i.e. x<sup><span style="font-size:10.8333px">n</span></sup>).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 2.00000, n = 10
<strong>Output:</strong> 1024.00000
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = 2.10000, n = 3
<strong>Output:</strong> 9.26100
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 2.00000, n = -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-100.0 &lt;&nbsp;x&nbsp;&lt; 100.0</code></li>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= n &lt;=&nbsp;2<sup>31</sup>-1</code></li>
	<li><code>-10<sup>4</sup> &lt;= x<sup>n</sup> &lt;= 10<sup>4</sup></code></li>
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

```py3
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1

        if n < 0:
            return self.myPow(1/x, -n)

        if n % 2 == 0:
            t = self.myPow(x, n//2)
            return t * t

        if n % 2 == 1:
            t = self.myPow(x, n//2)
            return t * t * x
```

### Complexity Analysis

- Time Complexity: `O(log(n))`, as the algorithm involves log_2(n)
  iterations, which is similar to binary search.

- Space Complexity: `O(log(n))`, as the algorithm is recursive and involves
  log_2(n) iterations, the root execution would hold maximum log_2(n) instance.
