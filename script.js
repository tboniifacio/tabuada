const frm = document.querySelector("form")
const resp = document.querySelector(".rows")
const inputs = document.querySelectorAll(".numinputs")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
   

    resp.innerHTML = ""

    const  numeroCalc = Number(frm.calcnum.value)
    const numeroBase = Number(frm.basenum.value)

    for(let i = 1; i <= numeroBase; i++){


     const li = document.createElement("li") //cria o elemento

    li.textContent = `${i} x ${numeroCalc} = ${i * numeroCalc}`
    resp.appendChild(li) 

    
      
    }

})




