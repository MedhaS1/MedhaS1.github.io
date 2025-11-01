// Simple search + tag filter + theme toggle

const searchInput = document.getElementById("searchInput");
const postContainer = document.getElementById("postContainer");
const posts = Array.from(postContainer.querySelectorAll(".post-card"));
const tagList = document.getElementById("tagList");
const themeToggle = document.getElementById("themeToggle");

// Filter by search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").textContent.toLowerCase();
    const body = post.querySelector(".post-body").textContent.toLowerCase();

    const matches = title.includes(query) || body.includes(query);
    post.style.display = matches ? "flex" : "none";
  });
});

// Filter by tag
tagList.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "LI") {
    const selected = e.target.getAttribute("data-tag");

    // update active class
    tagList.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");

    posts.forEach((post) => {
      const postTags = post.getAttribute("data-tags") || "";
      if (selected === "all" || postTags.includes(selected)) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    });
  }
});

// Theme toggle (light/dark)
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});
