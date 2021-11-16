import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <nav>
        <a
          href="/create"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("create");
          }.bind(this)}
        >
          <button>생성</button>
        </a>
        &nbsp;
        <a
          href="/update"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("update");
          }.bind(this)}
        >
          <button>수정</button>
        </a>
        &nbsp;
        <input
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)}
          type="button"
          value="삭제"
        />
      </nav>
    );
  }
}

export default Control;
