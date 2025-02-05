
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    Credit: 4000,
    Debut: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    Credit: 3000,
    Debut: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    Credit: 2000,
    Debut: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Credit: 2780,
    Debut: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    Credit: 1890,
    Debut: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Credit: 2390,
    Debut: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Credit: 3490,
    Debut: 4300,
    amt: 2100,
  },
];

const Compare = () => {
  return (
    <div>
      <h1>this is compare page</h1>
      <div style={{ width: '101%', height: '800px' }}>
      <ResponsiveContainer width="100%" height="99%">
        <LineChart
          data={data}
          isAnimationActive={false}  // Disable the animation
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="Debut" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="Credit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div></div>
  );
};

export default Compare;
