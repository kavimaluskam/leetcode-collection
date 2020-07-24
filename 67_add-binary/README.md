# [67] Add Binary

<https://leetcode.com/problems/add-binary/description/>

- Tags: `Math`, `String`

- Diffculty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 45.0%

- Total Accepted: 478276

- Total Submissions: 1062981

- Testcase Example: "11"\n"1"

## Description

<p>Given two binary strings, return their sum (also a binary string).</p>

<p>The input strings are both <strong>non-empty</strong> and contains only characters <code>1</code> or&nbsp;<code>0</code>.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;11&quot;, b = &quot;1&quot;
<strong>Output:</strong> &quot;100&quot;</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;1010&quot;, b = &quot;1011&quot;
<strong>Output:</strong> &quot;10101&quot;</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>Each string consists only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li>
	<li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li>
	<li>Each string is either <code>&quot;0&quot;</code> or doesn&#39;t contain any leading zero.</li>
</ul>

## Discussion

A problem very similar to [2. Add Two Numbers](../2_add-two-numbers).

Addition start with the tailing element, and proceed while carry exist,
or the list is completely scanned. A while loop will do.

And handling the remaining carry after the whole list scanned.

As the question is based on binary string, i try to avoid type changing and
handle addition with case control.

### Complexity Analysis

For `time complexity` it's obviously `O(n)`, scanning the whole list at worst.

For `space complexity` it's `O(1)`. As only memory and temp sum is in memory.
