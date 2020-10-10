---
id: "1423"
title: "Maximum Points You Can Obtain from Cards"
url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/"
tags:
- "array"
- "dynamic-programming"
- "sliding-window"
difficulty: Medium
acceptance: 44.4%
total-accepted: "25462"
total-submissions: "57409"
testcase-example: |
  [1,2,3,4,5,6,1]\n3
---

## Problem

<p>There are several cards&nbsp;<strong>arranged in a row</strong>, and each card has an associated number of points&nbsp;The points are given in the integer array&nbsp;<code>cardPoints</code>.</p>

<p>In one step, you can take one card from the beginning or from the end of the row. You have to take exactly <code>k</code> cards.</p>

<p>Your score is the sum of the points of the cards you have taken.</p>

<p>Given the integer array <code>cardPoints</code> and the integer <code>k</code>, return the <em>maximum score</em> you can obtain.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> cardPoints = [1,2,3,4,5,6,1], k = 3
<strong>Output:</strong> 12
<strong>Explanation:</strong> After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> cardPoints = [2,2,2], k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> Regardless of which two cards you take, your score will always be 4.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> cardPoints = [9,7,7,9,7,7,9], k = 7
<strong>Output:</strong> 55
<strong>Explanation:</strong> You have to take all the cards. Your score is the sum of points of all cards.
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> cardPoints = [1,1000,1], k = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> You cannot take the card in the middle. Your best score is 1. 
</pre>

<p><strong>Example 5:</strong></p>

<pre>
<strong>Input:</strong> cardPoints = [1,79,80,1,1,1,200,1], k = 3
<strong>Output:</strong> 202
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= cardPoints.length &lt;= 10^5</code></li>
	<li><code>1 &lt;= cardPoints[i] &lt;= 10^4</code></li>
	<li><code>1 &lt;= k &lt;= cardPoints.length</code></li>
</ul>

## Discussion

The problem requires to find the maximum sum of `k` integers, which are being
picked from the beginning or the end only.

Solving this problem, we can list out the combinations of the `k` integers
and finding the maximum in them. Or, we can find the minimum of the unpicked
integers by sliding windows, and give the difference from sum of all integers.

### Solution

The solution begins with finding the sum of all integers in an `O(n)` loop.
Within the loop, we manage the sliding windows by summing the first
`n - k` integers as `window`.

After the first `n - k` integers, we update the sliding window by dropping
the first integer (`card[i - len(card) + k]`) and adding a new integer after the
window (`card[i]`). And we update the minimum of the sliding window at each
time.

```py3
from typing import List

class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        sum, window, min_window = 0, 0, 0

        for i in range(len(cardPoints)):
            sum += cardPoints[i]
            if i < len(cardPoints) - k:
                window += cardPoints[i]
                min_window = window
            else:
                window = window + \
                    cardPoints[i] - cardPoints[i - len(cardPoints) + k]
                min_window = min(min_window, window)

        return sum - min_window
```

### Complexity Analysis

- Time Complexity: `O(n)`, as the solution is completed within an `O(n)` loop.

- Space Complexity: `O(1)`, as we only cache three variables and updating them
  in each iteration.
