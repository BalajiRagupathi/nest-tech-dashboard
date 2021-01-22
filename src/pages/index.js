import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import fetch from "isomorphic-unfetch";
import styles from "../styles/dashboard.module.css";

function Dashboard(props) {
    
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Graphical Representation</h1>
      <div className={styles.graph}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="popularity"
            isAnimationActive={false}
            data={props.data.top}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={props.data.top}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="popularity"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </div>
    </div>
  );
}

Dashboard.getInitialProps = async function () {
  const res = await fetch(
    "https://tech-dashboard-nest-api.herokuapp.com/dashboard/list"
  );
  const data = await res.json();
  
  return {
    data,
  };
};

export default Dashboard;
