# WordPress Preset Variables

This document details the WordPress-compatible preset variables available in the system. These map directly to `theme.json` presets and ensure strict alignment with the WordPress Block Editor.

**Location:** `/src/styles/theme-base.css`

## Aspect Ratios
Used for `cover`, `image`, and `post-featured-image` blocks.

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--wp--preset--aspect-ratio--square` | `1 / 1` | Avatars, products |
| `--wp--preset--aspect-ratio--portrait` | `3 / 4` | Portraits, book covers |
| `--wp--preset--aspect-ratio--landscape` | `4 / 3` | Standard photography |
| `--wp--preset--aspect-ratio--video` | `16 / 9` | Video embeds, hero backgrounds |
| `--wp--preset--aspect-ratio--ultrawide` | `21 / 9` | Cinematic headers |
| `--wp--preset--aspect-ratio--tall` | `9 / 16` | Social media stories |

## Borders
Used for `group`, `column`, and custom block styling.

### Widths
| Variable | Value |
| :--- | :--- |
| `--wp--preset--border-width--none` | `0` |
| `--wp--preset--border-width--1` | `1px` |
| `--wp--preset--border-width--2` | `2px` |
| `--wp--preset--border-width--4` | `4px` |
| `--wp--preset--border-width--8` | `8px` |

### Styles
| Variable | Value |
| :--- | :--- |
| `--wp--preset--border-style--solid` | `solid` |
| `--wp--preset--border-style--dashed` | `dashed` |
| `--wp--preset--border-style--dotted` | `dotted` |
| `--wp--preset--border-style--double` | `double` |

## Layout Sizes
Standard widths for container blocks.

| Variable | Value | Description |
| :--- | :--- | :--- |
| `--wp--style--global--content-size` | `1200px` | Standard content max-width |
| `--wp--style--global--wide-size` | `1400px` | Wide alignment max-width |
| `--wp--style--global--narrow-size` | `800px` | Narrow/Text-only max-width |

## Usage Example

```css
.wp-block-group.is-style-bordered {
  border-width: var(--wp--preset--border-width--1);
  border-style: var(--wp--preset--border-style--solid);
  border-color: var(--border);
  max-width: var(--wp--style--global--content-size);
}

.wp-block-cover {
  aspect-ratio: var(--wp--preset--aspect-ratio--video);
}
```
