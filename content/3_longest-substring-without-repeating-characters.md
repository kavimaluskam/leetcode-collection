---
id: 3
title: "Longest Substring Without Repeating Characters"
url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/"
tags:
- "hash-table"
- "two-pointers"
- "string"
- "sliding-window"
difficulty: Medium
acceptance: 30.7%
total-accepted: "1757032"
total-submissions: "5723525"
testcase-example: |
   "abcabcbb"
---

## Problem

<p>Given a string <code>s</code>, find the length of the <b>longest substring</b> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;&quot;
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>

## Discussion

### Trial 1

*Trial 1* gives a rather naive approach.
We loop through characters in input string to search for the longest substring,
and we use a hash map to save the characters for duplicate character detection.

When duplicate character is found we have to remove the character in hashmap
until the duplicated character is removed. We have to first locate all the keys
in the hash map and scan for the first one for each removal. Which is performing
badly.

Thus this algorithm gives time complexity `O(n^2)` and space complexity `O(n)`.

```py3
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        cache = {}

        for i in s:
            if i in cache:
                result = max(result, len(cache))
                while i in cache:
                    del cache[list(cache.keys())[0]]

            cache[i] = 0

        return max(result, len(cache))
```

### Trial 2

*Trial 2* improves *Trial 1* with a starting pointer.
Again we loop through characters in input string to search fir the
longest substring, with a hash map saving the characters.
Besides we have a starting pointer to track the start of the substring,
(we can also interpret this approach as `Sliding Window`).

Ths benefit is that we no longer have to track the length of the substring
by the dict itself.

This algorithm improves time complexity to `O(2n) = O(n)`
and space complexity remains `O(n)`.

```py3
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start_ptr = 0
        cache = {}
        i = 0
        result = 0

        while i < len(s):
            if s[i] in cache:
                del cache[s[start_ptr]]
                start_ptr += 1

            else:
                cache[s[i]] = 0
                i += 1
                result = max(result, i - start_ptr)

        return result
```

### Solution

*The final solution* further improves *Trial 2* by saving
the position of the character in the hash map. So when duplicated character is
found, no removal in the hash map takes place. Instead we move the starting
pointer to the position right after the duplicated character's latest position.

```python
if char in map:
    if map[char] >= start_ptr:
        start_ptr = map[char] + 1
```

Such operation is `O(1)` compared to `O(n)` in the above two approaches.

```py3
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start_ptr = 0
        cache = {}
        i = 0
        result = 0

        while i < len(s):
            char = s[i]

            if char in cache:
                if cache[char] >= start_ptr:
                    start_ptr = cache[char] + 1

            result = max(result, i - start_ptr + 1)
            cache[char] = i
            i += 1

        return result
```

### Complexity Analysis

- Time Complexity: `O(n)`, as through the looping in the input string,
  only atomic pointer update takes place when duplicated character is found.

- Space Complexity: `O(n)`, as we only maintain the hash map with each
  characters' value and position
