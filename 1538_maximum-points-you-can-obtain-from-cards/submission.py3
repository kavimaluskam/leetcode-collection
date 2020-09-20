from typing import List

class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        sum, window, min_window = 0, 0, 0

        for i in range(len(cardPoints)):
            sum += cardPoints[i]
            if i < len(cardPoints) - k:
                window += cardPoints[i]
                min_window = window
            else:
                window = window + \
                    cardPoints[i] - cardPoints[i - len(cardPoints) + k]
                min_window = min(min_window, window)

        return sum - min_window
