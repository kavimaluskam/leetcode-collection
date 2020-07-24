class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        t = {}
        result = []

        for num in nums:
            if num not in t:
                t[num] = 1
            else:
                t[num] += 1

        # return [
        #     x[0] for x
        #     in sorted(t.items(), key=lambda i: -i[1])[:k]
        # ]
        return heapq.nlargest(k, t.keys(), key=t.get)
