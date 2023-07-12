import React, {useEffect, useState} from "react";
import {ProTable} from "@ant-design/pro-components";
import {Button, message, Space} from "antd";
import {ProColumns} from "@ant-design/pro-table/lib";

import {postTableList} from "@/services/bi-pro/TableApi";


const Table: React.FC = () => {
  const [list, setList] = useState<API.Response>();
  const [dataSource, setDataSource] = useState([]);

  const fetchTableList = async (params: API.Page) => {
    try {
      const res = await postTableList(params);
      if (res.code !== 0) {
        message.error(res.msg)
      } else {
        message.success('查询成功！')
        if (res.data == null) {
          message.error('数据为空..')
        }else {
          setList(res.data)
        }
      }
    } catch(e: any) {
      message.error('系统有点不对劲,' + e.message)
    }
  }

  useEffect(() => {
    postTableList({ pageNum: 1, pageSize: 10 }).then((res) => {
      setDataSource(res.data);
    });
  }, []);

  const columns: ProColumns<API.UserChart>[] = [
    {
      title: '用户名',
      width: 80,
      dataIndex: 'userAccount',
      align: "center",
      render: (_) => <a>{_}</a>,
    },
    {
      title: '头像',
      dataIndex: 'userAvatar',
      key: 'userAvatar',
      valueType: 'avatar',
      align: 'center',
      width: 120,
      render: (dom) => (
        <Space>
          <span>{dom}</span>
        </Space>
      ),
    },
    {
      title: '已消耗的token数!',
      width: 120,
      align: "center",
      dataIndex: 'token',
    },
    {
      title: '剩余免费请求次数',
      width: 200,
      align: "center",
      dataIndex: 'freeCount',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [
        <a key="link">链路</a>,
        <a key="link2">报警</a>,
        <a key="link3">监控</a>,
      ],
    },
  ];
  return (
    <ProTable<API.UserChart>
      dataSource={dataSource}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      headerTitle="用户-Token管理页"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,

      ]}
    />
  )
};

export default Table
