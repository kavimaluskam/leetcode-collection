# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        r = 0
        q = [(root, 0)]
        t_max = 0
        t_min = 0

        while q:
            s = len(q)
            r = max(r, t_max - t_min +1)
            t_max = 0
            t_min = -1

            while s > 0:
                n, v = q.pop(0)
                s -= 1
                if n:
                    t_max = max(v, t_max)
                    t_min = min(v, t_min) if t_min > -1 else v
                    q.append((n.left, v*2))
                    q.append((n.right, v*2+1))

        return r
