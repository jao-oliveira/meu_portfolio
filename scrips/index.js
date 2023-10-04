//dark-mode white-mode
const btn_dark = document.querySelector('#darkmod');
const themeSytem = localStorage.getItem('themeSystem') || "light"

btn_dark.addEventListener('click', ()=>{
    let oldTheme =  localStorage.getItem('themeSystem') || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light" 

    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme)
})


function defineCurrentTheme(theme) {
  const darkSvg = document.querySelector('.bi-moon-stars');
  const lightSvg = document.querySelector('.bi-brightness-high');

  document.documentElement.setAttribute("data-theme", theme);

  if (theme === 'light') {
    darkSvg.classList.add('sumir');
    lightSvg.classList.remove('sumir');
  } else {
    darkSvg.classList.remove('sumir');
    lightSvg.classList.add('sumir');
  }
}

// defineCurrentTheme(themeSytem)






//slide de skils

const controls = document.querySelectorAll('.control');
const items = document.querySelectorAll('.box__skils');
let primeiroItem = null;
const maxItems = items.length;

// Função para selecionar um item
function selectItem(index) {
  // Remove a classe 'primeiro_skil' de todos os itens
  items.forEach((item) => {
    item.classList.remove('primeiro_skil');
  });

  // Adiciona a classe 'primeiro_skil' ao item selecionado
  items[index].classList.add('primeiro_skil');


  
}

// Adiciona um ouvinte de eventos de clique a cada item
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Seleciona o item clicado
    primeiroItem = index;
    selectItem(primeiroItem);

    items[primeiroItem].scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
        block: 'nearest',
      });
  });
});

controls.forEach((control) => {
  control.addEventListener('click', () => {
    // Verifica se o controle clicado é o da esquerda
    const isLeft = control.classList.contains('arrow__left');

    // Atualiza o índice do item atual com base na direção
    if (isLeft) {
      primeiroItem = (primeiroItem - 1 + maxItems) % maxItems;
    } else {
      primeiroItem = (primeiroItem + 1) % maxItems;
    }

    // Seleciona o item atual
    selectItem(primeiroItem);

    // Rola para o item atual de forma suave
    items[primeiroItem].scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'nearest',
    });
  });
});





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




