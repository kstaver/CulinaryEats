
async function newFormHandler(event) {
    event.preventDefault();


    const title = document.querySelector('#post-title').value;
    const post_content = document.querySelector('#post-content').value;
    const category = document.querySelector('#category').value;

      

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            post_content,
            category
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);