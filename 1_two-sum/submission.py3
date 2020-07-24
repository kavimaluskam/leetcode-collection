from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cache = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in cache and cache.get(diff) is not i:
                return [
                    min(i, cache.get(diff)),
                    max(i, cache.get(diff)),
                ]

            else:
                cache.update({
                    nums[i]: i
                })
