import React, { Component } from 'react';


class Timer extends React.Component{
    constructor(props){
        //props(親からの継承)初期化
        super(props);
        //state初期化 → 初期化にはsetStateは使用できない
        this.state = ({remaining : this.props.seconds,isStart : false});

        //ボタンへの処理バインド
        this.execTimer = this.onButtonClick.bind(this);
    }

    //カウンダウン本処理
    countDown() {
        if(this.state.remaining > 0) {
            this.setState((prevState) => ({
                remaining : prevState.remaining - 1
            }));
        }else{
            setTimeout(this.endTimer(),1000);
        }
    }

    //ComponentがDOMツリーに追加された状態で呼ばれる
    //DOMを扱う処理のほか、AjaxリクエストやsetIntervalの登録などのserver-side rendering時には必要ない初期化処理に使用
    componentDidMount(){
        this.onButtonClick();
    }

    //ボタン押下時の処理
    onButtonClick(){

        if(!this.state.isStart){
            this.startTimer();
        }else{
            this.endTimer();
        }

    }

    //タイマー開始処理
    startTimer() {
        this.setState({isStart:true});
        this.interval = setInterval(() => this.countDown(),1000);
    }

    //タイマー終了処理
    endTimer() {
        this.setState({isStart:false});
        clearInterval(this.interval);
    }

    //レンダリング処理
    render(){
        const msg = this.state.isStart ? "stop" : "start";
        return(
            <div>
            <h2>{this.state.remaining} seconds remaining.</h2>
            <div><input type="button" value={msg} onClick={this.execTimer} /></div>
            </div>
        );
    }
}

export default Timer;
