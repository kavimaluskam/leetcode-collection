"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        ptr = head

        while t:
            if ptr.child:
                next = ptr.next
                ptr.next = ptr.child
                ptr.child.prev = ptr

                while ptr.child.next:
                    ptr.child = ptr.child.next

                if next:
                    next.prev = ptr.child

                ptr.child.next = next
                ptr.child = None

            ptr = ptr.next

        return head
