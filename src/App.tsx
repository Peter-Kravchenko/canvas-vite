import { useState } from 'react';
import Canvas from './components/Canvas/Canvas';
import ToolPanel from './components/ToolPanel/ToolPanel';

function App(): JSX.Element {
  const [shapes, setShapes] = useState<{ type: string; id: string }[]>([]);
  const [isCursorMode, setIsCursorMode] = useState(false);

  const handleShapeSelect = (shapeType: string) => {
    const newShape = {
      type: shapeType,
      id: `${shapeType}-${shapes.length + 1}`,
    };
    setShapes([...shapes, newShape]);
    console.log('Форма добавлена:', shapeType);
  };

  const toggleCursorMode = () => {
    setIsCursorMode(!isCursorMode);
  };

  return (
    <div>
      <ToolPanel
        onShapeSelect={handleShapeSelect}
        onCursorToggle={toggleCursorMode}
        isCursorMode={isCursorMode}
      />
      <Canvas shapes={shapes} isCursorMode={isCursorMode} />
    </div>
  );
}

export default App;
