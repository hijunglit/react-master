import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms.ts';

interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    return <h1>Chart</h1>;
}

export default Chart;