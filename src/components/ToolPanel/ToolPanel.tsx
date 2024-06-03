import React, { useState } from 'react';
import { Toolbar, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ToolPanel = ({
  onShapeSelect,
}: {
  onShapeSelect: (shape: string) => void;
}) => {
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
      <Button>Курсор</Button>
    </Toolbar>
  );
};

export default ToolPanel;
