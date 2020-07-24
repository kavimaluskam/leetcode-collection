# [3] Longest Substring Without Repeating Characters

<https://leetcode.com/problems/longest-substring-without-repeating-characters/description/>

- Tags: `Hash Table`, `Two Pointers`, `String`, `Sliding Window`

- Difficulty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 30.3%

- Total Accepted: 1578076

- Total Submissions: 5215224

- Testcase Example: "abcabcbb"

## Description

<p>Given a string, find the length of the <b>longest substring</b> without repeating characters.</p>

<div>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-1-1">&quot;abcabcbb&quot;</span>
<strong>Output: </strong><span id="example-output-1">3 
<strong>Explanation:</strong></span> The answer is <code>&quot;abc&quot;</code>, with the length of 3. 
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-2-1">&quot;bbbbb&quot;</span>
<strong>Output: </strong><span id="example-output-2">1
</span><span id="example-output-1"><strong>Explanation: </strong>T</span>he answer is <code>&quot;b&quot;</code>, with the length of 1.
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-3-1">&quot;pwwkew&quot;</span>
<strong>Output: </strong><span id="example-output-3">3
</span><span id="example-output-1"><strong>Explanation: </strong></span>The answer is <code>&quot;wke&quot;</code>, with the length of 3. 
             Note that the answer must be a <b>substring</b>, <code>&quot;pwke&quot;</code> is a <i>subsequence</i> and not a substring.
</pre>
</div>
</div>
</div>

## Discussions

### Trial 1

[Trial 1](./submission_v0.py3) gives a rather naive approach.
We loop through characters in input string to search for the longest substring,
and we use a hash map to save the characters for duplicate character detection.

When duplicate character is found we have to remove the character in hashmap
until the duplicated character is removed. We have to first locate all the keys
in the hash map and scan for the first one for each removal. Which is performing
badly.

Thus this algorithm gives time complexity `O(n^2)` and space complexity `O(n)`.

### Trial 2

[Trial 2](./submission_v1.py3) improves *trial 1* with a starting pointer.
Again we loop through characters in input string to search fir the
longest substring, with a hash map saving the characters.
Besides we have a starting pointer to track the start of the substring,
(we can also interpret this approach as `Sliding Window`).

Ths benefit is that we no longer have to track the length of the substring
by the dict itself.

This algorithm improves time complexity to `O(2n) = O(n)`
and space complexity remains `O(n)`.

### Solution

[The final solution](./submission.py3) further improves *trial 2* by saving
the position of the character in the hash map. So when duplicated character is
found, no removal in the hash map takes place. Instead we move the starting
pointer to the position right after the duplicated character's latest position.

```python
if char in map:
    if map[char] >= start_ptr:
        start_ptr = map[char] + 1
```

Such operation is `O(1)` compared to `O(n)` in the above two approaches.

### Complexity Analysis

- Time Complexity: `O(n)`, as through the looping in the input string,
  only atomic pointer update takes place when duplicated character is found.

- Space Complexity: `O(n)`, as we only maintain the hash map with each
  characters' value and position
