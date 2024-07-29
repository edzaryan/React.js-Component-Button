import Button from "./components/Button";
import { Bs0SquareFill } from "react-icons/bs";


const App = () => {
  return (
    <div>
      <Button
          variant="primary"
          size="md"
          // block
          disabled={false}
          shape="shaped"
          outline
          icon={<Bs0SquareFill size={24} />}
      >
          Primary
      </Button>
    </div>
  );
}


export default App;
