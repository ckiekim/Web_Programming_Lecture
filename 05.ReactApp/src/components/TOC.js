import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    let data = this.props.data;
    let lists = [];
    for (let i = 0; i < data.length; i++) {
      //lists.push(<li><a href={'/content/'+data[i].id+'.html'}>{data[i].title}</a></li>);
      lists.push(
        <li key={data[i].id}>
          <a
            href={`/content/${data[i].id}`}
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            /* data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)} */
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
