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

//weather api

document.getElementById("weatherForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const output = document.getElementById("output");
  const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  output.innerHTML = "Loading...";

  try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const { name, main, weather } = data;

      output.innerHTML = `
          <div class="weather">
              <h2>Weather in ${name}</h2>
              <p>Temperature: ${main.temp}°C</p>
              <p>Humidity: ${main.humidity}%</p>
              <p>Condition: ${weather[0].description}</p>
          </div>
      `;
  } catch (error) {
      output.innerHTML = `<p class="error">${error.message}</p>`;
  }
});



