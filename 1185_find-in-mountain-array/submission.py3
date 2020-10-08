# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        # location peak
        peak = self.findPeakIndexInMountainArray(mountain_arr)

        # searching in the rising side
        head, tail = 0, peak

        while head < tail:
            mid = (head + tail) // 2
            if mountain_arr.get(mid) == target:
                return mid
            elif mountain_arr.get(mid) < target:
                head = mid + 1
            else:
                tail = mid
        if mountain_arr.get(tail) == target:
            return tail

        # searching in the falling side
        head, tail = peak, mountain_arr.length() - 1

        while head < tail:
            mid = (head + tail) // 2
            if mountain_arr.get(mid) == target:
                return mid
            elif mountain_arr.get(mid) > target:
                head = mid + 1
            else:
                tail = mid
        if mountain_arr.get(tail) == target:
            return tail

        return -1


    def findPeakIndexInMountainArray(self, mountain_arr: 'MountainArray') -> int:
        head, tail = 0, mountain_arr.length() - 1

        while head < tail:
            mid = (head + tail) // 2
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                head = mid + 1
            else:
                tail = mid
        return head
