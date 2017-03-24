const Post = {
    findAll() {
        return new Promise((resolve, reject) => {
            resolve('ok postszzzzz')
        })
    }
}

const ui = {
    renderPosts(posts) {
        console.log(posts)
    }
}

Post.findAll().then(ui.renderPosts)