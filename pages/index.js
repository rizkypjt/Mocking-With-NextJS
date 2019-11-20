import React, { Component } from 'react';
import login from '../Api/Api';
// import Indomie, {enak, banget} from '../Api/'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this._onChangeEmail = this._onChangeEmail.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   Indomie.enak();
  //   Indomie.banget();

  //   enak();
  //   banget();
  // }

  _onChangeEmail(e) {
    e.preventDefault();
    this.setState({ email: e.target.value })

  }

  _onChangePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    // console.log(this.state.password);
    // alert(this.state.email)
    // login();
    var res = await login(this.state.email, this.state.password);
    console.log(res)

    if (res) {
      alert('berhasil')
    } else {
      alert("Login Gagal");
    }
  }


  render() {
    return (
      <>
        <div className="content-wrapper">
          <section className="content">
            <div className="row">
              <div className="col-md-6 .col-md-offset-3">
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Quick Example</h3>
                  </div>

                </div>
                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label forhtml="exampleInputEmail1">Email address</label>
                      <input
                        value={this.state.email}
                        onChange={this._onChangeEmail}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                      <label forhtml="exampleInputPassword1">Password</label>
                      <input
                        value={this.state.password}
                        onChange={this._onChangePassword}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default Home
