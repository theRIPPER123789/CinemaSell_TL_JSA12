const TMDB_API_KEY = "dbbaa5f1980d9ed78b340fa5d2446ddd";

//Phần responsive cho header
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');

})

const fetchTrending = async (time_window) => {
    let respone = await fetch(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${TMDB_API_KEY}`);
    const data = await respone.json();

    // console.log(data);
    return data.results;
}

const displayTreanding = async (movies) =>{
    const trendMovieContainer = document.getElementById('trend-movie');
    trendMovieContainer.innerHTML = '';
    let htmls = "";
    console.log(movies);

    htmls += movies.map(m => {
        return `
        <a href="./info.html?id=${m.id}" class="swiper-slide">
          <img src="https://image.tmdb.org/t/p/w200/${m.poster_path}" alt="${m.title}">
          <p>${m.title}</p>
        </a>
        `;
    }).join("");

    // console.log(htmls);
    trendMovieContainer.innerHTML = htmls;
}

fetchTrending("day").then(displayTreanding);











const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: true },
    slidesPerView: "auto",
    loop: true,
    slidesPerGroupAuto: true,
    navigation: {
        prevEl: `.swiper-button-prev`,
        nextEl: `.swiper-button-next`,
    },
});