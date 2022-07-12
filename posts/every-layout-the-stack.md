---
title: 'Every Layout + Tailwind: The Stack'
date: '2022-07-10'
snippet: 'It is mine now'
---

## Every Layout + Tailwind: The Stack

## Summary

I have read this seminal work on flexible layouts by Andy Bell and Hayden Pickering at least once. None of it really stuck with me though. I usually end up consuming these tutorials / study materials in one go. I don’t give enough time for a deeper understanding with implementation.

### What does the stack do?

### Integration

This is not a time to reconfig your `tailwind.config` file. Instead, make a new CSS file. All primitives from *Every Layout* will live in here. I named my

### The Problem

> We are in the habit of styling elements, or classes of elements, directly: we make style declarations *belong* to elements. Typically, this does not produce any issues, but `margin` is really a property of the *relationship* between two proximate elements.
>

**context** sensitive

style the context, *not the individual* element(s).

> The **Stack** layout primitive injects margin between elements via their common parent:
>

```css
.stack > * + * {
  margin-block-start: 1.5rem;
}
```

adjacent sibling combinator (`+`).

`margin-block-start` is only applied where the element is preceded by another element

### Recursion

the child combinator (`>`) ensures the margins only apply to children of the `.stack` element. However, it’s possible to inject margins recursively by removing this combinator from the selector.

```css
.stack * + * {
  margin-block-start: 1.5rem;
}
```

![Screen Shot 2022-07-08 at 8.08.06 AM.png](Every%20Layout%20The%20Stack%20f80f0842aa6545ee97ec3e1b4f7e5208/Screen_Shot_2022-07-08_at_8.08.06_AM.png)

### Nested Variants

Recursion applies the same margin no matter the nesting depth. A more deliberate approach would be to set up alternative non-recursive **Stacks** with different margin values, and nest them where suitable.

```css
[class^='stack'] > * {
  /* top and bottom margins in horizontal-tb writing mode */
  margin-block: 0;
}

.stack-large > * + * {
  margin-block-start: 3rem;
}

.stack-small > * + * {
  margin-block-end: 0.5rem;
}
```

The first declaration block’s selector resets the vertical margin for all **Stack**
-like elements (by matching class values that *begin* with `stack`). Importantly, only the vertical margins are reset, because the stack only *affects* vertical margin, and we don't want it to reach outside its remit.

![stack_form.svg](Every%20Layout%20The%20Stack%20f80f0842aa6545ee97ec3e1b4f7e5208/stack_form.svg)

Be aware that the `<label>`elements would need to have `display: block` applied to appear above the inputs, and for their margins to actually produce spaces (the vertical margin of inline elements has no effect

### Splitting the Stack

By making the **Stack** a Flexbox context, we can give it one final power: the ability to add an `auto` margin to a chosen element.

```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * + * {
  margin-block-start: var(--space, 1.5rem);
}

.stack > :nth-child(2) {
  margin-block-end: auto;
}
```

In the previous example, we've chosen to group elements *after* the second element towards the bottom of the space.

### Use Cases

The potential remit of the **Stack** layout can hardly be overestimated. Anywhere elements are stacked one atop another, it is likely a **Stack** should be in effect. Only adjacent elements (such as grid cells) should not be subject to a **Stack**. The grid cells *are*
 likely to be **Stacks**, however, and the grid itself a member of a **Stack**
.
