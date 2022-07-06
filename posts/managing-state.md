---
title: 'Managing State in React'
date: '2022-07-05'
snippet: 'Hmmm'
---

# Learning how to structure State _well_

I have been working with React for a few months now, but ✨fancy✨ state management tools still give me the whirling fantods. I usually stick to useState… but I know that it isn’t the answer for everything! I am finally comfortable taking a deep dive into the inner-workings of managing state because [React’s new Docs (in Beta)](https://beta.reactjs.org/) are wonderfully written and much more approachable than their previous iteration.

## Reacting to Input with State

Components in React can have multiple states, depending on how the user is interacting with the web page. We should be writing these Components in a way that describes the UI in response to user input. According to [the docs](https://beta.reactjs.org/learn/reacting-to-input-with-state), “React uses a declarative way to manipulate the UI.”

```jsx
let thisCode = true;
```

### Declarative vs. Imperative

Writing imperative logic means that you command a piece of code to do **this** + **that** along every step of the process. It describes a process in strict terms, leaving little wiggle room for _something else_ to take place. When something else happens, the code is more likely to blow up because it has no idea how to handle a request. It wasn’t given explicit instructions on how to handle it.

> In React, you don’t directly manipulate the UI—meaning you don’t enable, disable, show, or hide components directly. Instead, you **declare what you want to show**, and React figures out how to update the UI. Think of getting into a taxi and telling the driver where you want to go instead of telling them exactly where to turn. It’s the driver’s job to get you there, and they might even know some shortcuts you haven’t considered!

### Thinking about UI declaratively

1. **Identify** your component’s different visual states
2. **Determine** what triggers those state changes
3. **Represent** the state in memory using `useState`
4. **Remove** any non-essential state variables
5. **Connect** the event handlers to set the state

A helpful way to identify your component’s different visual states before you wire up logic from props is to hard-code a `status = 'statusOfSomeKind'` as a default value that is passed into the component as a prop. After adding logic which will dictate what renders onto the page in relation to our `status`, we can then quickly edit this status by assigning it different values as a default. These new values will pass through our component, conditionally rendering what we want to see when we have confronted this state.

We will then need to understand **what** will be triggering the `status` to change (if that is our main concern still). Our web page will be triggered by either a human or a computer. In both cases we will need to update our UI to reflect the new inputs. Human inputs are usually event-based. Computer inputs are normally networks requests that have either succeeded or failed.

What information from these triggers do we want to save in React’s memory? We must ask ourselves this question before we commit any information to memory with `useState` .

> Your goal is to **prevent the cases where the state in memory doesn’t represent any valid UI that you’d want a user to see.**

**Does this state cause a paradox?**

**Can we derive the same information from another state variable?**

**Can you get the same information from the inverse of another state variable?**

Once we determine _what_ is the important information to remember, we now have to think about _how_ we will change this information. We will keep track of setting new values to state by interacting with event handlers.

codebox doesn’t work in my blog posts. That is okay (for now).

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

## Sharing State Between Components

Lift that state up!!!

1. **Remove** state from the child components.
2. **Pass** hardcoded data from the common parent.
3. **Add** state to the common parent and pass it down together with the event handlers.

This example uses setActiveIndex(0). This is really cool! If we have more than two tabs that we want to toggle between, we can just assign that activeIndex to a specific number then pass a bool to isActive when activeIndex === a specific #!

```jsx
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
```

I used to think of sharing state as state that would be the exact same in both components. I am now seeing that a shared state can mean that the components can react to the state in different ways when they are instructed to do so. Like a toggle.

> Uncontrolled components are easier to use within their parents because they require less configuration. But they’re less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props… When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state). But you can always change your mind and refactor later.

## Preserving and Resetting State

React associates each piece of state it’s holding with the correct component by where that component sits in the UI tree.

The moment you stop rendering a component, it’s state disappears. When React removes a component, it destroys the state 💣💥

You can change props of a component without React tearing it down. According to React, it is the same component still.

<aside>
💡 Remember that **it’s the position in the UI tree—not in the JSX markup—that matters to React!**

</aside>

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

## \***\*Extracting State Logic into a Reducer\*\***

Reducers are a different way to handle state. You can migrate from `useState` to `useReducer` in three steps:

1. **Move** from setting state to dispatching actions.
2. **Write** a reducer function.
3. **Use** the reducer from your component.

### Move from setting state to dispatching actions

We set state from inside of event handlers. We can easily migrate to `useReducer()` by switching `setState()` with a `dispatch({...})`.

Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers.

```jsx
function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}
```

the object that is passed to `dispatch()` is called an action. Actions are concerned with what happened. They are looking for the user to do a specific action. With that information, we can tell our component how to behave.

It is a convention to have the action’s name by `type:` as you can see above. We will hook into this object in our reducer function by calling `action.type`

### Write a reducer function

A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:

```jsx
function yourReducer(state, action) {
  // return next state for React to set
}
```

1. Declare the current state (`tasks`) as the first argument.
2. Declare the `action` object as the second argument.
3. Return the *next* state from the reducer (which React will set the state to).

```jsx
function taskReducer(task, action){
	if(action.type === 'add'){
		...
	} else if (action.type === 'edit'){...}
	else if (action.type === 'delete'){...}
	else{...}
}
```

The code above uses if/else statements, but it’s a convention to use [switch statements](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/switch)
inside reducers. The result is the same, but it can be easier to read switch statements at a glance.

```jsx
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```

### Use the reducer for your component

The `useReducer` Hook is similar to `useState`—you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). But it’s a little different.

The `useReducer` Hook takes two arguments:

1. A reducer function
2. An initial state

And it returns:

1. A stateful value
2. A dispatch function (to “dispatch” user actions to the reducer)

### Comparing useState & useReducer

- **Code size:** Generally, with `useState` you have to write less code upfront. With `useReducer`, you have to write both a reducer function *and* dispatch actions. However, `useReducer` can help cut down on the code if many event handlers modify state in a similar way.
- **Readability:** `useState` is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, `useReducer` lets you cleanly separate the *how* of update logic from the *what happened* of event handlers.
- **Debugging:** When you have a bug with `useState`, it can be difficult to tell *where* the state was set incorrectly, and *why*. With `useReducer`, you can add a console log into your reducer to see every state update, and *why* it happened (due to which `action`). If each `action` is correct, you’ll know that the mistake is in the reducer logic itself. However, you have to step through more code than with `useState`.
- **Testing:** A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.
- **Personal preference:** Some people like reducers, others don’t. That’s okay. It’s a matter of preference. You can always convert between `useState` and `useReducer` back and forth: they are equivalent!

Keep these two tips in mind when writing reducers:

- **Reducers must be pure.**
- **Each action describes a single user interaction, even if that leads to multiple changes in the data.**

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

## \***\*Scaling Up with Reducer and Context\*\***

Here is how you can combine a reducer with context:

1. **Create** the context.
2. **Put** state and dispatch into context.
3. **Use** context anywhere in the tree.

I read it but I didn’t take too many notes because my guy Jack just went over all of it. I will most likely break up each of these sections into its own post. After I do that, I’ll edit what was written and most likely revisit the content here so that I can feel comfortable about my writing.

Congrats on getting through it!

I think that it would be nice to have more examples of code + a way to show off my knowledge (more than just writing about it) when I do make edits to these files. Bump it up a level, why don’t ya? That’ll be on the to do list
