import React, {Component} from 'react';
import Memberjoin from './components/Memberjoin';
import ReadContent  from './components/ReadContent';
import Subject from './components/Subject';
import Home from './components/Home';
import MemberControl from './components/MemberControl';
import Login from './components/Login';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.max_member_num=1;
    this.state={
      mode : 'welcome',
      subject:{title:'WEB',sub:'World Wide Web!'},
      welcome:{title:'Hi, Hello',desc:'Have a nice Day!'}, //그냥 가장 처음에 띄워지는 문자
      al_member:{title:'Hello',desc:'you are already our member!'}, //로그인이나 회원가입을 할때 이미 회원인 사람한테 보여줄 메시지
      non_member:{title:'welcome',desc:'Could you join us?'}, //로그인이나 회원가입 시 회원이 아닌 사람한테 보여줄 메시지
      members:[
        {id:1,member_id:'123',member_pw:'456'}
      ]
    }
  }
  ment_(_title, _desc){
    var _article = <ReadContent title={_title} desc = {_desc}></ReadContent>
    return _article;
  }

  render(){
    var  _article = null;
    if(this.state.mode === 'welcome'){
      _article=this.ment_(this.state.welcome.title, this.state.welcome.desc);
    }
    else if(this.state.mode==='create'){
      _article = <Memberjoin onSubmit={function(_m_id,_m_pw){
        this.max_member_num = this.max_member_num+1;
        var _members = this.state.members.concat(
          {id:this.max_member_num, member_id:_m_id, member_pw : _m_pw}
        );
        this.setState({
          members:_members
        });
      }.bind(this)}></Memberjoin>
   
    }
    else if(this.state.mode ==='al_member')
    {
      _article=this.ment_(this.state.al_member.title, this.state.al_member.desc);
    }
    else if(this.state.mode==='non_member')
    {
      _article=this.ment_(this.state.non_member.title, this.state.non_member.desc);
    }
    else if(this.state.mode==='read'){
      _article=<MemberControl data = {this.state.members}></MemberControl>
    }
    else if(this.state.mode==='login'){
      var i=0;
      var t_f=false;
      _article = <Login onSubmit={function(lo_id,lo_pw){
      while(i<this.state.members.length){
        var check = this.state.members[i];
        if(check.member_id === lo_id ){
          if(check.member_pw === lo_pw){
            t_f=true;
            this.setState({mode:'al_member'});
            break;
          } 
        }
        i=i+1;
    }
    if(t_f===false){
      this.setState({mode:'non_member'});
    }
  }.bind(this)}></Login>
  }
  return (
    <div>
     <Home mode ={this.state.mode} subject={this.state} onChangeMode={function(_mode){
       this.setState({mode:_mode});
     }.bind(this)}>
     </Home>

     <Subject title={this.state.subject.title} sub= {this.state.subject.sub}
      onChangePage={function(){ // 우리가 만든 event에 함수를 설치해두고
        this.setState({mode:'welcome'});
       }.bind(this)}>
      </Subject>
      {_article}
  </div>

  );
  }
}
export default App;
