var userChoice;
var computerChoice;
var userArea = document.querySelector('.user');

var putUserScore = document.querySelector('.user-score');
var putCpuScore = document.querySelector('.cpu-score');

var user_icon = document.querySelector('.user i');
var computer_icon = document.querySelector('.computer i');

var hand = document.querySelectorAll('.choice li i');

var userScore = 0;
var computerScore = 0;

(function user() {

    for (var i = 0; i < hand.length; i++) {
        hand[i].ondragstart = dragStart;
    }

    function dragStart() {
        userChoice = this.getAttribute("data-hand");
    }

    userArea.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.borderColor = "red";
        user_icon.style.visibility = "hidden";
    });

    userArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = "#dedede";
        user_icon.style.visibility = "initial";
    });

    userArea.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    userArea.addEventListener('drop', function(e) {
        e.preventDefault();
        computerChoice = cpu();
        user_icon.classList.remove("fa-spin");
        user_icon.className = "fa fa-hand-" + userChoice + "-o fa-2x fa-fw";
        computer_icon.className = "fa fa-hand-" + computerChoice + "-o fa-2x fa-fw";
        this.style.borderColor = "#dedede";
        user_icon.style.visibility = "initial";
        whowins(computerChoice, userChoice);
    });
})();

var cpu = function() {
    choice = Math.random();
    if (choice < 0.34) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function whowins(cpu, user) {

    if (cpu == "rock") {
        if (user == "paper") {
            userScore++;
            changeColor('user');
        } else if (user == "scissors") {
            computerScore++;
            changeColor('computer')
        }
    } else if (cpu == "paper") {
        if (user == "rock") {
            computerScore++;
            changeColor('computer')
        } else if (user == "scissors") {
            userScore++;
            changeColor('user')
        }
    } else if (cpu == "scissors") {
        if (user == "rock") {
            userScore++;
            changeColor('user')
        } else if (user == "paper") {
            computerScore++;
            changeColor('computer')
        }
    }

    function changeColor(entitiy) {
        var enty = entitiy;
        document.querySelector('.' + entitiy).style.background = "#d7ffba";
        setTimeout(function() {
            document.querySelector('.' + entitiy).style.background = "white";
        }, 1000);
    }

    putUserScore.innerHTML = userScore;
    putCpuScore.innerHTML = computerScore;

    setTimeout(function() {
        user_icon.className = "fa fa-circle-o-notch fa-spin fa-2x fa-fw";
        computer_icon.className = "fa fa-circle-o-notch fa-spin fa-2x fa-fw";
    }, 1000);
}