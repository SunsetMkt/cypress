exports['e2e subdomain w/ cy.origin and injectDocumentDomain disabled / passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (subdomain_origin.cy.js)                                                   │
  │ Searched:   cypress/e2e/subdomain_origin.cy.js                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  subdomain_origin.cy.js                                                          (1 of 1)


  subdomains
    ✓ can swap to help.foobar.com:2292
    ✓ can visit a subdomain in another test with cy.origin
    ✓ issue: #207: does not duplicate or hostOnly cookies as a domain cookie
    ✓ correctly sets domain based cookies
    ✓ does not set domain based (non hostOnly) cookies by default
    ✓ sets a hostOnly cookie by default
    ✓ issue #361: incorrect cookie synchronization between cy.request redirects
    ✓ issue #362: incorrect cookie synchronization between cy.visit redirects
    ✓ issue #600 can visit between nested subdomains


  9 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        9                                                                                │
  │ Passing:      9                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     subdomain_origin.cy.js                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  subdomain_origin.cy.js                   XX:XX        9        9        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        9        9        -        -        -  


`
