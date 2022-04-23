<template>
    <div>
        <h1>Ciné<span style="color: red;">+</span></h1>
        <nav>
            <section>
                <h3>menu</h3>
                <ul>
                    <li class="selected"><a href="#">home</a></li>
                    <li><a href="#">community</a></li>
                    <li><a href="#">discovery</a></li>
                    <li><a href="#">coming soon</a></li>
                </ul>
            </section>
            <section>
                <h3>social</h3>
                <ul>
                    <li><a href="#">friends</a></li>
                    <li><a href="#">parties</a></li>
                    <li><a href="#">Media</a></li>
                </ul>
            </section>
            <section>
                <h3>general</h3>
                <ul>
                    <li><a href="#">settings</a></li>
                    <li><a href="#">log out</a></li>
                </ul>
            </section>
        </nav>
    </div>
    <main>
        <h2>Bienvenu sur votre espace</h2>
        <figure class="main-card">
            <video src="../assets/testvideo.mp4" autoplay loop class="main-img" muted></video>
            <!-- <img :src="setUrl" alt="" class="main-img"> -->
            <figcaption class="main-content">
                <h4>{{ movie.original_title }}</h4>
                <p>Action, Adventure</p>
                <button>En Savoir Plus</button>
            </figcaption>
        </figure>
        <article>
            <h3>Trending</h3>
            <ul>
                <li v-for="i in movies" :key="i.id">
                    <router-link 
                        :to="'/details/' + i.id"
                    >
                        <figure>
                            <img :src="setCustomUrl(i.poster_path)" alt="">
                        </figure>
                    </router-link>
                </li>
            </ul>
        </article>
        <article class="test">
            <h3>Continue Watching</h3>
            <ul>
                <li v-for="i in movies2" :key="i.id">
                    <figure>
                        <img :src="setCustomUrl(i.poster_path)" alt="">
                    </figure>
                </li>
            </ul>
        </article>
    </main>
    <aside>
        <input type="search" placeholder="Search" class="search-input">
        <section>
            <h3>Popular Movies</h3>
            <ul>
                <li v-for="fav in favs" :key="fav.id">
                    <figure>
                        <img :src="setCustomUrl(fav.poster_path)" alt="">
                        <figcaption>
                            <h5>{{ fav.title }}</h5>
                            <p>Action, Horror</p>
                            <p class="grade">Score {{ fav.vote_average }}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <button>See More</button>
        </section>
        <section>
            <h3>Favorites</h3>
            <ul>
                <li v-for="fav in favs2" :key="fav.id">
                    <figure>
                        <img :src="setCustomUrl(fav.poster_path)" alt="">
                        <figcaption>
                            <h5>{{ fav.title }}</h5>
                            <p>Action, Horror</p>
                            <p class="grade">Score {{ fav.vote_average }}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <button>See More</button>
        </section>
    </aside>
</template>

<script>

export default {
    data() {
        return {
            movie: {},
            movies: [],
            favs: [],
            favs2: [],
            movies2: []
        }
    },
    async created() {
        const response = await fetch("https://api.themoviedb.org/3/movie/63223?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d")
        const data = await response.json()
        this.movie = data

        const a = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d")
        const d = await a.json()
        this.movies = d.results.slice(4, 8)
        console.log(this.movie)
        this.favs = d.results.slice(10, 13)
        this.favs2 = d.results.slice(15, 18)
        this.movies2 = d.results.slice(0, 3)
    },
    computed: {
        setUrl() {
            return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
        }
    },
    methods: {
        setCustomUrl(url) {
            return `https://image.tmdb.org/t/p/original/${url}`
        }
    }
}
</script>
<style scoped>
    body {
        overflow: hidden;
    }

    .grade {
        margin-top: auto;
    }

    aside h3, aside h5 {
        color: #fff;
    }

    aside section {
        margin-bottom: 6rem;
    }

    aside h5 {
        margin-bottom: 0.5rem;
    }

    aside h3 {
        margin-bottom: 3rem;
    }

    aside figure {
        display: flex;
        margin-bottom: 2rem;
    }

    aside figure img {
        height: 12rem;
        border-radius: 1rem;
    }

    aside figure figcaption {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        padding-bottom: 0;
    }

    aside figure figcaption p {
        color: #696969;
    }

    aside {
        padding: 5rem;
        padding-top: 3rem;
        height: 100vh;
        overflow-y: scroll;
        scrollbar-color: transparent;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    aside button {
        background-color: red;
        color: #fff;
        padding: 1.5rem;
        border-radius: 1rem;
        width: 100%;
    }

    .search-input {
        background-color: #1F2025;
        border: solid 1px #32333b;
        border-radius: 3rem;
        padding: 1.5rem 2rem;
        margin-bottom: 3.5rem;
        width: 100%;
    }

    nav {
        width: 100%;
    }

    nav section {
        margin-bottom: 5rem;
    }

    .selected {
        border-right: red 5px solid;
    }

    .selected a {
        color: #fff;
    }

    h1 {
        color: #fff;
        margin-bottom: 4rem;
    }

    h2 {
        color: #fff;
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    #app {
        background-color: #1F2025;
        display: grid;
        grid-template-columns: 15% 65% 20%;
    }

    #app div {
        margin-top: 3rem;
        margin-left: 5rem;
    }

    nav h3 {
        color: #696972;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    a {
        color: #696972;
        text-transform: capitalize;
    }

    main {
        padding: 3rem;
        border-left: solid 1px #32333b;
        border-right: solid 1px #32333b;
        height: 100vh;
        overflow-y: scroll;
    }

    .main-card {
        height: 30rem;
        margin: 0;
        position: relative;
    }

    .main-img {
        height: 100%;
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
    }

    .main-content {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 2rem;
        text-shadow: 0px 1px 5px black;
    }

    .main-content h4 {
        color: #fff;
    }

    .main-content p {
        color: #fff;
        margin: 0.5rem 0;
    }

    .main-content button {
        background-color: red;
        color: #fff;
        padding: 1rem;
        border-radius: 1rem;
    }

    main h3 {
        margin-top: 4rem;
        margin-bottom: 2rem;
        color: #fff;
    }

    article ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
    }

    article img {
        width: 100%;
        border-radius: 1rem;
    }

    .test ul {
        grid-template-columns: repeat(3, 1fr);
    }
</style>