# [347] Top K Frequent Elements

<https://leetcode.com/problems/top-k-frequent-elements/description/>

- Tags: `Hash Table`, `Heap`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 60.6%

- Total Accepted: 398121

- Total Submissions: 657434

- Testcase Example: [1,1,1,2,2,3]\n2

## Description

<p>Given a non-empty array of integers, return the <b><i>k</i></b> most frequent elements.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong>nums = <span id="example-input-1-1">[1,1,1,2,2,3]</span>, k = <span id="example-input-1-2">2</span>
<strong>Output: </strong><span id="example-output-1">[1,2]</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong>nums = <span id="example-input-2-1">[1]</span>, k = <span id="example-input-2-2">1</span>
<strong>Output: </strong><span id="example-output-2">[1]</span></pre>
</div>

<p><b>Note: </b></p>

<ul>
	<li>You may assume <i>k</i> is always valid, 1 &le; <i>k</i> &le; number of unique elements.</li>
	<li>Your algorithm&#39;s time complexity <b>must be</b> better than O(<i>n</i> log <i>n</i>), where <i>n</i> is the array&#39;s size.</li>
	<li>It&#39;s guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.</li>
	<li>You can return the answer in any order.</li>
</ul>

## Discussion

Let's start with a naive approach. The first step we can come up to is to get
the counter map from the array, with time complexity `O(n)`.

Returning the `k` most frequent (highest value) item in the map, a naive
approach would be sorting the items and return the first `k` keys, with
time complexity `O(n log(n))`.

A better approach when it comes to *k largest* or *k lowest* problem would be
using heap. Some [notes](https://en.wikipedia.org/wiki/Heap_(data_structure)) /
[implementation](https://hg.python.org/cpython/file/2.7/Lib/heapq.py#l16)
is attached. And solving this step with heap can give time complexity
`O(n log(k))` which is more desirable.

### Complexity Analysis

As discussed, overall the time complexity is `O(n log(k))` with heap.
And the space complexity is `O(n)`, for the collection map and heap created.
