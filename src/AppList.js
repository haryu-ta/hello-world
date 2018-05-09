//import React,{Component} from 'react';
import React from 'react';

class AppList extends React.Component{

    render(){
        //const postdata = this.props.postdata;
        return(
            <div>
                {this.props.postdata.map((post,index) => {
                    return(
                        <div key={`${post.id}`} >
                            <DetailInfo name={post.name} stable={post.stable} index={index+1}/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

class DetailInfo extends React.Component{

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                No.{this.props.index} &nbsp;{this.props.stable}
            </div>
        );
    }
}

export default AppList;
