function conversor_volume(){
    //variaveis do input e resultado
    var input = window.document.getElementById("input")
    var resultado = window.document.getElementById("resultado")
    //tipo da medida no select
    var inputtype = window.document.getElementById("inputtype").value
    var outputype = window.document.getElementById("outputype").value
    if(inputtype =="quilômetro cúbico"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*1000000000 
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*1000000000000000
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*1000000000000000000
            }else if(outputype =="litro"){
                resultado.value = input.value*1000000000000
            }else if(outputype =="mililitro"){
                resultado.value = input.value*1000000000000000
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*35314680000
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*61020000000000
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*33810000000000
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*200000000000000
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*66670000000000
            }
        }else if(inputtype =="metro cúbico"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000001
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*1000000
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*1000000000 
            }else if(outputype =="litro"){
                resultado.value = input.value*1000
            }else if(outputype =="mililitro"){
                resultado.value = input.value*1000000
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*35.315
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*61023.76
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*33810000000000
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*200000
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*67628.03
            }
        }else if(inputtype =="centímetro cúbico"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000000000001
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.000001
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*1000 
            }else if(outputype =="litro"){
                resultado.value = input.value*0.001
            }else if(outputype =="mililitro"){
                resultado.value = input.value
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0.03531
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.061
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.034
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*0.2
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*0.067 
            }
        }else if(inputtype =="milímetro cúbico"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000000000000001
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.000000001
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*0.001
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value 
            }else if(outputype =="litro"){
                resultado.value = input.value*0.000001
            }else if(outputype =="mililitro"){
                resultado.value = input.value*0.001
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0.00003531
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.06102
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.03381
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*0.0002
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*0.06667 
            }
        }else if(inputtype =="litro"){
             if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000000001
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.001
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*1000
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*1000000 
            }else if(outputype =="litro"){
                resultado.value = input.value
            }else if(outputype =="mililitro"){
                resultado.value = input.value*1000
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0.035
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*61.024
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*33.814
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*200
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*66.667
            } 
        }else if(inputtype =="mililitro"){
             if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.00000000000001
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.000001
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*1
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*1000 
            }else if(outputype =="litro"){
                resultado.value = input.value*0.001
            }else if(outputype =="mililitro"){
                resultado.value = input.value
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0.03531
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.061
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.034
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*0.2
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*0.067
            }          
        }else if(inputtype =="pé cúbico"){  
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.00000002832
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.028
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*28316.836
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*28316835.945 
            }else if(outputype =="litro"){
                resultado.value = input.value*28.317
            }else if(outputype =="mililitro"){
                resultado.value = input.value*28316.836
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.1728
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*957.506
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*5663.367
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*1887.789
            }
        }else if(inputtype =="polegada cúbica"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.00000000001639
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.01639
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*16.387
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*16387.06
            }else if(outputype =="litro"){
                resultado.value = input.value*0.016
            }else if(outputype =="mililitro"){
                resultado.value = input.value*16.387
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0,001
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.554
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*3.277
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*1.092
            }
        }else if(inputtype =="onça fluida"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.00000000002957
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.02957
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*29.574
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*29573.532 
            }else if(outputype =="litro"){
                resultado.value = input.value*0.03
            }else if(outputype =="mililitro"){
                resultado.value = input.value*29.574
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0,001
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*1.805
            }else if(outputype =="onça fluida"){
                resultado.value = input.value
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*5.915
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*1.972
            }
        }else if(inputtype =="colher de chá"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000000000005
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.000005
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*5
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*5000
            }else if(outputype =="litro"){
                resultado.value = input.value*0.005
            }else if(outputype =="mililitro"){
                resultado.value = input.value*5
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0,1766
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.305
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.169
            }else if(outputype =="colher de chá"){
                resultado.value = input.value
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value*0.333
            }
        }else if(inputtype =="colher de sopa"){
            if(outputype =="quilômetro cúbico"){
                resultado.value = input.value*0.000000000000015
            }else if(outputype =="metro cúbico"){
                resultado.value = input.value*0.00015
            }else if(outputype =="centímetro cúbico"){
                resultado.value = input.value*15
            }else if(outputype =="milímetro cúbico"){
                resultado.value = input.value*14999.999
            }else if(outputype =="litro"){
                resultado.value = input.value*0.015
            }else if(outputype =="mililitro"){
                resultado.value = input.value*15
            }else if(outputype =="pé cúbico"){
                resultado.value = input.value*0,001
            }else if(outputype =="polegada cúbica"){
                resultado.value = input.value*0.915
            }else if(outputype =="onça fluida"){
                resultado.value = input.value*0.507
            }else if(outputype =="colher de chá"){
                resultado.value = input.value*3
            }else if(outputype =="colher de sopa"){
                resultado.value = input.value
            }
    }
}