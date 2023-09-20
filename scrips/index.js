

//slide de skils
const controls = document.querySelectorAll('.control')
const controlBox = document.querySelectorAll('.contro_box')
let primeiroItem = null
const items = document.querySelectorAll('.box__skils');
const maxItems  = items.length


controls.forEach((control)=>{
    control.addEventListener("click", ()=>{
        console.log('control clicado');

        //botao esquerdo
        const isLeft = 
        control.classList.contains('arrow__left');
        console.log('control clicado esquerdo', isLeft);

        //botao direito

        if(isLeft){
            primeiroItem -= 1
            console.log(primeiroItem)
        }else{
            primeiroItem +=1
            console.log(primeiroItem)
        }

        if(primeiroItem >= maxItems){
            primeiroItem = 0
        }

        if(primeiroItem < 0){
            primeiroItem = maxItems -1
        }

        items.forEach( item =>
            item.classList.remove('primeiro_skil'));
            
            items[primeiroItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"

            })

            items[primeiroItem].classList.add('primeiro_skil')
       
     
    })
})




// Menu mobile

let menu = document.querySelector(".menu")


menu.addEventListener("click", ()=>{
    let dropdown = document.querySelector(".drop-down-menu")
    if(dropdown.classList.contains("open")){
        dropdown.classList.remove("open");

        
    }else{
        dropdown.classList.add("open")
    }
    
})




