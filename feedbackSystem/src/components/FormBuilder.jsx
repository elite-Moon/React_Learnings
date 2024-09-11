import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const FieldContainer = styled('div')({
  padding: 16,
  border: '1px solid #ccc',
  marginBottom: 16,
  cursor: 'move',
});

const FieldOptions = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = (fieldType) => {
    setFields([
      ...fields,
      { type: fieldType, label: '', required: false, errorMessage: '' },
    ]);
  };

  const handleFieldMove = (index, newIndex) => {
    const updatedFields = [...fields];
    const [removed] = updatedFields.splice(index, 1);
    updatedFields.splice(newIndex, 0, removed);
    setFields(updatedFields);
  };

  const handleFieldDelete = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  // ... other form logic (e.g., editing fields, adding conditions)

  return (
    <div>
      <Typography variant='h6'>Form Builder</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FieldOptions>
          <Button variant='contained' onClick={() => handleAddField('text')}>
            <AddCircleOutlineIcon /> Text Field
          </Button>
          {/* Add other field types */}
        </FieldOptions>
        <Button variant='contained' color='primary'>
          Save
        </Button>
      </Box>
      <div>
        {fields.map((field, index) => (
          <FieldContainer
            key={index}
            {...useDrag({
              type: 'field',
              item: { index },
              collect: (monitor) => ({
                isDragging: monitor.isDragging(),
              }),
            })}
            {...useDrop({
              accept: 'field',
              drop: (item, monitor) => {
                if (index !== item.index) {
                  handleFieldMove(item.index, index);
                }
              },
            })}
          >
            {/* Render field based on type */}
            {field.type === 'text' && (
              <TextField
                label={field.label}
                required={field.required}
                error={field.errorMessage ? true : false}
                helperText={field.errorMessage}
                onChange={(e) => {
                  // Update field label or other properties
                }}
              />
            )}
            {/* ... other field types */}
            <DragIndicatorIcon />
            <Button
              variant='outlined'
              color='error'
              onClick={() => handleFieldDelete(index)}
            >
              Delete
            </Button>
          </FieldContainer>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
