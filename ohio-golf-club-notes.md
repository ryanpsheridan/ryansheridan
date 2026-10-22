# Ohio Golf Club: Private notes

*Source: https://ryansheridan.studio/ohio-golf-club/notes*

Notes from the 50-minute walkthrough with Brandon, where I shared the [proposal](https://ryansheridan.studio/ohio-golf-club) and we talked through the findings and packages together. For my own reference, not shared with him.

Meeting length: ~50 min · Attendee: Brandon Biggs

**Client:** Brandon Biggs, Ohio Golf Club
**Related:** [Proposal page](https://ryansheridan.studio/ohio-golf-club)

---

## Meeting summary
*Overview*

We walked through the proposal live, in the order it's laid out on the page. Brandon hadn't seen it before this call, so most of the time was me narrating findings 01-08 while he reacted in real time and filled in context I couldn't get from outside the site (his partner Kyle's role, what Club Caddie already does, why two directory listings have the wrong address).

Overall read: he's bought in. He said outright that breaking the homepage into five dedicated pages "makes a lot of sense," expects he and his partner would sign off on at least the middle or high tier, and specifically liked that this proposal is purely technical, with no redesign pitch attached. He's also thinking a step ahead: a second location is coming, and he wants the lead pipeline solid before he commits to hiring more coaches.

## Package direction
*Decision*

He's leaning toward Option 2 (the five dedicated pages) as the real starting point, not Option 1 as a trial. Needs to loop in Kyle before confirming, but said "even just starting out with this one would be a great first step."

He wants to forward the proposal link to Kyle and walk him through it the same way we just did.

## Events & league page
*Open question*

He wants a real events calendar (league, golf outing, Thanksgiving tournament, that kind of thing) visible up front, the way a course keeps a sign-up sheet in the pro shop. Right now the events page is just a "host your event here" pitch with no upcoming-events list.

Naming needs to be nailed down before this gets built: he draws a real distinction between events they host (league, tournaments, what he wants surfaced as "upcoming events") and private bookings (birthday parties, etc., which already route through a separate form to his sister). We landed on treating the events page as the internal/tournament calendar and leaving private bookings as their own path, but didn't settle on final labels.

Bigger point that came out of this: Club Caddie already has an events module with embeddable iframes (events list, tee times, memberships), and it supports scheduled open/close dates. Brandon's exact words on why this matters: last year's league page stayed live for months after registration closed because nobody remembered to email their developer to take it down. Embedding the live Club Caddie feed instead of hand-editing the page fixes that by construction.

## Leads & CRM
*Item 08*

Confirmed: form submissions currently go to email only, nothing captured beyond that. I'd separately looked into GoHighLevel (through a contact of mine, Tony, who works with it) and flagged it myself as too much overhead for where they're at. Airtable or HubSpot's free tier is the lighter option I actually proposed, matching the "off the shelf" addon already on the proposal page.

Brandon's real pushback is the actual complication: Club Caddie already builds a customer profile the moment someone books a simulator, so there's a second, more-complete customer record living outside whatever CRM catches the web form. He doesn't want a pile of disconnected logins/apps. Worth scoping whether Club Caddie can take a lead handoff directly before defaulting to Airtable/HubSpot as a separate tool. That's the direction he actually wants explored first, ahead of the "check this first" option in the proposal.

## Site access & ownership
*Blocking item*

The site was built by a friend, John, with no contract, just an informal arrangement (lessons in exchange for the work). Brandon has zero backend access: no hosting login, no repo. John pushes a preview link before anything goes live, and that's the extent of what Brandon sees.

Brandon recalled the site is on Vercel, possibly GitHub, and believes John would hand over access without friction. He's already run a "we're moving in this direction" conversation with him in the past and John was fine with it.

Agreed plan: Brandon creates his own Vercel account first, then asks John to transfer the project to it (or reproduce it there) and add both John and me as collaborators. Ownership and control stay with Brandon regardless of who's actively making changes. I said I'd follow up by email spelling out exactly what to ask John for (draft below).

## Self-editing capability
*Scoping note*

The page-builder idea itself is mine. It's the "to scope" item already on the proposal page, a lightweight layer for content-only edits with a short learning curve. What's genuinely Brandon's is the frustration underneath it: being stuck behind John as a middleman even for small, obviously-safe text edits (hours, a price, a blurb), and having to route every minor change through someone else.

I recommended keeping anything structural (a new page, a full redesign) gated through me or a developer rather than opened up. He agreed without pushback. He doesn't want to take on a full redesign himself either way and would hand that off regardless. No commitment yet on the page builder itself, just confirmed appetite.

## Design scope
*Explicitly out of scope, for now*

This is my own proposed scope, not something he asked for. It matches the proposal page's framing that none of this is a redesign. I said I might still tidy up small things like spacing while I'm in there, but wouldn't go further than that without it being a separate conversation. He didn't push back on that. He'd rather not take on a full redesign right now anyway and said he'd hand that off separately if it ever comes up.

## Business context
*Background*

Second location is planned near their original Springside address, which explains why directories still show that address as current. Brandon's framing: the site already converts well via word of mouth and strong simulator demand (Oct-Apr especially) despite minimal marketing, so he expects the technical fixes to compound rather than start from zero. He's holding off on hiring additional coaches until the lead volume justifies it, which is part of why the lead-capture piece (item 08) matters beyond just tidiness.

He also mentioned the two 1-star reviews aren't worth chasing. One was a mis-tagged review meant for a different course (already got it removed), the other was a single frequent visitor upset about turf condition. Consistent with the proposal's framing that the 4.9 rating and review count are the strongest asset as-is.

## Next steps
*Action items*

**Me**

- Send Brandon the follow-up email on what to request from John (draft below).
- Once site access is granted: first round targeted at ~2 weeks.
- Scope whether Club Caddie can accept a lead handoff directly, before recommending Airtable/HubSpot as the fallback.
- Pin down naming for the events/league page structure before building it.

**Brandon**

- Confirm Google Search Console is live (needed ~24 hrs after setup at the time of the call) and grant me access.
- Grant access to the Google Business Profile.
- Create his own Vercel account, then reach out to John per the email below.
- Loop in Kyle with the proposal link and confirm which package tier.

## Email to Brandon: what to send his developer
*Draft*

**Subject: Getting me set up on the site**

```
Hey Brandon,

Before I start on anything, I just need to be added as a
collaborator on wherever the site lives, hosting and the
code itself.

If it's easy, I'd actually recommend moving both over to accounts
you own instead of your developer's, just so the site is fully
yours long-term rather than living under someone else's account.
That'd mean a free Vercel account plus an account wherever the
code's hosted (GitHub, GitLab, Bitbucket, whatever your developer's
using), with your developer transferring or redeploying things
there.

That said, if it's easier to just leave everything on your
developer's accounts for now, that's fine too. I only need
to be added as a collaborator on both so I can push and test
changes.

Whatever's easiest for you and your developer to sort out works
for me.

Ryan
```

*Draft only: adjust tone/specifics before sending to Brandon.*
