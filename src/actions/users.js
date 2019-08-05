import  users from '../randomUsers.json'

export function getAllUsers() {
    return users.map(user => {
        return {
            img: user.picture.thumbnail
        }
    })
}

export function getUser(id) {
    return users.find(user => user.id)
}