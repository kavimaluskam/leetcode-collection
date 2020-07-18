class Solution:
    def nthUglyNumber(self, n: int) -> int:
        q2 = [2]
        q3 = [3]
        q5 = [5]

        r = 1

        i = 1

        while i < n:
            r = min(q2[0], q3[0], q5[0])

            if r == q2[0]:
                q2.pop(0)

            if r == q3[0]:
                q3.pop(0)

            if r == q5[0]:
                q5.pop(0)

            q2.append(r * 2)
            q3.append(r * 3)
            q5.append(r * 5)

            i += 1

        return r
