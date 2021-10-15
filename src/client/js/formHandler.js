import { checkUrl } from "./checkURL"

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const introduceData = (data) => {

    var Snode = document.createElement("P");
    var Stextnode = document.createTextNode(`Subjectivity: ${data.subjectivity}`);
    Snode.appendChild(Stextnode);

    var Anode = document.createElement("P");
    var Atextnode = document.createTextNode(`Agreement: ${data.agreement}`);
    Anode.appendChild(Atextnode);

    var Pnode = document.createElement("P");
    var Ptextnode = document.createTextNode(`Polarity: ${data.score_tag}`);
    Pnode.appendChild(Ptextnode);

    var Cnode = document.createElement("P");
    var Ctextnode = document.createTextNode(`Confidence: ${data.confidence}`);
    Cnode.appendChild(Ctextnode);

    var Inode = document.createElement("P");
    var Itextnode = document.createTextNode(`Irony: ${data.irony}`);
    Inode.appendChild(Itextnode);

    const myData= document.getElementById("data")
    myData.appendChild(Snode)
    myData.appendChild(Anode)
    myData.appendChild(Pnode)
    myData.appendChild(Cnode)
    myData.appendChild(Inode)
}

export const handleSubmit = async (event) => {
    event.preventDefault()

    let formText = document.getElementById('article-url').value

    if (checkUrl(formText)) {
        await post("http://localhost:8084/getData", { url: url }).then(data => {
            introduceData(data)
        })
    }
    else alert("Invalid URL. Try Again.")
}

