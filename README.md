# code-challenge-3
this is m movie shop
AUTHOR = MISRA ABDI

Description

This code defines a function displayFilm(films) that creates a list item element with the film details fetched from a local server using the fetch() method. It then appends the element to an unordered list with an id of "films" in the HTML file.
Function Parameters

The function takes one parameter:

    films - an object that contains the details of a film, including the title, runtime, capacity, tickets_sold, description, and poster.

Function Logic

The function first creates a new list item element using the createElement() method and sets its class to "card". It then calculates the number of availableTickets by subtracting the number of tickets_sold from the capacity of the film object.

The function then sets the innerHTML of the list item element to a string of HTML code that includes the film details, the availableTickets, and a buy ticket button. The button has an event listener attached to it that updates the availableTickets value when clicked.

Finally, the function appends the list item element to the unordered list with an id of "films" in the HTML file.
API Requests

The code makes two API requests using the fetch() method. The first request fetches the details of a single film with an ID of 1 and calls the displayFilm(films) function to display it on the page.

The second request fetches an array of film objects and creates a list item element for each film. Each film item has an event listener attached to it that calls the displayFilm(films) function to display the details of that film on the page when clicked.
HTML Requirements

To use this function, you need an HTML file that includes the following elements:

    An unordered list element with an id of "films" where the film items will be appended.
    A script tag that includes the JavaScript code that defines the displayFilm(films) function and makes the API requests.

