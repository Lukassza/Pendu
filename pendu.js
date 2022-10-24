let listemot=["fichier","edition","selection","affichage","atteindre","executer","terminal","aide"]
let tentativesrestantes=8
let lettresentrées=[]
let dejalettre=document.querySelector(".lettresentrées")
let resultat=0
let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let proposition=document.querySelector(".proposition")
let jouer=document.querySelector("#jouer")
let mot=document.querySelector(".mot")
let placemot= []
let placelettre=[]
let tentative=document.querySelector(".tentative")
let result=document.querySelector(".result")
let result2=document.querySelector(".result2")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



jouer.addEventListener("click", function (e) {
    e.preventDefault();
    jouer.remove()
    for(i=0;i<26;i++){
    let lettres = document.createElement("input");
        lettres.setAttribute("type", "checkbox");
        lettres.setAttribute("name", alphabet[document.querySelectorAll(".proposition input").length]);
        lettres.id = "lettres" + document.querySelectorAll(".proposition input").length;
        lettres.classList.add("lettres");
        proposition.appendChild(lettres);

        let label = document.createElement("label");
        label.setAttribute("for", lettres.id);
        label.textContent= alphabet[document.querySelectorAll(".proposition input").length-1]
        proposition.appendChild(label);
    }



    let alea= getRandomInt(8)
    let motsecret= listemot[alea]
    console.log(motsecret)

    for(j=0;j<motsecret.length;j++){
        placemot+="_ "
        mot.textContent=placemot
    }
    
    
    
    proposition.addEventListener("click", function (evt) {
        if(tentativesrestantes>0){
        tentativesrestantes --
        let elem = evt.target;
        let propal=elem.name
        console.log(propal)
        lettresentrées.push(propal)
    
        // if(propal==="b"){
        //     console.log("ça fonctionne")
        // }
        // else {console.log("non")}

        if (motsecret.includes(propal)){
            for(k=0;k<motsecret.length;k++){
                if(motsecret[k]==propal)
                placelettre.push(k)
                console.log(placelettre)
                
            }
        }
        for(l=0;l<=placelettre.length;l++){
            placemot[placelettre[l]]=propal
            console.log(placemot)
        }
        mot.textContent=placemot

    dejalettre.textContent=`Lettres déjà entrées: ${lettresentrées}`
    tentative.textContent=`Nombre de tentatives restantes: ${tentativesrestantes}`
    if(placemot==motsecret)
    result2.textContent="Victoire"        
}
        else{result.textContent="Défaite"}
    })

  


    
})




//placemot => affichage du mot sur la page
//placelettre => emplacement de la lettre proposée dans le mot
// lettresentrées => liste des lettres déjà entrées