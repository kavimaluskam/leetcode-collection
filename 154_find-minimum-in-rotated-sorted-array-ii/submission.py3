from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        result = nums[0]

        for num in nums:
            if num < result:
                return num

        return result
