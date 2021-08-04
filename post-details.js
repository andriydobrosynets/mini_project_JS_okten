const postDiv = document.getElementById('posts')
const JOSINUSer = new URL(location).searchParams.get('post');

const post = JSON.parse(JOSINUSer);

postDiv.innerHTML= `<h1 class="id-post" >userId- ${post.userId}</h1>
<h1>id- ${post.id}</h1>
<h1>title- ${post.title}\n</h1>
<h1>body- ${post.body}</h1>`


let Div= document.createElement('div')
let detailsBtn = document.createElement('button');
detailsBtn.classList.add('button-user-details')
detailsBtn.innerHTML = `<h1>COMMENT OF CURRENT POST</h1>`;
Div.appendChild(detailsBtn)
detailsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            let commentsBox = document.getElementsByClassName('comments-box')[0]
            commentsBox.innerText = ''
            for (const comment of comments) {
                let pPost = document.createElement('p')
                pPost.innerText = `postID- ${comment.postId}\n id- ${comment.id}\n name- ${comment.name}\n email- ${comment.email}\n body- ${comment.body}`
                commentsBox.append(pPost)

            }
        })
}
postDiv.appendChild(detailsBtn);