import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import Price from './Price';

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>({
        queryKey: ["ohlcv", coinId],
        queryFn: () => fetchCoinHistory(coinId),
        refetchInterval: 10000,
    })
    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ): (
                <ApexChart 
                    type='candlestick'
                    series={[
                        {
                            data: [{
                                x: new Date(1538778600000),
                                y: [51.98, 56.29, 51.59, 53.85]
                              },
                              {
                                x: new Date(1538780400000),
                                y: [53.66, 54.99, 51.35, 52.95]
                              },
                              {
                                x: new Date(1538782200000),
                                y: [52.76, 57.35, 52.15, 57.03]
                              }]
                        }
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            type: 'candlestick',
                            height: 300,
                            width: 500,
                            background: "transparent",
                        },
                        title: {
                            text:'Nomad Chart',
                        },
                        grid: { show: false },
                        yaxis: {
                            tooltip: {
                                enabled: false,
                            }
                        },
                        xaxis: {
                            type: "datetime",
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                        },
                        colors: ["#0fbcf9"],
                    }}
                />
            )}
        </div>
    )
}

export default Chart;