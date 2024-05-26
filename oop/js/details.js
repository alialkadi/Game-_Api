import { Ui } from "./ui.js";

export class Details{
    constructor(id) { 
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".details").classList.add("d-none");
            document.querySelector(".games").classList.remove("d-none");
        });
        this.detDetails(id);
    }
    async detDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d81c70deamshc3164b6d03c8499p12cab5jsn87a29ac8c27b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

        let api = await fetch(url, options)
        let responce = await api.json();
        new Ui().displayDetails(responce)
        loading.classList.add("d-none");
        }
        
}