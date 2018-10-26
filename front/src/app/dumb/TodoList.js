import React from 'react'
import P from 'prop-types'
import {
	Column,
	Card,
	CardHeader,
	CardHeaderTitle,
	Checkbox,
	CardContent,
	Tag
} from 'bloomer'
export default function TodoList({ todos }) {
	return (
		<Column isCentered>
			{todos.map(({ title, id, deadline, body }) => (
				<Column key={id} isSize="1/2">
					<Card>
						<CardHeader>
							<Checkbox />
							<CardHeaderTitle>{title}</CardHeaderTitle>
							<Tag isColor="info" isSize="medium">
								{deadline}
							</Tag>
						</CardHeader>
						{body && <CardContent>{body}</CardContent>}
					</Card>
				</Column>
			))}
		</Column>
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
