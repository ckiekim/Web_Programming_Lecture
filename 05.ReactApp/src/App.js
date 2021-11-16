import "./styles.css";
import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor() {
    super();
    this.maxContentId = 3;
    this.state = {
      mode: "welcome",
      selectedContentId: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language." },
        { id: 2, title: "CSS", desc: "CSS is Cascading Style Sheet." },
        {
          id: 3,
          title: "JavaScript",
          desc: "JavaScript is different from Java."
        }
      ]
    };
  }

  getReadContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      let data = this.state.contents[i];
      if (data.id === this.state.selectedContentId) {
        return [i, data.title, data.desc];
      }
    }
  }

  getContent() {
    let _title,
      _desc,
      _article,
      _index = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      [_index, _title, _desc] = this.getReadContent();
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (title, desc) {
            this.maxContentId++;
            /* let contents = this.state.contents.concat({
              id: this.maxContentId,
              title,
              desc
            }); */
            let contents = [...this.state.contents];
            contents.push({ id: this.maxContentId, title, desc });
            this.setState({
              mode: "read",
              selectedContentId: this.maxContentId,
              contents
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      [_index, _title, _desc] = this.getReadContent();
      _article = (
        <UpdateContent
          title={_title}
          desc={_desc}
          onSubmit={function (title, desc) {
            let contents = [...this.state.contents];
            contents[_index].title = title;
            contents[_index].desc = desc;
            this.setState({ mode: "read", contents });
          }.bind(this)}
        />
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({ mode: "read", selectedContentId: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (mode) {
            if (mode === "delete") {
              if (window.confirm("삭제하시겠습니까?")) {
                let contents = [...this.state.contents];
                let selectedContentId = this.state.selectedContentId;
                for (let i = 0; i < contents.length; i++) {
                  if (contents[i].id === selectedContentId) {
                    if (selectedContentId === contents.length) {
                      selectedContentId--;
                    }
                    contents.splice(i, 1);
                    break;
                  }
                }
                alert("삭제되었습니다.");
                this.setState({ mode: "welcome", selectedContentId, contents });
              }
            } else {
              this.setState({ mode });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
