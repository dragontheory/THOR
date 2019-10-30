# THOR
[ T ] riage 

[ H ] UD 

[ O ] perational 

[ R ] esources

Angular and Vue.js ingetrations coming soon. 

---

A professional front-end template for building fast, robust, and adaptable web applications and web sites.  
Fast Triage Workflow UX  
A better way for users and developers.

Front to back development  
Roadmap for developers  
Agile (iteritive) roadmap for clients/shareholders  

BASIC : :  
* Classic Holy Grail layout
* Four panels total
* Two panels resizable
* https://dragontheory.com/holygrail09

FULL : :  
* Classic Holy Grail layout + **DASHBOARD**
* Five layout panels total
* Starts with **DASHBOARD** (Click on "Go somewhere" button)
* Four panels resizable (WIP)
* https://dragontheory.com/holygrail10

---

PURPOSE : :  
To support analysts by providing a faster, more efficient, and intuitive workflow and user interface (UI) triage tool.

To save time and money by reducing duplicative, redundant (unnecessary), rework efforts and "time to market" with pre-made search/profile/details workflow and UI that satisfied search/triage requirements "out-of-the-box".

To establish a clear, easy, and independent (separation fo concerns) update/upgrade path (SOP) front-end (FE) tech stack to avoid deprecation and security vulnerabilities and allow for efficient web integration.

To create a web interface that is uper lightweight load and fast loading with minimal markup. **50%** reduction of HTML/CSS/JS client-side customer facing markup.

**NEW GUI PARADIGM **95%** of the scaffolding layout markup is loaded on first load, waithing off-canvas to be loaded when a component with the correct CSS selectoris load.

To allow for developers to more easily absorb the cost of management (or whomever) changing course midstream.

To "Future Proof" web applications by separations of concerns by NOT committing code to any JS framework if a non-js framework HTML/CSS standards will do.  
For example : :
  * HTML5 Routing
  * HTML5 Storage (with options)
  * CSS live detection

---

FEATURES : :
* W3C Standards Compliant
* Cross/backward browser compatible and tested - FF60.530esr, IE11, Edge, Chrome65
* Fully documented (Bootstrap + intuitive naming convention + commented)
* **NEW GUI PARADIGM : :** Is actually the old paradigm that has been lost with the advent of ubiquitous JS framworks
* **NEW GUI PARADIGM : : THOR** is a "HTML/CSS first" (GPU accelerated) paradigm vise the current ubiquitous slower scripting firt paradigm
* **NEW GUI PARADIGM : :** CSS live deta detection (helps separate data logic from UI logic)
* HTML5 Routing (with options) allows for bookmarking/sharing links of full layouts and data
* HTML5 User Storage allows for preferences to be saved cross browser session
* Non-cluttered, minimal, professional look and feel
* Data agnostic (works with any data set or type)
* Framework agnostic (works with any JS framework like Vue.js, Angular, and React or none at all)
* Resolution agnostic - (Responsive - works with any screen resolution)
* Super fast loading/lightweight (up to 50% less markup)
* Minimal dependencies (minimizes upgrade coordination conflicts/dead-ends)
* "Holy Grail" layout leverages full browser width/height for maximum data visibility
* Independent scrolling panels
* Light/dark themes
* Keyboard navigable
* Duplicate results indicators
* Independent Full-screen mode for each panel
* End-user adjustable/resizable panel widths
* Right click context menus with feature/component shortcuts
* "Scroll to top" for each panel
* In application alerting (Toasts)
* Web push notifications
* Customize-able display density (Roomy/medium/compact/No Fluff! Just Stuff!)
* Customize-able/rearrange-able sections
* Sweep (keep the latest but delete the rest)
* Favorite a profile
* Watch a profile

---

