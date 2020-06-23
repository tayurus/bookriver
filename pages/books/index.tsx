import React from "react";
import { UserCycles } from "~/componentsForPages/books";
import { connect } from "react-redux";
import { createCycle, getCyclesMe, deleteCycle } from "~/redux/cycle";
import { createBook } from "~/redux/books";
import { PrivateRoute } from "~/components";
import { IBookCreate } from "~/types";
import { message } from "antd";
class BooksPage extends React.Component<any, any> {
  componentDidMount(): void {
    const { getCyclesMe } = this.props;
    getCyclesMe();
  }

  handleCycleCreate = (cycleName: string) => {
    const { createCycle, getCyclesMe } = this.props;
    if (!cycleName) {
      message.error("Название цикла не может быть пустым!");
    } else {
      createCycle(cycleName).then(() => getCyclesMe());
    }
  };

  handleBookCreate = (bookName: string, cycleId: number) => {
    const { createBook, getCyclesMe } = this.props;
    if (!bookName) {
      message.error("Название книги не может быть пустым!");
    } else {
      createBook({ name: bookName, cycle_id: cycleId }).then(() => getCyclesMe());
    }
  };

  handleCycleDelete = (cycleId: number) => {
    const { deleteCycle, getCyclesMe } = this.props;
    deleteCycle(cycleId).then(() => getCyclesMe());
  };

  render() {
    const { cycles } = this.props;

    return (
      <div>
        <UserCycles
          cycles={cycles}
          onCycleCreate={this.handleCycleCreate}
          onBookCreate={this.handleBookCreate}
          onCycleDelete={this.handleCycleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { cycles } = state.cycle;
  return { cycles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCyclesMe: () => dispatch(getCyclesMe()),
    createCycle: (name) => dispatch(createCycle(name)),
    createBook: ({ name, cycle_id }: IBookCreate) => dispatch(createBook({ name, cycle_id })),
    deleteCycle: (cycle_id) => dispatch(deleteCycle(cycle_id)),
  };
};

export default PrivateRoute(connect(mapStateToProps, mapDispatchToProps)(BooksPage));
