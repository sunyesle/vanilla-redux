import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Detail({ toDo, onBtnClick }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>date: {toDo?.id}</h5>
      <button onClick={onBtnClick}>⨉</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  const {
    history: { goBack },
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    onBtnClick: () => {
      dispatch(actionCreators.deleteToDo(parseInt(id)));
      goBack();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
