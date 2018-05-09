import React from 'react';
import AppForm from './AppForm'
import Request from 'superagent'
import AppList from './AppList'

class AppBox extends React.Component{

    constructor(){
        super();
        this.state = ({
            index : "1" ,
            data : [
                {id:"kei1" , name : "キタサンブラック" , stable : "清水 久嗣" , age : "７" , gender : "male"},
                {id:"kei2" , name : "ウオッカ" , stable : "角居 勝彦" , age : "9" , gender : "female"}
            ]
        });
    }

    //DOM構成後に一度呼び出し
    componentDidMount(){

        var self = this;
        //初回呼び出し
        this.getDataFromServer();
        //以後、定期呼び出し
        setInterval(self.getDataFromServer,3000);
    }

    getInitialState(){
        //this.setState({data : [] });
    }

    //サーバーよりデータを取得
    getDataFromServer(){
        Request
        .get('http://localhost:8080/')
        .then(function(res){
            //console.log(res.body);
            this.setState({ data : res.body });
        }.bind(this))
        .catch(function(err){
            console.log(err);
        });

    }

    //FormからのSubmitを処理
    pushDataToServer(Postdata){


    }

    render(){
        return(
            <div>
                <div className="appForm">
                    <h1>入力フォーム</h1>
                    <AppForm name="馬名" stable="厩舎名"
                        onSubmitParent={(Postdata) => this.pushDataToServer(Postdata)} />
                </div>
                <hr/>
                <div className="appList">
                    <h1>一覧</h1>
                    <AppList postdata={this.state.data} />
                </div>
            </div>
        );
    }
}

export default AppBox;
