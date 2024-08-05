import React from 'react';
import FileUpload from './FileUpload';

export default {
  title: 'CustomComponents/FileUpload',
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFileSelect: (file) => alert(`Selected file: ${file.name}`),
};
