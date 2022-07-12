---
title: 'Choosing the State Structure'
date: '2022-07-07'
snippet: 'Hmmm'
---

## Choosing the State Structure

### Principles for structuring state

1. Group related state.
2. Avoid contradictions in state.
3. Avoid redundant state.
4. Avoid duplication in state.
5. Avoid deeply nested state.

### Group Related State

If some multiple of states always change together, it is a good idea to group them together in the same state as an object. Setting their state will be done with one call now, as opposed to multiple. Also, the code will become much more readable since we are explicitly stating that these states are interconnected.

```jsx
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```

^^^ this could be better.

```jsx
const [position, setPosition] = useState({ x: 0, y: 0 });
// Remember to spread out the entire object even when you are
// changing only one value!
```

Another area where it would be helpful to group state together in an object or array is when you don’t know how many piece of state you’ll need. For instance, if the user has control over creating custom fields in a form, you’d want those states to be connected (yet dynamic).

### Avoid contradictions in state

If you have a state that can only be true when another is false, what happens when both are true? To avoid this, creating explicit status string states in your component might be more beneficial than true / false bool based states. Make sure the logic pipeline is clear of debris. Sloppy states can block what we want to see from appearing if we aren’t careful.

### Avoid redundant state

> If you can calculate some information from the component’s props or its existing state variables during rendering, you **should not** put that information into that component’s state.

Remember that it is always okay to create new variables that rely on state variables for its own information. Variables that use another’s state does not need its own state!

### Avoid duplication in state

Instead, manage state by referencing unique criteria. If you’re hooking into the _same information_ for different purposes, you’re probably doing it wrong.

### Avoid deeply nested state

**If the state is too nested to update easily, consider making it “flat”.**
