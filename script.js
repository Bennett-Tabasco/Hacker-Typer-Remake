(async function () {

    const file = await fetch("./message.txt");
    let text = await file.text();
    let count = 0;
    const mined = document.getElementById("bitcoin");

    text = text.replace(/\n/gim, "<br>").replace(/\t/gim, "&emsp; &emsp;" /*8 spaces*/);
    let i = 1;

    paragraph = document.querySelector("p");

    document.addEventListener("keydown", function op() {
        display = text.substr(0,i);
        paragraph.innerHTML = display;
        i += 5;
        count++;
        window.scrollTo(0,document.body.scrollHeight);
        mined.innerHTML = `Bitcoins mined: ${count}`;

        if (count === 2063) {
            document.removeEventListener("keydown", op);
            console.log(`
            Congratulations, you have hacked NASA.

            This is the code that will lead to a site where you can launch
            all rockets that will destroy the world:

            aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==
            `);
        }
    })
})();

function Void() {
    console.log("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1CZ2dycEtmcWgxYw==")

    answer = prompt("Enter decoded text: ");

    if (answer === "https://www.youtube.com/watch?v=BggrpKfqh1c") {
        location.href = "./null.html";
    } else {
        prompt("Null");
    }
}