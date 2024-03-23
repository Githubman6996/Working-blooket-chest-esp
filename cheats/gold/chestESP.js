let chestESP = true;

let loop = setInterval(() => {
    let curPage = getSite();
    if (curPage === 'gold' && chestESP) {
        try {
            if (reactHandler().stateNode.state.stage === 'prize') {
                let { choices } = reactHandler().stateNode.state;
                let div = document.querySelector("div[class*='regularBody']").children[1];
                if (div) {
                    if (!document.querySelectorAll(".chest-esp").length) {
                        choices.forEach((box, i) => {
                            textElement = document.createElement('p');
                            textElement.className = "chest-esp";
                            textElement.innerText = box.text;
                            textElement.style = `text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px;`;
                            try { div.children[i].appendChild(textElement); } catch (e) { console.log(e); }
                        });
                    } else {
                        choices.forEach((box, i) => {
                            if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) {
                                div.children[i].children[1].innerText = box.text;
                            }
                        });
                    }
                }
            }
        } catch (e) { console.log(e); }
    }
}, 1000); // Adjust the interval as needed

function getSite(capitalize) {
    switch (window.location.pathname.split('/')[2]) {
        case 'gold': return capitalize ? 'Gold Quest' : 'gold';
        default: return false;
    }
}

function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
}
