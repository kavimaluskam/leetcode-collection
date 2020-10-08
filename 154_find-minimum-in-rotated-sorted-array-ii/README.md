# [154] Find Minimum in Rotated Sorted Array II

<https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/>

- Tags: `Array`, `Binary Search`

- Diffculty: Hard

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 41.0%

- Total Accepted: 189350

- Total Submissions: 462048

- Testcase Example: [1,3,5]

## Description

<p>Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.</p>

<p>(i.e., &nbsp;<code>[0,1,2,4,5,6,7]</code>&nbsp;might become &nbsp;<code>[4,5,6,7,0,1,2]</code>).</p>

<p>Find the minimum element.</p>

<p>The array may contain duplicates.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> [1,3,5]
<strong>Output:</strong> 1</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> [2,2,2,0,1]
<strong>Output:</strong> 0</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>This is a follow up problem to&nbsp;<a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/">Find Minimum in Rotated Sorted Array</a>.</li>
	<li>Would allow duplicates affect the run-time complexity? How and why?</li>
</ul>

## Discussion

The problem provides an array sorted in ascending order and
rotated at some pivot unknown. We have to find the minimum value of it.

A very straight forward solution for this problem would be a direct iteration
and check if any element smaller than the first element is spotted. Then we can
locate the minimum value in `O(n)` time.

### Trial 1

[Trial 1](./submission_v0.py) gives a straight forward solution by linear
iteration. Since the input is sorted, we just iterate and search for element
smaller than the starting value, and return it. Otherwise we return the default
starting value
