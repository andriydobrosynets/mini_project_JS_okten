const userInfo= document.getElementById('user-info')
const JOSINUSer = new URL(location).searchParams.get('user')

const user = JSON.parse(JOSINUSer)

userInfo.innerHTML=`<h1 class="id-user">id- ${user.id}</h1> <h1>name- ${user.name}\n</h1> <h1>username- ${user.username}</h1><h1>email- ${user.email}</h1><h2>street- ${user.address.street}</h2> <h2>suite- ${user.address.suite}</h2><h2>city- ${user.address.city}</h2><h1>zipcode- ${user.address.zipcode}</h1><h2>geo lat- ${user.address.geo.lat}</h2><h2>geo lng- ${user.address.geo.lng}</h2><h1>phone- ${user.phone}</h1><h1>website- ${user.website}</h1><h2>company name- ${user.company.name}</h2><h3>catchPhrase- ${user.company.catchPhrase}</h3><h3>bs- ${user.company.bs}</h3>`

let Div= document.createElement('div')
let detailsBtn = document.createElement('button');
detailsBtn.classList.add('button-user-details')
detailsBtn.innerHTML = `<h1>POST OF CURRENT USER</h1>`
Div.innerHTML=''
Div.appendChild(detailsBtn)
detailsBtn.onclick = function ()

let title = document.createElement('h3')
    title.classList.add('title')
    title.innerText='TITLE'
    userInfo.appendChild(title)
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let postBox = document.createElement('div')
                postBox.classList.add('box-post')
                let detailsLink = document.createElement('a')
                detailsLink.classList.add('button-users-post')
                postBox.innerText = `${post.id} - ${post.title}`
                detailsLink.innerText = 'Details'
                detailsLink.href = `post-details.html?post=${JSON.stringify(post)}`
                postBox.appendChild(detailsLink)
                userInfo.appendChild(postBox)
            }
        })
}
userInfo.appendChild(detailsBtn)