import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";

const BarWrapper = styled.div`
  width: 50%;
`;

function BarChart({ label, values }) {
  const data = {
    labels: label,
    datasets: [
      {
        label: "No Of Images",
        data: values,
        backgroundColor: "rgba(35, 102, 184)"
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };
  return (
    <BarWrapper>
      <HorizontalBar data={data} options={options} />
    </BarWrapper>
  );
}

export default React.memo(BarChart);
