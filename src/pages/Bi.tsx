import React from 'react';
import {ProForm, ProFormUploadButton, ProFormUploadDragger} from "@ant-design/pro-form";

const Bi: React.FC = () => {

  return (
    <ProForm>
      <ProFormUploadDragger
        max={5}
        label="Dragger/Upload"
        name="dragger"
        fieldProps={{
          name: 'file',
          multiple: true, // 批量上传
          listType: 'picture-card'
        }}
        extra="上传您需要进行分析的文件，支持docx/pdf/csv/xlsx,最多上传3个"
      />
    </ProForm>
  );
};

export default Bi;
