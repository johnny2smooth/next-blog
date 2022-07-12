---
title: 'Every Layout: The Switcher'
date: '2022-07-12'
snippet: 'It is mine now'
---

## Summary

Dunno yet

> it’s better to provide *suggestions* rather than diktats about the way the visual design is laid out.
>
> By only suggesting to the browser how it should arrange our layout boxes, we move from creating multiple layouts to single *quantum* layouts existing simultaneously in different states.
>

FLEX BASIS! Flex basis tells the browser that there are certain *ideal* sizes that an element should be. It is then free to calculate its size. Let the browser help you out man!

Every user will be interacting with your website under different circumstances.

`inline-size`? What is that? They’re hinting that it is the proper alternative to `width`.

```css
.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid > * {
  flex: 1 1 20rem;
}
```

> That `[flex` shorthand property](https://css-tricks.com/almanac/properties/f/flex/) translates to *"let each element grow and shrink to fill the space, but try to make it about `20rem` wide"*.
> 

### The solution

Switcher. It switches a flexbox context between vertical and horizontal layout at a given, *container* based breakpoint.

> The `flex-basis` value enters the (current) width of the container, expressed as `100%`, into a calculation with the designated `30rem` breakpoint.
> 

`30rem - 100%`

> Depending on the parsed value of `100%`, this will return either a *positive* or *negative* value: positive if the container is narrower than `30rem`, or negative if it is wider. This number is then multiplied by `999` to produce either a *very large* positive number or a *very large* negative number:
>

`(30rem - 100%) * 999`;

```css
.switcher > * {
  display: flex;
  flex-wrap: wrap;
}

.switcher > * > * {
  flex-grow: 1;
  flex-basis: calc((30rem - 100%) * 999);
}
```

> A negative `flex-basis` value is invalid, and dropped. Thanks to CSS’s resilient error handling this means just the `flex-basis` line is ignored, and the rest of the CSS is still applied. The erroneous negative `flex-basis` value is corrected to `0` and—because `flex-grow` is present—each element grows to take up an equal proportion of horizontal space.
> 

<aside>
💡 The previous statement, *"each element grows to take up an equal proportion of the horizontal space"* is true where the *content* of any one element does not exceed that alloted proportion. To keep things in order, nested elements can be given a `max-inline-size` of `100%`.

</aside>

```css
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
}

.switcher > * {
  flex-grow: 1;
  flex-basis: calc(( 30rem - 100%) * 999);
}

.switcher > :nth-last-child(n+ 5),
.switcher > :nth-last-child(n+ 5) ~ * {
  flex-basis: 100%;
}
```
