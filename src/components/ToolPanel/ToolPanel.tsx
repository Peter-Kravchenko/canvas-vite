import { Toolbar, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';

type ToolPanelsProps = {
  onShapeSelect: (shape: string) => void;
  onCursorToggle: () => void;
  isCursorMode: boolean;
};

function ToolPanel({
  onShapeSelect,
  onCursorToggle,
  isCursorMode,
}: ToolPanelsProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (shape: string) => {
    onShapeSelect(shape);
    handleClose();
  };

  return (
    <Toolbar>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant={anchorEl ? 'contained' : 'outlined'}
      >
        Выбрать фигуру
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect('Rectangle')}>
          Прямоугольник
        </MenuItem>
        <MenuItem onClick={() => handleSelect('Circle')}>Круг</MenuItem>
        <MenuItem onClick={() => handleSelect('Triangle')}>
          Треугольник
        </MenuItem>
      </Menu>
      <Button
        onClick={onCursorToggle}
        variant={isCursorMode ? 'contained' : 'outlined'}
      >
        Курсор {isCursorMode ? 'включен' : 'выключен'}
      </Button>
    </Toolbar>
  );
}

export default ToolPanel;
