// --- EXERCÍCIO: Console Log Imediato ---
// Esta função roda sozinha assim que o arquivo é carregado
(async function logUsuariosImediato() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        console.log("--- Usuários carregados no início da página ---");
        usuarios.forEach(user => {
            console.log(`Nome: ${user.name} | Email: ${user.email}`);
        });
    } catch (error) {
        console.error("Erro no log inicial:", error);
    }
})();

// --- EXERCÍCIO 31 & 32: Renderizar Usuários no Clique ---
async function buscarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        const container = document.getElementById("lista-usuarios");

        container.innerHTML = "<h3>Lista de Usuários</h3>";

        usuarios.forEach(user => {
            container.innerHTML += `
                <div class="user-card-item">
                    <p><strong>Nome:</strong> ${user.name} - <strong>Email:</strong> ${user.email}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao renderizar usuários:", error);
    }
}

// --- EXERCÍCIO 11: Buscar Post (3 posts lado a lado) ---
async function buscarTresPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        const container = document.getElementById("container-posts-api");

        const apenasTres = posts.slice(0, 3);

        container.innerHTML = apenasTres.map(post => `
            <article class="post-card">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </article>
        `).join("");
    } catch (error) {
        console.error("Erro ao carregar posts:", error);
    }
}

// --- EXERCÍCIO 2: Criar card de posts via Entrada (Input) ---
function criarCardManual() {
    const titulo = document.getElementById("input-titulo").value;
    const texto = document.getElementById("input-texto").value;
    const container = document.getElementById("area-novos-posts");

    if (!titulo || !texto) {
        alert("Por favor, preencha o título e o texto do post!");
        return;
    }

    // A classe aqui foi alterada para 'post-card' para herdar a mesma estilização
    const cardHtml = `
        <div class="post-card">
            <h3>${titulo}</h3>
            <p>${texto}</p>
        </div>
    `;

    container.innerHTML += cardHtml;

    document.getElementById("input-titulo").value = "";
    document.getElementById("input-texto").value = "";
}

// --- EXERCÍCIO 29: Botão carregar (Event Listeners) ---
const btnLoadUsers = document.getElementById("btn-usuarios");
const btnLoadPosts = document.getElementById("btn-posts");

if (btnLoadUsers) {
    btnLoadUsers.addEventListener("click", buscarUsuarios);
}

if (btnLoadPosts) {
    btnLoadPosts.addEventListener("click", buscarTresPosts);
}