---
id: "203"
title: "Remove Linked List Elements"
url: "https://leetcode.com/problems/remove-linked-list-elements/description/"
tags:
- "linked-list"
difficulty: Easy
acceptance: 38.9%
total-accepted: "390695"
total-submissions: "1005510"
testcase-example: "[1,2,6,3,4,5,6]\n6"
---

## Problem

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

### Solution

The solution begins with a loop iterate through all the elements,
and we keep update the `cache` to prepare to the link-reconstruction.

Once the desired value is scanned, we skip the `cache` update to skip it
from reconstruction.

Besides we managed a variable `cache_head`, in order to return the Linked-List
from the beginning.

```py3
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        node = head
        cache = None
        cache_head = None

        while node:
            if node.val != val:
                if not cache:
                    cache_head = node
                    cache = node
                else:
                    cache.next = node
                    cache = node
            node = node.next

        if cache:
            cache.next = node

        return cache_head
```

### Complexity Analysis

- Time Complexity: `O(n)`, as only one scanning of the list is required.

- Space Complexity: `O(1)`, as only two nodes are cached in memory.
