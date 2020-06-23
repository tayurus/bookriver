import React from "react";
import { withNaming } from "@bem-react/classname";
import classNames from "classnames/dedupe";
import { IProps, defaultProps, IState } from "./interface";
import { Tabs } from "antd";
import "./BookFeedbackTabs.scss";
import { Comments } from "./../Comments/Comments";
import { connect } from "react-redux";

const cn = withNaming({
  n: "",
  e: "__",
  m: "_",
  v: "_",
});
const b = cn("book-feedback-tabs");
const { TabPane } = Tabs;

class BookFeedbackTabs extends React.Component<IProps, IState> {
  static defaultProps = defaultProps;

  render() {
    const { className, comments = [] } = this.props;

    return (
      <div className={classNames(b(), className)}>
        <Tabs defaultActiveKey="1" type="card">
          <TabPane
            tab={`Комментарии (${comments.length})`}
            key="1"
            className={classNames(b("tab-content"), "site-content")}
          >
            <Comments />
          </TabPane>
          <TabPane tab="Оглавление" key="2" className={classNames(b("tab-content"), "site-content")}>
            Tab 2
          </TabPane>
          <TabPane tab="Читать онлайн" key="3" className={classNames(b("tab-content"), "site-content")}>
            Tab 3
          </TabPane>
          <TabPane tab="Отзывы (456)" key="4" className={classNames(b("tab-content"), "site-content")}>
            Tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { comments } = state.comments;
  return { comments };
};

const connectedComponent = connect(mapStateToProps, null)(BookFeedbackTabs);

export { connectedComponent as BookFeedbackTabs };
