
function conversor_area(){
    //variaveis do input e resultado
    var input = window.document.getElementById("input")
    var resultado = window.document.getElementById("resultado")
    var inputtype = window.document.getElementById("inputtype").value
    var outputype = window.document.getElementById("outputype").value

    if(inputtype =="quilômetro quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value
            }else if(outputype =="hectare"){
                resultado.value = input.value*100
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value*1000000
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*100000000
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*10000000000
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*1000000000000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*1000000000000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.4
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*10763910
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*1550003000
            }
     }else if(inputtype =="hectare"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/1000
            }else if(outputype =="hectare"){
                resultado.value = input.value
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value*10000
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*1000000
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*100000000
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*10000000000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*10000000000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*107639.1
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*15500030 
            }
        }else if(inputtype =="metro quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/1000000
            }else if(outputype =="hectare"){
                resultado.value = input.value/10000
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*100
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*10000
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*1000000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*1000000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.0000039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*10.8
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*1550
            }
        }else if(inputtype =="decímetro quadrado"){
             if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/100000000
            }else if(outputype =="hectare"){
                resultado.value = input.value/1000000
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value/100
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*100
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*10000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*10000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.000000039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value/10
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*15.50
            }
        }else if(inputtype =="centímetro quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/100000000000
            }else if(outputype =="hectare"){
                resultado.value = input.value/100000000
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value/10000
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value/100
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*100
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*100000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.00000000039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*0.011
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*0.2
            }
        }else if(inputtype =="milímetro quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/10000000000000
            }else if(outputype =="hectare"){
                resultado.value = input.value/10000000000
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value/1000000
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value/10000
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value/100
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*1000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.0000000000039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*0.00011
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*0.016
            }
        }else if(inputtype =="micrômetro quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value/1000000000000000000
            }else if(outputype =="hectare"){
                resultado.value = input.value/10000000000000000
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value/1000000000000
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value/10000000000
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value/100000000
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value/1000000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.0000000000000000039
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*0.00000000011
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*0.000000016
            }
        }else if(inputtype =="milha quadrado"){
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value*2.6
            }else if(outputype =="hectare"){
                resultado.value = input.value*259
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value*2589987.8
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*258998783.2 
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*26000000000
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*2600000000000
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*2600000000000000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*27878395.9
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*4014488909.9
            }
        }else if(inputtype =="pé quadrado"){
              if(outputype =="quilômetro quadrado"){
                resultado.value = input.value*0.00000929
            }else if(outputype =="hectare"){
                resultado.value = input.value*0.000929
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value*0.093
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*9.29
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*929.03
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*92903.044
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*92900000000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.00003587
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value*144
            }

        }else if(inputtype =="polegada quadrada"){
            
            if(outputype =="quilômetro quadrado"){
                resultado.value = input.value*0.0000006452
            }else if(outputype =="hectare"){
                resultado.value = input.value*0.00006452
            }else if(outputype =="metro quadrado"){
                resultado.value = input.value*0.001
            }else if(outputype =="decímetro quadrado"){
                resultado.value = input.value*0.065
            }else if(outputype =="centímetro quadrado"){
                resultado.value = input.value*929.03
            }else if(outputype =="milímetro quadrado"){
                resultado.value = input.value*645.16
            }else if(outputype =="micrômetro quadrado"){
                resultado.value = input.value*645200000
            }else if(outputype =="milha quadrado"){
                resultado.value = input.value*0.0000002491
            }else if(outputype =="pé quadrado"){
                resultado.value = input.value*0.007
            }else if(outputype =="polegada quadrada"){
                resultado.value = input.value
            }   
          }
        }
