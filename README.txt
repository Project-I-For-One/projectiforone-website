Project I For One — Website Package (v2)

How it works
- Each page is plain HTML.
- Header and footer are stored in /partials/header.html and /partials/footer.html.
- /assets/site.js injects those partials at runtime using fetch().
- All images remain under /images/.

Deploy to Cloudflare Pages
- Set your Pages build to "no build" / "static" and point to this root folder.
- Ensure /partials is publicly accessible (it is in this package).

To update nav/footer
- Edit /partials/header.html and /partials/footer.html. All pages inherit automatically.

Donate link
- Update the Donate button URL in donate.html (currently "Donate (link)").
