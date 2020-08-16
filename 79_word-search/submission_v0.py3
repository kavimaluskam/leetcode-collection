class Solution:
    def exist(self, board, word):
        self.len_y, self.len_x, self.len_w = len(board), len(board[0]), len(word)
        self.board, self.word = board, word

        y, x, w = 0, 0, 0

        while y < self.len_y and x < self.len_x:
            if self.search(x, y, w, []):
                return True

            if x == self.len_x - 1:
                y, x = y + 1, 0
            else:
                x = x + 1

        return False

    def search(self, x, y, w, cache):
        if (y, x) in cache:
            return False

        if x < 0 or x >= self.len_x:
            return False

        if y < 0 or y >= self.len_y:
            return False

        if self.board[y][x] != self.word[w]:
            return False

        if w == self.len_w - 1:
            return True

        return self.search(x + 1, y, w + 1, cache + [(y, x)]) \
            or self.search(x, y + 1, w + 1, cache + [(y, x)]) \
            or self.search(x - 1, y, w + 1, cache + [(y, x)]) \
            or self.search(x, y - 1, w + 1, cache + [(y, x)])
