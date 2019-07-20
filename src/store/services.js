
const uri = 'https://my-json-server.typicode.com/paradoxkb/blog_news_react16'

export const fetchArticles = async () => (
	fetch(uri + '/articles')
).then(res => res.json())

export const fetchArticle = async (id) => (
	fetch(uri + '/articles/' + id)
).then(res => res.json())

export const fetchUser = async (id) => (
	fetch(uri + '/users/' + id)
).then(res => res.json())
