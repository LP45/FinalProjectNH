let username = prompt("Plese enter username");
alert("Please Enter Password. Must Be a minimum of 8 charcters long. Must have one number,letters,and at least one special character")
let password = prompt("Plese enter a 8 character password");

if(Number(password) < 8){
    alert("Please enter atleast 8 chacters")
}
else{
    alert("password requirements have been met.")
}


already_taken = {password:"mike235!"}
already_taken = {username:"lorrenop45"}
    
    
    if(username = already_taken){
        alert("That username is already taken")
        alert("Please try another username")
    } 
    else if(username != already_taken){
        alert(Username + " is created!")
    }

    if(password != strong_passowrd ){
        alert("Please check Password")
        alert("Must meet requirements = " + requirements )
    }
    else if(password = strong_passowrd ){
        alert("Password created")
    }
