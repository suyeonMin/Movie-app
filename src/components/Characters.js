import {Link} from "react-router-dom";

function characters({key, id, name, story}){

	return (
		<div className="card">
			<p>
				<Link to={`/detail/${id}`}>{name}</Link>
			</p>
		</div>
	)
}

export default characters;