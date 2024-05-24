


function Generate(){


    var quotes = {
        "-Abwaan Saed Muse": '"Adna Taada Meel Mari Rabi tiisu waa meel"',
        "-Abwaan Kamaludiin" : '"Dhaban Quruxley dhashii Dhulbahnte Dhadigaba Miyaan Kuu dhigaa "'
    }
  
    var auther = Object.keys(quotes)
    var authers  = auther[Math.floor(Math.random() * auther.length)]

    var quote = quotes[authers];
    document.getElementById('quotes').innerHTML = quote;
    document.getElementById('auther').innerHTML = authers;

}