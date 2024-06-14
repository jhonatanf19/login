function Salir(){
    alert("Fin del registro");    
    window.close();   
}
function ingresar(){
    var Usu= document.getElementById("txtUser").value;
    var con= document.getElementById("passContr").value;
    if(Usu =="jhonatan"){
        if(con == "123"){
            window.open("intranet.html","_self");
        } else{
            alert("Contraseña erronea");
    }
    }else{
            alert("Contraseña errado")
        
    }
}