document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        { title: "Treinamento 1", thumbnail: "thumbs/treinamento1.jpg", src: "videos/treinamento1.mp4", category: "Segurança", description: "Este treinamento aborda medidas de segurança no ambiente de trabalho." },
        { title: "Treinamento 2", thumbnail: "thumbs/treinamento2.jpg", src: "videos/treinamento2.mp4", category: "Desenvolvimento", description: "Aprenda conceitos fundamentais de desenvolvimento web." },
        { title: "Treinamento 3", thumbnail: "thumbs/treinamento3.jpg", src: "videos/treinamento3.mp4", category: "Segurança", description: "Dicas de segurança digital para proteger seus dados." },
        { title: "Treinamento 4", thumbnail: "thumbs/treinamento4.jpg", src: "videos/treinamento4.mp4", category: "RH", description: "Como melhorar o ambiente organizacional na empresa." },
        { title: "Treinamento 5", thumbnail: "videos/thumb/MTA_ San Andreas 19_01_2025 04_41_38.png", src: "videos/2025-01-24 20-08-21.mp4", category: "Desenvolvimento", description: "Técnicas avançadas de programação para desenvolvedores." }
    ];

    const videoContainer = document.getElementById("videoContainer");
    const categoryFilter = document.getElementById("categoryFilter");

    // Preencher o menu de categorias
    const categories = [...new Set(videos.map(video => video.category))];
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.innerText = category;
        categoryFilter.appendChild(option);
    });

    // Função para carregar vídeos filtrados
    function loadVideos(filterCategory = "todas") {
        videoContainer.innerHTML = "";
        videos
            .filter(video => filterCategory === "todas" || video.category === filterCategory)
            .forEach(video => {
                const videoCard = document.createElement("div");
                videoCard.classList.add("video-card");

                videoCard.innerHTML = `
                    <img src="${video.thumbnail}" alt="${video.title}" onclick="window.location.href='video.html?src=${video.src}&title=${video.title}&desc=${encodeURIComponent(video.description)}'">
                    <h3>${video.title}</h3>
                `;

                videoContainer.appendChild(videoCard);
            });
    }

    // Carregar todos os vídeos inicialmente
    loadVideos();

    // Atualizar os vídeos ao selecionar uma categoria
    categoryFilter.addEventListener("change", function() {
        loadVideos(this.value);
    });
});
