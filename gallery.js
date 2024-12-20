const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling; 
    content.classList.toggle('visible'); 
  });
}); // second task


//task cetri
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      

      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }


      accordions.forEach(function(otherAccordion) {
        const otherPanel = otherAccordion.nextElementSibling;
        if (otherAccordion !== accordion && otherPanel.style.display === 'block') {
          otherPanel.style.display = 'none';
        }
      });
    });
  });
}); 


//blog task i edit and delete options
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  fetch("data.json")
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .then(data => renderPosts(data))
    .catch(() => blogContainer.innerHTML = "<p>Error loading blog posts.</p>");

  const renderPosts = (posts) => {
    blogContainer.innerHTML = posts.map((post, i) => `
      <div class="blog-post">
        <h3>${post.title}</h3>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button onclick="editPost(${i})">Edit</button>
        <button onclick="deletePost(${i})">Delete</button>
      </div>`).join("");
      //EDITUJEŠ OVDJE!!
    window.posts = posts;
  };

  window.editPost = (i) => {
    const post = posts[i];
    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);
    if (newTitle && newContent) {
      posts[i] = { ...post, title: newTitle, content: newContent };
      alert("Post updated successfully!");
      renderPosts(posts);
    }
  };

  window.deletePost = (i) => {
    if (confirm("Are you sure you want to delete this post?")) {
      posts.splice(i, 1);
      alert("Post deleted successfully!");
      renderPosts(posts);
    }
  };
});


