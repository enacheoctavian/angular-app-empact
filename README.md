# AngularAppEmpact
These are the app's requirements.
![7](https://user-images.githubusercontent.com/94530544/179344469-11eaa4bf-b72b-4014-add1-1a9e341e8a24.PNG)

I decided to use the Angular framework for this mini-project. I figured out it would be best to split everything in components, so the news.component holds all the logic and the interface of the second challenge, where I am connecting to and API containing XML code and extracting some information of that particular page. I used the DOMParser to parse the code to a different format and then extracted the required details of each news item provided by the API, then I placed them in my list of objects of type news (that I created a custom model for).

Each news article that I have captured from the API then gets placed into the webpage using several Angular features. For the design and functionality I decided to use Angular Material , from which I took a multitude of Modules (e.g: MatToolbarModule,MatExpansionModule,MatCardModule,MatInputModule, etc.). All the news are being taken from the api and put into expansion panels, that upon clicking reveal all the requested details( Author, Date, Content).

![3](https://user-images.githubusercontent.com/94530544/179344860-8e5c7453-5637-4a6d-9a35-84a32d903579.PNG)

Going on to the second part of the project, I had to capture some input of type string and parse it so that I can extract some desired information. I decided to integrate this part in another component of the same app, the sidequest.component. Here I am taking advantage of the Angular Forms module, in order to manage my input area, get the input from the user, split it by "." as requested in the description of the problem, to then verify if the format was correct, in which case we are administrating a list similar to the one used before, but now for other object model, and then extracting the information and showing it to the user upon pressing the ,,Parse" button.
![6](https://user-images.githubusercontent.com/94530544/179345092-b5249e6b-fe64-4918-84bd-b2b904a9c9e1.PNG)

and showing an alert if the format was wrong:![2](https://user-images.githubusercontent.com/94530544/179345112-f12ed09d-d7a0-4a41-ba59-ac67e30288bf.PNG)


Altough the interface is simple, is has a minimalistic modern look due to the fonts and color-palette, the page also has a toolbar(header) for design reasons, but also pressing my name(anchor-tag) leads to my linkedin profile, for ease of contact.![1](https://user-images.githubusercontent.com/94530544/179345188-bf969207-2d84-4c9b-8cc9-abc7f3486d66.PNG)
