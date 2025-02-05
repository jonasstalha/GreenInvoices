import Form from "../home/Form";
import AlertBox from "../home/AlertBox";
import DebutChart from "../home/DebutChart";
import ChartTwo from "../home/Charttwo";
import "./Homme.css"; // Updated CSS file
import GenerateRapport from "../home/GenerateRaport";
import CashFlow from "../home/Cashflow";

const Homme = () => {
  return (
    <div className="container">
      <div className="form">
        <Form />
      </div>
      <div className="alert">
        <AlertBox />
      </div>
      <div className="generate-pie-container">
        <div className="GenerateRapport">
          <GenerateRapport />
        </div>
        <div className="CashFlow">
          <CashFlow />
        </div>
      </div>
      <div className="chart1">
        <DebutChart />
      </div>
      <div className="chart2">
        <ChartTwo />
      </div>
    </div>
  );
};

export default Homme;
