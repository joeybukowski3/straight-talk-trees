<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Automated browser traffic

All automated browser testing, screenshots, debugging, and visual verification must use the repository's Playwright analytics-blocking setup. Automated browser sessions must not send Google Analytics or Google Tag Manager traffic. Do not bypass or remove this protection.

Playwright tests must import `test` and `expect` from `e2e/fixtures.ts`, not directly from `@playwright/test`.
