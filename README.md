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
### Existing Features
* None yet!
### Features Left to Implement
    * read information
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


