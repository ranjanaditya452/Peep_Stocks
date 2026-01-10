import { mapStockOverview, mapStockStatus } from "./ApiMapping";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

async function fetchJson(url) {
    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
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

export function fetchCompanyOverview(symbol) {
    const apiOverviewResponse = fetchJson(`${BASE_URL}/api/v1/stocks/overview-company/${encodeURIComponent(symbol)}`);
    return mapStockOverview(apiOverviewResponse);
}

export async function fetchStockStatus(symbol) {
    try {
        const res = await axios.get(`${BASE_URL}/api/v1/stocks/${encodeURIComponent(symbol)}`);
        return mapStockStatus(res.data);
    } catch (error) {
        console.error("Failed to fetch stocks status:", error);
        throw error;
    }
}