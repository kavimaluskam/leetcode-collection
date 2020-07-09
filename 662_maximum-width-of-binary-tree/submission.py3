# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        result = 0

        def worker(node: TreeNode, result: int):
            if node.left:
                worker(node.left, result+1)
            if node.right:
                worker(node.right, result+1)
