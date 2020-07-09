class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_dict = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in nums_dict and nums_dict.get(diff) is not i:
                return [
                    min(i, nums_dict.get(diff)),
                    max(i, nums_dict.get(diff)),
                ]

            else:
                nums_dict.update({
                    nums[i]: i
                })
