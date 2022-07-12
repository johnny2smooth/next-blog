---
title: 'Passing Data Deeply with Context'
date: '2022-07-11'
snippet: 'How low can it go? Can it go real low?'
---

## Passing Data Deeply with Context

Allowing children to “ask” for data from somewhere higher up in the tree. How is this done? Props are passed down, without the child asking for them. How does the child request some data instead??

You will do it in three steps:

1. **Create** a context. (You can call it `LevelContext`, since it’s for the heading level.)
2. **Use** that context from the component that needs the data. (`Header` will use `LevelContext`.)
3. **Provide** that context from the component that specifies the data. (`Section` will provide `LevelContext`.)

Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

> **Context lets you write components that “adapt to their surroundings” and display themselves differently depending on _where_ (or, in other words, _in which context_) they are being rendered.**

Here’s a few alternatives you should consider before using context:

1. **Start by [passing props](https://beta.reactjs.org/learn/passing-props-to-a-component).** If your components are not trivial, it’s not unusual to pass a dozen props down through a dozen components. It may feel like a slog, but it makes it very clear which components use which data! The person maintaining your code will be glad you’ve made the data flow explicit with props.
2. **Extract components and [pass JSX as `children`](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children) to them.** If you pass some data through many layers of intermediate components that don’t use that data (and only pass it further down), this often means that you forgot to extract some components along the way. For example, maybe you pass data props like `posts` to visual components that don’t use them directly, like `<Layout posts={posts} />`. Instead, make `Layout` take `children` as a prop, and render `<Layout><Posts posts={posts} /></Layout>`. This reduces the number of layers between the component specifying the data and the one that needs it.

If neither of these approaches works well for you, consider context.

### \***\*Use cases for context\*\***

- Theming
- current account
- routing
- managing state

Although, remember that when state within context changes, the whole subtree that is wrapped in context will most likely render by default. There are ways around the entire re-render, but managing state ay a more global-level is going to be best achieved by a dedicated state management library. (I hear that Zustand is a great state management library). Jack Harrington, my favorite youtuber, recommends using context for slow moving data such as theming or users (current account).

There will be many areas where we feel as if we are prop drilling into components too deeply. When that happens, just remember that there are other options besides wrapping the entire subtree in a context. Is the data in that subtree moving fast? If so, avoid context for performance reasons.
