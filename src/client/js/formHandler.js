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
    document.getElementById('text').innerHTML = `Text: ${data.text}`
    document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
    document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
    document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
    document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`
}

export const handleSubmit = async (event) => {
    event.preventDefault()

    let formText = document.getElementById('article-url').value

    if (checkUrl(formText)) {
        post("http://localhost:8084/getData", { url: url }).then(data => {
            introduceData(data)
        })
    }
    else alert("Invalid URL. Try Again.")
}

