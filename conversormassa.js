function conversor_massa(){
    //variaveis do input e resultado
    var input = window.document.getElementById("input")
    var resultado = window.document.getElementById("resultado")
    //tipo da medida no select
    var inputtype = window.document.getElementById("inputtype").value
    var outputype = window.document.getElementById("outputype").value
    if(inputtype =="Tonelada"){
            if(outputype =="Tonelada"){
                resultado.value = input.value
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*9.81
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*1000
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10000
            }else if(outputype =="Grama"){
                resultado.value = input.value*1000000
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*100000000
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*1000000000
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*10000000000000
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*10000000000000000
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**29)
            }
     }else if(inputtype =="Kilonewton"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*0.1
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*101.97 
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*1019.72 
            }else if(outputype =="Grama"){
                resultado.value = input.value*101971.6 
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*10197160.05 
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*101971600.5 
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*1.02*(10**11)
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*1.02*(10**14) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.14*(10**28) 
            }
        }else if(inputtype =="Quilograma"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10**-3
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*0.01
            }else if(outputype =="Quilograma"){
                resultado.value = input.value
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10
            }else if(outputype =="Grama"){
                resultado.value = input.value*1000
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*100000
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*1000000
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*1000000000 
             }else if(outputype =="Nanograma"){
                resultado.value = input.value*(10**12) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**26) 
            }
        }else if(inputtype =="Hectograma"){
             if(outputype =="Tonelada"){
                resultado.value = input.value*0.0001
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*0.000981
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*0.1
            }else if(outputype =="Hectograma"){
                resultado.value = input.value
            }else if(outputype =="Grama"){
                resultado.value = input.value*100
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*10000
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*100000
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*100000000 
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*(100000000000) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**25) 
            }    
        }else if(inputtype =="Grama"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10**-6
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*10*10**-6 
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*10**-3
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10**-2
            }else if(outputype =="Grama"){
                resultado.value = input.value
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*100
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*1000
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*1000000
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*(1000000000 ) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**23) 
            } 
        
        }else if(inputtype =="Centigrama"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10**-8
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*10*10**-8
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*10**-5
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10**-4
            }else if(outputype =="Grama"){
                resultado.value = input.value*10**-2
            }else if(outputype =="Centigrama"){
                resultado.value = input.value
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*10
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*10000
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*(10000000) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**21) 
            }
        }else if(inputtype =="Miligrama"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10**-9
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*10*10**-9
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*10**-6
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10**-5
            }else if(outputype =="Grama"){
                resultado.value = input.value*10**-3
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*10**-1
            }else if(outputype =="Miligrama"){
                resultado.value = input.value
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*1000
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*(1000000) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**20) 
            }          
        }else if(inputtype =="Micrograma"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10*10**-13
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*10*10**-12
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*10**-9
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10**-8
            }else if(outputype =="Grama"){
                resultado.value = input.value*10**-6
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*10**-4
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*10**-3
            }else if(outputype =="Micrograma"){
                resultado.value = input.value
            }else if(outputype =="Nanograma"){
                resultado.value = input.value*(1000) 
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**17) 
            }         
        }else if(inputtype =="Nanograma"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*10**-15
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*10*10**-15
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*10*10**-13
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*10*10**-12
            }else if(outputype =="Grama"){
                resultado.value = input.value*10**-9
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*10**-7
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*10**-6
            }else if(outputype =="Micrograma"){
                resultado.value = input.value*10**-3
            }else if(outputype =="Nanograma"){
                resultado.value = input.value
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value*6.02*(10**14) 
            }
        }else if(inputtype =="Unidade de massa de átomo"){
            if(outputype =="Tonelada"){
                resultado.value = input.value*2*10**-30
            }else if(outputype =="Kilonewton"){
                resultado.value = input.value*2*10**-29
            }else if(outputype =="Quilograma"){
                resultado.value = input.value*2*10**-27
            }else if(outputype =="Hectograma"){
                resultado.value = input.value*2*10**-26
            }else if(outputype =="Grama"){
                resultado.value = input.value*2*10**-24
            }else if(outputype =="Centigrama"){
                resultado.value = input.value*2*10**-22
            }else if(outputype =="Miligrama"){
                resultado.value = input.value*2*10**-21
            }else if(outputype =="Micrograma"){
                resultado.value = input.value**2*10**-18
            }else if(outputype =="Nanograma"){
                resultado.value = input.value**2*10**-15
            }else if(outputype =="Unidade de massa de átomo"){
                resultado.value = input.value
            }                      
        }
    }