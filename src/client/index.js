import './styles/style.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

import { checkUrl } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

window.addEventListener('DOMContentLoaded', ()=>{
    const submitBtn= document.getElementById('btn-submit')
    submitBtn.addEventListener('submit', ()=>{
        handleSubmit()
    })
})

