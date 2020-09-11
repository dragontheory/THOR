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

# FAQ : :

QUESTION : : Why Bootstrap?  
ANSWER : : I spent months attempting to create this app without Bootstrap or any other dependency and found myself rewriting Bootstrap since Bootstrap is standards compliant. So to save time/effort/money I decided to leverage what they had already successfully done. Turns out they have done much better than I could have ever done. Bootstrap is vetted by thousands of commercially competitive developers building tens of thousands of websites and web applications.  

QUESTION : : Why do you prefer CSS solutions over scripting solutions?  
ANSWER : : **THOR** is built in coordination and conjunction with Bootstrap's "HTML/CSS first" paradigm. CSS takes advantage of your computers Graphics Processing Unit (GPU) which creates a faster more smooth user experience. CSS executes faster than scripting solutions.  

QUESTION : : How do I integrate the scaffolding (HTML)?  
ANSWER : : The scaffolding (HTML) and interactivity (CSS) is a component unto itself and should be kept independent from data logic. This preserves JS framework agnosticism, the ability to rapidly copy/past components, and Bootstrap spec integrity.

Data logic is only necessary where data is visible at the component level of each panel.  The rest is taken care of already by the UI.  

QUESTION : : Are the Bootstrap `overflow-hidden` classes in the HTML really necessary?  
ANSWER : : Yes. Bootstrap `overflow-hidden` classes are necessary to enable scrolling in panels, components, and sub components. They should not be removed.  

QUESTION : : Why are there so many classes in the HTML?  
ANSWER : : Bootstrap 4 shifts from a majority global styles for look and feel, spacing, and layout to preferring inline UTILITY classes for faster rendering, intuitive development, and to reduce the need for writing custom CSS.  
FOR EXAMPLE : : `{padding-right: 5px;}` = .pr-1, `{margin-left: 10px;}` = .ml-2. 

QUESTION : : Does the order of resources in the `<head>` matter?  
ANSWER : : Yes. External file reference order in the `<head>` matters.  
* `styles.css` is a minimal and surgical OVERWRITE of vanilla Bootstrap and must come after `bootstrap.min.css`.
* In turn, themes such as `dark.css` are minimal and surgical OVERWRITEs of both `bootstrap.min.css` and `styles.css` and must come after `styles.css`.

QUESTION : : How old is Flexbox?  
ANSWER : : The CSS Flexbox specification’s first working draft was published on July 23rd, 2009. The original spec is based on XUL, the technology the Firefox browser uses to produce its UI (user interface).  

QUESTION : : If you don't use scripting to manipulate the UI, what do you use?  
SHORT ANSWER : : Cascading Style Sheets (CSS)  
LONG ANSWER : : UI behavior is purposely repetitive and predictable (read intuitive/conventional). Most UI features such as buttons, menus, panels, accordions, etc. have two states. Open/close, hide/show, on/off, in/out, down/up, true/false, checked/unchecked, etc. That's all they do regardless of the data they contain.  

CSS rules are LIVE states of layered/cascading, boolean logic. When a CSS state changes, the rule is executed **instantaneously** and the UI is changed. No resource hungry script processing is necessary.  
FOR EXAMPLE : : When a result item is clicked, the class `.open-profile` is added to the `<body>`. A CSS rule already exists that says, when `.open-profile` is in the `<body>` slide in the `.profile` panel.  

All scaffolding/layout UI logic is handled in this manner. All we need is a single class or combination of classes in the `<body>` to change anything in the UI. This simple technique extends the intuitive/conventional UI to the development side. Not only is the UI repetitive and predictable for the end-user but the technique is old-school familiar for the developers as well. 

This simple technique eliminates the need for third party plug-ins that sometimes add complication and obfuscation, to the development process and bloat to the code base, thus shortening the application development LoE while promoting application performance. Since this technique is executed only in the browser, network traffic is minimized. 

As long as the UI logic is separate from the data logic, scripting is rarely necessary. 

QUESTION : : What about loading dynamic data? How does the UI know when to show the data after it's loaded?  
ANSWER : : Given the above technique, pre-written CSS rules can check for any combination of classes and or conditions. CSS can LIVE detect anything from a generic `:notEmpty{}` to specific classes and conditions that are only true when the data is completely loaded.0 

Additionally, CSS rules can be added to check end-user roles and permissions.  
FOR EXAMPLE : : The profile section will remain closed until a pre-written CSS rule that requires the `<body>` to contain `open-profile` AND a class that only is loaded with the dynamic data `data-loaded` is true. Then and only then will the PROFILE panel slide in and reveal its content. The dynamic data that is loaded is the only way to make the CSS rule true. 

QUESTION : : This sounds complicated. Is it custom?  
ANSWER : : Depends on your definition of custom but no. To maintain ease of use for developers to integrate, end-users to use, and to preserve for the future, every effort has been made to keep THOR as generic, conventional, and standard as possible. JS frameworks, for the most part, prefer slower but automated scripting over CSS simplicity and speed. 

QUESTION : : How do I know the right data is loaded?  
ANSWER : : The data itself is controlled and validated by the back-end. Only the right data is allowed to be loaded to the front-end. 

QUESTION : : Where is all the padding/spacing?  
ANSWER : : Padding/spacing or "Display Density" is configurable via the end-user. Options are "Full", "Medium", and "Compact". 

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