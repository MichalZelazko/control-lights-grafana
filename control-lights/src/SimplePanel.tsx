import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from  './types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  return (
    <div style={{overflow: 'auto', width, height}}>
      <h1>Hello, world!</h1>
    </div>
  );
};
