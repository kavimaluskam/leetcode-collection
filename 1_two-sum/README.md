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

### Trail 1

One can easily see a trivial solution with brutal force. We loop through each
element `x` in the list, and loop through each element again to check of
`target - x`. Yet this is a very slow solution giving time complexity `O(n^2)`.

### Trial 2

Based on *trial 1*, we can enhance the solution by preparing a hash map
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

### Complexity Analysis

- Time Complexity: `O(n)`, as only one looping of the input list is required.

- Space Complexity: `O(n)`, as a hash map of the elements in input array is
  created.
