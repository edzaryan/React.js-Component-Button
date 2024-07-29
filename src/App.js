import Button from "./components/Button";
import { Bs0SquareFill } from "react-icons/bs";

const App = () => {
    return (
        <div>
            <Button
                variant="primary"
                size="md"
                disabled={false}
                shape="shaped"
                outline
                icon={<Bs0SquareFill />}
            >
                Primary
            </Button>
        </div>
    );
}

export default App;
