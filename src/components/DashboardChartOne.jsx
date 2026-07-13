import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from "recharts";

const DashboardChartOne = ({ pokemon }) => {
    if (!pokemon || pokemon.length === 0) {
        return <p>Loading chart...</p>;
    }

    const typeCounts = {};

    pokemon.forEach((p) => {
        p.types.forEach((t) => {
            const type = t.type.name;
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });
    });

    const chartData = Object.entries(typeCounts).map(([type, count]) => ({ type, count, }))

    return (
        <div className="charts">
            <div className="chart-card">
                <div className="card-title">Pokémon Type Distribution</div>

                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}
                    margin={{
                        top: 10,
                        right: 5,
                        left: 5,
                        bottom: 40,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="type"
                        label={{
                            value: "Type",
                            position: "insideBottom",
                            offset: -20,
                        }}
                    />

                    <YAxis allowDecimals={false} 
                        label={{
                            value: "Number of Pokémons",
                            angle: -90,
                            position: "insideLeft",
                            dy: 60,
                        }}
                    />

                    <Tooltip />

                    <Bar dataKey="count" fill="#3B4CCA" />
                </BarChart>
                </ResponsiveContainer>

                <div className="chart-desc">
                    This chart shows the distribution of Pokémon types and helps identify
                    which types appear most frequently in the dataset.
                </div>
            </div>
        </div>
    );
}

export default DashboardChartOne