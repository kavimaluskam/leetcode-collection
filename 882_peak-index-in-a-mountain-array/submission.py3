from typing import List

class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        head, tail = 0, len(arr) - 1

        while head < tail:
            mid = (head + tail) // 2
            if arr[mid] < arr[mid + 1]:
                head = mid + 1
            else:
                tail = mid

        return head
