class Solution:
    def reverseWords(self, s: str) -> str:
        sl = s.split(' ')

        head = 0
        tail = len(sl) - 1

        while head <= tail:
            if sl[head] == '':
                sl.pop(head)
                tail -=1
                continue

            if sl[tail] == '':
                sl.pop(tail)
                tail -=1
                continue

            sl[head], sl[tail] = sl[tail], sl[head]
            head += 1
            tail -=1
            continue

        return ' '.join(sl)
