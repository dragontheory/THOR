# THOR
[T] riage 

[H] UD 

[O] perational 

[R] esources


There are two main versions in various states of development. 

BASIC:
*  Classic Holy Grail layout
*  Four panels total
*  Two panels resizable
*  https://dragontheory.com/holygrail09

ADVANCED:
*  Classic Holy Grail layout + dashboard
*  Five layout panels total
*  Starts with dashboard (Click on "Go somewhere" button)
*  Four panels resizable (not working yet)
*  https://dragontheory.com/holygrail10

PURPOSE:
*  To support analysts by providing a faster, more efficient, and intuitive workflow and user interface (UI) triage tool.
*  Save time and money by reducing duplicative efforts and "time to market" with premade search/profile/details workflow and UI that satisfied targeting and triage requirements "out-of-the-box".
*  Update front-end UI tech stack to avoid deprecation and security vulnerabilities and allow for efficient web integration.
*  Faster triage eliminates unnecessary navigation
*  30%+ reduction in clicks over current version
*  50%+ reduction of HTML/CSS/JS client-side markup over current version

FEATURES:
*  W3C Standards Compliant
*  Cross/backward browser compatible and tested - FF60.530esr, IE11, Edge, Chrome65
*  Fully documented (Bootstrap)
*  HTML5 Routing (with options) allows for bookmarking/sharing links of full layouts and data
*  HTML5 User Storage allows for preferences to be saved cross browser session
*  Non-cluttered, minimal, professional look and feel
*  Data agnostic (works with any data set or type)
*  Framework agnostic (works with any JS framework like Vue.js or Angular or none at all)
*  Resolution agnostic - (Responsive - works with any screen resolution)
*  Super lightweight (up to 50% less markup)
*  Minimal dependencies (minimizes upgrade coordination conflicts/dead-ends)
*  "Holy Grail" layout leverages full browser width/height for maximum data visibility
*  Independent scrolling panels
*  Light/dark themes
*  Keyboard navigable
*  Duplicate results indicators
*  Full-screen mode for each panel
*  Resizable panel widths
*  Right click context menus with feature/component shortcuts
*  Scroll to top for each panel
*  Alerting (Toastr)/Web push notifications
*  CSS live data detection (helps separate data logic from UI logic)
*  Customize-able display density (Roomy/medium/compact)
*  Customize-able/rearrange-able sections
*  Sweep (keep the latest but delete the rest)
*  Favorite a profile
*  Watch a profile

