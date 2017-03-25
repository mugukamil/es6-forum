export const Post = {
    findAll() {
        return fetch('http://localhost:3000/posts')
    },

    findRecent() {
        return fetch('http://localhost:3000/activeUsers')
    }
}
