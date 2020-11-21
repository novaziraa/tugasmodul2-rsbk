import React from "react";
import {Layout} from 'antd';
import Card from "./Card";
const {Header, Content, Footer} = Layout;

export default function Template(){
    return (
        <Layout classname="layout">
            <Header></Header>
            <Content style={{ padding: "0 50px"}}>
                <Card/>
            </Content>
            <Footer style={{ textAlign:center }}>
                Tugas Modul 2 by Kelompok 19
            </Footer>
        </Layout>
    );
}