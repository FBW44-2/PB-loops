# pb-loops

## Objects vs Arrays

[stack overflow excerpt](https://stackoverflow.com/questions/34897840/when-to-use-array-and-when-to-use-object)

### Arrays

Basically, you need to use an array, when you have a list of consequent data, and you are going to work with it as a collection.

It easily adds, iterates, gets count and checks for existence.
It is difficult to remove items in an array.

Also, it stores order.
For example, if you have 10 integers, and you need to find the index of the minimum one, then it is logical to use an array.

### Objects

Use objects, when your items have keys (especially, non-integer) and you are going to work with them one by one.

It is convenient to add, remove, check for existence properties. However, it is less convenient to iterate through object properties, and absolutely inproper to get its count.

It is also impossible to store items' order.
