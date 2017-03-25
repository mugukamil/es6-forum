import {Post} from './post'
import xss from 'xss-filters'

Post.findAll()
.then(res => res.json())
.then(post => post.map(p => `
  <article class="post">
    <h2 class="post-title">${xss.inHTMLData(p.title)}</h2>
    <p class="post-meta">last reply on ${xss.inHTMLData(p.lastReply)}</p>
  </article>
`))
.then(post => {
    document.querySelector('section').innerHTML = post
})

Post.findRecent()
.then(res => res.json())
.then(user => user.map(u => `
    <div class="active-avatar">
        <img width="54" src="assets/images/${xss.inHTMLData(u.avatar)}">
        <h5 class="post-author">${xss.inHTMLData(u.name)}</h5>
    </div>
`))
.then(html => {
    document.querySelector('.sidebar-content').innerHTML = html
})
