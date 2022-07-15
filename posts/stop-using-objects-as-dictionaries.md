---
title: 'Objects are NOT Dictionaries: Set + Map'
date: '2022-07-15'
snippet: 'Much more better now.'
---

You should *probably* be using `Set` && `Map`, instead of using a primitive `Object` as a way to structure your data. I am familiar with the benefits of both  `Set` && `Map`, but I always forget to use them when it comes to my own creations. [t3.gg](https://t3.gg/) brought this back to my attention in [this video](https://www.youtube.com/watch?v=hRSwSAr-gok).

He points out how people are “using objects incorrectly, all the time.” Then he gives us this pattern as an example of the common mistake:

```jsx
const users = {
"Theo": {"id": 10, "status": "online"}, 
"Kitty": {"id": 100, "status": "asleep"}
}

users["John"] = {"id": 13, "status": "lit"}
```

> Objects aren’t for arbitrary key-value mappings. They are for objects. Arbitrary shapes with arbitrary nestings. With, ideally, strong typings. An object should have a type that describes all the keys.
> 

Redoing it as a `Map`:

```jsx
const usersMap = new Map([
["Theo",{"id": 10, "status": "online"}],
["Kitty": {"id": 100, "status": "asleep"}]
])

usersMap.set("John", {"id": 13, "status": "lit"})
```

`Map` has a much better optimized way of adding / reading values with `set()` and `get()`. It can also become iterable quite easily if you want to spread the values of the `Map` into an array.

`[...usersMap].map(user => {...})`

… or you can also destructure the user information that is given back to you as [key, value] in a `for…of` loop.

`for(let [username, userInfo] of usersMap){...}`

There are more ways to do so, but these are just a few.

Again, using `Map` is a very performant way to gain access to structured information. That is the main benefit. Besides that benefit, it is much easier to add, remove, check on pertinent information.

## Set

A `Set` carries unique values. **Only.** Sometimes we get duplication of a piece of information that we only want one of. In Theo’s example, say we have a member whose “join came in too early” so now their ID comes up two times in the list of people who’ve joined chat. We want to de-dupe that early join, right?

We can check the index of a certain value really easily with `has()` and remove a value just as easily with `delete()`. `Set` is like `Map` in many ways. Use them both! Also:

> Stop using Objects as [Python] Dictionaries.
>