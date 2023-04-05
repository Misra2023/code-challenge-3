function displayFilm(films){
    let card = document.createElement("li");
    card.className = "card ";
    let availableTickets = films.capacity - films.tickets_sold;    card.innerHTML = `
        <div>
        <p><b>Title:</b> ${films.title}</p>
        <p><b>Runtime:</b> ${films.runtime}</p>
        <p><b>Capacity:</b> ${films.capacity}</p>
        <p><b>Tickets sold:</b> ${films.tickets_sold}</p>
        <p><b>Description:</b> ${films.description}</p>
         <p><b>Available tickets:</b> ${availableTickets}<p>
        <img src=${films.poster}>
        <button><button>        </div>
    `;    document.querySelector("#films").appendChild(card);
}
    fetch("http://localhost:3000/films/1")
        .then(res => res.json())
        .then((film)=>{
            console.log(film)
            displayFilm(film)
        })
fetchFilm();        
    let card = document.createElement("li");
    card.className = "card film_item ";    let availableTickets = film.capacity - film.tickets_sold;    card.innerHTML = `
      <div>
        <p><b>Title:</b> ${film.title}</p>
        <p><b>Runtime:</b> ${film.runtime}</p>
        <p><b>Capacity:</b> ${film.capacity}</p>
        <p><b>Tickets sold:</b> ${film.tickets_sold}</p>
        <p><b>Description:</b> ${film.description}</p>
        <p><b>Available tickets:</b> ${availableTickets}<p>
        <img src=${film.poster}>
        <button data-available-tickets="${availableTickets}">Buy Ticket</button>
      </div>
    `;    
    let buyTicketButton = card.querySelector("button");    
    buyTicketButton.addEventListener("click", () => {
      if (availableTickets > 0) {
        availableTickets--;
        buyTicketButton.dataset.availableTickets = availableTickets;
        buyTicketButton.textContent = Buy Ticket (${availableTickets} available);
      } else {
        alert("This showing is sold out.");
      }
    });    document.querySelector("#films").appendChild(card);
  
    fetch("http://localhost:3000/films")
      .then((res) => res.json())
      .then((films) => {
        const filmsList = document.querySelector("#films");        /
        filmsList.innerHTML = "";        
        films.forEach((film) => {
          const filmItem = document.createElement("li");
          filmItem.className = "film item";
          filmItem.textContent = film.title;
          filmsList.appendChild(filmItem);          
          filmItem.addEventListener("click", () => {
            displayFilm(film);
          });
        });
      });
   fetchFilms();