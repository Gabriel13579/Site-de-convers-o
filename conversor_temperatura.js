function conversor_temperatura(){
    
    
    
    //variaveis do input e resultado
    var input = window.document.getElementById("input");
    var resultado = window.document.getElementById("resultado");


    //tipo da medida no select
    var inputtype = window.document.getElementById("inputtype").value;
    var outputype = window.document.getElementById("outputype").value;
    
    
    
       if(inputtype =="celsius"){
            if(outputype =="celsius"){
                resultado.value = input.value;
            }else if(outputype =="kelvin"){
                
                resultado.value =parseFloat(input.value) + (273.15 * 1);
            }else if(outputype =="fahrenheit"){
                resultado.value = parseFloat(input.value*(9/5)) + (32*1); }                 
         }
        
        if(inputtype =="kelvin"){
            if(outputype =="kelvin"){
                resultado.value = input.value;
            }else if(outputype =="celsius"){
                
                resultado.value =parseFloat(input.value) - (273.15 * 1) ;
            }else if(outputype =="fahrenheit"){
                resultado.value =  parseFloat(input.value*(9/5)) -(491.67)+(32*1); }                 
         }
    
         if(inputtype =="fahrenheit"){
            if(outputype =="fahrenheit"){
                resultado.value = input.value;
            }else if(outputype =="celsius"){
                
                resultado.value =parseFloat(input.value*(5/9))-(32*(5/9));
            }else if(outputype =="kelvin"){
                resultado.value =  parseFloat(input.value*(5/9))+(255.372); }                 
         }
}
