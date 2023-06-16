// Movie data
const movies = [
  {
    title: "Asiong Salongga",
    description: "In the late 1940s and early 1950s, the name Asiong Salonga brought fear and chills to the residents of Tondo and its environs. Dreaded, notorious gang leader Salonga and the likes of Totoy Golem, Toothpick, Boy Zapanta, and other toughies of the time turned Tondo into a bloodbath of gangland violence.",
    trailerUrl: "https://youtu.be/AIqlVVYsH-o",
    image: "asio.jpg"
  },
  {
    title: "FPJ's Ang Probinsyano",
    description: "Ador (Fernando Poe Jr.) is killed in a drug bust operation after he was betrayed by his fellow cop. His superior devices a plan for his twin brother, Kardo, a provincial cop, to assume his identity so they can fool and capture the drug syndicate and the corrupt policemen responsible for his death.",
    trailerUrl: "https://youtu.be/orZmE_h9n80",
    image: "fpj.jpg"
  },
  {
    title: "Mistah",
    description: "Witness the soldiers who risk their lives to protect the people. Giving up their personal happiness to respond to the call of duty, the dedicated servicepeople encounter tremendous excitement on the battlefield as the conflict between Christians and Muslims rages on.",
    trailerUrl: "https://youtu.be/FyGZ-NAeesc",
    image: "mis.jpg"
  },
  {
    title: "Doring Dorobo",
    description: "Doring Dorobo is a 1993 Philippine biographical action film co-edited and directed by Augusto Salvador. The film stars Eddie Garcia in the title role. The film is based on the life of former NBI agent Doroteo Rocha. It was one of the entries in the 1993 Metro Manila Film Festival and the final film produced by Lea Productions.",
    trailerUrl: "https://youtu.be/Id1FTBf3ppE",
    image: "hag.jpg"
  }
  ,
  {
    title: "Kumander Lawin",
    description: "Ramon Revilla Sr. portrayed Kumander Lawin, a fictional character in a movie about the Philippine Revolution",
    trailerUrl: "https://youtu.be/nUSEKj5H5So",
    image: "kum.jpg"
  }
  ,
  {
    title: "Batang Quiapo",
    description: "Batang Quiapo (litkid'Quiapo Kid') is a 1986 Filipino action-comedy film directed by Pablo Santiago and starring Fernando Poe Jr. and Maricel Soriano. The film is the first and only collaboration between Poe and Soriano, and was Poe's first film under Regal Films. The film broke box-office records of its time",
    trailerUrl: "https://youtu.be/vIC_nZzGdNk",
    image: "batng.jpg"
  }
  ,
  {
    title:"Ultimatum",
    description: "Dina Bonnevie plays a Filipina working with a US-based chemical company that sends a team to the Philippines to check a branch there. Eddie Garcia plays the Chief of Police assigned to protect the chemical company's visiting group that falls victim to a terrorist gang headed by Vernon Wells. Eddie is only too eager to save the chemical-company group because Dina happens to be his girlfriend who, against his wishes went to the USA seeking greener pastures.",
    trailerUrl: "https://youtu.be/bGxmip37Tzs",
    image: "ult.jpg"
  },
  {
    title: "Buhay Mo'y Buhay Ko Rin",
    description: "An undercover cop and traffic enforcer who fall in love while they dismantle a crime syndicate.",
    trailerUrl: "https://youtu.be/r5jiuFAUcNg",
    image: "bhymybuhay.jpg"
  },
  {
    title: "Isang Bala, Isang Buhay",
    description: "This is an action-drama film. -- Daniel is a hired to assassinate Roman, the leader of a criminal group. Daniel is torn between choosing to start a new life with Dolores or returning Roman's favors.",
    trailerUrl: "https://youtu.be/qhrCRPTCn_A",
    image: "isangbala.jpg"
  }
];

// Display movies
const moviesContainer = document.getElementById("movies");

movies.forEach(movie => {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  const titleElement = document.createElement("h2");
  titleElement.textContent = movie.title;

  const imageElement = document.createElement("img");
  imageElement.src = movie.image;
  imageElement.alt = movie.title;
  imageElement.classList.add("movie-image");

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = movie.description;

  const trailerLinkElement = document.createElement("a");
  trailerLinkElement.textContent = "Watch Movie";
  trailerLinkElement.href = movie.trailerUrl;
  trailerLinkElement.target = "_blank";

  movieElement.appendChild(titleElement);
  movieElement.appendChild(imageElement);
  movieElement.appendChild(descriptionElement);
  movieElement.appendChild(trailerLinkElement);

  moviesContainer.appendChild(movieElement);
});