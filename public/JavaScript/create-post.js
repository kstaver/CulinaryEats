
async function newFormHandler(event) {
    event.preventDefault();


    const title = document.querySelector('#post-title').value;
<<<<<<< HEAD
    const description = document.querySelector('#description').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
=======
    const post_content = document.querySelector('#post-content').value;
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
    const category = document.querySelector('#category').value;

      

<<<<<<< HEAD
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            ingredients,
            instructions,
            category
        }),
        headers: { 'Content-Type': 'application/json' }
    });
=======
    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            post_content,
            category
        }),
        headers: { 'Content-Type': 'application/json' }
      });
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);