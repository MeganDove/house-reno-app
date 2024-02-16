import TodoItem from "./TodoItem.jsx";

export default function TodoList({todos, onUpdateContacts}) {
	const staticFieldClass = "md:text-l text-slate-200 rounded-lg border-solid border-4 border-transparent hover:border-amber-600";
	const editableFieldClass = "md:text-l text-slate-600 rounded-lg focus:border-solid focus:border-blue-400";
	
	return (
		<ul className="rounded-lg bg-slate-500 overflow-y-auto h-36">
			{todos.map((item) => {
				return (
					<li>
						<TodoItem item={item}/>
					</li>
				);
			})}
		</ul>
	);
};