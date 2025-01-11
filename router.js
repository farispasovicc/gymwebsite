const routes = {
    "/": "/index_login.html", 
    "/onama": "/onama.html", 
    "/cijene": "/cijene.html", 
    "/lokacija": "/lokacija.html",
    "/slike": "/slike.html",
};


const navigateTo = (url) => {
    history.pushState(null, null, url); 
    loadContent(url);
};


const loadContent = async (url) => {
    const route = routes[url] || routes["/"];
    const response = await fetch(route); 
    const content = await response.text();
    document.getElementById("app").innerHTML = content; 
};


document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (link) {
        e.preventDefault(); 
        navigateTo(link.getAttribute("href")); 
    }
});


window.addEventListener("popstate", () => {
    loadContent(window.location.pathname);
});


document.addEventListener("DOMContentLoaded", () => {
    loadContent(window.location.pathname);
});






