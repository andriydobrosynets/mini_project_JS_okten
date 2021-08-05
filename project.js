const userBox = document.getElementById('users')
userBox.classList.add('users-box')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('box-h4')
            let detailsLink = document.createElement('a')
            detailsLink.classList.add('button-users')
            userDiv.innerText = `${user.id} - ${user.name}`
            detailsLink.innerText = 'Details'
            detailsLink.href = `user-details.html?user=${JSON.stringify(user)}`
            userDiv.appendChild(detailsLink)
            userBox.appendChild(userDiv)
        }
    })


