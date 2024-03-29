---
layout: default
---
<head>
    <link rel="stylesheet" type="text/css" href="../../../../../style.css" />
</head>

## Python Syntax
[<Home |](../../../../index.md) [<Back |](../python.md)


### Hello World

```
print("Hello, world!")
```

> When you run this code, it will print the text "Hello, world!" to the console. This is a simple but important first step in learning Python.

### Comment

* There are two types of comments in Python: single-line comments and multi-line comments.
    * Single-line comments begin with the hash symbol (#) and continue until the end of the line:
    ```
    # This is a single-line comment in Python
    ```
    * Multi-line comments, also known as block comments, are enclosed in triple quotes (""" """) or (''' ''') and can span multiple lines:
    ```
        """
        This is a multi-line comment
        in Python.
        It can span multiple lines.
        """
    ```
<br>
<hr>

### Python Data Variables
* There are several types of variables in Python, including:    
    * Integer - Used to store whole numbers, for example: `x = 69`
    * Float - Used to store decimal numbers, for example: `y = 3.14`
    * Boolean - Used to store true or false values, for example: `is_love = True`
    * String - Used to store text values, for example: `name = "John"`
    * List - Used to store a collection of values, for example: `fruits = ["apple", "banana", "orange"]
    * Tuple - Similar to lists, but the values are immutable (cannot be changed), for example: `coordinates = (1, 2)`
    * Dictionary - Used to store key-value pairs, for example: `person = {"name": "John", "age": 30}`

To assign a value to a variable, you can use the equal sign `(=)`. For example: `x = 5` assigns the `value 5` to the `variable x`. You can also change the value of a variable by assigning a new value to it: `x = 6` changes the value of `x` to `6`.

<hr>

### Variable Name
In Python, variable names can consist of letters (`uppercase` and `lowercase`), digits, and underscores. However, variable names cannot start with a digit. It is also important to note that variable names are case sensitive, so `"my_variable"` and `"My_Variable"` would be treated as different variables.

It is a good practice to choose variable names that are descriptive and easy to understand. Variable names should also follow a consistent naming convention, such as using lowercase letters and underscores to separate words `(e.g. my_variable_name)`. This can make your code easier to read and understand, especially for other people who may be working with your code.

There are some reserved keywords in Python that cannot be used as variable names because they have special meanings in the language. Examples of reserved keywords include `"if"`, `"else"`, `"for"`, `"while"`, `"def"`, `"class"`, and `"import"`, among others.

<hr>

### Assigning Multiple Values

In Python, you can assign multiple values to multiple variables at the same time using a technique called "multiple assignment" or "tuple unpacking".
Here's an example:

```
x, y, z = 1, 2, 3
```

This assigns the values 1, 2, and 3 to variables `x`, `y`, and `z`, respectively. The commas separate the values, and the equals sign assigns them to their corresponding variables.

You can also use multiple assignment with lists and tuples:
```
fruits = ["apple", "banana", "orange"]
a, b, c = fruits
```

This assigns the first value in the fruits list `("apple")` to variable `a`, the second value `("banana")` to variable `b`, and the third value `("orange")` to variable `c`.

<hr>

In Python, you can output variables using the `print()` function. The syntax is `print(variable_name)`, where `variable_name` is the name of the variable you want to print.

For example, if you have a variable `x` that stores the value `10`, you can output it to the console like this:
```
x = 10
print(x)
```

> This will output `10` to the console.

You can also output multiple variables at once by separating them with commas:
```
x = 10
y = 20
print(x, y)
```
> This will output `10 20` to the console.

You can also format the output using string formatting. For example, you can use the `%` operator to format a string:
```
x = 10
print("The value of x is %d" % x)
```
> This will output The value of `x` is `10` to the console.