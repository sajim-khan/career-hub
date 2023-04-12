import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  LineChart,
} from "recharts";

const Statistics = () => {

const marks = [
  {
    id: 1,
    assignmentName: "Assignment 1",
    assignmentMarks: 57,
  },
  {
    id: 2,
    assignmentName: "Assignment 2",
    assignmentMarks: 56,
  },
  {
    id: 3,
    assignmentName: "Assignment 3",
    assignmentMarks: 58,
  },
  {
    id: 4,
    assignmentName: "Assignment 4",
    assignmentMarks: 60,
  },
  {
    id: 5,
    assignmentName: "Assignment 5",
    assignmentMarks: 49,
  },
  {
    id: 6,
    assignmentName: "Assignment 6",
    assignmentMarks: 60,
  },
  {
    id: 7,
    assignmentName: "Assignment 7",
    assignmentMarks: 60,
  },
  {
    id: 8,
    assignmentName: "Assignment 8",
    assignmentMarks: 58,
  },
];


    return (
      <div>
        <p className="text text-center font-semibold text-3xl bg-gray-200 py-7 ">
          Assignment Marks
        </p>
        <div className="m-20">
          <ComposedChart width={1200} height={400} data={marks}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="assignmentName" />
            <YAxis
              label={{ value: "Index", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="assignmentMarks"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Line type="monotone" dataKey="assignmentName" stroke="#ff7300" />
            <Bar dataKey="assignmentMarks" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </div>
      </div>
    );
};

export default Statistics; 

