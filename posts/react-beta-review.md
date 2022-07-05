---
title: 'React Beta docs are awesome!'
date: '2022-07-04'
snippet: 'Read them now!'
---

# Read them

These docs are awesome!

### conditional rendering

One thing that I've learned so far is that I can assign JSX to a JS variable. For some reason I always kept the two seperate from eachother. But this could be really helpful when I want to conditionaly render something, for example, but I want to keep my returned markup as elegant a possible. I don't need to handle ALL the JSX logic and rendering in the return.

### rendering lists

Remember to give each item its own unique key when looping thru data that you want to render!

> JSX elements directly inside a `map()` call always need keys!

If you want to render multiple JSX elements while looping thru information, remember that you can only return **one** element. Other elements can be nested inside, but you can only return one. So, then where do we put the key?? Instead of wrapping your elements in a `<div></div>`, you can use React's `<Fragment></Fragment>` element instead! Unlike a `<div>`, the `<Fragment>` won't render as HTML when your component appears on the page.

Different sources of data provide different sources of keys:

- Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

### pure functions

A pure function does two things. It minds its own business, meaning that it does not change any variables or objects that existed before it was called. Secondly, a pure function guarentees that given the same inputs, the same output will be produced as well.

Think of them like a recipe. If you follow the instructions and don't add any miscelanous ingredients, you'll create the same thing every time.

Don't change a pre-existing variable that lives outside of the function. The consequences may be HUGE! If your function needs something from the outside, pass that outside something as a prop!!!

In react, side effects usually happen inside of event handlers. Since event handlers don't run while the component is being rendered, they do not need to be pure. FYI, useEffect should be your last resort. Try to express your logic with rendering alone! (supposedly) You'd be surprised with what you're able to get done without a useEffect.

## Adding Interactivity

This is where the magic happens, baby!

### Responding to events

Event handlers should: be defined within the component (unless it is a util func) & also should be named beginning with `handle`

Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event.” You can use this object to `stopPropogation()`, for example, if you don't want the event to bubble up. I think that is pretty cool. I was only familiar with `preventDefault()` before this.

**Event handlers can be impure.**

If you need some side effects to occur, it is most likely to happen inside the event handler. This is where you want to manipulate `state`

### State: A Component's Memory

The useState hook is able to persist new / wanted data across renders because of two things. The first one is that `state` allows React to retain the data between renders. Number two, useState returns a state setter function which updates the state value and also tells React to initiate the re-render.

> State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

### Render and Commit

- Triggering a render (delivering the guest’s order to the kitchen)
- Rendering the component (preparing the order in the kitchen)
- Committing to the DOM (placing the order on the table)

### State as a snapshot

> A state variable’s value never changes within a render, even if its event handler’s code is asynchronous. Inside that render’s onClick, the value of number continues to be 0 even after setNumber(number + 5) was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.

React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.

It’s common to name the updater function argument by the first letters of the corresponding state variable:

```jsx
setEnabled((e) => !e);
setLastName((ln) => ln.reverse());
setFriendCount((fc) => fc * 2);
```

### Updating Objects in State

Update objects and arrays as if they're immutable. This means create a copy of them when setting their new state.

You can also use the [ and ] braces inside your object definition to specify a property with dynamic name. Here is the same example, but with a single event handler instead of three different ones:

```jsx
export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
```

addingn concat, [...arr] spread syntax
removing filter, slice
replacing assignment map
sorting reverse, sort --> copy the array first
