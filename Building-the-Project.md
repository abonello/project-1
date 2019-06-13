# project-1

## Overview
### What is this website for?
This project will form part of my submission for the Fullstack Web Developer course that I am doing at code institute.

This the the [github repository](https://github.com/abonello/project-1),  
and this project is deployed as a github page [here](https://abonello.github.io/project-1/).

I am basing this project on an earlier exploratory exercise that I did where I explored the jumbotron and other parts of bootstrap. This previous exercise was meant to be a draft to practice the techniques and skills I need for this project. It can be found [here](https://github.com/abonello/JumbotronExperiment). Definitely I want to change the color scheme of the header and activities sections. I like the background of the portfolio section but not that of the header. I need to add another section, a sort of About Me or Bio.

The plan is to have a single page website with a parallax background. The design is responsive.

### What does it do?
This website gives visitors information about my various activities related to myself as an active independent musician.
It is targeted at potential clients who would like to use my services as a composer/sound desgner, conductor, performer or teacher.
Visitors have the ability to contact me by using a contact form. (Note: the contact form in this project is not functional as it is beyond the scope of this project to develop a back end.)

### How does it work
The website is planned as a single page site. Each section is well separated from the others so that the material is distinct. Extra information can be accessed through more information buttons.  

The menus will scroll up and down so that the user will know that they are still on the same page rather than taken to a different page. This helps the users to keep trakc of where they are.


## Features
    * read information about my activites
    * portfolio of compositions
    * menu system
    * contact


## Technologies
html5, CSS3, bootstrap 3.3.7, javascript, jQuery 3.3.1

I am using CDNs for bootstrap and jQuery.


## Ideas - brainstorming:
semantic web  
UX/UI  
story and wireframing  
use googlefonts  

use pseudo classes and pseudo elements  


conduct and document tests 

 

## Testing
Document testing - will do manual testing using Chrome.


1. css link - set body background color to red. Pass (before it was white)
2. script.js link - append hello world div using jQuery. Checked in Chrome. Pass  
Noticed that links for bootstrap (both css and js are not loading.)
3. Changed links for bootstrap - now loading. Checked with Chrome.
4. Gave (main sections) divs a temp class with a border and some height. Pass Checked with Chrome.
5. When I click the Tell me more button for the composition section, a new div is displayed below the activities section. Pass  
6. Test that all other buttons work. Pass. All 
7. The code for scrolling to the newly displayed info is working well. Pass. Checked with Chrome
8. Extra info is hidden when a new activity is selected Pass
9. Page scrolls back to the top of the calling activity when extra info is closed. Pass
10. When extra info is closed its height is reduced while scrolling. Pass - This makes the action smoother. Especially for the lower cards where the scrolling is slower and might not hide the place previously taken by the extra info just closed.
11. Fixed problem created from unequal sizes of activities cards. Pass
12. Hide images in portfolio in extra small. Pass
13. Tested media query for margin in composition portfolio. Pass
14. Changed jQuery code that shows current year in copyright note with javaScript as it was waiting to load everything including the 
code from SoundCloud. This was resulting in the page sitting note showing the correct copyright note. Pass
15. The contact form itself is has no back end and will not submit anything. 
    To indicate some activity I added jQuery code to display an alert when the contact form is submitted. This was tested. Pass
16. Added validation code. Tested - Pass
17. Added code that will hide the collapsed menu when an item is selected. Pass


## Code from other sources

Apart from the code from Bootstrap, I am using code provided by soundcloud and youtube to access the material on
these sites.  
The code for scrolling is adapted from various tutorials. I have modified it and used it before in various projects.
It is heavily documented on youtube and elsewhere.


## Colors 

Heading color rgb(255, 233, 184) is taken from music background image.  
Background Grey ~~color #50596d, trial and error. Not fully happy with it will probably change later.~~  
Changed this to a gradient (from [colorzilla](http://www.colorzilla.com/gradient-editor/)) which I like better. Now need to change color of text from #D5D5D5 to  rgb(25, 39, 51) for grey gradient backgrounds and color: rgb(255, 233, 184) (same as header) for text on triangular background, including footer. 

footer a color: rgb(255, 233, 184) and rgb(255, 195, 66) when hovered. Text of links will slightly increase in size on hover too.  

Form error color: #e2631f  

Button colors - what felt right to me.

Set all buttons in soundcloud to value %2364746c (a sort of green).


## IMAGES

**Dark Triangles** fro background:  
Downloaded from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/tag/dark/)  
Image notes: JUNE 7, 2017 Playful triangle pattern, this time in black.  
Use: All patterns on this site can be used free of charge, but please read this before using them: CC BY-SA 3.0 - Subtle Patterns © Toptal Designers.

**fast-min.jpg**
[Pexels](https://www.pexels.com/photo/light-trails-on-city-street-327345/)
Use: CC0 License  
Image is cropped, rotated, sheared, resized.

**Ringtone.jpg**  
found at https://blog.ambient-mixer.com/sound/what-your-ringtone-says-about-your-personality/  
Image Credit by = http://bit.ly/1HLbWKi  

**battle.jpg**
found at [Wikipedia](https://en.wikipedia.org/wiki/Mahdist_War#/media/File:Bataille_d%27Ondurman_2.jpg)
Use: Public Domain
Image cropped and resized.

**Slideshow.png**
found at [Pexels](https://www.pexels.com/photo/curve-industry-photography-vintage-65128/)
Use: Pexels License
Free for personal and commercial use, No attribution required
Image is cropped and resized.


## Cleaning and validating code

* **HTML** - https://validator.w3.org/  
There are a number of warnings for the iframes realted to the code from soundcloud. The validator complains about width beign set to 100%. I tried removing this and the iframe will only occupy half the width I want. With width="100%" it works and fills all the space available.

* **CSS** - https://validator.w3.org/  
It complains about vendor prefixes in code that comes from colorzilla (re background gradient) or was added by form validator. I am goind to leave these as they are.  
There is also another warning about two classes having the same background and border colors. I will keep these as they are.

* **Form Validator** - https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

* **JavaScript** - http://esprima.org/demo/validate.html
Code is syntactically valid.