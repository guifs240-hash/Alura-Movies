document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const savedTheme = localStorage.getItem('netflixTheme');

    const applyTheme = (theme) => {
        if (theme === 'light') {
            root.classList.add('light-theme');
            root.classList.remove('dark-theme');
            themeToggle.checked = true;
            themeText.textContent = 'Modo Claro';
        } else {
            root.classList.add('dark-theme');
            root.classList.remove('light-theme');
            themeToggle.checked = false;
            themeText.textContent = 'Modo Escuro';
        }
    };

    // Aplica tema salvo ou padrão (escuro)
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    themeToggle.addEventListener('change', () => {
        const nextTheme = themeToggle.checked ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('netflixTheme', nextTheme);
    });

    // Adiciona redirecionamento para o catálogo ao clicar em um perfil
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        profile.addEventListener('click', () => {
            // Extrai o nome e imagem do perfil clicado
            const figcaption = profile.querySelector('figcaption');
            const img = profile.querySelector('.img-wrapper img');
            
            if (figcaption && img) {
                const nomePerfil = figcaption.textContent;
                const imagemPerfil = img.src;
                
                // Armazena no localStorage
                localStorage.setItem('perfilAtivoNome', nomePerfil);
                localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            }
            
            window.location.href = './netflix-plataform-main/catalogo/catalogo.html';
        });
    });
});