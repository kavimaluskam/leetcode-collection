# [882] Peak Index in a Mountain Array

<https://leetcode.com/problems/peak-index-in-a-mountain-array/description/>

- Tags: `Binary Search`

- Difficulty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 71.8%

- Total Accepted: 181540

- Total Submissions: 252996

- Testcase Example: [0,1,0]

## Description

<p>Let&#39;s call an array <code>arr</code> a <strong>mountain</strong>&nbsp;if the following properties hold:</p>

<ul>
	<li><code>arr.length &gt;= 3</code></li>
	<li>There exists some <code>i</code> with&nbsp;<code>0 &lt; i&nbsp;&lt; arr.length - 1</code>&nbsp;such that:
	<ul>
		<li><code>arr[0] &lt; arr[1] &lt; ... arr[i-1] &lt; arr[i] </code></li>
		<li><code>arr[i] &gt; arr[i+1] &gt; ... &gt; arr[arr.length - 1]</code></li>
	</ul>
	</li>
</ul>

<p>Given an integer array arr that is <strong>guaranteed</strong> to be&nbsp;a mountain, return any&nbsp;<code>i</code>&nbsp;such that&nbsp;<code>arr[0] &lt; arr[1] &lt; ... arr[i - 1] &lt; arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [0,1,0]
<strong>Output:</strong> 1
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [0,2,1,0]
<strong>Output:</strong> 1
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [0,10,5,2]
<strong>Output:</strong> 1
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> arr = [3,4,5,1]
<strong>Output:</strong> 2
</pre><p><strong>Example 5:</strong></p>
<pre><strong>Input:</strong> arr = [24,69,100,99,79,78,67,36,26,19]
<strong>Output:</strong> 2
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>arr</code> is <strong>guaranteed</strong> to be a mountain array.</li>
</ul>

## Discussion

The problem setup is a very typical binary search problem.
Instead of simply iterate the input and find the peak value,
we aim to perform better with binary search approach.

With a common binary search setup, we compare the `mid` value in
each iteration. If the `mid` value is in *upper-peak*, we search
in the later part of the array, else search in the beginning part.

### Solution

We begin with a common binary search setup: initializing `head` and `tail`,
and try to evaluate and the median value, and update the search area in each
iteration, until `head` and `tail` come across each other.

When `mid` is smaller than the next value, it's clear in the `upper-peak`, and
we search in the later part of the array. Else, we search in the beginning part
of the array.

### Complexity Analysis

- Time Complexity: `O(log n)`, for simple binary search problem.

- Space Complexity: `O(1)`, as only 3 variables are cached in memory.
