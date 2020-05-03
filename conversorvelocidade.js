function conversor_velocidade(){
    //variaveis do input e resultado
    var input = window.document.getElementById("input")
    var resultado = window.document.getElementById("resultado")
    //tipo da medida no select
    var inputtype = window.document.getElementById("inputtype").value
    var outputype = window.document.getElementById("outputype").value
    if(inputtype =="Milha por hora"){
            if(outputype =="Milha por hora"){
                resultado.value = input.value
            }else if(outputype =="Pés por segundo"){
                resultado.value = input.value*1.47
            }else if(outputype =="Metro por segundo"){
                resultado.value = input.value*0.45
            }else if(outputype =="Quilômetro por hora"){
                resultado.value = input.value*1.61
            }else if(outputype =="Nó"){
                resultado.value = input.value*0.84
            }
        }else if(inputtype =="Pés por segundo"){
            if(outputype =="Milha por hora"){
                resultado.value = input.value/1.47
            }else if(outputype =="Pés por segundo"){
                resultado.value = input.value
            }else if(outputype =="Metro por segundo"){
                resultado.value = input.value*0.3
            }else if(outputype =="Quilômetro por hora"){
                resultado.value = input.value*3.05*(10**-4)
            }else if(outputype =="Nó"){
                resultado.value = input.value*0.59
            }
        }else if(inputtype =="Metro por segundo"){
            if(outputype =="Milha por hora"){
                resultado.value = input.value*2.24
            }else if(outputype =="Pés por segundo"){
                resultado.value = input.value*3.28
            }else if(outputype =="Metro por segundo"){
                resultado.value = input.value
            }else if(outputype =="Quilômetro por hora"){
                resultado.value = input.value*3.6
            }else if(outputype =="Nó"){
                resultado.value = input.value*1.94
            }
        }else if(inputtype =="Quilômetro por hora"){
            if(outputype =="Milha por hora"){
                resultado.value = input.value*0.62
            }else if(outputype =="Pés por segundo"){
                resultado.value = input.value*0.91
            }else if(outputype =="Metro por segundo"){
                resultado.value = input.value*0.28
            }else if(outputype =="Quilômetro por hora"){
                resultado.value = input.value
            }else if(outputype =="Nó"){
                resultado.value = input.value*0.54
            } 
        }else if(inputtype =="Nó"){
            if(outputype =="Milha por hora"){
                resultado.value = input.value*1.15
            }else if(outputype =="Pés por segundo"){
                resultado.value = input.value*1.69
            }else if(outputype =="Metro por segundo"){
                resultado.value = input.value*0.51
            }else if(outputype =="Quilômetro por hora"){
                resultado.value = input.value*1.85
            }else if(outputype =="Nó"){
                resultado.value = input.value
            }
        }     
    }