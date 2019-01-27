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

* Buble sort

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

## What I learned

* First time i use Visual Studio Code.

* Using javascript with *p5.js* library.

* Manage *p5.Dom* elements.

* Remember how to write code with *Javascript*.

* Some simple use of arrow functions.