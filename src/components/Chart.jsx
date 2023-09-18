import { LineChart, Line, XAxis, YAxis } from "recharts";
const Chart = () => {
  const marks = [
    { id: 1, name: "Alice", mathMark: 90, physicsMark: 85, chemistryMark: 88 },
    { id: 2, name: "Bob", mathMark: 85, physicsMark: 78, chemistryMark: 92 },
    { id: 3, name: "Carol", mathMark: 75, physicsMark: 65, chemistryMark: 80 },
    { id: 4, name: "Dave", mathMark: 65, physicsMark: 70, chemistryMark: 75 },
    { id: 5, name: "Eve", mathMark: 95, physicsMark: 88, chemistryMark: 90 },
    { id: 6, name: "Frank", mathMark: 80, physicsMark: 75, chemistryMark: 85 },
    { id: 7, name: "Grace", mathMark: 70, physicsMark: 60, chemistryMark: 72 },
    { id: 8, name: "Henry", mathMark: 60, physicsMark: 55, chemistryMark: 58 },
  ];

  return (
    <div>
      <LineChart width={800} height={400} data={marks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>

        <Line dataKey="mathMark" type="monotone" stroke="#180131"></Line>
        <Line dataKey={"physicsMark"} type={"monotone"} stroke="#CB2C31"></Line>
        <Line dataKey={"chemistryMark"} type={"monotone"} stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
