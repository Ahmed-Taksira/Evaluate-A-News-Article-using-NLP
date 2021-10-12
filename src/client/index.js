import './styles/style.scss'
import { checkUrl } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

window.addEventListener('DOMContentLoaded', ()=>{
    const submitBtn= document.getElementById('btn-submit')
    submitBtn.addEventListener('click', ()=>{
        handleSubmit()
    })
})

export {checkUrl, handleSubmit}
// TODO: include your scss file here

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
