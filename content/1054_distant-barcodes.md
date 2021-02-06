---
id: 1054
title: "Distant Barcodes"
url: "https://leetcode.com/problems/distant-barcodes/description/"
tags:
- "heap"
- "sort"
difficulty: "Medium"
acceptance: "44.2%"
total-accepted: "21117"
total-submissions: "47742"
testcase-example: |
  [1,1,1,2,2,2]
---

## Problem

<p>In a warehouse, there is a row of barcodes, where the <code>i<sup>th</sup></code> barcode is <code>barcodes[i]</code>.</p>

<p>Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> barcodes = [1,1,1,2,2,2]
<strong>Output:</strong> [2,1,2,1,2,1]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> barcodes = [1,1,1,1,2,2,3,3]
<strong>Output:</strong> [1,3,1,3,1,2,1,2]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= barcodes.length &lt;= 10000</code></li>
	<li><code>1 &lt;= barcodes[i] &lt;= 10000</code></li>
</ul>

## Discussion

The problem requires us to reorder the element in list, such that no adjacent
identical elements in the output.

Instead of working around with the existing list or doing something with the
indices, the `collections.Counter` should helps a lot in the problem.

As it is guaranteed that an answer always exists, we can imagine that filling
the first 2 most frequent elements to all the odd indices to the result list,
then continue to fill the remaining elements should give a clean solution.

### Solution

Our solution starts with the `collections.Counter` to the input list.

The elements are first filled to all the odd indices to the result list, then
to all even indices when the end is reached.

As the `most_common(n)` function works near to linear only when `n` is small,
we only fill the first 2 elements in the first round. And then they are removed
from the counter and the algorithm continues.

```py3
class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        i, count = 0, collections.Counter(barcodes)

        for barcode, cnt in count.most_common(2):
            for _ in range(cnt):
                barcodes[i] = barcode
                i = i+2 if i+2 < len(barcodes) else 1
            del count[barcode]

        for barcode, cnt in count.items():
            for _ in range(cnt):
                barcodes[i] = barcode
                i = i+2 if i+2 < len(barcodes) else 1

        return barcodes
```

### Complexity Analysis

- Time Complexity: `O(n)`, as only a double for-loop iterating for all the
  elements exists in the implementation, which is `O(n)`. And as mentioned,
  the `most_common(n)` work tends to `O(n)` when `n` is small like `2`.

- Space Complexity: `O(n)`, as the result is of size `n`.
