--- If you have reached here, sorry to disappoint you. This is work in progress Please keep checking --

angular2boilerplate
This is a boiler plate code for providing a jump start for projects using angular 2.0 JS.

Why?
The difference between a tutorial/hello world application and a real project is that, the latter would have a lot of workflows, business cases, communication, security, exception handling, build, test cases and so on, while the former would only talk about each. Based on how complex your project is and how your product/project manager wants to spent, the above modules will keep varying. In most cases, the time spent by the team is to set up the project, finalize the pieces, and then putting up the puzzles together.

This project is intented to put those missing pieces together as time goes on, add more and more best practices in places.

Now, there is another selfish interest, which is for me to understand how this works together :)

What is in?
Here i am trying to put up a flow together, which has bits and pieces which can be used for projects. In short, you will find code snippets, sometimes modules, which you can copy paste in

The flow i follow is 1. A splash screen which stays till all files are loaded, and gives a good startup feeling for the customer (This explains how everything is put together) 2. A Login Page, which allows you to enter a user id and password. (This explains how data binding is done) 3. Some data validation for user id and password (Data validations and how an error can be displayed on screen) 4. Hashing and salting of password (Common usage for password validations) 5. Connecting to REST (JSON) API to do user authentication A standalone server written in PHP is used to achieve this. The server would expose REST ful API. There is no business logic to this, the server responds with data. This would help you understand how to connect to server and pass data, recieve data 6. Display a home page -- to be continued

SETUP.MD
Please read the file Set up for information on how to use Eclipse for development and how to set up Gulp, Bower etc.

License Info
If this piece of code, which i generally have copy pasted from various places, accidently (as i dont do anything intentionally) spills water on your keyboard, shows blue screen in windows, hangs your phone, destroys your data in your PC, informs your company about your bookmarks, shows your hidden files when you least expect it to, shows your porn history then dont blame me. Neither me or the code which i wrote is responsible for that. More seriously, if this program accidently kills you, hacks into governments data, makes you decide to marry, make you cry thinking about the decision, electrocutes your from battery shock, drowns you in 100 ml whiskey then dont blame me.

On a serious note, this package uses certain libraries, frameworks which has its own licensing terms. Pleae follow those licensing information deligently and as usual please dont blame me for any consequences. You may need to hire a lawyer to understand those terms and conditions, and dont tell me, i didnt told so.

Now, as far as my code goes, i follow the below licensing information

In essence, i dont care what you do with this, or how you use it. Neither i take profit from it nor loss.

Now, if we meet, and you feel this is worth it, you may buy me a beer @ http://www.dumparun.info/dumparun/ If you feel otherwise that this is shit, you may tell me not to attempt this again after buying a beer @ http://www.dumparun.info/dumparun/

http://en.wikipedia.org/wiki/Beerware /*

----------------------------------------------------------------------------
"THE BEER-WARE LICENSE" (Revision 42):
arun@dumparun.info wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return. arun@dumparun.info
---------------------------------------------------------------------------- */