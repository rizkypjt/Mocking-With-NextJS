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
        {/* <div className="content-wrapper">
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
        </div> */}

        <div className="login-box">
          <div className="login-logo">
            <b>LOGIN</b>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form role="form">
              <div className="form-group has-feedback">
                <input
                  value={this.state.email}
                  onChange={this._onChangeEmail}
                  type="text"
                  className="form-control"
                  placeholder="Enter email" />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>

              <div className="form-group has-feedback">
                <input
                  value={this.state.password}
                  onChange={this._onChangePassword}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password" />

                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>

              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                  </div>
                </div>

                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.handleSubmit} >Sign In</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
                Facebook
              </a>
              <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
                Google+
              </a>
            </div>
            <a href="#">I forgot my password</a><br />
            <a href="register.html" className="text-center">Register a new membership</a>
          </div>
        </div>


      </>
    );
  }
}
export default Home
