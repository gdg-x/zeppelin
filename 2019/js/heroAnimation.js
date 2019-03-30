
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    let heroTitleDOM = document.querySelector("#heroTitle")
    const textArray = [heroTitleDOM.textContent, "10ª Edição", "19 de novembro de 2019", "ALTIS Grand Hotel"]

    while (true) {
        for (text of textArray) {
            await applyTitle(text, heroTitleDOM)
        }
    }
}

async function applyTitle(text, heroTitleDOM) {
    await sleep(1000)
    heroTitleDOM.textContent = text[0]
    while (heroTitleDOM.textContent.length != text.length) {
        await sleep(150)
        animateTitle(heroTitleDOM, text.split(""))
    }
}


function animateTitle(domElement, originalTextArray) {
    const textAsArray = domElement.textContent.split("")
    textAsArray.push(originalTextArray[textAsArray.length])
    domElement.innerHTML = textAsArray.join("")
}

loop()