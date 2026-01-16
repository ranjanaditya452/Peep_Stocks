import { mapStockLogo, mapStockOverview, mapStockStatus } from "./ApiMapping";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

async function fetchJson(url) {
    const res = await fetch(url);   
    if(!res.ok){
        throw new Error (`Request failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export function fetchDailyStocks(symbol) {   
    return fetchJson(`${BASE_URL}/api/v1/stocks/${encodeURIComponent(symbol)}/daily`);
}

export function fetchWeeklyStocks(symbol) {
    return fetchJson(`${BASE_URL}/api/v1/stocks/${encodeURIComponent(symbol)}/weekly`);
}


export function fetchMonthlyStocks(symbol) {
    return fetchJson(`${BASE_URL}/api/v1/stocks/${encodeURIComponent(symbol)}/monthly`);
}

export function fetchLatestNews(symbol){
    const params = new URLSearchParams({symbol});
    return fetchJson(`${BASE_URL}/api/v1/news/latestNews?${params.toString()}`)
}

export async function fetchCompanyOverview(symbol){
    const apiOverviewResponse = await fetchJson(`${BASE_URL}/api/v1/stocks/overview-company/${encodeURIComponent(symbol)}`);
    return mapStockOverview(apiOverviewResponse);
}

export async function fetchStockLogo(symbol){
    const apiLogoResponse = await fetchJson(`${BASE_URL}/api/v1/logo/${encodeURIComponent(symbol)}`);
    return mapStockLogo(apiLogoResponse);
}

export async function fetchStockStatus(symbol){
    const res = await fetchJson(`${BASE_URL}/api/v1/stocks/${encodeURIComponent(symbol)}`);
    return mapStockStatus(res);
    
}

