import React from 'react'
import P from 'prop-types'
import { Columns, Column, Card, CardHeader, CardHeaderTitle } from 'bloomer'
export default function TodoList({ todos }) {
	return (
		<Columns isCentered>
			{todos.map(({ title, id }) => (
				<Column key={id} isSize="1/2">
					<Card>
						<CardHeader>
							<CardHeaderTitle>{title}</CardHeaderTitle>
						</CardHeader>
					</Card>
				</Column>
			))}
		</Columns>
	)
}
TodoList.propTypes = {
	todos: P.arrayOf(
		P.exact({
			title: P.string,
			body: P.string,
			starred: P.boolean,
			deadline: P.string,
			category: P.string
		}).isRequired
	).isRequired
}
