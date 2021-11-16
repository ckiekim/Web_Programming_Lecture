import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc
    };
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <h3>Update</h3>
        <form
          action="update_proc"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(this.state.title, this.state.desc);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              value={this.state.title}
              /* onChange={function (e) {
                e.preventDefault();
                this.setState({ title: e.target.value });
              }.bind(this)} */
              onChange={this.inputFormHandler.bind(this)}
            />
          </p>
          <p>
            <textarea
              name="desc"
              value={this.state.desc}
              /* onChange={function (e) {
                e.preventDefault();
                this.setState({ desc: e.target.value });
              }.bind(this)} */
              onChange={this.inputFormHandler.bind(this)}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
