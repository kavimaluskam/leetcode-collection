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
