---
title: 'Reacting to Input with State'
date: '2022-07-06'
snippet: 'How the heck do ya?'
---

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
