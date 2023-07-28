const commentFormHandler = async (event) => {
    event.preventDefault();
if (event.target.matches('.submit-btn')) {
    console.log("submit button clicked", event.target.parentElement.children[1])
let element = event.target.parentElement.children[1];
    const postId = element.getAttribute('data-post-id');
    const comment = element.value.trim();
 
    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment,postId}),
            headers: { 'content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
} 

    }
};

document.querySelector('#post-list').addEventListener('click', commentFormHandler)