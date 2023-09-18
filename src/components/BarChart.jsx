import { BarChart as Bchart, Bar, XAxis } from "recharts";

const BarChart = () => {
  const barChartData = [
    { id: 1, value: 30 },
    { id: 2, value: 45 },
    { id: 3, value: 20 },
    { id: 4, value: 60 },
    { id: 5, value: 80 },
    { id: 6, value: 55 },
    { id: 7, value: 70 },
    { id: 8, value: 42 },
  ];

  return (
    <div>
      <Bchart width={300} height={200} data={barChartData}>
        <XAxis dataKey={'id'}></XAxis>
        <Bar dataKey={"value"} fill="red"></Bar>
      </Bchart>
    </div>
  );
};

export default BarChart;
