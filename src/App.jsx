import { useState, useEffect } from 'react';
import PokemonInfo from './components/pokemonInfo';
import Dashboard from './components/Dashboard';
import StatsCard from './components/statsCard';
import DashboardChartOne from './components/DashboardChartOne';
import DashboardChartTwo from "./components/DashboardChartTwo";
import './App.css';

function App() {
  const [list, setList] = useState(null);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
      );
      
      const data = await response.json();

      const details = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          return res.json();
        })
      );

      console.log(details);

      setList(details);
    }
      fetchPokemonData().catch(console.error);
  }, [])

  const mostCommonPokemon = (pokemons) => {
    const counts = {};

    for (let i = 0; i < pokemons.length; i++) {
      const name = pokemons[i].types[0].type.name;
      counts[name] = (counts[name] || 0) + 1;
    }

    let topType = "";
    let topCount = 0;

    for(const name in counts) {
      if (counts[name] > topCount) {
        topCount = counts[name];
        topType = name;
      }
    }

    return topType;
  };

  
  const allTypes = list ? [...new Set(list.flatMap((p) => p.types.map((t) => t.type.name)))] : [];
 
  const filtered = list?.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(query.toLowerCase());
    const matchType = type === "all" || p.types.some((t) => t.type.name === type);
    const matchMin = minExp === "" || p.base_experience >= Number(minExp);
    const matchMax = maxExp === "" || p.base_experience <= Number(maxExp);
    return matchSearch && matchType && matchMin && matchMax;
  });


  return (

  <>
      
      <div className="stats-area">
        <StatsCard
          title="Total Pokémons"
          stat={list?.length ?? 0}
        />

        <StatsCard
          title="Average Base Experience"
          stat={list? Math.round(list.reduce((sum, p) => sum + p.base_experience, 0) / list.length) : 0}
        />

        <StatsCard
          title="Most Common Pokémon Type"
          stat={list ? mostCommonPokemon(list) : "-"}
        />

      </div>

      <div className="filters">

        <div className="filter-group search-bar">
          <label className="search-title">Search</label>
          <input type="text" placeholder="Search Pokemons..." className="search-input" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>

        <div className="filter-group search-drop">
          <label className="search-title">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All Types</option>
            {allTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="search-title">Minimum Experience</label>
          <input type="number" placeholder="Min Exp" value={minExp}
            onChange={(e) => setMinExp(e.target.value)} />
        </div>

        <div className="filter-group">
          <label className="search-title">Maximum Experience</label>
          <input type="number" placeholder="Max Exp" value={maxExp}
            onChange={(e) => setMaxExp(e.target.value)} />
        </div>

      </div>

      <div className="dashboard-area">
        <Dashboard pokemon={filtered} />

        <div className="dashboard-charts">
          <div className="chart-title">Charts</div>
          <DashboardChartOne pokemon={filtered} />
         
          <DashboardChartTwo pokemon={list} />
        </div>
      </div>


  </>
  )
}

export default App
