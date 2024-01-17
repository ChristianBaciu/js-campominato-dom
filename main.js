// const bottoneGeneraHtml = document.getElementById("bottoneGenera")
// bottoneGeneraHtml.addEventListener('click', function(){


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



    

    const grigliaHtml = document.getElementById ("griglia");

    for (let i = 0; i < 100; i++){
        let box = document.createElement("div");

        box.classList.add("box");

        box.innerHTML = `<span>${arrayNumeriSingoli[i]}</span>`;

        box.addEventListener('click', function(){
            this.classList.toggle("active");

            console.log(this)
        })

        grigliaHtml.append(box);
    }
// })









console.log(arrayNumeriSingoli)


