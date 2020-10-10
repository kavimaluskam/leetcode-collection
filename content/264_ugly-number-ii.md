---
id: "264"
title: "Ugly Number II"
url: "https://leetcode.com/problems/ugly-number-ii/description/"
tags:
- `math`
- `dynamic-programming`
- `heap`
difficulty: Medium
acceptance: 42.3%
total-accepted: "187544"
total-submissions: "443009"
testcase-example: "10"
---

## Problem

<p>Write a program to find the <code>n</code>-th ugly number.</p>

<p>Ugly numbers are<strong> positive numbers</strong> whose prime factors only include <code>2, 3, 5</code>.&nbsp;</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 12
<strong>Explanation: </strong><code>1, 2, 3, 4, 5, 6, 8, 9, 10, 12</code> is the sequence of the first <code>10</code> ugly numbers.</pre>

<p><strong>Note: </strong>&nbsp;</p>

<ol>
	<li><code>1</code> is typically treated as an ugly number.</li>
	<li><code>n</code> <b>does not exceed 1690</b>.</li>
</ol>

## Discussion

We use the 3-queues approach in hints. Solving this problem, there are two
points to be noted:

1. an *ugly number* must be multiplied by either 2, 3, or 5 from a
smaller *ugly number*

1. the key is how to maintain the order of the *ugly numbers*.

To include all *ugly numbers*, we can maintain 3 queues: `q_2`, `q_3`, `q_5`,
such that for every *ugly numbers* `u`, we have:
`2 * u in q_2`, `3 * u in q_3`, and `5 * u in q_5`.

### Solution

Under the above setup we can confirm that every *ugly number* is included in
`q_2 + q_3 + q_5`. Achieving this, imagine at `k` iteration, we have:

```python
u_k = min(q_2[0], q_3[0], q_5[0])

if u_k = q_2[0]: q_2.pop(0)
if u_k = q_3[0]: q_3.pop(0)
if u_k = q_5[0]: q_5.pop(0)

q_2.append(u_k * 2)
q_3.append(u_k * 3)
q_5.append(u_k * 5)
```

For the initiation, we skip the first complex cases, and setup for `k = 2`:

```py3
u_1 = 1

q_2 = [2]
q_3 = [3]
q_5 = [5]
```

Combine the first case and `k` iteration, we have the algorithm.

```py3
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        q2 = [2]
        q3 = [3]
        q5 = [5]

        r = 1

        i = 1

        while i < n:
            r = min(q2[0], q3[0], q5[0])

            if r == q2[0]:
                q2.pop(0)

            if r == q3[0]:
                q3.pop(0)

            if r == q5[0]:
                q5.pop(0)

            q2.append(r * 2)
            q3.append(r * 3)
            q5.append(r * 5)

            i += 1

        return r
```

### Complexity Analysis

- Time Complexity: `O(n)`, as we produce 1 *ugly number* in each iteration

- Space Complexity: `O(n)`, as we remove 1 element but push 3 element in each
  iteration. So the space will be occupied by `2n`.
