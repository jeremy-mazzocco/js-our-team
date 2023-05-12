const selectContainer = document.getElementById('container');


const arrayMembriDelTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
];

// console.log(wayne.nome, wayne.ruolo, wayne.foto);
// selectContainer.innerHTML = wayne.nome;
// selectContainer.innerHTML += wayne.ruolo;
// selectContainer.innerHTML += wayne.foto;

for (let i = 0; i < arrayMembriDelTeam.length; i++) {

    const indiceArray = arrayMembriDelTeam[i];

    for (let key in indiceArray) {
        const indiceObject = indiceArray[key];

        // scrivi console
        console.log(indiceObject);

        // scrivi sul DOM
        selectContainer.innerHTML += indiceObject;

    }
}





// for (let key in arrayMembriDelTeam) {
//     console.log(key);
// }



