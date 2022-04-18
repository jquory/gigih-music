export const endPoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000/'
const clientId = '667073ce468c4501b68e6abe4158a87b'
const scope = [
    'playlist-modify-private',
    'playlist-read-private',
    'user-read-playback-state',
    'user-read-currently-playing'
]

export const url = `${endPoint}?client_id=${clientId}&scope=${scope.join('%20')}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`