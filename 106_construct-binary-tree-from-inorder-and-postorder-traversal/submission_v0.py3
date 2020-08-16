from typing import List

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, inorder, postorder):
        if not inorder:
            return

        root_value = postorder[-1]
        root_node = TreeNode(root_value)

        if len(inorder) == 1:
            return root_node

        break_ptr = -1

        for i in range(len(inorder)):
            if inorder[i] == root_value:
                break_ptr = i

        root_node.left = self.buildTree(
            inorder=inorder[:break_ptr],
            postorder=postorder[:break_ptr]
        )

        root_node.right = self.buildTree(
            inorder=inorder[break_ptr+1:],
            postorder=postorder[break_ptr:-1]
        )

        return root_node
