npm run lint throws warning: Do not use `<img>` element. Use `<Image />` from `next/image` instead. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
When using `<Image />` it throws a RunTimeError that it needs a width and a height attribute. In addition it wants the src-urls to be configured in next.config.js.
No solution for this problem found. Cann´t dynamicly configure urls from db.json.

Starred rooms works, but does not get persisted in db.json

Cypress-tests are implemented. For "rooms.cy.ts" to work there have to be 20 elements in the db.json, otherwise the pagination-text will change and will be failed. 
No jest-tests implemented.