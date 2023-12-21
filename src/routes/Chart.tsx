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
                    series={
                        [{
                            data: [data?.map((data) => {
                                return {
                                    x: data?.time_close,
                                    y: data?.open
                                }
                            }) as any]
                    }]
                }
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
                            text:'Chart',
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