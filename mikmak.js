let btn = document.getElementById("addBtn")
let area = document.getElementById("down")

let names = []
let chooseNames = []

btn.addEventListener("click", ()=>{
    let inp = document.getElementById("input").value
    if (inp == ""){
        alert("Adj meg egy nevet!")
    }
    else if(names.includes(inp)){
        alert("Már szerepel ilyen név a kalapban")
    }
    else{
        names.push(inp)
        chooseNames.push(inp)
    
        const newDiv = document.createElement("div")
        const newName = document.createTextNode(inp)
        newDiv.classList.add("names")
    
    
        newDiv.appendChild(newName)
        area.appendChild(newDiv)
    }
})

let elkuld = document.getElementById("elkuldes")
let divChoose = document.getElementById("divChoose")
let divAdd = document.getElementById("divAdd")
let chooseArea = document.getElementById("down2")
let huzo = document.getElementById("span")

let nameDivs = []



elkuld.addEventListener("click", ()=>{
    divAdd.style.display = "none"
    divChoose.style.display = "flex"

    let randomfaszos = Math.floor(Math.random() * chooseNames.length)
    huzo.innerText = chooseNames[randomfaszos]


    names.forEach(name => {
        const newDiv2 = document.createElement("div")
        newDiv2.classList.add("nameChoose")
        nameDivs.push(newDiv2)
        chooseArea.appendChild(newDiv2)

        
        newDiv2.addEventListener("click", ()=>{
            let randomfaszos2 = Math.floor(Math.random() * names.length)
            
            if (names[randomfaszos2] == huzo.innerText){
                alert("Ne magadat húzd!")
            } 
            else{
                newDiv2.innerText = names[randomfaszos2]

                window.setTimeout(()=>{
                    chooseArea.removeChild(newDiv2)
                }, 3000) 

                names.splice(randomfaszos2, 1)
                chooseNames.splice(randomfaszos, 1)

                if (names.length == 0){
                    alert("Készen vagyunk")

                    divChoose.style.display = "none"
                    divAdd.style.display = "flex"

                    let child = area.lastElementChild;
                    document.getElementById("input").value = ""
                    while (child) {
                        area.removeChild(child);
                        child = area.lastElementChild;
                    }
                }
                else{
                    randomfaszos = Math.floor(Math.random() * chooseNames.length)
                    huzo.innerText = chooseNames[randomfaszos]
                }
            }
        })
    });
})