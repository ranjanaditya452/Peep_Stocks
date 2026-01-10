export function mapStockOverview(api)
{   
    if(!api || !api.symbol)
    {
        throw new Error("Invalid overview api response");
    }
    return {
        symbol:api.symbol,
        assetType:api.assetType,
        name:api.name ?? "N/A",
        description:api.description ?? "",
        exchange:api.exchange ?? "",
        currency:api.currency ?? "",
        country:api.country ?? "",
        sector:api.sector ?? "", 
        officialSite:api.officialSite ?? "",
        marketCap:Number(api.marketCap) || 0,
        peRatio:Number(api.peRatio) || null,
        fiftyTwoWeekHigh:Number(api.fiftyTwoWeekHigh) || null,
        fiftyTwoWeekLow:Number(api.fiftyTwoWeekLow) || null,
    }
}

export function mapStockStatus(api)
{
    return{
        symbol:api.symbol,
        price:api.price,
        lastUpdated:api.lastUpdated,
        closePrice:api.closePrice,
        change:api.change,
        changePercent:api.changePercent,
    }
}

export function mapStockLogo(api)
{
    return{
        name:api.name,
        image:api.image,
        ticker:api.ticker,
    }
}
      