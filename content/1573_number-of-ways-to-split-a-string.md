---
id: 1573
title: "Number of Ways to Split a String"
url: "https://leetcode.com/problems/number-of-ways-to-split-a-string/description/"
tags:
- "string"
difficulty: "Medium"
acceptance: "30.9%"
total-accepted: "10305"
total-submissions: "33336"
testcase-example: |
  "10101"
---

## Problem

<p>Given a binary string <code>s</code> (a string consisting only of &#39;0&#39;s and &#39;1&#39;s),&nbsp;we can split <code>s</code>&nbsp;into 3 <strong>non-empty</strong> strings s1, s2, s3 (s1+ s2+ s3 = s).</p>

<p>Return the number of ways <code>s</code> can be split such that the number of&nbsp;characters &#39;1&#39; is the same in s1, s2, and s3.</p>

<p>Since the answer&nbsp;may be too large,&nbsp;return it modulo&nbsp;10^9 + 7.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;10101&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are four ways to split s in 3 parts where each part contain the same number of letters &#39;1&#39;.
&quot;1|010|1&quot;
&quot;1|01|01&quot;
&quot;10|10|1&quot;
&quot;10|1|01&quot;
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1001&quot;
<strong>Output:</strong> 0
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;0000&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to split s in 3 parts.
&quot;0|0|00&quot;
&quot;0|00|0&quot;
&quot;00|0|0&quot;
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;100100010100110&quot;
<strong>Output:</strong> 12
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 10^5</code></li>
	<li><code>s[i]</code> is <code>&#39;0&#39;</code>&nbsp;or&nbsp;<code>&#39;1&#39;</code>.</li>
</ul>

## Discussion

The problem requires to find way of splitting a string with only `0`s and `1`s,
where the string is split into three parts, and each part carrying equal
numbers of `1`s.

First we can come up with a brutal force solution, wheres we calculate
all combinations of splitting the string with two moving pointers.
Wheres should result in time complexity of `O(n ^ 2)`. But we shall be able
to optimize the problem into `O(n)`.

We can consider the cases of input string and observe of solving patterns.

1. No. of `1`s is zero

1. No. of `1`s is not divisible by 3

1. No. of `1`s is divisible by 3

For case 1, we can see all splitting way fulfills the requirements,
so we return the numbers of way splitting the string into 3 parts,
which equals to `(n - 1) * (n - 2) / 2` (Consider two pointer as
splitting position moving along all space between the characters).

For case 2, we can straightly return 0 as there is no correct ways to split.

For case 3, we can see the result equals to the combination of
*way of splitting between the first and second group of `1`s* and
*way of splitting between the second and third group of `1`s*

Hence, we can see that by saving all the index of `1`s in the string,
we can handle all the above three cases in a linear processing time.

### Solution

Our solution begins with saving the index of `1`s in the string to a list.

We then can further handle the three cases by counting the length of the list,
which referring to the number of `1`s in the string.

For case 1 and 2 the implementation is straight forward. For case 3,
we first evaluate the *chunk* size of the `1` group, then we can find the
starting and ending index of each `1` group. Hence the position of the `0`s
between the `1`s groups are located.

Finally we evaluate the mod when returning the value.

```py3
class Solution:
    def numWays(self, s: str) -> int:
        index, size = [], len(s)

        for i in range(size):
            if s[i] == '1':
                index.append(i)

        count = len(index)
        if count == 0:
            result = (size - 1) * (size - 2) // 2

        elif count % 3 != 0:
            result = 0

        else:
            count = count // 3

            l = index[count] - index[count - 1]
            r = index[2 * count] - index[2 * count - 1]
            result = l * r

        return result % (10**9 + 7)
```

### Complexity Analysis

- Time Complexity: `O(n)`, as one iteration on the input string is required.

- Space Complexity: `O(n)`, index of `1`s is saved in memory, which is limited
  by the input size.
