---
title: 'Preserving and Resetting State'
date: '2022-07-09'
snippet: 'Freeze Dried'
---

## Preserving and Resetting State

React associates each piece of state it’s holding with the correct component by where that component sits in the UI tree.

The moment you stop rendering a component, it’s state disappears. When React removes a component, it destroys the state 💣💥

You can change props of a component without React tearing it down. According to React, it is the same component still.

💡 Remember that **it’s the position in the UI tree—not in the JSX markup—that matters to React!**


### different components at the same location resets state

Also, when you render a different component at the same location, the entire sub tree re-renders. **Even if the child does not change!** Be sure that the structure of the tree remains the same if you want to persist state on changes.

### Resetting state at the same position

1. Render components in different positions
2. Give each component an explicit identity with `key`

Take a look below. Although we are relying on boolean logic to render these components, we are _not_ nesting the logic in a single if…else statement. Therefore, the components have their own positions in the tree.

```jsx
return (
  <div>
    {isPlayerA && <Counter person="Taylor" />}
    {!isPlayerA && <Counter person="Sarah" />}
    <button
      onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}
    >
      Next player!
    </button>
  </div>
);
```

This solution is really only convenient when you have just a few options to choose from. Otherwise the code would get quite verbose.

Using keys:

> Keys aren’t just for lists! You can use keys to make React distinguish between any components.

Giving two identical components in the same position separate, unique keys will tell React to tear down that state!

```jsx
{
  isPlayerA ? (
    <Counter key="Taylor" person="Taylor" />
  ) : (
    <Counter key="Sarah" person="Sarah" />
  );
}
```
