# [1] Two Sum

<https://leetcode.com/problems/two-sum/description/>

- Tags: `Array`, `Hash Table`

- Difficulty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 45.5%

- Total Accepted: 3045404

- Total Submissions: 6689447

- Testcase Example: [2,7,11,15]\n9

## Description

<p>Given an array of integers, return <strong>indices</strong> of the two numbers such that they add up to a specific target.</p>

<p>You may assume that each input would have <strong><em>exactly</em></strong> one solution, and you may not use the <em>same</em> element twice.</p>

<p><strong>Example:</strong></p>

<pre>
Given nums = [2, 7, 11, 15], target = 9,

Because nums[<strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,
return [<strong>0</strong>, <strong>1</strong>].
</pre>

## Discussion

Actually no much algorithm can be applied to this question.

One can easily see a trivial solution with brutal force to get
an O(n^2) solution. On top of it, we enhance the solution with
a hash map (`dict` in python) to sacrifice `memory` for `time complexity`.

Instead of looping twice, we try to add tested element to the hash map as:
`{element: index}` in every iteration.

### Complexity Analysis

Thus only one loop is required. For worst case computation,
giving `time complexity = O(n)`, and `space complexity = O(n)` for saving all
but the last element.
