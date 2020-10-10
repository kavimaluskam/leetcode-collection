---
id: "2"
title: "Add Two Numbers"
url: "https://leetcode.com/problems/add-two-numbers/description/"
tags:
- "linked-list"
- "math"
difficulty: Medium
acceptance: 34.3%
total-accepted: "1579094"
total-submissions: "4605932"
testcase-example: "[2,4,3]\n[5,6,4]"
---

## Problem

<p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The digits are stored in <b>reverse order</b>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>

## Discussion

The main logic of this algorithm is simple: Mathematical addition
digit by digit, with digits in linked lists.
Yet there are tricky points to be handled:

1. When two numbers have different numbers of significant figures,

1. When carry digits exist in the addition, and

1. When the most significant figures of the sum is carry.

### Solution

Solving `1`, when there is 1 linked list running out of nodes during
addition, we proceed the addition with the missing digits replaced by 0.

Solving `2`, we cache any carry digit in each iteration, and pass the digit
to the next digital addition. The remainder of the digital sum is saved
in the result linked list. Thus every iteration perform addition as:
`carry(0/1) + value_1 + value_2`

Solving `3`, we perform similar addition in `1`, check and handle `2` after the
last iteration.

```py3
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        result = ListNode(0)
        node = result

        while (l1 and l1.next) or (l2 and l2.next):
            s = node.val

            if l1:
                s += l1.val
            if l2:
                s += l2.val

            node.val = s % 10
            node.next = ListNode(s//10)

            l1 = l1.next or ListNode(0)
            l2 = l2.next or ListNode(0)
            node = node.next

        if l1:
            node.val += l1.val

        if l2:
            node.val += l2.val

        if node.val >= 10:
            node.val = node.val % 10
            node.next = ListNode(1)

        return result
```

### Complexity Analysis

- Time Complexity: `O(max(m, n))`, wheres `m` and `n` are the size of the two
  input list. As only one looping through the larger input linked list is
  required.

- Space Complexity: `O(max(m, n))`, as the result linked list's size is
  determined by the larger input linked list.
