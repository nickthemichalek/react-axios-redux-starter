import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodos} from "../actions/todos";
import todos from "../reducers/todos";

class TodosList extends Component {
	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		return (
			<ul>
				{todos.map(todo => {
					return (
						<li>{todo.title}</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	todos: Object.values(state.todos)
});

const mapDispatchToProps = (dispatch) => {
	return {
		getVenues: () => {
			dispatch(getTodos())
		}
	}
};

export default connect(
	mapStateToProps,
	{getTodos}
)(TodosList);

//export default connect(mapStateToProps, mapDispatchToProps)(getTodos);