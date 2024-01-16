window.addEventListener("DOMContentLoaded", async () => {
    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    })
    fetch("README.md").then(response => response.text()).then(content => {
        document.getElementById("content").innerHTML = md.render(content)
    })
})