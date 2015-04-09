# gruntmail
Task runner for speeding up html email development

Setup for html email

Uses Ink emailing template and class structure. Will require downloading Ink initially, if you want to use their templates and css.
http://zurb.com/ink/

Example used here is the sidebar-hero.html

ink.css is the css that comes with ink emailing templates and contains all the class styling for default
layout including table structure, td etc. This shouldnt need to be edited.

email.css is custom css that will contain all the custom css

Grunt has been used to simplify the build process.

Run "grunt build" once template is complete

This will build a new folder (dist) with all the relevant files and:
1. Remove all the CSS that isnt used. Ink provides a lot of css helpers, and its likely that most isnt used for a particular build
2. Merge the separate css files into a new single file, its important that the name in the grunt file matches the comment at the top of the html file:

At top of html template is the following:
         <!-- build:css needed-styles.css -->
 <link rel="stylesheet" href="ink.css">
 <link rel="stylesheet" href="email.css">
 <!-- /build -->

 This removes ink and email css files and replaces with needed-styles.css

 3. Adds prefixers to any CSS3 properties as required
 4. Moves all the css in needed-styles.css to inline styling. It also adds in some css at the top in <styles></styles> for compatibility
 5. Copies all png and jpg images to the new distribution folder (dist). Not required, as template should have urls to images, but good for local testing
 
(Images are placed in the root, these are temp, and the urls in the template should be updated to show the correct paths before building the distribution files)

 NOTE: Premailer may need an additional gem installed $gem install hpricot, (https://github.com/dwightjack/grunt-premailer),
 which my in turn require ruby dev kit http://rubyinstaller.org/downloads/
