import {useState, useEffect} from "react";
import Loading from "../components/Loading";
import Characters from "../components/Characters";

function Home(){
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);
	const getCharacter = async () => {
		const res = await fetch('https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023');
		const json = await res.json();
		setCharacters(json.data.results);
		setLoading(false);
	};
	useEffect(() => {
		getCharacter();
	}, []);

  return <div className="container">
		{loading ? <Loading /> : 
			(
				<>
					<h1>Marvel Characters</h1>
					<div className="wrap">
						{characters.map((character) => 
							<Characters 
								key={character.id}
								id={character.id}
								name={character.name}
								story={character.stories.items}
							/>
						)}
					</div>
				</>
			)
		}
	</div>
}

export default Home;