import Canvas from '../Canvas/Canvas';
import ToolPanel from '../ToolPanel/ToolPanel';

function App() {
  const handleShapeSelect = (shape: string) => {
    console.log('Форма выбрана:', shape);
  };

  return (
    <div>
      <ToolPanel onShapeSelect={handleShapeSelect} />
      <Canvas />
    </div>
  );
}

export default App;
