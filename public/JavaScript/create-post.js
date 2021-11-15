async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const description = document.querySelector("#description").value;
  const ingredients = document.querySelector("#ingredients").value;
  const instructions = document.querySelector("#instructions").value;
  const category = document.querySelector("#category").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      ingredients,
      instructions,
      category,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/all-dishes");
    console.log("success")
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("click", newFormHandler);