TECH STACK:
*  HTML5 (current major version of the HTML standard and subsumes XHTML)
*  HTML5 Routing (with options) allows for browser back/forward buttons and bookmarking/sharing links of full UI layout and customization and data.
*  HTML5 User storage allows for user preferences to be saved cross browser session.
*  CSS3 (Flex-box for layout)
*  jQuery (minimally used, fast, lightweight, mature feature rich JS library)
*  Fontawesome 5.6.3 (enables icons to be easily/quickly styled/controlled as a font)
*  jQuery Data-tables (ubiquitous jQuery plug-in for for viewing tabular data)
*  Bootstrap 4.3.1 (open source, standards compliant, toolkit/library with extensive pre-built components and powerful plug-ins built on jQuery (for rapid [copy/paste] design and development).
   * Note: Bootstrap 5.+ will be jQuery free (coming soon)

DEVELOPMENT:

The Bootstrap spec is followed without exception to preserve:
*  Full Bootstrap documentation
*  Easy/fast copy/paste development
*  Upgrade/support path
*  Cross/backward browser compatibility
*  Consistent/predictable look and feel and behavior
*  Structural/functional/theme integrity

HTML/CSS Files:
*  index.html
*  assets/css/styles.css
*  assets/css/layout.css
*  assets.css/themes/dark.css
*  assets/js/scripts.js
*  vendors/bootstrap/*
*  vendors/jquery/*
*  vendors/simplebar/*
*  vendors/split-master

Bootstrap Documentation:
*  The latest online Bootstrap documentation can be found here: https://getbootstrap.com/docs/

IMPORTANT (PLEASE READ):

*  I spent months attempting to create this app without Bootstrap or any other dependency and found myself rewriting Bootstrap since Bootstrap is standards compliant. So to save time/effort/money I decided to leverage what they had already successfully done. Turns out they have done much better than I could have ever done. Bootstrap is vetted by thousands of the most hard-core client-side developers in the highly competitive commercial application development industry.
*  The scaffolding (HTML) and interactivity (CSS/JS) is a component unto itself and should be kept independent from data logic. This preserves JS framework agnosticism, the ability to rapidly copy/past components, and Bootstrap spec integrity.
*  Data logic is only necessary where data is visible at the component level of each panel.  The rest is taken care of already by the UI.
*  Bootstrap "overflow-hidden" classes are used in the HTML to enable scrolling in panels. Do not remove them.
*  CSS Live Detection: CSS is live all the time. No reason to ping the back-end to change the UI. Pre-written CSS rules are ready to fire if the right conditions are met. So all we need is a single class in the `<body>` to change anything.
*  Utility classes: Bootstrap 4 shifts from a majority global styles for look and feel, spacing, and layout to preferring inline UTILITY classes for faster more intuitive rendering. For example: `padding-right: 5px;` = `.pr-1` or `margin-left: 10px;` = `.ml-2`. This actually results in less custom CSS having to be written which is good. The more we get out-of-the-box, the better.
*  External file reference order in the `<head>` matters.
   *  styles.css is a minimal and surgical overwrite of vanilla Bootstrap and must come after bootstrap.min.css.
   *  Themes such as dark.css are minimal and surgical overwrite of both vanilla Bootstrap and styles.css files and must come after styles.css.

LAYOUT:

*  WARNING: As opposed to a seed or start-up Minimum Viable Product (MVP) application, this is a live client-side framework with working functionality already built in! **Just "mucking around with it" will most likely break or severely limit both obvious and non-obvious functionality/features!** Such as: (but not limited to) 
   *  responsiveness, 
   *  browser compatibility, 
   *  user preferences, 
   *  framework agnosticism, 
   *  keyboard navigation, 
   *  and or Bootstrap spec integrity.
*  HTML layout SCAFFOLDING: (classes have purposeful order and patterns)
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
*  `.open` class toggles to open/close sections of the UI.
*  Predefined generic naming conventions and hooks are provided for each section.
   *  Filter section root = `.filter`
   *  Results section root = `.results`
   *  Profile section root = `.profile`
   *  Details section root = `.details`
*  Each section's content follows that naming convention. For example, each section has an identical ACTIONS dropdown menu BUTTON (and menu) with a unique class name because it has unique content. For example: The RESULTS section "ACTIONS" dropdown menu BUTTON class is `.resultsActionsDropdownMenuButton`. The PROFILE section's "ACTIONS" BUTTON class is `.profileActionsDropDownMenuButton`.
*  Sticky header and footer without absolute positioning via CSS Flex-box allows for accurate overflow scrolling for each section without the need for extra JS calculations.
*  Bootstrap 3 to 4 **BREAKING CHANGE**: 
   *  Many Bootstrap 3 components are rewritten/replaced/not compatible in Bootstrap 4. For example, `<portlets></portlets>` are replaced with `<cards></cards>`.
*  This template leverages the full Bootstrap spec for its CSS Flex-box layout, spacing, and behavior. Thus is cross browser compatible and tested with the following default browser stack distribution. FF 60.5.0esr, IE11, Edge, and Chrome 65.
*  All HTML and CSS patterns are repeated exactly the same wherever/whenever possible. Unique classes are given when there is unique data. For example, each component level `DIV` is given a unique class because it contains unique content.
*  In Flex-box CSS, every HTML node is a box. Each box relies on the other. If one is removed, the others fill in the empty space.

ANGULAR/VUE INTEGRATION:
*  NESTING: The CSS Flex-box spec requires a direct relationship between a parent Flex-box element and it's children. Only directly nested children elements of a parent CSS Flex-box element will inherit flex attributes. This means that there cannot be HTML elements (dynamic or otherwise) between the parent and the child. The application layout **WILL FAIL** if this parent/child relationship is broken.

*  Correct nesting:
```html
<div class="d-flex results" id="app-results">
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
</div>
```

*  Incorrect nesting:
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
*  Several solutions are available but the most ideal and clean (least amount of extra code) is to combine the dynamic Angular/Vue element with the required Bootstrap classes.

*  Ideal Solution 1: Combine the custom element app-results with the d-flex class in the associated Angular .ts/Vue .js file.
```html
@Component ({
    selector: 'div.results.d-flex'
})
```

TODO:
*  Add toggle for light/dark theme
*  Add script for Bootstrap Toastr alerts
*  Add script for Bootstrap right click context menus
*  Add CSS rule for data load detection
*  Add CSS media query to accommodate for nested resize-parent div to preserve responsiveness.
*  Remove nested resize-parent div
*  Fix icon menu at the top of each section

REFERENCES:
*  Design, inspiration, and CSS Flex-box ideas:

   *  LAYOUT:
      * https://codepen.io/dragontheory/pen/PVwGgp
      * https://stackoverflow.com/questions/21515042/scrolling-a-flexbox-with-overflow-content
      * https://webdesign.tutsplus.com/tutorials/how-to-make-responsive-panels-with-flexbox-cms-23269
      * https://geon.github.io/programming/2016/02/24/flexbox-full-page-web-app-layout
      * https://hydejack.com/projects/

BACKGROUND:
*  The term "Holy Grail" is a client side design term in reference to the type of layout which, in it's simplest form, is three independent scrolling full-screen panels of content with a header and footer.

HISTORY:
*  The "Holy Grail" layout may seem basic and easy to implement but since the 1990's, when it was introduced, front-end designers/developers have been attempting and failing to solve how to adequately code it without the assistance of JavaScript. It has become an infamous ongoing challenge. The standard requirements for solving the "Holy Grail" layout puzzle are: 
   * Cross/backward (modern) browser compatibility (IE11, Edge, FF 60+, Chrome 60+) 
   * At least three (two fixed or % width side and one % width center) independent, scroll-able panels (columns)
   * Full width header and footer that sticks to the top and bottom of the screen (without JS). Hint: the header and footer are actually PUSHED to the top and bottom of the browser window.
   * No JavaScript (HTML and CSS only - languages all browsers speak natively)
   * An updated modern requirement is that the "Holy Grail" must work with multiple platforms and associated resolutions such as mobile phones, tablets, and laptops in addition to traditional desktops resolutions. The design/development world calls this being "responsive". 
*  So the label "Holy Grail" is well deserved. No one has been able to do it, as far as I know because the technology simply didn't exist until now. Using Bootstrap's built in advanced CSS Flex-box techniques, I have been able code a solution that satisfies all of the standard "Holy Grail" layout requirements as demonstrated in the links above. In fact, I have been able to extend the solution to include a dashboard in up to five modular, customization, skin-able, and theme-able panels. 

The benefits are extensible! 
*  Bootstrap components are pre-built thus developers can simply copy/paste them into place, hook them up and they are ready to go! This also reduces design/development LoE by up to 50%.
*  Bootstrap components are conventional thus end-users are already familiar with how to use them out-of-the-box (minimal training)!
*  Vanilla Bootstrap is standards driven, ubiquitous, easy to develop, and has one of the largest (if not THE largest) developer base of support in the world.
*  Because they use vanilla Bootstrap (vs Bootstrap plug-ins and or plug-ins of Bootstrap), the thousands of pre-made themes and components created and shared by designers and developers all over the world work with any other vanilla Bootstrap web application.
*  Because of the front-to-back nature of the development process, stakeholders are able to see (up front) notional but working versions of functionality/features. Program managers are thus better able to negotiate, gain, and maintain stakeholder "buy-in" and or confidence for current and future development.
*  Bootstrap is compatible with Vue, Angular, React, or any other JS framework or no JS framework at all.
*  The separation of GUI logic and data logic naturally helps define and promote separate development team roles/responsibilities (AKA swim-lanes) for an efficient (conveyor belt like) team development workflow.
*  For example:
   * The front-front-end (FFE) designer/developer copy/pastes the designed component into place, tests, and pushes changes.
   * The front-back-end (FBE) developer hooks in the data provided by back-front-end services (BFE) to the new component, tests, and pushes changes.
   * All changes are pushed to DEV and further tested by non-developers. 
   * . . .

DEVELOPMENT LAYERS
*  Front-End (FE)
   * Front-Front-End (FFE) - HTML/CSS/JS - what end-users actually see on the screen
   * Front-Back-End (FBE) - Vue.js - hooks services and or data into the FFE 
*  Back-End (BE)
   * Front-Back-End (FBE) - Services layer
   * Back-Back-End (BBE) - Database layer