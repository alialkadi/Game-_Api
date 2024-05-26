import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home{
    constructor() {
        this.getGames("MMORPG")
        document.querySelectorAll('.nav-link').forEach((nav) => {
            nav.addEventListener('click',  (e) => {
                document.querySelector('.navbar-nav .active').classList.remove("active");
                nav.classList.add('active');
                this.getGames(e.target.dataset.category);
                
            });
        });
        this.ui = new Ui();
        
    }
    async getGames(cat) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5d81c70deamshc3164b6d03c8499p12cab5jsn87a29ac8c27b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        
        };
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options );
        const responce = await data.json();
        console.log(cat, responce);
        this.ui.displayGame(responce);
        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click', () => {
                const id = card.dataset.id;
                document.querySelector(".details").classList.remove("d-none");
                document.querySelector(".games").classList.add("d-none");
                this.details = new Details(id);
            })
        })
        loading.classList.add("d-none");

    }

} 