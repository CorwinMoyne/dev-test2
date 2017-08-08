Usage
=========================

Clone Project

Run the following three commands after cloning:

(You will need to install Grunt globally - npm i grunt-cli -g)

- bower install
- npm install
- tsd install 

To run project:
===============
grunt serve

*If you get the following error when you run grunt serve:
error TS2305: Module 'angular' has no exported member 'ui'

you will need to reference ./tsd.d.ts above //grunt-start

To run tests:
===============
grunt test

To build project:
===============
grunt build

To build project and then serve:
===============
grunt serve:dist





