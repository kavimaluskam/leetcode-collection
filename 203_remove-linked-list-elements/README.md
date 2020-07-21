# [203] Remove Linked List Elements

<https://leetcode.com/problems/remove-linked-list-elements/description/>

- Tags: `Linked List`

- Diffculty: Easy

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 38.5%

- Total Accepted: 354806

- Total Submissions: 922481

- Testcase Example: [1,2,6,3,4,5,6]\n6

## Description

<p>Remove all elements from a linked list of integers that have value <b><i>val</i></b>.</p>

<p><b>Example:</b></p>

<pre>
<b>Input:</b>  1-&gt;2-&gt;6-&gt;3-&gt;4-&gt;5-&gt;6, <em><b>val</b></em> = 6
<b>Output:</b> 1-&gt;2-&gt;3-&gt;4-&gt;5
</pre>

## Discussion

This problem requires an algorithm scanning through the linked-list, removing
desired node and reconstruct the links.

An intuitive approach would be scanning the value of the next node.
If the next node is to-be-removed, we can reconstruct the link to the
next-next node.

Yet a problem is that we can't filter out the node at the beginning if they
are carrying the desired value.

There are different approach to do. Instead of [creating a pesudo-node at the
beginning](https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/discuss/746590/O(n)-time-O(1)-space-solution-wvideo-whiteboard-explanation),
i cache the previously scanned node, and check current node's value.

### Complexity Analysis

`Time Complexity` of this algorithm is `O(n)` as only one scanning to the list
is required. And `Space Complexity` of this algorithm is `O(1)` as we only
have to maintain the cached node.
