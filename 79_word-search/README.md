# [79] Word Search

<https://leetcode.com/problems/word-search/description/>

- Tags: `Array`, `Backtracking`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 35.0%

- Total Accepted: 476437

- Total Submissions: 1359950

- Testcase Example: [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"

## Description

<p>Given a 2D board and a word, find if the word exists in the grid.</p>

<p>The word can be constructed from letters of sequentially adjacent cell, where &quot;adjacent&quot; cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>

<p><strong>Example:</strong></p>

<pre>
board =
[
  [&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;E&#39;],
  [&#39;S&#39;,&#39;F&#39;,&#39;C&#39;,&#39;S&#39;],
  [&#39;A&#39;,&#39;D&#39;,&#39;E&#39;,&#39;E&#39;]
]

Given word = &quot;<strong>ABCCED</strong>&quot;, return <strong>true</strong>.
Given word = &quot;<strong>SEE</strong>&quot;, return <strong>true</strong>.
Given word = &quot;<strong>ABCB</strong>&quot;, return <strong>false</strong>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board</code>&nbsp;and <code>word</code> consists only of lowercase and uppercase English letters.</li>
	<li><code>1 &lt;= board.length &lt;= 200</code></li>
	<li><code>1 &lt;= board[i].length &lt;= 200</code></li>
	<li><code>1 &lt;= word.length &lt;= 10^3</code></li>
</ul>

## Discussions

The problem ask for an algorithm searching for all possible paths in the grid,
such that the path matched the input word characters by characters in order.

It should not be difficult to come up with dfs or searching algorithms.
Special point of this problem involves:

1. searching in this problem iterative with a factor of 4,

1. searching of the same element in the input grid more than once is not allowed
  (which is very reasonable).

As explained in below: we start with a rather straight forward algorithm and
see if any enhancement can be made.

### Trial 1

[Trial 1](./submission_v0.py3) gives a straight forward and naive solution.
We try to scan through the elements in the input grid. And for each element,
we search it with characters in the input word.

For matching case, we extend the search to the neighbor elements
in the input grid, and the next characters in the input word. The search ends
either when: 1) every characters in the word is matched, 2) any characters
in the word is not found in neighbors of the current elements, or 3) we find
same element in the grid is being used multiple times.

To check if same letter being used multiple times, we cached used
letters during the search. The cache is cleaned when search ends.

We terminate the algorithm and return result if 1) is achieved. For 2) or 3), we
terminate the search and start searching with the next element in the input
grid.

This trail give a time complexity of `O(n * 4^l)`, wheres `n` is the size of
input grid, and `l` is the size of the input word. As the worst case consists of
searching for all elements in the grid, with each search continues with all
possible elements, which is `4 ^ l`.

Space complexity for this trial is `O(max(l^2, n))`.
As recursion and caching of visited elements in the grid is involved.
For the worst case, recursion holding up for each characters in the input word,
and each recursion caches visited element with size at most `l`.

### Solution

[The final solution](./submission.py3) improves *trial 1* by removing the
caching of visited elements. Instead we make use of the input grid.
As grid becomes a stateful variable with respect to the searching, we mark the
searched element in the input grid with some special character like `@` or `''`.
And we reset it with the original value once searching is completed.

Hence we don't have to handle the cache with extra space, while the memory
of the input grid is always necessary.

### Complexity Analysis

- Time Complexity: `O(3^n)`, as similar to [Trial 1](./submission_v0.py3),
  the worst case consists of searching for all elements in the grid,
  with each search continues with all possible elements, which is `4 ^ l`.

- Space Complexity: `O(n)`, as we only maintain the input grid in memory.
  While recursion can happens with level at most `l`,
  we have `l` smaller than `n`. Otherwise the result should always be false.
