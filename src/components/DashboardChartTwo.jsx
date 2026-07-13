import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, } from "recharts";

const DashboardChartTwo = ({ pokemon }) => {
    if (!pokemon || pokemon.length === 0) {
        return <p>Loading chart...</p>;
    }

    const chartData = pokemon.map((p) => ({
    name: p.name,
    height: p.height / 10,
    weight: p.weight / 10,
  }));

  return (
    <div className="chart-card">
      <div className="chart-title">Height vs. Weight</div>

      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, right: 5, bottom: 20, left: 5 }}>
          <CartesianGrid />

          <XAxis
            type="number"
            dataKey="height"
            name="Height"
            label={{
                value: "Height (m)",
                position: "insideBottom",
                offset: -10,
            }}
          />

          <YAxis
            type="number"
            dataKey="weight"
            name="Weight"
            label={{
                value: "Weight (kg)",
                angle: -90,
                position: "insideLeft",
                dy: 40,
            }}
          />

          <Tooltip content={({ active, payload }) => {
                if (active && payload && payload.length) {
                const p = payload[0].payload;

                return (
                    <div
                    style={{
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "10px",
                    }}
                    >
                    <strong>{p.name}</strong>
                    <p>Height: {p.height} m</p>
                    <p>Weight: {p.weight} kg</p>
                    </div>
                );
            } return null;}}
        />

          <Scatter data={chartData} />
        </ScatterChart>
      </ResponsiveContainer>

      <div className="chart-desc">
        This scatter plot compares Pokémon height and weight. Most Pokémon are
        smaller and lighter, while only a few have much larger measurements.
      </div>
    </div>
  );
}

export default DashboardChartTwo