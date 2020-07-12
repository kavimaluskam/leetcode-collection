class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        r = []

        l = 2 ** len(nums)

        for i in range(l):
            b = bin(i)[2:][::-1]
            t = []
            for j in range(len(b)):
                if b[j] == '1':
                    t.append(nums[j])
            r.append(t)

        return r
