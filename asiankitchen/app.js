const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];




let MenuSet = new Set(["All"]) 

let MenuDOM = document.querySelector('.btn-container') 

let btnStyle = `
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
text-decoration: none;
vertical-align: middle;
user-select: none;
background-color: transparent;
border: 1px solid;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
color: #212529
cursor: pointer;
`

menu.forEach(function (element){  
  MenuSet.add(element.category)
})

MenuSet.forEach(function (element){           
  let btnDOM = document.createElement('span') 
  btnDOM.classList.add("btn-item")            
  btnDOM.style = btnStyle                    
  btnDOM.setAttribute('id',`${element}`)     
  btnDOM.innerHTML =`${element}`              
  MenuDOM.appendChild(btnDOM)                 
})


let foodDOM = document.querySelector('.section-center')        
  menu.forEach(AddList)                                        
  function AddList(element){
    let divDOM = document.createElement('div')                 
    divDOM.classList.add("menu-items", "col-lg-6", "col-sm-12") 
    divDOM.setAttribute('name', element.category)               
    divDOM.setAttribute('id', element.id)                      
      let imgDOM = document.createElement('img')              
      imgDOM.src = element.img                               
      imgDOM.alt = element.title                               
      imgDOM.classList.add("photo")                            
      divDOM.appendChild(imgDOM)                              
    
      let infoDOM = document.createElement('div')               
      infoDOM.classList.add("menu-info")
        let dtitleDOM = document.createElement('div')           
        dtitleDOM.classList.add("menu-title")
          let titleDOM = document.createElement('h4')           
          titleDOM.innerHTML = element.title
          dtitleDOM.appendChild(titleDOM)                      
    
          let priceDOM = document.createElement('h4')           
          priceDOM.classList.add("price")
          priceDOM.innerHTML = element.price
          dtitleDOM.appendChild(priceDOM)                    
    
        infoDOM.appendChild(dtitleDOM)                       
    
        let textDOM = document.createElement('div')             
        textDOM.classList.add("menu-text")
        textDOM.innerHTML = element.desc
        infoDOM.appendChild(textDOM)                            
    
      divDOM.appendChild(infoDOM)                               
    
    foodDOM.appendChild(divDOM)                                
    
  }
  
  let newmenu = [...menu]  
  let beforeSelected = ""   


  document.getElementById("All").addEventListener("mouseenter", () =>{ 
    document.getElementById("All").style.backgroundColor = "black"     
    document.getElementById("All").style.color = "white"               
  })
  document.getElementById("All").addEventListener("mouseleave", () =>{  
    document.getElementById("All").style.backgroundColor = "transparent"
    document.getElementById("All").style.color = "black"                
  })
  //Aşağıdaklerderde diğer kategoriler için
  document.getElementById("Korea").addEventListener("mouseenter", () =>{
    document.getElementById("Korea").style.backgroundColor = "black"
    document.getElementById("Korea").style.color = "white"
  })
  document.getElementById("Korea").addEventListener("mouseleave", () =>{
    document.getElementById("Korea").style.backgroundColor = "transparent"
    document.getElementById("Korea").style.color = "black"
  })

  document.getElementById("Japan").addEventListener("mouseenter", () =>{
    document.getElementById("Japan").style.backgroundColor = "black"
    document.getElementById("Japan").style.color = "white"
  })

  document.getElementById("Japan").addEventListener("mouseleave", () =>{
    document.getElementById("Japan").style.backgroundColor = "transparent"
    document.getElementById("Japan").style.color = "black"
  })

  document.getElementById("China").addEventListener("mouseenter", () =>{
    document.getElementById("China").style.backgroundColor = "black"
    document.getElementById("China").style.color = "white"
  })

  document.getElementById("China").addEventListener("mouseleave", () =>{
    document.getElementById("China").style.backgroundColor = "transparent"
    document.getElementById("China").style.color = "black"
  })


  document.addEventListener('click', (selected) => 
  {
    if(selected.target.matches('span'))            
    {
      if(beforeSelected)                            
      {
        document.getElementById(beforeSelected).style.boxShadow = "" 
      }
      document.getElementById(selected.target.innerHTML).style.boxShadow = "0px 0px 0px 4px #898d91" 
      document.getElementById(selected.target.innerHTML).style.border = "1px solid black"
      
      beforeSelected = selected.target.innerHTML   
      if(beforeSelected)                           
      {
        newmenu.forEach(function (item){                 
          let id = document.getElementById(`${item.id}`) 
          id.remove()                                   
        })
      }
      if(selected.target.innerHTML == 'All')            
      {
        newmenu = [...menu]                             
        newmenu.forEach(AddList)   ;console.log(selected.target.innerHTML )       
      }
      else{
        newmenu = menu.filter(function(element){              
          return element.category == selected.target.innerHTML
        })
        newmenu.forEach(AddList)  ;      console.log(selected.target.innerHTML )                         
      }
    }
    else
    {
      MenuSet.forEach(function (element){                   
        document.getElementById(element).style.boxShadow = ""
      })
      
    }
  })