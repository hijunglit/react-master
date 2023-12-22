import { useQuery } from '@tanstack/react-query';
import { fetchCoinTickers } from '../api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;

const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;

interface PriceProps {
    coinId: string,
    isDark: boolean,
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  }

function Price({ coinId, isDark }:PriceProps) {
    const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>({
        queryKey: ["tickers", coinId],
        queryFn: () => fetchCoinTickers(coinId),
        refetchInterval: 5000,
    });
    const loading = tickersData;

    return (
        <Container>
            <Overview>
                <OverviewItem>
                    <span>Max Supply</span>
                    <span>{tickersData?.max_supply}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Last Updated</span>
                    <span>{tickersData?.last_updated}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    
                </OverviewItem>
            </Overview>
        </Container>
    )
}

// function Price() {
//     return (

//     )
// }

export default Price;