// let url = 'http://localhost:3656/'
// let url = 'https://resume-website-2fonv.ondigitalocean.app/'
let url = 'https://taylorgooge.com/'

function projectBuilder() {
    
    let req = new XMLHttpRequest ()
    let query = url + 'projects?'
    req.open('GET', query, true)
    req.addEventListener('load', function () {
        let response = JSON.parse(req.responseText)
        let accordion = document.getElementById('myAccordion')
        for (let i = 0; i < response.length; i ++ ) { 
            let proj = response[i]
            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            let projTitle = document.createElement('div')
            projTitle.setAttribute('class', 'projecttitle mx-auto')
            projTitle.innerText = proj.title 
            card.appendChild(projTitle)

            let toggler = document.createElement('a')
            toggler.setAttribute('class', 'btn btn-link ml-auto')
            toggler.setAttribute('type', 'button')
            toggler.setAttribute('data-toggle', 'collapse')
            toggler.setAttribute('data-target', '#collapsible-' + i )
            toggler.setAttribute('data-parent', '#myAccordion')
            toggler.innerHTML = '<i class="fa fa-angle-double-down fa-2x"></i>'
            card.appendChild(toggler)

            let detDiv = document.createElement('div')
            detDiv.setAttribute('id', 'collapsible-' + i)
            detDiv.setAttribute('class', 'collapse')
            detDiv.innerHTML = proj.descr
            card.appendChild(detDiv)

            accordion.appendChild(card)
        }
    })
    req.send()
}