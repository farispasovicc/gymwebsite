

const routes = {
    "/": "/views/home.html",
    "/about": "/views/about.html",
    "/services": "/views/services.html",
    "/contact": "/views/contact.html",
};


async function navigateTo(url) {
    const route = routes[url] || routes["/"];
    const response = await fetch(route);
    const html = await response.text();
    document.getElementById("app").innerHTML = html;


    document.querySelectorAll("nav a").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === url);
    });
}


window.onpopstate = () => {
    navigateTo(window.location.pathname);
};


document.addEventListener("click", event => {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        window.history.pushState(null, null, url);
        navigateTo(url);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.pathname);
});
