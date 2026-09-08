import "./App.css";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <h1>👁 DRISHTI</h1>
          <p>Road Intelligence</p>
        </div>

        <nav className="menu">

          <button className="active">
            🏠 Dashboard
          </button>

          <button>
            🗺 Live Map
          </button>

          <button>
            🚗 Vehicles
          </button>

          <button>
            ⚠ Hazards
          </button>

          <button>
            📊 Analytics
          </button>

          <button>
            🕓 History
          </button>

        </nav>

        <div className="system-status">
          <span className="status-dot"></span>
          System Online
        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="main">

        {/* HEADER */}

        <header className="header">

          <div>
            <h2>Road Intelligence Dashboard</h2>
            <p>Real-time road safety monitoring system</p>
          </div>

          <div className="live-status">
            🟢 LIVE
          </div>

        </header>


        {/* STATISTICS */}

        <section className="stats">

          <div className="stat-card">
            <p>Roads Scanned</p>
            <h2>128</h2>
          </div>

          <div className="stat-card danger">
            <p>High Risk Roads</p>
            <h2>23</h2>
          </div>

          <div className="stat-card">
            <p>Active Hazards</p>
            <h2>347</h2>
          </div>

          <div className="stat-card">
            <p>Active Vehicles</p>
            <h2>06</h2>
          </div>

        </section>


        {/* ROAD MAP */}

        <section className="dashboard-grid">

          <div className="map-card">

            <div className="card-header">

              <div>
                <h3>🗺 Live Road Intelligence Map</h3>
                <p>Current road safety status</p>
              </div>

              <span className="map-status">
                ● Live Data
              </span>

            </div>


            {/* MAP PLACEHOLDER */}

            <div className="map">

              <div className="road road-green"></div>

              <div className="road road-yellow"></div>

              <div className="road road-red"></div>

              <div className="vehicle vehicle-one">
                🚗
              </div>

              <div className="vehicle vehicle-two">
                🚙
              </div>

              <div className="hazard-marker">
                ⚠
              </div>

            </div>


            <div className="legend">

              <span>🟢 Safe</span>
              <span>🟡 Moderate</span>
              <span>🟠 Risky</span>
              <span>🔴 High Risk</span>

            </div>

          </div>


          {/* ROAD HEALTH */}

          <div className="health-card">

            <h3>Road Health</h3>

            <div className="score">

              <div className="score-circle">
                <h1>68</h1>
                <span>/100</span>
              </div>

              <h3>MODERATE</h3>

            </div>


            <div className="risk-list">

              <div>
                <span>🟢 Safe</span>
                <strong>62%</strong>
              </div>

              <div>
                <span>🟡 Moderate</span>
                <strong>21%</strong>
              </div>

              <div>
                <span>🟠 Risky</span>
                <strong>10%</strong>
              </div>

              <div>
                <span>🔴 High Risk</span>
                <strong>7%</strong>
              </div>

            </div>

          </div>

        </section>


        {/* HAZARD SECTION */}

        <section className="hazards-section">

          <h3>⚠ Recent Hazard Intelligence</h3>

          <div className="hazard-grid">

            <div className="hazard-card">
              <span>🕳</span>
              <h3>17</h3>
              <p>Potholes Detected</p>
            </div>

            <div className="hazard-card">
              <span>💧</span>
              <h3>03</h3>
              <p>Waterlogging</p>
            </div>

            <div className="hazard-card">
              <span>⚠</span>
              <h3>04</h3>
              <p>Speedbreakers</p>
            </div>

            <div className="hazard-card">
              <span>🛣</span>
              <h3>08</h3>
              <p>Road Cracks</p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
