import React from 'react';
import {ProForm, ProFormGroup, ProFormSelect, ProFormUploadDragger} from "@ant-design/pro-form";
import TextArea from "antd/es/input/TextArea";

const Bi: React.FC = () => {
  return (
    <ProForm>
      <ProFormGroup
        title="'Help yourself'"
        style={{
          gap: '0 32px',
        }}
      >
      <TextArea
        name="分析目标"
        aria-label="分析目标"
        showCount
        maxLength={100}
        style={{ width: 1024, resize: 'none' }}
        // onChange={onChange}
        placeholder="请输入要分析的目标，例：'帮我分析一下产品未来用户增长趋势'"
      />
      <ProFormSelect
        name="select"
        label="Select"
        width={"md"}
        valueEnum={{
          折线图: '折线图',
          柱状图: '柱状图',
          雷达图: '雷达图',
          散点图: '散点图',
          饼图: '饼图',
        }}
        placeholder="选择你想要呈现哪种分析结果图呢"
        rules={[{ required: true, message: '选一个，别空着！' }]}
      />
      <ProFormUploadDragger
        max={5}
        label="Dragger/Upload"
        name="dragger"
        width={1024}
        fieldProps={{
          name: 'file',
          multiple: true, // 批量上传
          listType: 'picture-card'
        }}
        extra="上传您需要进行分析的文件，支持docx/pdf/csv/xlsx,最多上传3个"
        rules={[{ required: true, message: '选一个，别空着！' }]}
      />
      </ProFormGroup>
    </ProForm>
  );
};

export default Bi;
