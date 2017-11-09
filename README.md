# Effector Selector

#### A Web app that is a central database for effect pedal enthusiasts or hobbyists. Looking for information on a certain effect pedal or trying to figure out what pedal your favorite artist is using to create that sound? This is your one stop web app where you can also create a profile to show off pedals you already own in your collection. , 2017

#### by **Tyler Bussanich, Zachary Marston, Mikey Pinaud, Adam Smith**

## Description

This web application provides a database of effects pedals, musical artists, and webpage users. These categories are in our main menu as Pedals, Artists, and Users. Once you select a category item, a dropdown menu will appear with subcategories which you can select to append info. For pedal selected there will be description, a link for more info, and a list or artists that use that pedal. For artist selected there will be a description, a link for more into, and a list of pedals that artist uses. For user selected there will be a description, a list of pedals that user uses, and artists they follow. The user can also create a profile for our User database by selecting Sign-up.

## Specs
1. Inputting pedal name returns info about pedal.
  * Example user input: pedal.name
  * Example output: pedal.info

2. Inputting artist name returns info about artist.
  * Example user input: artist.name
  * Example output: artist.info

3. Inputting artist name returns array of effects pedals used by artist.
  * Example user input: artist.name
  * Example output: artist.pedals

4. Inputting pedal name returns array of artists who use that pedal.
  * Example user input: pedal.name
  * Example output: pedal.artists

5. Inputting user info will add user to users array and show user profile.
  * Example user input: user form submit
  * Example output: user {name, info, pedals, artists}

## Setup/Installation Requirements

[View on web browser](https://alspdx.github.io/group-project)


Clone or download repository:
  1. Open [this page](https://github.com/alspdx/group-project) in web browser.
  2. Under the repository name, click Clone or download.
  3. In the Clone with HTTPs section, click to copy the clone URL for the repository.
  4. Open Terminal.
  5. Change the current working directory to the location where you want the cloned directory to be made (ex. cd desktop).
  6. Type git clone, and then paste the URL you copied in Step 3. (ex. git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY).
  7. Press Enter. Your local clone will be created.

## Technologies Used
  * HTML
  * CSS
  * jQuery 3.2.1
  * Bootstrap 4

## License

  Copyright (c) 2017 Tyler Bussanich, Zachary Marston, Mikey Pinaud, Adam Smith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
