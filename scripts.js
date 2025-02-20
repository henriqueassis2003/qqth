const notebooks = [
    { name: "Notebook 1", file: "notebooks/notebook1.html" },
    { name: "Notebook 2", file: "notebooks/notebook2.html" },
    { name: "Notebook 3", file: "notebooks/notebook3.html" }
];

let currentIndex = 0;

function loadNotebook(direction) {
    currentIndex += direction;
    
    // Garantir que o índice esteja dentro dos limites
    if (currentIndex < 0) currentIndex = notebooks.length - 1;
    if (currentIndex >= notebooks.length) currentIndex = 0;

    // Atualizar o título
    document.getElementById("notebook-title").textContent = notebooks[currentIndex].name;
    
    // Carregar o conteúdo do notebook
    fetch(notebooks[currentIndex].file)
        .then(response => response.text())
        .then(html => {
            document.getElementById("notebook-content").innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar o notebook:', error);
            document.getElementById("notebook-content").innerHTML = "<p>Erro ao carregar o notebook.</p>";
        });
}

// Carregar o primeiro notebook
loadNotebook(0);
