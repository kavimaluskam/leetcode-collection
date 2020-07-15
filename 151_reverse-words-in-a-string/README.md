# [151] Reverse Words in a String

<https://leetcode.com/problems/reverse-words-in-a-string/description/>

- Tags: `String`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 21.2%

- Total Accepted: 412902

- Total Submissions: 1947998

- Testcase Example: "the sky is blue"

## Description

<p>Given an input string, reverse the string word by word.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> &quot;<code>the sky is blue</code>&quot;
<strong>Output:&nbsp;</strong>&quot;<code>blue is sky the</code>&quot;
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> &quot; &nbsp;hello world! &nbsp;&quot;
<strong>Output:&nbsp;</strong>&quot;world! hello&quot;
<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> &quot;a good &nbsp; example&quot;
<strong>Output:&nbsp;</strong>&quot;example good a&quot;
<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ul>
	<li>A word is defined as a sequence of non-space characters.</li>
	<li>Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.</li>
	<li>You need to reduce multiple spaces between two words to a single space in the reversed string.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Follow up:</strong></p>

<p>For C programmers, try to solve it <em>in-place</em> in <em>O</em>(1) extra space.</p>

## Discussion

We break down the string into words list, and perform reverse with two pointers.

Interesting that [one solution in leetcode](https://leetcode.com/problems/reverse-words-in-a-string/discuss/737801/Python-Simple-O(N)-solution-with-simple-case-checking)
mentioned `string.split()` in python can remove all space built in, hence give a
more elegant solution.

### Complexity Analysis

For `time complexity` it's obviously `O(n)`, scanning the string into words,
and perform reverse with two pointers along the array.

For `space complexity` it's `O(n)` as well. As the size of the words array is
determined by input string size.
