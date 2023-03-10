for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
  }

  return gifts;
}

wrapGifts(gifts);


function  writeCards(names, eventName){
    let message =[];
    for(let i = 0; i < names.length; i++){
    console.log(i);
    console.log (message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
    ;

    }
 

    return message;

}
writeCards(["Ada", "Brendan", "Ali"], "birthday");



function countDown(num){
  while (num >= 0){
    console.log(num);
    num --;
  }
  
}

countDown(10);