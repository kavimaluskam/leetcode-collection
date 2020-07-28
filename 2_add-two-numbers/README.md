# [2] Add Two Numbers

<https://leetcode.com/problems/add-two-numbers/description/>

- Tags: `Linked List`, `Math`

- Difficulty: Medium

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

### Complexity Analysis

- Time Complexity: `O(max(m, n))`, wheres `m` and `n` are the size of the two
  input list. As only one looping through the larger input linked list is
  required.

- Space Complexity: `O(max(m, n))`, as the result linked list's size is
  determined by the larger input linked list.
