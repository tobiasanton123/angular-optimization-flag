# Description 

This project is intended to illustrate an assumed erroneous behaviour of the angular build optimization flag. The misbehaviour is that by setting the optimization flag to false, the scss file is much larger, although only variables are imported. 

* Optimization flag true: 2.64 kb
* Optimization flag false: 36.00 kb


# Reproduce
* Run `npx ng build -c prod`to build the project with the optimization flag `true`
* Run `npx ng build -c dev` to build the project with the optimization flag `false`

# Expected 
In the console a warning or an error should be displayed because of the home.scss file size. 