# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        result = ListNode(0)
        node = result

        while (l1 and l1.next) or (l2 and l2.next):
            s = node.val

            if l1:
                s += l1.val
            if l2:
                s += l2.val

            node.val = s % 10
            node.next = ListNode(s//10)

            l1 = l1.next or ListNode(0)
            l2 = l2.next or ListNode(0)
            node = node.next

        if l1:
            node.val += l1.val

        if l2:
            node.val += l2.val

        if node.val >= 10:
            node.val = node.val % 10
            node.next = ListNode(1)

        return result
