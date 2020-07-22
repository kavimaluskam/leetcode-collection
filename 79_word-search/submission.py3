class Solution:
    def exist(self, board, word):
        word_ptr = 0
        y, x = 0, 0
        stack = []

        while y < len(board) and x < len(board[0]):

            if x == len(board[0]) - 1:
                y, x = y + 1, 0
            else:
                x = x + 1
        return False

# print(Solution().exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))