---
id: "1"
title: "Two Sum"
url: "https://leetcode.com/problems/two-sum/description/"
tags:
- "array"
- "hash-table"
difficulty: Easy
acceptance: 45.9%
total-accepted: "3399241"
total-submissions: "7408324"
testcase-example: |
  [2,7,11,15]\n9
---

## Problem

<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Output:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

## Discussion

### Trial 1

One can easily see a trivial solution with brutal force. We loop through each
element `x` in the list, and loop through each element again to check of
`target - x`. Yet this is a very slow solution giving time complexity `O(n^2)`.

### Trial 2

Based on *Trial 1*, we can enhance the solution by preparing a hash map
(`dict` in python). Hence we loop through each element `x` in the list, and
check for element `target - x` in the hash map. As look up in hash map is
atomic, the time complexity of the algorithm improved to `O(n)`. While the hash
map takes space of `O(n)`. We sacrifice memory for algorithm performance.

### Solution

Further improving *trail 2*, we can preparing the hash map while looping
through each element in the list. For cases where no correct pair is found,
we add the new element to the hash map as: `{element: index}` in each iteration.

Although the time complexity and space complexity remains unchanged, but for
normal cases, the correct pair is found before looping through every element,
so the actual iteration and size of map is smaller than `n`.

```py3
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cache = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in cache and cache.get(diff) is not i:
                return [
                    min(i, cache.get(diff)),
                    max(i, cache.get(diff)),
                ]

            else:
                cache.update({
                    nums[i]: i
                })
```

### Complexity Analysis

- Time Complexity: `O(n)`, as only one looping of the input list is required.

- Space Complexity: `O(n)`, as a hash map of the elements in input array is
  created.
