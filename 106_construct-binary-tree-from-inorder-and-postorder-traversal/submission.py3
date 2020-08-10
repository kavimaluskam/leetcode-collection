from typing import List

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def build_tree_by_index(self, in_start, in_end, post_start, post_end):
        if in_start > in_end or post_start > post_end:
            return None

        root_value = self.postorder[post_end]
        root_node = TreeNode(root_value)

        if in_end == in_start:
            return root_node

        root_inorder_index = self.inorder_cache[root_value]

        root_node.left = self.build_tree_by_index(
            in_start=in_start,
            in_end=root_inorder_index - 1,
            post_start=post_start,
            post_end=post_start + (root_inorder_index - 1 - in_start),
        )

        root_node.right = self.build_tree_by_index(
            in_start=root_inorder_index + 1,
            in_end=in_end,
            post_start=post_start + (root_inorder_index - in_start),
            post_end=post_end - 1,
        )

        return root_node


    def buildTree(self, inorder, postorder):
        self.postorder = postorder
        self.inorder_cache = {
            inorder[i]:i
            for i in range(len(inorder))
        }

        return self.build_tree_by_index(
            in_start=0,
            in_end=len(inorder) - 1,
            post_start=0,
            post_end=len(postorder) - 1,
        )
