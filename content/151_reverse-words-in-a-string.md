---
id: 151
title: "Reverse Words in a String"
url: "https://leetcode.com/problems/reverse-words-in-a-string/description/"
tags:
- "string"
difficulty: Medium
acceptance: 22.5%
total-accepted: "457832"
total-submissions: "2038353"
testcase-example: |
   "the sky is blue"
---

## Problem

<p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.</p>

<p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.</p>

<p>Return <em>a string of the words in reverse order concatenated by a single space.</em></p>

<p><b>Note</b> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;the sky is blue&quot;
<strong>Output:</strong> &quot;blue is sky the&quot;
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;  hello world  &quot;
<strong>Output:</strong> &quot;world hello&quot;
<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a good   example&quot;
<strong>Output:</strong> &quot;example good a&quot;
<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;  Bob    Loves  Alice   &quot;
<strong>Output:</strong> &quot;Alice Loves Bob&quot;
</pre>

<p><strong>Example 5:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Alice does not even like bob&quot;
<strong>Output:</strong> &quot;bob like even not does Alice&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>&#39; &#39;</code>.</li>
	<li>There is <strong>at least one</strong> word in <code>s</code>.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Follow up:</strong></p>

<ul>
	<li>Could you solve it <strong>in-place</strong> with <code>O(1)</code> extra space?</li>
</ul>

<p>&nbsp;</p>

## Discussion

The problem requires us to reverse the words in a sentence string.
So we think of breaking down the string into words list,
and perform reverse with two pointers.

Interesting that [one solution in leetcode](https://leetcode.com/problems/reverse-words-in-a-string/discuss/737801/Python-Simple-O(N)-solution-with-simple-case-checking)
mentioned `string.split()` in python can remove all space, hence giving a
more elegant solution.

### Solution

We first break down the sentence into list of word by splitting,
then we have two pointers from the beginning and end, iterating till they meet.

In each iteration, we check if any space is scanned and we will skip it,
then we interchange the values at the two pointers, and update the two pointers
after complete.

```py3
class Solution:
    def reverseWords(self, s: str) -> str:
        sl = s.split(' ')

        head = 0
        tail = len(sl) - 1

        while head <= tail:
            if sl[head] == '':
                sl.pop(head)
                tail -=1
                continue

            if sl[tail] == '':
                sl.pop(tail)
                tail -=1
                continue

            sl[head], sl[tail] = sl[tail], sl[head]
            head += 1
            tail -=1
            continue

        return ' '.join(sl)
```

### Complexity Analysis

- Time Complexity: `O(n)`, scanning the string into words,
  and perform reverse with  two pointers along the array.

- Space Complexity: `O(n)`, as we have to put the word array in memory.
