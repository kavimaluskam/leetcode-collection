---
id: 567
title: "Permutation in String"
url: "https://leetcode.com/problems/permutation-in-string/description/"
tags:
- "two-pointers"
- "sliding-window"
difficulty: "Medium"
acceptance: "44.4%"
total-accepted: "153488"
total-submissions: "345365"
testcase-example: |
  "ab"\n"eidbaooo"
---

## Problem

<p>Given two strings <b>s1</b> and <b>s2</b>, write a function to return true if <b>s2</b> contains the permutation of <b>s1</b>. In other words, one of the first string&#39;s permutations is the <b>substring</b> of the second string.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input: </b>s1 = &quot;ab&quot; s2 = &quot;eidbaooo&quot;
<b>Output: </b>True
<b>Explanation:</b> s2 contains one permutation of s1 (&quot;ba&quot;).
</pre>

<p><b>Example 2:</b></p>

<pre>
<b>Input:</b>s1= &quot;ab&quot; s2 = &quot;eidboaoo&quot;
<b>Output:</b> False
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The input strings only contain lower case letters.</li>
	<li>The length of both given strings is in range [1, 10,000].</li>
</ul>

## Discussion

Given two string with only alphabet letter, this problem requires us
to check if *any* permutation of a shorter string is a substring
of a longer string.

We immediately come up with the solution of using hash map for a shorter string,
and iterate along the longer string for the checking.

In order to compare for the hash map, we have to compute a temporary hash map
with similar size to do checking. Here we comes sliding window for the key to
the solution.

### Solution

Our solution starts with computing a hash map for the shorter string `s1`.
To compute the hash map in the longer string `s2`, we have to make sure
the size of both hash map are the same. And then when iterating along `s2`,
we can drop the first element and add the new element at the tail to maintain
the same size, i.e.

```sh
t = i: a, [b, c, d, e,] f, g, h, ....
t = i + 1: a, b, [c, d, e, f,] g, h, ....
```

In order to maintain the same size of two hash maps, we can simply construct
them in the same iteration. Then we only iterate `s2` for `len(s2) - len(s1)`
times.

```py3
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        h1, h2 = {}, {}

        for i in range(len(s1)):
            c1, c2 = s1[i], s2[i]
            if c1 in h1:
                h1[c1] += 1
            else:
                h1[c1] = 1

            if c2 in h2:
                h2[c2] += 1
            else:
                h2[c2] = 1

        size = len(s1)

        if h1 == h2: return True

        for i in range(len(s2) - len(s1)):
            head, tail = s2[i], s2[i + size]

            if h2[head] > 0:
                h2[head] -= 1
            else:
                del h2[head]

            if tail in h2:
                h2[tail] += 1
            else:
                h2[tail] = 1

            if h1 == h2:
                return True

        return False
```

### Complexity Analysis

- Time Complexity: `O(n)`, as in total only one iteration along `s2` is done,
  and the hash map comparison checking is only of `O(26) = O(1)`.

- Space Complexity: `O(1)`, as only constant space is used, and the hash map
  is of size `O(26) = O(1)`.
