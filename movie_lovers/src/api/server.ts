const token = '1a3767dfe20e005015668f536d24c266abeb3af6d10fc3e3';


export const server_calls = {
    get: async () => {
        const response = await fetch('https://movie-lovers-main.herokuapp.com/api/movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch your data from the server...')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch('https://movie-lovers-main.herokuapp.com/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new movie..')
        }
        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://movie-lovers-main.herokuapp.com/api/movies/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to update the movie...')
        }
        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://movie-lovers-main.herokuapp.com/api/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Could not delete the movie...')
        }
    }
}