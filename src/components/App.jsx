import Cash from "./Cash/Cash";
import Counter from "./Counter/Counter";
import Step from "./Step/Step";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
        margin: '10px',
        padding: '15px',
      }}
    >
      <Cash />
      <Step />
      <Counter/>
    </div>
  );
};
