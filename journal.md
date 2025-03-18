# Work Journal
## Day 1
Today, I outlined the general design of my site. Since we've had a few assignments in CS463 that are similar to this one, I'm going to distinguish this project from the work we did in class by using the HTMX library. I chose to use HTMX because it seems very powerful. While this static site project won't use HTMX for its most powerful features (websockets, frontend interaction with a server backend, etc.) since this is a simple portfolio, I want to become familiar with the library, and I think that some of the fundamental principles of hypermedia that HTMX implements are going to be applicable here.

## Day 2
After putting together a simple landing page with a generic navbar I implemented based on Bootstrap's documentation and our in-class work, I returned to see where HTMX could fit in to this.

In the past, I've written multi-page websites whose codebase quickly becomes difficult to maintain and navigate. This is often due to boilerplate code that is included in each page of a site (`<head>` stuff, a global navbar element, etc.) To avoid this, I think I'll use HTMX to power a central "landing" page which will selectively swap out HTML in a "main content" element following the page header.

## Day 3
While messing with the browser devtools, I realized that each time a new page is loaded by an element with an `href`, a `GET` request is made. Since HTMX [allows you to explicitly issue and react to AJAX requests in HTML](https://htmx.org/docs/#ajax), I can apply some HTMX attributes to the regular HTML/Bootstrap elements I'm familiar with so that, when a user navigates using the navbar buttons, I have full control over where the request is going AND how to deal with the response. In this case, we're just `GET`ing HTML files local to the deployed site, but we can specify that the HTML in the response from that request should be swapped into the "main content" element.
With this, the "landing page" (index.html) contains only the boilerplate to display my navbar and an empty "main content" element, making the code quite concise. Each individual page is its own HTML file, but no boilerplate is required since its contents are swapping into the landing page. Thus, each page's HTML file defines ONLY the elements composing the page and are also very concise and easily maintained.


## Day 4
The site is fully navigable. The "landing page" is functionally complete. Each individual page on the site has its own HTML file, but those only contain placeholder material for now. After figuring out how to deploy the site, I'm able to test the online version! Everything works great - now I've got to add content to each page and make sure the other project requirements are satisfied.

## Day 5
Today, I focused on the Projects section. I wanted to use Bootstrap to make the layout of this page a little more usable than a simple collection of headers and paragraphs, so I tried a few different components.
First, I tried Accordions. These made for a clean look, but they wasted a lot of space on the page, and there was little visual distinction between the individaul projects.
I tried list groups next, which were too similar to Accordions but with even fewer options for rich information.
Finally, I returned to the card component that we'd used in class previously. I wanted each project to look distinct on the page, so I added temporary image placeholders (using placecat) until I can find some pictures that are more representative. Besides that, the card component seems well-suited: each project has its own element on the page, so they aren't grouped together like in an Accordion, and they can all be visible at once, rather than a toggle to select the element like with accordions.
I want to have at least three projects listed here, so I created a few placeholder cards and called it quits for today.

## Day 6
Today, I wrote an "about" section for myself. This wound up being harder than I expected, because I'm not great at writing about myself. After several revisions, I realized I was basically writing a summary of the material I wanted to put on the "Projects" and "Previous Work" sections. I commented that writing out and started over, this time trying to describe myself more generally, and it went much easier. Then, I moved the material that was better-suited to other pages to their respective places.

## Day 8
Today, I wrote the "contact" form for my site. I was able to re-use the HTML form and accompanying JS code from our "starships" homework, since I spent a lot of time on that previously in the term. After copy-pasting the relevant code, I customized it to this project (removing the "username" and "passwords" sections, integrating the old JS into this new project, etc.) and tested the form until I was sure it worked.

## Day 9
As the deadline draws near, I chose to try and finish the "projects" and "previous work" sections.

Using my writing from Day 6 as a base, I outlined the experiences I wanted to document in the "previous work" page.

I was a little confused as to how to select my favorite projects, so I went to my github. I browsed my repositories until I found three that were significant to me and that I was eager to write about. Then, I put the title of each project in its own card and added a button to the GitHub repo for each project. After each project had a card title and project link, I spent a while writing and re-writing little summaries for each. Now, each card has a title, link, body, and placeholder image.

When I was satisfied, I moved on to my Previous Work section. I treated this more formally like a resume than my "Projects" page, so I went into depth about how these experiences influenced me.

With this, I'm finished writing both my Projects and my Previous Work pages!

## Day 10

Today, I set about wrapping up work on the site. The only things remaining were adding images where appropriate and creating a "home" page that would be loaded by HTMX when `index.html` is at its homepage. I wrote some simple "hello" text, which I feel suffices. Then, I started adding images to my Project cards.
At first, I tried using other stock/placeholder images since none of my projects had existing screenshots/pics showing off their use. This felt like it added very little to the page and cost a not-small amount of time to load all the media, so I became a bit discouraged. Then, I had the idea to use simplistic glyphs rather than actual images - i.e. a text character or svg. After looking through existing ASCII characters and not finding anything satisfactory, I went to FontAwesome, a site I'd used when I was involved in webdev in high school. It had changed a lot since my first times using it, but once I managed to get it included in my project, I was able to select unique symbols to accompany each project. This gave me a nice result I was a lot happier with than when I'd used images, which was great, but now I need to find another way to add images to my site for it to satisfy project requirements.

## Day 11
Today, I finished work on the site and added my images. To make my home page a little more interesting, I added a photo of myself to greet the visitor. For some extra fun, I added a second photo of my dog.

One last step before I considered myself finished was to make sure my code met quality standards and passed accessibility checks. I used WAVE to check this, and found that, thanks to using many HTML/Bootstrap elements I was already comfortable with, I had no actual accessibility issues. Yay! I then formatted my code with the appropriate formatters.

## Day 12
Before I submitted my site, I took a step back and realized how boring the default color scheme looked. Giving my personal site pretty colors is a step I'd been excited for since the beginning of the project, but I'd forgotten about it. So, since my site was fully functional and content-complete, I spent an hour looking up color palletes and writing CSS to integrate them into my code.

I have always loved the relationship between the colors in Neopolitan ice cream, so I looked up "neopolitan color pallete" and found a few options. Then, I used MacOS' built-in eyedropper tool to identify the hex value of each color in the pallete. With an appropriate range of colors selected (5 colors: very light, light, regular, dark, very dark), I went about writing some CSS to modify the colors Bootstrap provides by default. First, I defined all my colors as variables in the top of my CSS file, then I went through each wepage with browser tools to identify the different classes that needed recoloring. After I'd found the classes I needed to recolor and written rules for each of them in my CSS, I was happy with the result and considered myself done.

Upon re-running WAVE before submission, though, I realized that my color customization had introduced a "insufficient contrast between text/BG color" issue for nearly every element that tried to use the "dark" color I'd defined on an element's text when it had a "regular" or lighter background. Since I'd defined my colors as variables at the top of my CSS, it wasn't hard to make large color changes quickly. I tried improving the contrast between a few of my colors by hand, but eventually I gave up. After searching the web, I found a StackOverflow answer where someone reccommended http://colorsafe.co/. Using this site, I was able to evaluate the contrast between any colors in my scheme, so I quickly found two dark colors that matched my `regular` and `light` colors without causing accessibility issues.
This ended up being one of the most confusing parts of this project, since I had little insight into the amount of contrast between raw hex codes, but once I found colorsafe I was able to make progress quickly and easily. Once these issues were eradicated, I was truly done with the project!
