import React from "react";
import { useQuery } from "@apollo/client";
import { Spin, Table } from 'antd';
import '../App.less';
import STUDENTS from "../querys/index";

const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'CPF',
        dataIndex: 'cpf',
        key: 'cpf',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
        render: email => <a>{email}</a>,
    },
]

const mappingDataTable = (data = []) => {
    return data.map((d, i) => ({
        key: `${i}`,
        ...d
    }));
}

const Student = () => {
    const { loading, error, data } = useQuery(STUDENTS);

    if (error) {
        return <p>an error occurred...</p>;
    }
    
    return (
        <Spin size="large" spinning={loading} tip="Carregando..." >
            <Table columns={columns} dataSource={mappingDataTable(data?.students)} pagination={false} />
        </Spin>
    )
}

export default Student;