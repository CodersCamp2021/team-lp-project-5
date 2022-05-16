

import React from "react";
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { useAddTaskStyles } from "../../hooks/styles/use-add-task-styles.js";

export const Priority = () => {
    const { classes } = useAddTaskStyles();
  const [value, setValue] = useState('react');
  
  return (
    <SegmentedControl 
      fullWidth
      size="md"
      radius={20}
      className={classes.prioritiesButton}
      value={value}
      onChange={setValue}
      data={[
        { label: 'urgent', value: 'urgent' },
        { label: 'important', value: 'important' },
        { label: 'time waste', value: 'time waste' },
      ]}
    />
  );
}

export default Priority;