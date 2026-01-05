const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

async function fetchJson(url) {
    const res = await fetch(url);
    
    if(!res.ok){
        throw new Error ("Request Failed");
    }

    return res.json();
}



export  function fetchDailyStocks(symbol) {   
    return fetchJson(`${BASE_URL}/api/v1/stocks/${symbol}/daily`);
}

export async function fetchWeeklyStocks(symbol) {
    return fetchJson(`${BASE_URL}/api/v1/stocks/${symbol}/weekly`);
}


export async function fetchMonthlyStocks(symbol) {
    return fetchJson(`${BASE_URL}/api/v1/stocks/${symbol}/monthly`);
}
