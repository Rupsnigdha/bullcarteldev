export interface StockRecommendation {
	name: string;
	id: string;
	currentMarketPrice: number;
	targetPrice: number;
	stoploss: number;
	investmentType: 'Long Term' | 'Short Term' | 'Intra-day';
	dateAdded: Date;
	horizon: number;
}
