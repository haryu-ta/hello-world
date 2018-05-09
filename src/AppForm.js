import React from 'react';
import Reactdom from 'react-dom';

class AppForm extends React.Component{

    //stateの初期化
    state = { ...this.setStateInitialize() }

    //stateの中身を初期化
    setStateInitialize(){
        return { name : "" , stable : "" , age : Ages.ONE , gender : Gender.MALE };
    }

    //送信ボタン押下時の動作
    SubmitAction(event){
        event.preventDefault();

        //設定値取得(テキストはこれでも良い)
        var vname = Reactdom.findDOMNode(this.refs.name).value;
        var vstable  = Reactdom.findDOMNode(this.refs.stable).value;

        this.setState({ name : vname });
        this.setState({ stable : vstable });

        //ラジオボタンや選択リストはstateに設定するしかない

        //登録するデータを設定
        //const {name,stable,age,gender} = this.state;  //setStateの反映が遅くここでは取得できない。
        const Postdata = {
            name : vname ,
            stable : vstable ,
            age : this.state.age ,
            gender:this.state.gender
        };

        //親の処理を呼び出す
        this.props.onSubmitParent(Postdata);

        //入力内容クリア
        Reactdom.findDOMNode(this.refs.name).value = "";
        Reactdom.findDOMNode(this.refs.stable).value = "";
        this.setState({...this.setStateInitialize()});

    }

    //選択リストが変更された時
    changeAge(event){
        this.setState({ age : event.target.value });
    }

    //ラジオボタンが変更された時
    changeSelect(event){
        this.setState({ gender : event.target.value });
    }

    render(){
        return(
            <div>
                <form className="AppForm" onSubmit={(event) => this.SubmitAction(event)}>
                    <label>
                        馬名 :
                        <input type="text" placeholder={this.props.name} ref="name"/><br/>
                    </label>
                    <br/>
                    <label>
                        厩舎名 :
                        <input type="text" placeholder={this.props.stable} ref="stable"/><br/>
                    </label>
                    <br/>
                    <label>
                        性別 :
                        <input type="radio" name="gender" ref="牡" value={Gender.MALE}
                            checked={this.state.gender === Gender.MALE }
                            onChange={(event) => this.changeSelect(event)}/>male
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" ref="牝" value={Gender.FEMALE}
                            checked={this.state.gender === Gender.FEMALE }
                            onChange={(event) => this.changeSelect(event)}/>female<br/>
                    </label>
                    <br/>
                    <label>
                        馬齢 :
                        <select
                            value={this.state.age}
                            onChange={( event) => this.changeAge(event) }>
                            <option value={Ages.ONE}>1</option>
                            <option value={Ages.TWO}>2</option>
                            <option value={Ages.THREE}>3</option>
                            <option value={Ages.FOUR}>4</option>
                            <option value={Ages.FIVE}>5</option>
                            <option value={Ages.SIX}>6</option>
                            <option value={Ages.SEVEN}>7</option>
                            <option value={Ages.EIGHT}>8</option>
                            <option value={Ages.NINE}>9</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="送信" />
                </form>
            </div>
        );
    }

}

const Gender = {
    MALE : "male",
    FEMALE : "femal"
}

export const Ages = {
    ONE : "one",
    TWO : "two",
    THREE : "three",
    FOUR : "four",
    FIVE : "five",
    SIX : "six",
    SEVEN : "seven",
    EIGHT : "eight",
    NINE : "nine"
}
export default AppForm;
