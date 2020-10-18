---
id: 187
title: "Repeated DNA Sequences"
url: "https://leetcode.com/problems/repeated-dna-sequences/description/"
tags:
- "hash-table"
- "bit-manipulation"
difficulty: "Medium"
acceptance: "40.5%"
total-accepted: "186874"
total-submissions: "461413"
testcase-example: |
  "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
---

## Problem

<p>All DNA is composed of a series of nucleotides abbreviated as <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, and <code>&#39;T&#39;</code>, for example: <code>&quot;ACGAATTCCG&quot;</code>. When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.</p>

<p>Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
<strong>Output:</strong> ["AAAAACCCCC","CCCCCAAAAA"]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "AAAAAAAAAAAAA"
<strong>Output:</strong> ["AAAAAAAAAA"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, or <code>&#39;T&#39;</code>.</li>
</ul>

## Discussion

This problem requires finding substring with **fixed-length-of-10** and
**occur-more-than-once** in a given input string.

Instead of scanning by brutal force which takes `O(n^2)`, we can make use the
idea of sliding window algorithm. Then it's easy to find all
**substrings-of-size-10** and count their frequency.

### Solution

Our solution consists of two steps, counter-construction and frequency-counting.

First we make use of the idea of *sliding-window-algorithm* to scan all
substring of size-10 in one linear iteration, with two pointers moving together
with fixed distance of 10. The substrings are cached in a `counter (or hashmap)`
for frequency counting.

Then we simply return all substrings of frequency more than once.

```py3
from collections import Counter

class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        cache = Counter([s[i: i+10] for i in range(len(s) - 9)])
        return [key for key in cache.keys() if cache[key] > 1]
```

### Complexity Analysis

- Time Complexity: `O(n)`, given a linear iteration with two pointers.

- Space Complexity: `O(n)`, as a substring counter is saved in memory.
