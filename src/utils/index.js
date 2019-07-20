export const articlesInit = [
	{
		id: '1',
		title: 'Post 1',
		text: 'post 1 text',
		createdAt: new Date().toLocaleString(),
		comments: [
			{
				id: '1',
				userId: '1',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 1 to post 1'
			},
			{
				id: '2',
				userId: '1',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 2 to post 1'
			},
			{
				id: '3',
				userId: '1',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 3 to post 1'
			}
		]
	},
	{
		id: '2',
		title: 'Post 2',
		text: 'post 2 text',
		createdAt: new Date().toLocaleString(),
		comments: [
			{
				id: '1',
				userId: '2',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 1 to post 2'
			},
			{
				id: '2',
				userId: '2',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 2 to post 2'
			},
			{
				id: '3',
				userId: '2',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 3 to post 2'
			}
		]
	},
	{
		id: '3',
		title: 'Post 3',
		text: 'post 3 text',
		createdAt: new Date().toLocaleString()
	},
	{
		id: '4',
		title: 'Post 4',
		text: 'post 4 text',
		createdAt: new Date().toLocaleString(),
		comments: [
			{
				id: '1',
				userId: '3',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 1 to post 3'
			},
			{
				id: '2',
				userId: '3',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 2 to post 3'
			},
			{
				id: '3',
				userId: '1',
				createdAt: new Date().toLocaleString(),
				text: 'Comment 3 to post 3'
			}
		]
	},
	{
		id: '5',
		title: 'Post 5',
		text: 'post 5 text',
		createdAt: new Date().toLocaleString()
	},
	{
		id: '6',
		title: 'Post 6',
		text: 'post 6 text',
		createdAt: new Date().toLocaleString()
	},
	{
		id: '7',
		title: 'Post 7',
		text: 'post 7 text',
		createdAt: new Date().toLocaleString()
	}
]
