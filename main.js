const route = routes[path] || routes["home"];
fetch(route)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Page not found");
        }
        return response.text();
    })
    .then((html) => {
        app.innerHTML = html;

        // Ažuriramo aktivni link u navigaciji
        const links = navBar.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            if (link.getAttribute("href") === `/${path}`) {
                link.style.fontWeight = "bold";
                link.style.textDecoration = "underline";
            } else {
                link.style.fontWeight = "normal";
                link.style.textDecoration = "none";
            }
        }
    })
    .catch((error) => {
        app.innerHTML = "<h1>Error loading page</h1>";
        console.error(error);
    });