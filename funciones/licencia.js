while(true){
	let salario=parseInt(prompt("Ingrese su sueldo líquido"));

  	if(!isNaN(salario) && salario != null && salario != ""){
  	let diasLicencia=parseInt(prompt("Ingrese los dias gozados"));
	let valorLicencia= ((salario / 30) * diasLicencia)  		
	alert("El salario vacacional es " + valorLicencia);
    	break;
  	}else{
  		alert("Ingrese un numero");
    	continue;
  	}
  };