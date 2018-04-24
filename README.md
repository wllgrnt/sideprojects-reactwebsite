# ReactWebsite

This repo provides the website hosted at [wpg.io](wpg.io), a basic vanity page built using React. The project is intended to be a learning exercise, and is likely to contain anti-patterns and bad software engineering. pull requests and comments welcome!



### Still to-do:

- [ ]  Better CSS: Responsive menu bar
- [ ]  Investigate react-spa by WRidder
- [ ]  Add d3.js examples
- [ ]  Prettier pictures
- [ ] Content 
- [ ]  Write a colophon, giving the libraries and tools used in the process and documenting the rationale behind the choices.
- [ ]  Enumerate website goals, update README
- [ ] Unit tests

### Website requirements

- Lightweight: it's only a vanity page/cv/list of hobby projects, I shouldn't force anyone to download megabytes of cruft to look at it.
- Responsive: it's 2018, so to be otherwise isn't really acceptable.
- Integrated with D3: lots of my viz work is in D3, and it'd be good to host that directly.
- Modern: this whole project is a learning exercise, so I might as well learn the current web-dev dogma.
- CRUD interface? It'd be good if I could learn how to roll my own CRUD service, for blogging/further websites.

### Tech Stack

- FontAwesome

- - Needed as for some reason the svg of the Github icon won't resize correctly if included as an inline element.

-  React-Router

-  React

-  Create-React-App

- Namecheap Hosting

- - Cheap and secure, with whois masking, though currently I can only host static websites (which I believe Github would do for free).

-  Material UI 

- - I'm not necessarily a fan, but it seems like the best way to get a responsive menu bar.
  - See alternatives e.g. https://github.com/stephanieinez/react-responsive-navbar and  https://codepen.io/danbuda/post/a-react-navbar-component 

- styled-components: who knows what it does?

 Maybe I need Bootstrap too?

 Front-end development suffers mightily from the fact that there's no Right Way to do things, and new, better methods arise every day.

This makes finding good, up-to-date, documentation difficult, and makes it hard to know you're following best practices (which of course is what you're after).

This is often most true with CSS styling of the components. Hopefully I can survey other people's work and acquire some consensus.