---
id: 274
title: "H-Index"
url: "https://leetcode.com/problems/h-index/description/"
tags:
- "hash-table"
- "sort"
difficulty: Medium
acceptance: 36.3%
total-accepted: "189165"
total-submissions: "521403"
testcase-example: |
   [3,0,6,1,5]
---

## Problem

<p>Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher&#39;s h-index.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: &quot;A scientist has index <i>h</i> if <i>h</i> of his/her <i>N</i> papers have <b>at least</b> <i>h</i> citations each, and the other <i>N &minus; h</i> papers have <b>no more than</b> <i>h</i> citations each.&quot;</p>

<p><b>Example:</b></p>

<pre>
<b>Input:</b> <code>citations = [3,0,6,1,5]</code>
<b>Output:</b> 3 
<strong>Explanation: </strong><code>[3,0,6,1,5] </code>means the researcher has <code>5</code> papers in total and each of them had 
             received <code>3, 0, 6, 1, 5</code> citations respectively. 
&nbsp;            Since the researcher has <code>3</code> papers with <b>at least</b> <code>3</code> citations each and the remaining 
&nbsp;            two with <b>no more than</b> <code>3</code> citations each, her h-index is <code>3</code>.</pre>

<p><strong>Note:&nbsp;</strong>If there are several possible values for <em>h</em>, the maximum one is taken as the h-index.</p>

## Discussion

The question requires us to find `h` smaller than `n` such that, there is
**at least** `h` values in the list larger than `h`.

As suggested from leetcode hints, one easy solution would be sorting the input
list. Then search from the larger integer side and stop when the value is
smaller then the index, we get `h`.

Instead of sorting algorithm which gives time complexity of `O(n log(n))`, we
can make use of the fact `h` is smaller than `n`. We create a hash list with size
`n`, then save a count collection with value later than `n` ceiled at `n`.
Then searching in the hash list would be give the result.

### Trial 1

*Trial 1* gives a straight forward solution based on
sorting. Then we can iterate from the larger integer side. Check for the
value the begins to be smaller than the iterate index and imply return it.

```py3
from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations = sorted(citations, reverse=True)
        i = 0
        while i < len(citations):
            if citations[i] >= i + 1:
                i += 1
            else:
                break
        return i
```

### Solution

*The final solution* gives a faster solution without sorting,
and of course with larger space. First we setup a list of size `n` for saving
the counts. Then we iterate through the input list and add the counts to the
list. For values larger than `n` we just add the counts to `n` instead.

Then, we can iterate through the cache list from the larger size, and summing
the counts. We break the iteration as long as the result is larger than the
index and result the result, stating the total counts.

```py3
from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        size = len(citations)
        cache = [0] * (size)

        for citation in citations:
            if citation == 0:
                continue
            if citation > size:
                citation = size

            cache[citation - 1] += 1

        result = 0
        for i in reversed(range(size)):
            result += cache[i]

            if result >= i + 1:
                return i + 1

        return result
```

### Complexity Analysis

- Time Complexity: `O(n)`, as only two iteration is involved.

- Space Complexity: `O(n)`, as we only maintain the collection list of size `n`.
