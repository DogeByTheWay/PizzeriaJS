"use strict"
let pizzas=[{'codigo':'P1',
					 'nombre':'Prosciutto',
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'}, 
                     {'ingrediente':'mozzarella','precio':'0.5'}, 
                     {'ingrediente':'jamón york','precio':'0.75'} 
                     ]},
					{'codigo':'P2',
					 'nombre':'Capricciosa', 
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'},
									 {'ingrediente':'mozzarella','precio':'0.5'},
									 {'ingrediente':'jamón york','precio':'0.75'}
								    ]
					},
					{'codigo':'P3',
					 'nombre':'Cuatro Formaggi',
					 'ingredientes':[{'ingrediente':'salsa de tomate','precio':'0.5'},
									 {'ingrediente':'mozzarella','precio':'0.5'},
									 {'ingrediente':'jamón york','precio':'0.75'},
									 {'ingrediente':'alcachofas','precio':'1'},
									 {'ingrediente':'champiñones','precio':'0.5'},
									 {'ingrediente':'olivas negras','precio':'0.25'}
								    ]
					}
				   ];

function cargaItems() {
    let lista = document.getElementById("lista");
    let def=document.createElement("option");
    def.setAttribute("id","default");
    def.onclick=informaPizza;
    def.appendChild(document.createTextNode("--- SELECCIONA UNA PIZZA ---"));
    lista.appendChild(def)
    pizzas.forEach(p => {
        let item=document.createElement("option");
        item.setAttribute("id",p.codigo);
        item.appendChild(document.createTextNode(p.nombre));
        item.onclick=informaPizza;
        lista.appendChild(item)
    });
}
function reset(){
    document.getElementById("titulo").innerHTML="";
    document.getElementById("fotopizza").innerHTML="";
    document.getElementById("ingredientes").innerHTML="";
}
function informaPizza(){
    reset();
    let precio=0;
    let pizza=pizzas.find(p => p.codigo==this.id);
    if(pizza==null){
        reset();
        document.getElementById("importe").innerHTML="Precio total: " + 0 + " €";
    }else{
    let imagen=document.createElement("img");
    imagen.className="imagencss";
    imagen.src="img/"+pizza.codigo+".jpg";
    document.getElementById("fotopizza").appendChild(imagen);
    pizza.ingredientes.forEach(i => {precio+=parseFloat(i.precio)
                                    document.getElementById("ingredientes").innerHTML+=i.ingrediente + "<br>"
                               });
        
    document.getElementById("importe").innerHTML="Precio total: " + precio + " €";
    }
}
window.addEventListener("load", cargaItems)