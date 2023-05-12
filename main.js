const selectContainer = document.getElementById('container');


const arrayMembriDelTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


// Cicla l'array
for (let i = 0; i < arrayMembriDelTeam.length; i++) {
    const indiceArray = arrayMembriDelTeam[i];

    // crea 6 div con classe card
    const newCard = document.createElement('div');
    selectContainer.append(newCard);
    newCard.innerHTML += `<img src="img/${arrayMembriDelTeam[i].foto}">`;
    newCard.innerHTML += `<h3>${arrayMembriDelTeam[i].nome}</h3>`;
    newCard.innerHTML += `<p>${arrayMembriDelTeam[i].ruolo}</p>`;


    // cicla l'oggetto
    for (let key in indiceArray) {
        const indiceObject = indiceArray[key];

        // scrivi console le proprieta' dell'oggetto
        console.log(indiceObject);


    }
}
