# [2] Add Two Numbers

<https://leetcode.com/problems/add-two-numbers/description/>

- Tags: `Linked List`, `Math`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 33.6%

- Total Accepted: 1422542

- Total Submissions: 4229704

- Testcase Example: [2,4,3]\n[5,6,4]

## Description

<p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The digits are stored in <b>reverse order</b> and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p><b>Example:</b></p>

<pre>
<b>Input:</b> (2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)
<b>Output:</b> 7 -&gt; 0 -&gt; 8
<b>Explanation:</b> 342 + 465 = 807.
</pre>

## Discussion

The main logic of this algorithm is simple: Mathematical addition
digit by digit, with digit saving in linked list.
Except tricky points to be handled:

1. when there is only 1 value in the sig. fig.

1. carry with value > 10 occur

1. handling the greatest sig. fig.

Solving `1`, we perform addition whenever there is at least 1 value in current
sig. fig. And when one of the linked list is ending, we add a
pesudo node `ListNode(0)` to it to proceed the addition.

Solving `2`, we pass the carry to the next sig. fig., save the remainder to
current sig. fig. in every iteration. So every iteration perform addition as:
`carry(0/1) + value_1 + value_2`

Solving `3`, we simply perform similar addition. And make sure `2` is handled as well.

With a single iteration loop with size = `max(l1.len, l2.len)`, we can
easily interpret that both `Time Complexity` and `Space Complexity`
is `O(m+n)`.
