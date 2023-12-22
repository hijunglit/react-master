import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

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
    isDark: boolean;
}

function Chart({ coinId, isDark }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>({
        queryKey: ["ohlcv", coinId],
        queryFn: () => fetchCoinHistory(coinId),
        refetchInterval: 10000,
    })
    const exceptData = data ?? [];
    const chartData = exceptData?.map((i:IHistorical) => {
        return {
            x: i.time_close,
            y: [i.open, i.high, i.low, i.close]
        };
    });
    return (
        <div>
            {isLoading ? (
                "Loading Chart..."
            ): (
                <ApexChart 
                    type='candlestick'
                    series={[{data:chartData}]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
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