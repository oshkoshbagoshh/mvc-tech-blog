// Allows users to delete blog posts on dashboard page and then redirect them to an updated dashboard
const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log("clicked me");
    console.log(event.target);
  
    let blogPostId = event.target.getAttribute("data-id");
    console.log(blogPostId);
  
    const response = await fetch(`/api/blogPost/${blogPostId}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  };
  
  // Allows for a user to edit blog posts on dashboard page by redirecting them to the /create/:id page
  const editBlogPost = async (event) => {
    event.preventDefault();
    console.log("clicked me");
  
    let blogPostId = event.target.getAttribute("data-id");
  
    document.location.assign(`/create/${blogPostId}`);
  };
  
  const editButton = document.querySelectorAll("#editBtn");
  
  // Event listners for edit buttons
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", editBlogPost);
  }
  
  const deleteButton = document.querySelectorAll("#deleteBtn");
  
  // Event listners for delete buttons
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePostHandler);
  }
  