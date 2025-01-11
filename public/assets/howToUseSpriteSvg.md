# How to use Sprites

> IMPORTANT:
> Chrome **will not** live-update changes in sprite. Relaunch to see updates.
> Safari **will** live-update

## File structure

```
<svg width=[int] height=[int] xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>

    <symbol viewbox=[int] [int] [int] [int] id=[icon-1-tag]>
      ... vector data ...
    </symbol>
    <symbol viewbox=[int] [int] [int] [int] id=[icon-2-tag]>
      ... vector data ...
    </symbol>

  </defs>
</svg>
```

## Making fill and strokes variable

Delete all instances of

1. `stroke`
2. `stroke-width`
3. `fill`

## Using SVG sprites

```
<svg className=[class] fill=[value] stroke=[value] stroke-width=[value]>
  <use href="/assets/spriteSample.svg#[icon-tag]"></use>
</svg>
```

`class` can be defined in CSS
`class` is a container for the SVG
`fill` `stroke` `stroke-width` can all be defined in CSS
