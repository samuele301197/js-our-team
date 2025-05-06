const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

const cardMembers = document.getElementById("container");   // prelevo l'elemento in cui il browser lavorerà


const creaCards = (member) => {   //  creo la funzione che ha come parametro i membri del team
  const { name, role, email, img } = member;  // estrapolo le informazioni che mi servono da ogni membro (scomposizione di oggetti)
  return `<div class="card" style="width: 18rem;">
      <div class="card-image">
      <img src="./${img}" class="card-img-top" alt="${name}"></div>
    <div class="card-body">
      <h3>${name}</h3>
      <p>${role}</p>
      <a href="mailto:${email}">${email}</a>
    </div>
  </div> `;                         // voglio che mi ritorni una card con i dati che ho scelto di inserire
 }  

 const myTeam = (teamMembers) => {          // creo una funzione che ha come parametro l'intero array, 
  let cards = '';                           // creo una varibile e la lascio vuota,
  for (let member of teamMembers) {         // inizio il ciclo del mio array (ciclo for of),
    cards += creaCards(member)              // ad ogni iterazione, viene richiamata la funzione
  }                                         //  creaCards, e aggiunge contenuto a cards,
  cardMembers.innerHTML = cards;            // infine stampo in pagina,

 }
 myTeam(teamMembers);                       // Invoco la funzione, che mi genera tutto il lavoro.



  


