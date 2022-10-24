import {useState} from 'react';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

const ShoppingList = (props) => {

	const [state,setState] = useState({
		removeIndex:-1,
		editIndex:-1
	})
	
	const changeMode = (mode,index) => {
		if(mode === "remove") {
			setState({
				removeIndex:index,
				editIndex:-1
			})
		}
		if(mode === "edit") {
			setState({
				removeIndex:-1,
				editIndex:index
			})
		}
		if(mode === "cancel") {
			setState({
				removeIndex:-1,
				editIndex:-1
			})
		}
	}

	const removeItem = (id) => {
		props.removeItem(id);
		changeMode("cancel",0);
	}
	
	const editItem = (item) => {
		props.editItem(item);
		changeMode("cancel",0);
	}

	let items = props.list.map((item,index) => {
		if(state.removeIndex === index) {
			return (<RemoveRow key={item.id} item={item} changeMode={changeMode} removeItem={removeItem}/>)
		}
		if(state.editIndex === index) {
			return (<EditRow key={item.id} item={item} changeMode={changeMode} editItem={editItem}/>)
		}
		return <Row key={item.id} item={item} index={index} changeMode={changeMode}/>
	})
	
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
		</table>
	)
}

export default ShoppingList;