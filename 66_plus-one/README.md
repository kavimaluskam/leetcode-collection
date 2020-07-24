# [66] Plus One

<https://leetcode.com/problems/plus-one/description/>

- Tags: `Array`

- Difficulty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 42.9%

- Total Accepted: 634328

- Total Submissions: 1477481

- Testcase Example: [1,2,3]

## Description

<p>Given a <strong>non-empty</strong> array of digits&nbsp;representing a non-negative integer, increment&nbsp;one to the integer.</p>

<p>The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.</p>

<p>You may assume the integer does not contain any leading zero, except the number 0 itself.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> [1,2,3]
<strong>Output:</strong> [1,2,4]
<strong>Explanation:</strong> The array represents the integer 123.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> [4,3,2,1]
<strong>Output:</strong> [4,3,2,2]
<strong>Explanation:</strong> The array represents the integer 4321.
</pre>

## Discussion

A problem very similar to [2. Add Two Numbers](../2_add-two-numbers):
Mathematical addition for a integer with digits in list. As only `1` is being
added to the integer, the algorithm is rather straight forward.

### Solution

We perform addition from the last element of list, and carry on addition as long
as carry digit exists. For simplicity sake, the starting `1` is also
handled as a carry digit.

At last, we have to check and handle if carry digits exists after we
loop through all digits in the list.

### Complexity Analysis

- Time Complexity: `O(n)`, scanning the whole list at worst.

- Space Complexity: `O(1)`. As only memory and temp sum is in memory.
