import { useState } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { Stage, Layer, Circle, Rect, RegularPolygon } from 'react-konva';
import { rectangle, circle, polygon, STROKE_WIDTH } from '../../const';

type Shapes = {
  type: string;
  id: string;
};

type CanvasProps = {
  shapes: Shapes[];
  isCursorMode: boolean;
};

function Canvas({ shapes, isCursorMode }: CanvasProps): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const checkDeselect = (e: KonvaEventObject<MouseEvent>) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  return (
    <Stage
      width={window.innerWidth * 3}
      height={window.innerHeight * 3}
      draggable
      onClick={checkDeselect}
    >
      <Layer>
        {shapes.map((shape) => {
          const commonProps = {
            draggable: isCursorMode,
            stroke: shape.id === selectedId ? 'black' : undefined,
            strokeWidth: STROKE_WIDTH,
          };

          switch (shape.type) {
            case 'Rectangle':
              return (
                <Rect
                  key={shape.id}
                  x={rectangle.x}
                  y={rectangle.y}
                  width={rectangle.width}
                  height={rectangle.height}
                  fill={rectangle.fill}
                  onClick={() => setSelectedId(shape.id)}
                  {...commonProps}
                />
              );
            case 'Circle':
              return (
                <Circle
                  key={shape.id}
                  x={circle.x}
                  y={circle.y}
                  radius={circle.radius}
                  fill={circle.fill}
                  onClick={() => setSelectedId(shape.id)}
                  {...commonProps}
                />
              );
            case 'Triangle':
              return (
                <RegularPolygon
                  key={shape.id}
                  x={polygon.x}
                  y={polygon.y}
                  sides={polygon.sides}
                  radius={polygon.radius}
                  fill="blue"
                  onClick={() => setSelectedId(shape.id)}
                  {...commonProps}
                />
              );
            default:
              return null;
          }
        })}
      </Layer>
    </Stage>
  );
}

export default Canvas;
