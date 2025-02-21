let colors = [
    { back: "rgb(255,240,246)", text: "rgb(192, 75, 143)" },
    { back: "rgb(255,241,240)", text: "rgb(203, 69, 80)" },
    { back: "rgb(255,242,232)", text: "rgb(196, 96, 66)" },
    { back: "rgb(255,247,230)", text: "rgb(206, 107, 36)" },
    { back: "rgb(255,251,230)", text: "rgb(196, 144, 54)" },
    { back: "rgb(252,255,230)", text: "rgb(117, 151, 36)" },
    { back: "rgb(246,255,237)", text: "rgb(131, 176, 109)" },
    { back: "rgb(230,255,251)", text: "rgb(71, 159, 161)" },
    { back: "rgb(230,244,255)", text: "rgb(64, 121, 212)" },
    { back: "rgb(240,245,255)", text: "rgb(93, 110, 197)" },
    { back: "rgb(249,240,255)", text: "rgb(140, 116, 173)" },
    { back: "rgb(255,85,0)", text: "rgb(255,255,255)" },
    { back: "rgb(45,183,245)", text: "rgb(255,255,255)" },
    { back: "rgb(135,208,104)", text: "rgb(255,255,255)" },
    { back: "rgb(16,142,233)", text: "rgb(255,255,255)" },
    { back: "rgb(22,119,255)", text: "rgb(255,255,255)" },
    { back: "rgb(205,32,31)", text: "rgb(255,255,255)" },
    { back: "rgb(59,89,153)", text: "rgb(255,255,255)" },
    { back: "rgb(56,106,32)", text: "rgb(255,255,255)" },
    { back: "rgb(30,31,37)", text: "rgb(255,255,255)" },
];
let input = document.getElementById("input");
let tags = document.querySelector(".tags");

document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        if (input.value) {
            let tag = document.createElement("div");

            tag.className = "tag";
            tag.insertAdjacentHTML("beforeend", input.value);

            let close = document.createElement("span");
            close.className = "material-icons";
            close.innerHTML = "close";

            tag.insertAdjacentElement("beforeend", close);

            let colorValues = colors[Math.floor(Math.random() * colors.length)];

            tag.style.color = colorValues.text;
            tag.style.background = colorValues.back;

            tags.append(tag);

            close.addEventListener("click", (e) => {
                tag.remove();
            });
        }
    }
});