TECH STACK : :  
* HTML5 (current major version of the HTML standard and subsumes XHTML)
* HTML5 Routing (with options) allows for browser back/forward buttons and bookmarking/sharing links of full UI layout and customization and data.
* HTML5 User storage allows for user preferences to be saved cross browser session.
* CSS3 (Flex-box specification for all layout)
* jQuery (ubiquitous - but minimally used, fast, lightweight, mature, feature rich JS library)
* Fontawesome 5.6.3 (enables icons to be easily/quickly styled/controlled as a font)
* jQuery Data-tables (ubiquitous jQuery plug-in for for viewing tabular data)
* Bootstrap 4.3.1 (open source, standards compliant, toolkit/library with extensive pre-built components and powerful plug-ins built on jQuery (for rapid [copy/paste] design and development)
  * Note: Bootstrap 5.+ will be jQuery free (coming soon)

---

DEVELOPMENT : :  
The Bootstrap spec is followed without exception to preserve:
* Full Bootstrap documentation
* Easy/fast copy/paste development
* Upgrade/upgrade/support path
* Cross/backward browser compatibility
* Consistent/predictable look and feel and behavior
* Structural/functional/theme integrity

---

HTML/CSS Files : :  
* index.html
* assets/css/styles.css
* assets/css/layout.css
* assets.css/themes/dark.css
* assets/js/scripts.js
* vendors/bootstrap/*
* vendors/jquery/*
* vendors/simplebar/*
* vendors/split-master

---

Bootstrap Documentation : :  
The latest online Bootstrap documentation can be found here: https://getbootstrap.com/docs/

---

####FAQ : :  

QUESTION : : Why Bootstrap?  
ANSWER : : I spent months attempting to create this app without Bootstrap or any other dependency and found myself rewriting Bootstrap since Bootstrap is standards compliant. So to save time/effort/money I decided to leverage what they had already successfully done. Turns out they have done much better than I could have ever done. Bootstrap is vetted by thousands of commercially competitive developers building tens of thousands of websites and web applications.

QUESTION : : Why do you prefer CSS solutions over scripting solutions?  
ANSWER : : **THOR** is built in coordination and conjunction with Bootstrap's "HTML/CSS first" paradigm. CSS takes advantage of your computers Graphics Processing Unit (GPU) which creates a faster more smooth user experience. CSS executes faster than scripting solutions. 

QUESTION : : How do I integrate the scaffolding (HTML)?  
ANSWER : : The scaffolding (HTML) and interactivity (CSS) is a component unto itself and should be kept independent from data logic. This preserves JS framework agnosticism, the ability to rapidly copy/past components, and Bootstrap spec integrity.

Data logic is only necessary where data is visible at the component level of each panel.  The rest is taken care of already by the UI.

QUESTION : : Are the Bootstrap `overflow-hidden` classes really necessary?  
ANSWER : : Yes. Bootstrap `overflow-hidden` classes are necessary to enable scrolling in panels, components, and sub components. They should not be removed. 

QUESTION : : Why are there so many classes in the HTML?  
ANSWER : : Bootstrap 4 shifts from a majority global styles for look and feel, spacing, and layout to preferring inline UTILITY classes for faster more intuitive (for developers) rendering.  
For example : : `padding-right: 5px;` = .pr-1, `margin-left: 10px;` = .ml-2. This technique results in less custom CSS having to be written. The more we get out-of-the-box the better. 

QUESTION : : Does the order of resources in the `<head>` matter?  
ANSWER : : Yes. External file reference order in the `<head>` matters.
* `styles.css` is a minimal and surgical OVERWRITE of vanilla Bootstrap and must come after `bootstrap.min.css`.
* In turn, themes such as `dark.css` are minimal and surgical OVERWRITE of both `bootstrap.min.css` and `styles.css` and must come after `styles.css`.

QUESTION : : This sounds complicated. Is this custom?  
ANSWER : : No. To keep it as easy as possible to integrate and impliment for developers and preserve it for the future, every effort has been made to keep THOR as generic and standard as possible. 

QUESTION : : How old is Flexbox?  
ANSWER : : CSS Flexbox Specification’s first working draft was published on July 23rd, 2009. The original spec is based on XUL, the technology Firefox (the browser) uses to produce its UI (user interface).  
[https://annairish.github.io/historicizing/history](https://annairish.github.io/historicizing/history)

QUESTION : : If you don't use scripting to manipulate the UI, what do you use? 
SHORT ANSWER : : Cascading Style Sheets (CSS)
LONG ANSWER : : CSS rules are live states of layered, cascading, boolean logic. When a CSS state changes, the rule is executed instantaniously. No resource hungry script processing necessary.   
For example : : When a button is clicked, a class is added to the `<body>`. A CSS rule exists that says when that class is in the `<body>`, open that panel. 

UI behavior is purposely repetitive and predictable (read intuitive/conventional). Most UI features such as buttons, menus, panels, accordions, etc. have two or three states. Open/close, hide/show, on/off, down/up etc. CSS rules are pre-writted So writing CSS rules that predetermines what happens is fairly easy as well. 
CSS Live Detection: CSS is live all the time. No reason to ping the back-end to change the UI. Pre-written CSS rules are ready to fire if the right conditions are met. So all we need is a single class in the `<body>` to change anything.




---

LAYOUT : :  
WARNING: As opposed to a seed or start-up Minimum Viable Product (MVP) application, this is a live client-side framework with working functionality already built in! **Just "mucking around with it" will most likely break or severely limit both obvious and non-obvious functionality/features!** Such as: (but not limited to) 
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

Each section's content follows that naming convention. For example, each section has an identical ACTIONS dropdown menu BUTTON (and menu) with a unique class name because it has unique content. For example: The RESULTS section "ACTIONS" dropdown menu BUTTON class is `.resultsActionsDropdownMenuButton`. The PROFILE section's "ACTIONS" BUTTON class is `.profileActionsDropDownMenuButton`.

Sticky header and footer without absolute positioning via CSS Flex-box allows for accurate overflow scrolling for each section without the need for extra JS calculations.

Bootstrap 3 to 4 **BREAKING CHANGE** : :
Many Bootstrap 3 components are rewritten/replaced/not compatible in Bootstrap 4. For example, `<portlets></portlets>` are replaced with `<cards></cards>`.

This template leverages the full Bootstrap spec for its CSS Flex-box layout, spacing, and behavior. Thus is cross browser compatible and tested with the following default browser stack distribution. FF 60.5.0esr, IE11, Edge, and Chrome 65.

All HTML and CSS patterns are repeated exactly the same wherever/whenever possible. Unique classes are given when there is unique data. For example, each component level `DIV` is given a unique class because it contains unique content.

In Flex-box CSS, every HTML node is a box. Each box relies on the other. If one is removed, the others fill in the empty space.

---

ANGULAR/VUE INTEGRATION : :  

NESTING : : The CSS Flex-box spec requires a direct relationship between a parent Flex-box element and it's children. Only directly nested children elements of a parent CSS Flex-box element will inherit flex attributes. This means that there cannot be HTML elements (dynamic or otherwise) between the parent and the child. The application layout **WILL FAIL** if this parent/child relationship is broken.

Correct nesting : :  
```html
<div class="d-flex results" id="app-results">
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
</div>
```

Incorrect nesting : :  
```html
<div class="d-flex results">
    <app-results class="">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
    </app-results>
</div>
```

Several solutions are available but the most ideal and clean (least amount of extra code) is to combine the dynamic Angular/Vue element with the required Bootstrap classes.

Ideal Solution 1 : :  
Combine the custom element app-results with the d-flex class in the associated Angular .ts/Vue .js file.
```html
@Component ({
    selector: 'div.results.d-flex'
})
```

---

TODO : :  
* Add toggle for light/dark theme
* Add script for Bootstrap Toastr alerts
* Add script for Bootstrap right click context menus
* Add CSS rule for data load detection
* Add CSS media query to accommodate for nested resize-parent div to preserve responsiveness.
* Remove nested resize-parent div
* Fix icon menu at the top of each section

---

REFERENCES : :  
Design, inspiration, and CSS Flex-box ideas : :

---

LAYOUT : :  
https://codepen.io/dragontheory/pen/PVwGgp  
https://stackoverflow.com/questions/21515042/scrolling-a-flexbox-with-overflow-content  
https://webdesign.tutsplus.com/tutorials/how-to-make-responsive-panels-with-flexbox-cms-23269  
https://geon.github.io/programming/2016/02/24/flexbox-full-page-web-app-layout  
https://hydejack.com/projects/

---

BACKGROUND : :  
The term "Holy Grail" is a client side design term in reference to the type of layout which, in it's simplest form, is three independent scrolling full-screen panels of content with a header and footer.

---

HISTORY : :  
The "Holy Grail" layout may seem basic and easy to implement but since the 1990's, when it was introduced, front-end designers/developers have been attempting and failing to solve how to adequately code it without the assistance of JavaScript. It has become an infamous ongoing challenge. 

The standard requirements for solving the "Holy Grail" layout puzzle are : :   
Cross/backward (modern) browser compatibility (IE11, Edge, FF 60+, Chrome 60+)  

At least three (two fixed or % width side and one % width center) independent, scroll-able panels (columns)

Full width header and footer that sticks to the top and bottom of the screen (without JS).  
Hint: the header and footer are actually PUSHED to the top and bottom of the browser window.

No JavaScript (HTML and CSS only - languages all browsers speak natively)

An updated modern requirement is that the "Holy Grail" must work with multiple platforms and associated resolutions such as mobile phones, tablets, and laptops in addition to traditional desktops resolutions. The design/development world calls this being "responsive". 

So the label "Holy Grail" is well deserved. No one has been able to do it, as far as I know because the technology simply didn't exist until now. Using Bootstrap's built in advanced CSS Flex-box techniques, I have been able code a solution that satisfies all of the standard "Holy Grail" layout requirements as demonstrated in the links above. In fact, I have been able to extend the solution to include a dashboard in up to five modular, customization, skin-able, and theme-able panels. 

---

EXTENSIBLE BENEFITS : :  
Bootstrap components are pre-built thus developers can simply copy/paste them into place, hook them up and they are ready to go! This also reduces design/development LoE by up to 50%.

Bootstrap components are conventional thus end-users are already familiar with how to use them out-of-the-box (minimal training)!

Vanilla Bootstrap is standards driven, ubiquitous, easy to develop, and has one of the largest (if not THE largest) developer base of support in the world.

Because they use vanilla Bootstrap (vs Bootstrap plug-ins and or plug-ins of Bootstrap), the thousands of pre-made themes and components created and shared by designers and developers all over the world work with any other vanilla Bootstrap web application.

Because of the front-to-back nature of the development process, stakeholders are able to see (up front) notional but working versions of functionality/features. Program managers are thus better able to negotiate, gain, and maintain stakeholder "buy-in" and or confidence for current and future development.

Bootstrap is compatible with Vue, Angular, React, or any other JS framework or no JS framework at all.

The separation of GUI logic and data logic naturally helps define and promote separate development team roles/responsibilities (AKA swim-lanes) for an efficient (conveyor belt like) team development workflow.  
For example:
* The front-front-end (FFE) designer/developer copy/pastes the designed component into place, tests, and pushes changes.
* The front-back-end (FBE) developer hooks in the data provided by back-front-end services (BFE) to the new component, tests, and pushes changes.
* All changes are pushed to DEV and further tested by non-developers. 
* . . .

---

A new, better, faster way to do web development.
1. Front to back design drives development
   1. Developers have a "road map" of what they need to do.
   2. Customers have a "big picture" visual of what to expect.
   3. Mitigates miscommunications between management and developers
   4. Developers/customers/SIs have a reference from which to negotiate/prioritize features/time frames and pick and choose (kitchen style), iterative/Agile sprint development. 
2. Utilize templated W3C Standards compliant vanilla HTML/CSS/JS features/components
   1. Fast copy/paste/plug/play assembly line like development workflow
   2. Fast requirements to release "time to market" turnaround for customers
   3. The more development done up front the faster the "time to market"
   4. Lowers the cognitive load barrier of entry for developers
   5. Saves time = money
   6. Prevents the inevitable O&M slow down
   7. Prevents scope creep
   8. Establishes developer authority over web development thus customers dictating solutions. 
   9. Promotes the idea that customers are experts at what they do and the developers are experts at what they do. Working together creates a perfect solution for them.
3. Total separation of front-end and back-end development (leveraging CSS'  native reactive "listening" nature to detect and 'react' to new GUI stimuli.
   1. Defines developer swim lines
   2. Encourages teamwork
   3. Allows for data agnostic development
4. Minimal dependencies
   1. No third party plug-ins with limited functionality/flexibility
5. Automate where possible
   1. 
5. Convention, convention, convention
   1. Use layouts, design patterns, widgets everyone knows or is stupid intuitive
   2. Utilizes existing user expectations of how a web application works
   3. Pre design/develop top 5/10 most common UI layouts/workflows and features
6. Security
   1. User roles
   2. Encryption
7. Metrics
   1. Manager dashboard
   2. Role based
8. User customization where possible
   1. Ideally customers shut down their browser and the next day they open their browser and continue where they left off. The app is identical to when they left off. 

---

DEVELOPMENT LAYERS : :  
Front-End (FE)
* Front-Front-End (FFE) - HTML/CSS/JS - what end-users actually see on the screen
* Front-Back-End (FBE) - Vue.js - hooks services and or data into the FFE 
Back-End (BE)
* Front-Back-End (FBE) - Services layer
* Back-Back-End (BBE) - Database layer
