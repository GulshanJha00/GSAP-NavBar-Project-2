GSAP NavBar

i've added css according to my screen you can adjust it to make it suitable for you
Step 1:- 
Make html, css and javascript and Add gsap and remix icon cdn to the project. Make the boiler plate of html and css. Make a div #main with height- 100% width- 100% 

Step 2:- 
Take any image for background image of main. bg-size cover bg-position center. now your background is ready

Step 3:- 
Make a #nav div inside #main with h2 lets say "Code Cluster" and one "MENU" icon from remix icon website i prefer this one 

< i class="ri-menu-2-line" > < /i>

Step 4:- 
in style.css make #nav flex with align item center and justify content space-between, You can also add padding as 40px and 50px and finally giving color white.

give nav h2 a font-size of 30px and #nav i font size of 30px and font weight as 800


As we are making an animated navbar which will come from right when we click on menu icon we need a space for that

Step 5:-
Make a #full div inside #main div with 4 or 5 h4 having all the nav elements such as Work, News, Courses, services, Contact Us. Now in css #full give  height 100% and width 40% give position absolute so that it can float. Now giving top:- 0 and right:- 0 will make it float in right corner covering 40% of your right screen. give background color white and the transpirance to 50%. Now add backdrop-filter and give any blur value. Backdrop-filter will blur the background leaving the elements such as h4. Add padding to adjust text (try display flex too)

Step 6:- 
in #full h4 give font size 50px font weight 500 and with some margin bottom lets say 10px. now in html inside #full div add one remix icon of closing i prefer 

< i class="ri-close-line">< /i>
now if you can see the x is sitting below the h4. So in css #full i make it position absolute and give top 5% and right 10% with background color white, border radius 50% padding 5px font weight 600 and font size 25px.

our frontend is ready. Now we need to hide the navbar which is flashing on right screen. 


Step 7:- If you gave #full width 40% then in #full right: 0; change it to right -40%. it will go entirely inside the right screen. But it will start scrolling behind the screen so just give overflow-x: hidden property to body tag

Congrats our frontend part is ready. Now time to add the javaScript Part.


Step 8:- 
inside script.js create a var tl = gsap.timeline() (chatgpt please explain what this timeline do)
now target #full in tl and add tl.to in #full with right: 0, duration: 0.8 (chatgpt explain this code and what does tl.to do what does right:0 do)
now make another tl targeting "#full h4" but this time tl.from give x as 150 with stagger of 0.28 and opacity: 0 (chatgpt explain this code and what does tl.from do what does x:150 do stagger do and opacity 0 do)
and tl.from in "#full i" give opacity 0

If you reload the website you will see that all the code starts to execute itself but thats not how navbar works so 

Step 9:- 

in css make #nav i and #full i as cursor pointer so that your mouse points when you hover over it. Now inside script.js type tl.pause(). It will cause timeline to not execute while reload. Now make a query selector selecting #nav i give it a variable menu. Similarly make a cross variable selecting query "#full i". Now add eventListener in var menu with event "click", pass function and inside function add tl.play(). Now what does tl.play() do? (chatgpt e xplain it propoerly). Now we have another variable cross, add eventListener click and pass fucntion, inside that function give tl.reverse() (chatgpt explain this too).

And our animated navbar is ready to play with just 30 lines of javascript