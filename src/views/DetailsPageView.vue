<template>
    <div style="margin-top: 2rem; margin-left: 4rem;">
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
        <figure>
            <img :src="setUrl" alt="">
            <figcaption>
                <h2>{{ movie.title }}</h2>
                <p>{{ movie.overview }}</p>
                <ul class="info">
                    <li>Release: <span>{{ movie.release_date }}</span></li>
                    <li>Buget: <span>{{ movie.budget }}$</span></li>
                    <li>Revenue: <span>{{ movie.revenue }}$</span></li>
                    <li>Rating: <span>{{ movie.vote_average }}/10</span></li>
                    <li>Homepage: <a :href="movie.homepage" target="_blank"><span>{{ movie.homepage }}</span></a></li>
                </ul>
                <ul class="genre">
                    <li v-for="genre in movie.genres" :key="genre.id">
                        <a href="#">{{ genre.name }}</a>
                    </li>
                </ul>
            </figcaption>
        </figure>
        <section>
            <div class="heading">
                <h3>Cast</h3>
                <div class="chevron-group">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>
            <ul class="cast">
                <li v-for="cast in credits" :key="cast.id">
                    <img :src="setCustomUrl(cast.profile_path)" alt="">
                    <p>{{ cast.name }}</p>
                </li>
            </ul>
        </section>
        <section v-for="i in video" :key="i.id" class="video-player">
            <h3>{{ i.name }}</h3>
            <iframe :src="setVideoUrl(i.key)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
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
            moveId: this.$route.params.id,
            movie: {},
            favs: [],
            favs2: [],
            credits: {},
            video: []
        }
    },
    async created() {
        const a = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d")
        const d = await a.json()
        this.favs = d.results.slice(10, 13)
        this.favs2 = d.results.slice(15, 18)

        const c = await fetch(`https://api.themoviedb.org/3/movie/${this.moveId}?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d`)
        const data = await c.json()
        this.movie = data
        console.log(data)

        const z = await fetch(`https://api.themoviedb.org/3/movie/${this.moveId}/credits?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d`)
        const o = await z.json()
        this.credits = o.cast.slice(0, 6)
        console.log(o)

        const response = await fetch(`https://api.themoviedb.org/3/movie/${this.moveId}/videos?api_key=cfd28171c3e2ccd8fdb64b5a8e13a97d`)
        const ok = await response.json()
        this.video = ok.results.slice(0, 3)
        console.log(this.video)
    },
    computed: {
        setUrl() {
            return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
        }
    },
    methods: {
        setCustomUrl(url) {
            return `https://image.tmdb.org/t/p/original/${url}`
        },
        setVideoUrl(key) {
            return `https://www.youtube.com/embed/${key}`
        }
    }
    
}
</script>
<style scoped>
    .info {
        margin-top: 2rem;
    }

    .info li{
        color: #696972;
        margin: 1rem 0;
    }

    .info span {
        color: #fff;
    }

    .info a {
        text-transform: inherit;
    }

    .video-player {
        margin-top: 4rem;
    }

    .video-player h3 {
        margin-bottom: 1rem;
    }

    iframe {
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .heading {
        display: flex;
        align-items: center;
        margin-top: 4rem;
        margin-bottom: 1.5rem;
    }

    .chevron-group {
        display: flex;
        margin-left: auto;
    }

    .left {
        background: url("../assets/chevron-left.svg");
    }

    .right {
        background: url("../assets/chevron-right.svg");
        margin-left: 1rem;
    }

    .left, .right {
        width: 40px;
        height: 40px;
        border: solid 1px #32333b;
        border-radius: 100%;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .cast {
        display: flex;
        overflow: hidden;
    }

    .cast li {
        flex: 0 0 20%;
    }

    .cast img {
        object-fit: cover;
        height: 25rem;
        padding: .30rem;
        width: 100%;
    }

    h3 {
        color: #fff;
    }

    .cast li {
        color: #696969;
    }

    main img {
        height: 50rem;
        border-radius: 1rem;
    }

    main figure {
        display: flex;
        margin-top: 2rem;
    }

    .genre {
        display: flex;
        margin-top: auto;
    }

    .genre li {
        margin-right: 1rem;
    }

    main figure figcaption {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    main figcaption h2 {
        margin: 0;
    }

    main figcaption p {
        color: #696972;
        margin-top: 1.5rem;
    }

    .genre a {
        border: solid 1px #32333b;
        border-radius: 1rem;
        padding: 1rem;
        display: block;
    }

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
        color: #fff;
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
</style>