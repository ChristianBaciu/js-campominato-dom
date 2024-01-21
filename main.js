const giocoNascostoHtml = document.getElementById("giocoNascosto")
giocoNascostoHtml.style.display = "none"

const punteggioHtml = document.getElementById("punteggio")




// blocca il pulsante     HTML --> onclick="bloccaPulsante()"
function bloccaPulsante(){
    var pulsante = document.getElementById("bottoneGenera");

    // Disabilita il pulsante
    pulsante.disabled = true;
    // Esempio: Cambia il testo del pulsante dopo 1 secondi (1000 millisecondi)
    setTimeout(function() {
        pulsante.innerText = "Bloccato";
    }, 1000);
}

// random numero
function randomica(max){
    return Math.floor(Math.random()*max) + 1
}

let arrayNumeriSingoli = []
do{
    let randomNum = randomica(100)

    if(!arrayNumeriSingoli.includes(randomNum)){
        arrayNumeriSingoli.push(randomNum)
    }

}while(arrayNumeriSingoli.length !== 100)





const bottoneGeneraHtml = document.getElementById("bottoneGenera")
bottoneGeneraHtml.addEventListener('click', function(){

    // per vedere il punteggio
    let punteggio = 0


    giocoNascostoHtml.style.display = "block"

    let arrayBombe = []

    do{
        let numRandom = randomica(100)
    
        if(!arrayBombe.includes(numRandom)){
            arrayBombe.push(numRandom)
        }
    
    }while (arrayBombe.length < 16)

    console.log(arrayBombe)



    const grigliaHtml = document.getElementById ("griglia")

    for (let i = 1; i <= 100; i++){
        let box = document.createElement("div")




        box.classList.add("box")

        box.innerHTML = `<span>${[i]}</span>`

        box.addEventListener('click', function(){
            // // this.classList.toggle("active")

            let specificoSpanHtml = this.querySelector("span").innerText



            if(arrayBombe.includes(parseInt(specificoSpanHtml))){
                this.classList.add("red")
                // per bloccare il punteggio una volta cliccatoil box
                this.style.setProperty("pointer-Events", "none")
        
            }else{
                this.classList.add("green")
                // per bloccare il punteggio una volta cliccatoil box
                this.style.setProperty("pointer-Events", "none")
                
            }


            // per calcolare il punteggio fatto
            punteggio++
            punteggioHtml.innerHTML =`<h2>Punteggio: ${punteggio}</h2>`

            // mette il numero cliccato nella console
            console.log(specificoSpanHtml)

        })

        grigliaHtml.append(box)
    }
})