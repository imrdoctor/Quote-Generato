var qoutes = [
    {
        name: "Oscar Wilde",
        qoutes: "“Be yourself; everyone else is already taken.”",
        image: "Oscar_Wilde.jpg",
    },
    {
        name: "― Marilyn Monroe",
        qoutes: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        image: "Marilyn_Monroe.jpg",

    },
    {
        name: "― Frank Zappa",
        qoutes: "“So many books, so little time.”",
        image: "Frank_Zappa.jpg",

    },
    {
        name: "― Albert Einstein",
        qoutes: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        image: "Albert_Einstein.jpg",

    },
    {
        name: "― Marcus Tullius Cicero",
        qoutes: "“A room without books is like a body without a soul.”",
        image: "Marcus_Tullius_Cicero.jpg",

    },
    {
        name: "― Bernard M. Baruch",
        qoutes: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        image: "Bernard_M.Baruch.jpg",

    },
    {
        name: "― William W. Purkey",
        qoutes: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
        image: "William_W.Purkey.jpg",

    },
    {
        name: "― Dr. Seuss",
        qoutes: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        image: "Dr.Seuss.jpg",

    },
    {
        name: "― Robert Frost",
        qoutes: "“In three words I can sum up everything I've learned about life: it goes on.”",
        image: "Robert_Frost.jpg",

    },
    {
        name: "― Albert Camus",
        qoutes: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
        image: "Albert_Camus.jpg",

    },
    {
        name: "― Elbert Hubbard",
        qoutes: "“A friend is someone who knows all about you and still loves you.”",
        image: "Elbert_Hubbard.jpg",

    },
];

var previousNum = -1; 
function getQoutes() {
    var num;
    for (var i = 0; i < 10; i++) {
        num = Math.floor(Math.random() * qoutes.length);
        if (num !== previousNum) {
            break;
        }
    }
    previousNum = num; 
    // console.log(num);
    document.getElementById("quote").innerHTML = qoutes[num].qoutes;
    document.getElementById("quoteImage").src = qoutes[num].image;
    document.getElementById("quoteName").innerHTML = qoutes[num].name;
    document.getElementById("quoteImage").classList.add("active");
}

