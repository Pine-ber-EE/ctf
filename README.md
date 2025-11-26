# snowbird91 CTF Hub

Personal Jekyll site for my security projects, CTF write-ups, and notes. The design is a neon, hacker-inspired skin on top of the Serial Programmer theme, with dark/light modes and accent neon highlights.

## Structure

| Path                  | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| `pages/`              | Top-level static pages (home, about, blog, etc.)  |
| `all_collections/_posts/` | Jekyll posts collection (write-ups/blog posts)   |
| `assets/`             | CSS/JS/assets powering the neon aesthetic         |
| `blog/`, `write-ups/` | Placeholders for future markdown-based content    |

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://127.0.0.1:4000/ctf/` by default (adjust for your `baseurl`).

## Customizing

- Edit `_data/author.yml` for bio, social links, and quote.
- Update `pages/` markdown files for site sections.
- Drop posts into `all_collections/_posts/` (e.g., `2024-05-10-challenge.md`).
- Add assets or tweak styles in `assets/css` and `assets/js`.

## Deployment

Designed for GitHub Pages: the repository builds with `baseurl: /ctf`. You can deploy anywhere Jekyll runs (Netlify, Cloudflare Pages, etc.).
