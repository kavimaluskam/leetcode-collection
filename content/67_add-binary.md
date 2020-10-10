---
id: "67"
title: "Add Binary"
url: "https://leetcode.com/problems/add-binary/description/"
tags:
- "math"
- "string"
difficulty: Easy
acceptance: 45.9%
total-accepted: "515825"
total-submissions: "1124569"
testcase-example: ""11"\n"1""
---

## Problem

<p>Given two binary strings, return their sum (also a binary string).</p>

<p>The input strings are both <strong>non-empty</strong> and contains only characters <code>1</code> or&nbsp;<code>0</code>.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;11&quot;, b = &quot;1&quot;
<strong>Output:</strong> &quot;100&quot;</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;1010&quot;, b = &quot;1011&quot;
<strong>Output:</strong> &quot;10101&quot;</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>Each string consists only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li>
	<li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li>
	<li>Each string is either <code>&quot;0&quot;</code> or doesn&#39;t contain any leading zero.</li>
</ul>

## Discussion

A problem very similar to [2. Add Two Numbers](./2_add-two-numbers.md):
Mathematical addition for binary numbers in string. As the input date is
in binary string format, i try to keep the data type and handle the addition
by conditional cases.

### Solution

Similar to [2. Add Two Numbers](./2_add-two-numbers.md), we have to handle:

1. When two numbers have different numbers of significant figures,

1. When carry digits exist in the addition,

1. When the most significant figures of the sum is carry.

Solving `1`, when there is 1 binary string running out of characters during
addition, we proceed the addition with the missing digits replaced by `"0"`.

Handling the addition, we view it as string conditional cases:

|  ID | string A | string B | carry | result |
| --- |-------- | -------- | ----- | ------ |
|   1 |       0 |        0 |     0 |      0 |
|   2 |       0 |        0 |     1 |      1 |
|   3 |       0 |        1 |     0 |      1 |
|   4 |       0 |        1 |     1 |     10 |
|   5 |       1 |        0 |     0 |      1 |
|   6 |       1 |        0 |     1 |     10 |
|   7 |       1 |        1 |     0 |     10 |
|   8 |       1 |        1 |     1 |     11 |

Hence we can conclude:

1. When string A equals string B (case `1` - `2`, `7` - `8`), we can see the
   result digit equals to carry, while the result digit's equals string A
   and string B's value,

1. When string A does not equals string B (case `3` - `6`), we can see the
   result dominated by carry. When carry is `"0"`, result becomes `"1"`;
   when carry is `"1"`, result becomes `"10"`.

Hence we apply this logic in the additional handling. And after the handling of
`2` and `3`, the solution completes.

```py3
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = ''
        is_carry_exist = False

        size_a, size_b = len(a), len(b)
        n = max(size_a, size_b)

        for i in range(n):
            val_a = a[size_a - i - 1] if size_a > i else '0'
            val_b = b[size_b - i - 1] if size_b > i else '0'

            if val_a == val_b:
                if is_carry_exist:
                    result = '1' + result
                else:
                    result = '0' + result

                is_carry_exist = (val_a == '1' and val_b == '1')

            if val_a != val_b:
                if is_carry_exist:
                    result = '0' + result
                else:
                    result = '1' + result

        if is_carry_exist:
            result = '1' + result

        return result
```

### Complexity Analysis

- Time Complexity: `O(max(m, n))`, wheres `m` and `n` are the size of the two
  input binary string. As only one looping through the larger binary string is
  required.

- Space Complexity: `O(max(m, n))`, as the result binary string's size is
  determined by the larger input binary string.
