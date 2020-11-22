// Clock Displays Greetings based on time
var time = 0900;
if(time >= 0500 && time <= 1159){
    console.log("Buenos Dias");
} else if(time >= 1200 && time <= 1600){
    console.log("Buenas Tardes");
} else{
    console.log("Hola!");
}