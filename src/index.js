import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//==========デフォルト==========
//import App from './App';
//ReactDOM.render(<App />, document.getElementById('root'));

//==========静的ページ==========
//import Listbox from './listbox'
//ReactDOM.render(<Listbox name='RYOHEI'/> ,document.getElementById('root'));

//==========動的ページ（カウントダウン）==========
//import Timer from './timer';
//var rootdom = document.getElementById('root');
//ReactDOM.render(<Timer seconds={5}/>,rootdom);

//==========動的ページ（サーバー接続あり）==========
import AppBox from './AppBox';
ReactDOM.render(<AppBox />,document.getElementById('root'));

registerServiceWorker();
