// let url = 'http://localhost:3656/'
// let url = 'https://resume-website-2fonv.ondigitalocean.app/'
let url = 'https://taylorgooge.com/'
function get_post () {
 
    let req = new XMLHttpRequest ()
    let query = url + 'blogposts?'
    req.open('GET', query, true)
    req.addEventListener('load', function () {
        let response = JSON.parse(req.responseText)
        var blogcontainer = document.getElementById('blogaccordion')
        for (let i = response.length-1 ; i >= 0; i--) {
            let post = response[i]
            let divCard = document.createElement('div')
            divCard.setAttribute('class','card')
            let blogTitleDiv = document.createElement('div')
            blogTitleDiv.setAttribute('class', "blogtitle mx-auto")
            var imgContainer = document.createElement('img')
            imgContainer.setAttribute('class', 'img-responsive rounded mx-auto d-block pic_div')
            var toggler = document.createElement('a')
            toggler.setAttribute('class', 'btn btn-link ml-auto')
            toggler.setAttribute('type', 'button')
            toggler.setAttribute('data-toggle', 'collapse')
            toggler.setAttribute('data-target', "#collapsible-" + i)
            toggler.setAttribute('data-parent', '#blogaccordion')
            toggler.innerHTML = '<i class="fa fa-angle-double-down fa-3x"></i>'
            postDiv = document.createElement('div')
            postDiv.setAttribute('id', "collapsible-" + i)
            postDiv.setAttribute('class', 'collapse')

            divCard.appendChild(blogTitleDiv)
            divCard.appendChild(imgContainer)
            divCard.appendChild(toggler)
            divCard.appendChild(postDiv)

            blogcontainer.appendChild(divCard)

            let pTitle = post.title
            let pDate = post.publishedat
            let pAuthor = post.author
            let pImg = post.img
            let pContent = post.CONTENT

            imgContainer.setAttribute('src', pImg)
            blogTitleDiv.innerText = pTitle

            let authorContainer = document.createElement('h3')
            authorContainer.setAttribute('class','author')
            authorContainer.innerText = pAuthor
            postDiv.appendChild(authorContainer)

            let dateContainer = document.createElement('h4')
            dateContainer.setAttribute('class','date')
            dateContainer.innerText = pDate.slice(0, 10)
            postDiv.appendChild(dateContainer)

            let article = document.createElement('article')
            article.setAttribute('class', 'blog-article mx-auto')
            article.innerHTML = pContent
            postDiv.appendChild(article)




        }
    })
    req.send()
}
