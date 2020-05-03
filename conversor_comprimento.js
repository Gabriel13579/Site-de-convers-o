function conversor_comprimento(){
    //variaveis do input e resultado
    var input = window.document.getElementById("input")
    var resultado = window.document.getElementById("resultado")


    //tipo da medida no select
    var inputtype = window.document.getElementById("inputtype").value
    var outputype = window.document.getElementById("outputype").value

   


    // Testando os tipos selecionados para colocar as fórmulas 
    // entre "" value de option
    //quilômetro
    //metro
    //decímetro
    //centímetro
    //milímetro
    //micrômetro
    //légua
    //milha
    //jarda
    //pé
    //polegada

    if(inputtype =="quilômetro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value
            }else if(outputype =="metro"){
                resultado.value = input.value*1000
            }else if(outputype =="decímetro"){
                resultado.value = input.value*10000
            }else if(outputype =="centímetro"){
                resultado.value = input.value*100000
            }else if(outputype =="milímetro"){
                resultado.value = input.value*1000000
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*1000000000
            }else if(outputype =="légua"){
                resultado.value = input.value*0.207124
            }else if(outputype =="milha"){
                resultado.value = input.value*0.621371
            }else if(outputype =="jarda"){
                resultado.value = input.value*1093.61
            }else if(outputype =="pé"){
                resultado.value = input.value*3280.84
            }else if(outputype =="polegada"){
                resultado.value = input.value*39370.1
            }

        }else if(inputtype =="metro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value/1000
            }else if(outputype =="metro"){
                resultado.value = input.value
            }else if(outputype =="decímetro"){
                resultado.value = input.value*10
            }else if(outputype =="centímetro"){
                resultado.value = input.value*100
            }else if(outputype =="milímetro"){
                resultado.value = input.value*1000
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*1000000
            }else if(outputype =="légua"){
                resultado.value = input.value*0.000207124
            }else if(outputype =="milha"){
                resultado.value = input.value*0.000621371
            }else if(outputype =="jarda"){
                resultado.value = input.value*1.09361
            }else if(outputype =="pé"){
                resultado.value = input.value*3.28084
            }else if(outputype =="polegada"){
                resultado.value = input.value*39.3701
            }

        }else if(inputtype =="decímetro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value*0.0001
            }else if(outputype =="metro"){
                resultado.value = input.value*0.1
            }else if(outputype =="decímetro"){
                resultado.value = input.value
            }else if(outputype =="centímetro"){
                resultado.value = input.value*10
            }else if(outputype =="milímetro"){
                resultado.value = input.value*100
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*100000
            }else if(outputype =="légua"){
                resultado.value = input.value*0.000020712
            }else if(outputype =="milha"){
                resultado.value = input.value*0.000062137
            }else if(outputype =="jarda"){
                resultado.value = input.value*0.109361
            }else if(outputype =="pé"){
                resultado.value = input.value*0.328084
            }else if(outputype =="polegada"){
                resultado.value = input.value*3.93701
            }
        }else if(inputtype =="centímetro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value/100000
            }else if(outputype =="metro"){
                resultado.value = input.value/100
            }else if(outputype =="decímetro"){
                resultado.value = input.value/10
            }else if(outputype =="centímetro"){
                resultado.value = input.value
            }else if(outputype =="milímetro"){
                resultado.value = input.value*10
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*10000
            }else if(outputype =="légua"){
                resultado.value = input.value*0.0000020712
            }else if(outputype =="milha"){
                resultado.value = input.value*0.0000062137
            }else if(outputype =="jarda"){
                resultado.value = input.value*1.09361/100
            }else if(outputype =="pé"){
                resultado.value = input.value*3.28084/100
            }else if(outputype =="polegada"){
                resultado.value = input.value*0.393701
            }
            
        }else if(inputtype =="milímetro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value/1000000
            }else if(outputype =="metro"){
                resultado.value = input.value/1000
            }else if(outputype =="decímetro"){
                resultado.value = input.value/100
            }else if(outputype =="centímetro"){
                resultado.value = input.value/10
            }else if(outputype =="milímetro"){
                resultado.value = input.value
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*1000
            }else if(outputype =="légua"){
                resultado.value = input.value*0.00000020712
            }else if(outputype =="milha"){
                resultado.value = input.value*0.00000062137
            }else if(outputype =="jarda"){
                resultado.value = input.value*1.09361/1000
            }else if(outputype =="pé"){
                resultado.value = input.value*3.28084/1000
            }else if(outputype =="polegada"){
                resultado.value = input.value*3.93701/100
            }
        }else if(inputtype =="micrômetro"){

            if(outputype =="quilômetro"){
                resultado.value = input.value/1000000000
            }else if(outputype =="metro"){
                resultado.value = input.value/1000000
            }else if(outputype =="decímetro"){
                resultado.value = input.value/100000
            }else if(outputype =="centímetro"){
                resultado.value = input.value/10000
            }else if(outputype =="milímetro"){
                resultado.value = input.value/1000
            }else if(outputype =="micrômetro"){
                resultado.value = input.value
            }else if(outputype =="légua"){
                resultado.value = input.value*2.0712/100000000000
            }else if(outputype =="milha"){
                resultado.value = input.value*6.2137/10000000000
            }else if(outputype =="jarda"){
                resultado.value = input.value*1.0936/1000000
            }else if(outputype =="pé"){
                resultado.value = input.value*3.2808/1000000
            }else if(outputype =="polegada"){
                resultado.value = input.value*3.937/100000
            }
            
        }else if(inputtype =="légua"){
            
            if(outputype =="quilômetro"){
                resultado.value = input.value*4.828
            }else if(outputype =="metro"){
                resultado.value = input.value*4828.03
            }else if(outputype =="decímetro"){
                resultado.value = input.value*48280.3
            }else if(outputype =="centímetro"){
                resultado.value = input.value*482803
            }else if(outputype =="milímetro"){
                resultado.value = input.value*4.828*1000000
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*4.828*1000000000
            }else if(outputype =="légua"){
                resultado.value = input.value
            }else if(outputype =="milha"){
                resultado.value = input.value*3
            }else if(outputype =="jarda"){
                resultado.value = input.value*5280
            }else if(outputype =="pé"){
                resultado.value = input.value*15840
            }else if(outputype =="polegada"){
                resultado.value = input.value*190080
            }
        }else if(inputtype =="milha"){

            if(outputype =="quilômetro"){
                resultado.value = input.value*1.60934
            }else if(outputype =="metro"){
                resultado.value = input.value*1609.34
            }else if(outputype =="decímetro"){
                resultado.value = input.value*16093.4
            }else if(outputype =="centímetro"){
                resultado.value = input.value*160934
            }else if(outputype =="milímetro"){
                resultado.value = input.value*1609340
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*1.609*1000000000
            }else if(outputype =="légua"){
                resultado.value = input.value/3
            }else if(outputype =="milha"){
                resultado.value = input.value
            }else if(outputype =="jarda"){
                resultado.value = input.value*1760
            }else if(outputype =="pé"){
                resultado.value = input.value*5280
            }else if(outputype =="polegada"){
                resultado.value = input.value*63360
            }
        }else if(inputtype =="jarda"){
            if(outputype =="quilômetro"){
                resultado.value = input.value/1094
            }else if(outputype =="metro"){
                resultado.value = input.value/1.094
            }else if(outputype =="decímetro"){
                resultado.value = input.value*9.144
            }else if(outputype =="centímetro"){
                resultado.value = input.value*91.44
            }else if(outputype =="milímetro"){
                resultado.value = input.value*914.4
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*914400
            }else if(outputype =="légua"){
                resultado.value = input.value/5280
            }else if(outputype =="milha"){
                resultado.value = input.value/1760
            }else if(outputype =="jarda"){
                resultado.value = input.value
            }else if(outputype =="pé"){
                resultado.value = input.value*3
            }else if(outputype =="polegada"){
                resultado.value = input.value*36
            }
            
        }else if(inputtype =="pé"){
            if(outputype =="quilômetro"){
                resultado.value = input.value/3281
            }else if(outputype =="metro"){
                resultado.value = input.value/3.281
            }else if(outputype =="decímetro"){
                resultado.value = input.value*30.48/10
            }else if(outputype =="centímetro"){
                resultado.value = input.value*30.48
            }else if(outputype =="milímetro"){
                resultado.value = input.value*304.8
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*304800
            }else if(outputype =="légua"){
                resultado.value = input.value/15840
            }else if(outputype =="milha"){
                resultado.value = input.value/5280
            }else if(outputype =="jarda"){
                resultado.value = input.value/3
            }else if(outputype =="pé"){
                resultado.value = input.value
            }else if(outputype =="polegada"){
                resultado.value = input.value*12
            }
            
        }else if(inputtype =="polegada"){
            if(outputype =="quilômetro"){
                resultado.value = input.value/39370
            }else if(outputype =="metro"){
                resultado.value = input.value/39.37
            }else if(outputype =="decímetro"){
                resultado.value = input.value/3.937
            }else if(outputype =="centímetro"){
                resultado.value = input.value*2.54
            }else if(outputype =="milímetro"){
                resultado.value = input.value*25.4
            }else if(outputype =="micrômetro"){
                resultado.value = input.value*25400
            }else if(outputype =="légua"){
                resultado.value = input.value/190080
            }else if(outputype =="milha"){
                resultado.value = input.value/63360
            }else if(outputype =="jarda"){
                resultado.value = input.value/36
            }else if(outputype =="pé"){
                resultado.value = input.value/12
            }else if(outputype =="polegada"){
                resultado.value = input.value
            }
        
    }





}