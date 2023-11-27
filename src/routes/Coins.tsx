import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justiry-content: cebter;
    align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    border: 1px solid white;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    fons-size: 48px;
    color: ${(props) => props.theme.accentColor}
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string
}

interface ICoinsProps {
    toggleDark: () => void;
}
function Coins({ toggleDark }: ICoinsProps) {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    },[]);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDark}>Toggle Dark Mode</button>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link 
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name},
                                }}
                            >
                                <Img 
                                    src={`https://coinicons-api.vercel.app/api/icon/btc`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    )
}
export default Coins;