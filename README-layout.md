[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
![](https://img.shields.io/badge/stars-%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85-brightgreen)
![](https://img.shields.io/badge/-HTML5-000000?style=flat&logo=HTML5)
![](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)
![](https://img.shields.io/badge/-Git-000000?style=flat&logo=git&logoColor=F05032)
![](https://img.shields.io/badge/-GitHub-000000?style=flat&logo=github&logoColor=FFFFFF)
![](https://img.shields.io/badge/-jQuery-000000?style=flat&logo=jQuery&logoColor=0769AD)
![](https://img.shields.io/badge/-Node.js-000000?style=flat&logo=node.js&logoColor=339933)
![](https://img.shields.io/badge/-VSCode-000000?style=flat&logo=visual-studio-code&logoColor=007ACC)
![](https://img.shields.io/badge/-Jira-000000?style=flat&logo=jira-software&logoColor=white&logoColor=0052CC)
<div style="text-align: center; /* border: solid 1px red; */">
   <a href="https://github.com/othneildrew/Best-README-Template">
      <img src="images/THOR02c.png" alt="Logo" width="" height="">
   </a>
  <br />
  <ul style="display: inline-block; text-align: left; list-style-type: none;">
    <li>[ T ] riage</li>
    <li>[ H ] UD</li>
    <li>[ O ] perational</li>
    <li>[ R ] esources</li>
  </ul>
  <br />
   Next generation search/triage/analysis/action - without leaving the page - GUI.
</div>
<br />
<br />

# LAYOUT : :

## <a id="front-end"></a>Front-end HTML/CSS Framework
---
A professional front-end template for building fast, robust, and adaptable web applications and web sites.  
Fast Triage Workflow UX
A better way for users and developers.

Front to back development  
Roadmap for developers  
Agile (iterative) roadmap for clients/shareholders  

### BASIC : :  
* Classic Holy Grail layout
* Four panels total
* Two panels resizable
* https://dragontheory.com/holygrail09

### FULL : :  
* Classic Holy Grail layout + **DASHBOARD**
* Five layout panels total
* Starts with **DASHBOARD** (Click on "Go somewhere" button)
* Four panels resizable (WIP)
* https://dragontheory.com/holygrail10

### GUI : :
Per JAMstack configuration, the GUI scaffolding (HTML) and functionality (pure CSS) is rendered up front. This ensures super fast content and functionality throughout the application. 

THOR is controlled by adding/removing classes in the <body> tag.

HOME [ Default ] State
```
<body id="thor" class=".show-home">                                         :
                                                              [ on screen ] : [ off screen ]
<body id="thor">____________________________________________________________:______________________________________________________________________________________________
| <header>________________________________________________________________  :                                                                                              |
| |  {{ app.logo }}                                       {{ user.name }} | :                                                                                              |
| </header>_______________________________________________________________| :                                                                                              |
| <main>____________________________________________________________________:____________________________________________________________________________________________  |
| |                                                                         :                  <div>_______________(wrapper for resizer)_________________                | |
| | .home_________________________________________________________________  : .filter________  | .results______________________________  .profile_______  | .details___  | |
| | |                                                                     | : |              | | |                                     | |              | | |          | | |
| | |    Welcome {{ user.name }}                                          | : |              | | |                                     | |              | | |          | | |
| | |                                                                     | : |              | | |                                     | |              | | |          | | |
| | | .news__________  .history_______  .favorites_____  .watching______  | : |              | | |                                     | |              | | |          | | |
| | | | rearrangable | | rearrangable | | rearrangable | | rearrangable | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                           resizer <=|=|=>            | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |              | |              | |              | |              | | : |              | | |                                     | |              | | |          | | |
| | | |______________| |______________| |______________| |______________| | : |              | | |                                     | |              | | |          | | |
| | |_____________________________________________________________________| : |______________| | |_____________________________________| |______________| | |__________| | |
| |                                                                         :                  </div>_____________________________________________________|              | |
| </main>___________________________________________________________________:____________________________________________________________________________________________| |
| <footer>________________________________________________________________  :                                                                                              |
| |                                                           {{ ver.num }} | :                                                                                              |
| </footer>_______________________________________________________________| :                                                                                              |
</body>_____________________________________________________________________:______________________________________________________________________________________________|
                                                                            :
                                                                            :
```
---


Search Results State
```
                                                                                :
                                                                  [ on screen ] : [ off screen ]
<body id="thor">________________________________________________________________:___________________________________
| <header>____________________________________________________________________  :                                   |
| |  {{ app.logo }}                                          {{ user.name }}  | :                                   |
| </header>___________________________________________________________________| :                                   |
| <main>________________________________________________________________________:_________________________________  |
| |                                   <div>_______________(wrapper for resizer)_:_________________                | |
| | .home__________  .filter________  | .results______________________________  : .profile_______  | .details___  | |
| | |              | |              | | |                                     | : |              | | |          | | |
| | | .news_______ | |              | | |                                     | : |              | | |          | | |
| | | |           || |              | | |                                     | : |              | | |          | | |
| | | |___________|| |              | | |                                     | : |              | | |          | | |
| | |              | |              | | |                                     | : |              | | |          | | |
| | |.history_____ | |              | | |                                     | : |              | | |          | | |
| | | |           || |              | | |                                     | : |              | | |          | | |
| | | |___________|| |              | | |                                     | : |              | | |          | | |
| | |              | |              | | |                           resizer <=|=:=|=>            | | |          | | |
| | | .favorites__ | |              | | |                                     | : |              | | |          | | |
| | | |           || |              | | |                                     | : |              | | |          | | |
| | | |___________|| |              | | |                                     | : |              | | |          | | |
| | |              | |              | | |                                     | : |              | | |          | | |
| | | .watching___ | |              | | |                                     | : |              | | |          | | |
| | | |           || |              | | |                                     | : |              | | |          | | |
| | | |___________|| |              | | |                                     | : |              | | |          | | |
| | |______________| |______________| | |_____________________________________| : |______________| | |__________| | |
| |                                   </div>____________________________________:__________________|              | |
| </main>_______________________________________________________________________:_________________________________| |
| <footer>____________________________________________________________________  :                                   |
| |                                                              {{ ver.num }}  | :                                   |
| </footer>___________________________________________________________________| :                                   |
</body>_________________________________________________________________________:___________________________________|
                                                                                :
                                                                                :
```
<br />
<br />

# LAYOUT : :  
WARNING : : As opposed to a seed or start-up Minimum Viable Product (MVP) application, this is a live client-side framework with working functionality already built in! **Just "mucking around with it" will most likely break or severely limit both obvious and non-obvious functionality/features!** Such as: (but not limited to)  
* responsiveness, 
* browser compatibility, 
* user preferences, 
* framework agnosticism, 
* keyboard navigation, 
* and or Bootstrap spec integrity.

HTML layout SCAFFOLDING: (classes have purposeful order and patterns)  
```html
<body class="container-fluid d-flex flex-column p-0 m-0">
    <div class="d-flex justify-content-between page-header p-0"></div>
    <main class="d-flex flex-row no-gutters flex-nowrap overflow-hidden">
        <div class="d-flex flex-column filter open"></div>
        <div class="d-flex flex-row no-gutters flex-nowrap overflow-hidden resizer-parent">
            <div class="d-flex flex-column results resizable"></div>
            <div class="d-flex flex-column resizer"></div>
            <div class="d-flex flex-column profile"></div>
        </div>
    </main>
    <div class="d-flex flex-column details open"></div>
</body>
```

`.open` class toggles to open/close sections of the UI.  

Predefined generic naming conventions and hooks are provided for each section.  
* Filter section root = `.filter`
* Results section root = `.results`
* Profile section root = `.profile`
* Details section root = `.details`

Each section's content follows that naming convention.  
FOR EXAMPLE : : Each section has an identical ACTIONS dropdown menu BUTTON (and menu) with a unique class name because it has unique content.  
FOR EXAMPLE : : The RESULTS section "ACTIONS" dropdown menu BUTTON class is `.resultsActionsDropdownMenuButton`. The PROFILE section's "ACTIONS" BUTTON class is `.profileActionsDropDownMenuButton`.  

Sticky header and footer without absolute positioning via CSS Flex-box allows for accurate overflow scrolling for each section without the need for extra JS calculations.  

Bootstrap 3 to 4 **BREAKING CHANGE** : :  
Many Bootstrap 3 components are rewritten/replaced/not compatible in Bootstrap 4.  
FOR EXAMPLE : : `<portlets></portlets>` are replaced with `<cards></cards>`.  

This template leverages the full Bootstrap spec for its CSS Flex-box layout, spacing, and behavior. Thus is cross browser compatible and tested with the following default browser stack distribution. FF 60.5.0esr, IE11, Edge, and Chrome 65.  

All HTML and CSS patterns are repeated exactly the same wherever/whenever possible. Unique classes are given when there is unique data.  
FOR EXAMPLE : : Each component level `<div>` is given a unique class because it contains unique content.  

In Flex-box CSS, every HTML node is a box. Each box relies on the other. If one is removed, the others fill in the empty space.

---

### ANGULAR/VUE INTEGRATION : :  

NESTING : :   
The CSS Flex-box spec requires a direct relationship between a parent Flex-box element and it's children. Only directly nested children elements of a parent CSS Flex-box element will inherit flex attributes. This means that there cannot be HTML elements (dynamic or otherwise) between the parent and the child. The application layout **WILL FAIL** if this parent/child relationship is broken.  

INCORRECT NESTING : :  
```html
<div class="d-flex results">
    <app-results>  < --- Angular/Vue custom component wrapper element breaks CSS Flexbox parent/child relationship
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
    </app-results>
</div>
```

CORRECT NESTING : :  
```html
<app-results class="d-flex results">  <--- Angular/Vue custom component wrapper element is combined with the Bootstrap classes preserving the required CSS Flexbox parent/child relationship
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
</div>
```

Several solutions are available but the most ideal and clean (least amount of extra code) is to combine the dynamic Angular/Vue element with the required Bootstrap classes.  

Ideal Solution 1 : :  
Combine the custom element app-results with the d-flex class in the associated Angular `.ts/Vue .js` file.
```html
@Component ({
    selector: 'div.results.d-flex'
})
```
---
---

REACTIVE CSS : : LOADING DATA  
Loading animation : :  
CSS controls loading animation appearance and timing.   
The loading animation appears between when an end-user clicks to open PROFILE (`.show-profile` is added to `<body>`) and when PROFILE opens (`.profile` dynamically receives child `.loaded`).  
TODO : : Narrow animation scope to item clicked. 
```
/* Closed State (default) */
.results {
     flex: 0 0 auto;
     width: 0;
     transition: width 550ms ease;
}
/* Open State */
.details .loaded {    
     .results {          
          width: 25%;
     }
}
```
HTML : :
```
<div class="results">
     <div class="list-of-results"></div>
</div>

<div class="details">
     <div class="dynamically-loaded-content **loaded**">

     </div>
</div>
```
LAYOUT EXAMPLE : :
```
                               '
             ( ON SCRN )       ' ( OFF SCRN )
                               '             _[ close btn ]
 _____ ________.results________'__.details__/
|     |                        |           x|
|     |                        |            | When the child class
|     |                        | + .loaded  | '.loaded' is present in
|     |                      <-|---         | '.details', '.details' slides
|     |                        |            | on screen from right
|     |                        |            |
|     |                        |            |
|     |                        | - .loaded  | When '.loaded' disappears
|     |                      --|-->         | '.details' slides off screen
|     |                        |            |
 ----- ------------------------ ------------

```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png