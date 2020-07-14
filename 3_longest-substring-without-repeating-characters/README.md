<<<<<<< HEAD
# [3] Longest Substring Without Repeating Characters

<https://leetcode.com/problems/longest-substring-without-repeating-characters/description/>

- Tags: `Hash Table`, `Two Pointers`, `String`, `Sliding Window`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 30.3%

- Total Accepted: 1578076

- Total Submissions: 5215224

- Testcase Example: "abcabcbb"

## Description

=======
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

>>>>>>> f468ac8f423e25024e3cd8733b8b55ac79999943
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
<<<<<<< HEAD

=======

## Discussions

This problem is handled with 3 submission / trial.

[The first one](./submission_v0.py3) is rather naive approach.

We slide through the list to get scan for substring, and we use a dict / map
to save the substring for duplicate character detection. But for the worst
duplicate character we have to remove all but one element in the list.

`Time Complexity` would be `O(2n) = O(n)` and `Space Complexity`
would be `O(n)`.

[The second one](./submission_v1.py3) improve with a starting pointer.
Similar to the first implementation, we slide through the list and scan for
substring, with a dict / map to save the substring. Besides we have a starting
pointer to track the start of the substring, or `Sliding Window`. The pro is
we no longer have to track the length of the substring by the dict itself.

`Time Complexity` and `Space Complexity` remains `O(2n) = O(n)` and `O(n)`.

[The final one](./submission.py3) further improves by saving the position
of the character in the dict / map. With the starting pointer value in map,
we can easily switch to the duplicated character's position by below procedure.

```python
if char in map:
    if map[char] >= start_ptr:
        start_ptr = map[char] + 1
```

Such operation is `O(1)` compared to `O(n)` in the above two approaches.

Hence `Time Complexity` and `Space Complexity` are both `O(n)`.
>>>>>>> f468ac8f423e25024e3cd8733b8b55ac79999943
