function generate() {
    restyle();

    const answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
    ];

    let question = document.getElementById("input").value;

    question = question.replaceAll("?", "").trim();

    if (!question) {
        document.getElementById("output").innerText =
            "Ask a question... or leave!";
        return;
    }

    const randomMessage = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById(
        "output"
    ).innerText = `${question}? ${randomMessage}.`;
}

function randomColorCode() {
    let rRand = Math.floor(Math.random() * 256);
    let gRand = Math.floor(Math.random() * 256);
    let bRand = Math.floor(Math.random() * 256);
    return "rgb(" + rRand + ", " + gRand + ", " + bRand + ")";
}

function restyle() {
    const outputElement = document.getElementById("output");

    const fontOptions = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "Comic Sans MS",
        "Impact",
        "Georgia",
        "Arial",
        "Courier New",
    ];

    outputElement.style.fontFamily =
        fontOptions[Math.floor(Math.random() * fontOptions.length)];
    outputElement.style.fontSize = Math.floor(Math.random() * 31) + 20 + "px";
    outputElement.style.color = randomColorCode();
    outputElement.style.backgroundColor = randomColorCode();
}