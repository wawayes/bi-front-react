import React, {useState} from 'react';
import {ProForm, ProFormGroup, ProFormItem, ProFormSelect, ProFormUploadDragger} from "@ant-design/pro-form";
import TextArea from "antd/es/input/TextArea";
import {Alert, Card, Divider, Space, Spin} from "antd";
import {values} from "lodash";
import {postChartGen} from "@/services/bi-pro/ChartApi";
import {message} from "antd/lib";
import ReactECharts from 'echarts-for-react';
const Bi: React.FC = () => {
  const [chart, setChart] = useState<API.Response>();
  const [option, setOption] = useState<API.Response>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    setChart(undefined);
    // setOption(undefined);
    // 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    // console.log("values",values)
    // console.log("values.file[0].originFileObj", values.file[0].originFileObj)
    try {
      const res = await postChartGen(params, values.file[0].originFileObj);
      if (res.code !== 0) {
        message.error(res.msg);
      } else {
        message.success('分析成功');
        const chartOption = JSON.parse(res.data.genChart ?? '');
        if (!chartOption) {
          message.error(res.msg)
        } else {
          setChart(res.data);
          setOption(chartOption);
        }
      }
    } catch (e: any) {
      message.error('分析失败，' + e.message);
    }
    setSubmitting(false);
  };


  return (
    <div className="Bi">
      <ProForm
        onFinish={onFinish}
      >
        <ProFormGroup
          title="'Help yourself'"
          style={{
            gap: '0 32px',
          }}
        >
          <ProFormItem
            name="goal"
            label="分析目标"
            rules={[{ required: true, message: '填个小目标！' }]}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{ width: 1024, resize: 'none' }}
              placeholder="请输入要分析的目标，例：'帮我分析一下产品未来用户增长趋势'"
            />
          </ProFormItem>
          <ProFormSelect
            name="chartType"
            label="选择图表类型"
            width={"md"}
            valueEnum={{
              '折线图': '折线图',
              '柱状图': '柱状图',
              '雷达图': '雷达图',
              '散点图': '散点图',
              '饼图': '饼图',
            }}
            placeholder="选择你想要呈现哪种分析结果图呢"
            rules={[{ required: true, message: '选一个，别空着！' }]}
          />
          <ProFormUploadDragger
            disabled={submitting}
            max={3}
            label="Dragger/Upload"
            name="file"
            width={1024}
            fieldProps={{
              name: 'file',
              // multiple: true, // 批量上传
              listType: 'picture-card'
            }}
            // extra="上传您需要进行分析的xlsx文件,最多上传三个，支持整合分析"
            extra="上传您需要进行分析的xlsx文件"
            rules={[{ required: true, message: '传一个，别空着！' }]}
          />
        </ProFormGroup>
      </ProForm>
      <Divider />
      <Card title="分析结论">
        {chart?.genResult ?? <div>请先进行提交</div>}
        <Spin spinning={submitting}/>
      </Card>
      <Divider />
      <Card title="可视化图表">
        {
          option ? <ReactECharts option={option} /> : <div>请先进行提交</div>
        }
        <Spin spinning={submitting}/>
      </Card>
    </div>


);
};
export default Bi;
