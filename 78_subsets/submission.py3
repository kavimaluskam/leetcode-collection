from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        length = len(nums)
        size = 2 ** length

        for i in range(size):
            binary = bin(i | size)[3:]
            result.append([
                nums[j]
                for j in range(length)
                if binary[j] == '1'
            ])

        return result
