/*___________________________________________________________________________________________
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
___________________________________________________________________________________________*/



//PASSAGGI LOGICI:

//1. INPUT

// • chiedo al programma di stampare i numeri da 1 a 100
    for (let i =1; i <= 100; i++) {

//___________________________________________________________________________________________

//2. ELABORAZIONE

// • indico che per i numeri multipli sia di 3 che di 5 deve venire stampato FizzBuzz al posto del numero
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz", i);
    }

// • indico che per i numeri multipli di 3 deve venire stampato Fizz al posto del numero
    else if (i % 3 === 0) {
        console.log("Fizz", i);
    }


// • indico che per i numeri multipli di 5 deve venire stampato Buzz al posto del numero
    else if (i % 5 === 0) { 
        console.log("Buzz", i); }
   
    
// • altrimenti stampo il numero intero
    else { 
        console.log(i);
    }
 }

//___________________________________________________________________________________________

//3. OUTPUT

// • stampare in console i numeri da 1 a 100 con l'indicazione per i multipli di 3 e 5