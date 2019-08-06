# Sorting algorithms sample

This project covers a simple visualization of all the sorting algorithms that I know.

The purpose of this project is showing to myself that I know how to code the most common ways of sorting an array of sortable objects.

All the pseudocode is from Wikipedia.

## Algorithms

* Insertion sort

```
i = 1
while i < length(A)
    j = i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j = j - 1
    end while
    i = i + 1
end while
```

* Bubble sort

```
procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
        newn = 0
        for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                newn = i
            end if
        end for
        n = newn
    until n <= 1
end procedure
```

* Merge sort **Top-Down implementation** (not implemented yet)

```
function merge_sort(list m)
    // Base case. A list of zero or one elements is sorted, by definition.
    if length of m ≤ 1 then
        return m

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i < (length of m)/2 then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
```
```
function merge(left, right)
    var result := empty list

    while left is not empty and right is not empty do
        if first(left) ≤ first(right) then
            append first(left) to result
            left := rest(left)
        else
            append first(right) to result
            right := rest(right)

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while left is not empty do
        append first(left) to result
        left := rest(left)
    while right is not empty do
        append first(right) to result
        right := rest(right)
    return result
```

* Quick sort (not implemented yet)


## What I learned

* First time i use Visual Studio Code.

* Using javascript with *p5.js* library.

* Manage *p5.Dom* elements.

* Remember how to write code with *Javascript*.

* Some simple use of arrow functions.