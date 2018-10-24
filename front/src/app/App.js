import React, { Component } from 'react'
import TodoList from './dumb/TodoList'
class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList todos={[{ title: 'thinh' }, { title: 'thingerh' }]} />
			</div>
		)
	}
}

export default App
