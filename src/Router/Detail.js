import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [thumbUrl, setThumbUrl] = useState("");

  const getChInfo = async () => {
		// 데이터 가져오기
    const res = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);
    const json = await res.json();
    const character = json.data.results[0];

		console.log(character)

    setInfo(character);
    setThumbUrl(`${character.thumbnail.path}.${character.thumbnail.extension}`);
    setLoading(false);
  };

  useEffect(() => {
    getChInfo();
  }, []);

  return (
    <div className="detail">
      {loading ? (
        <Loading />
      ) : (
        info && (
          <div>
						<dl>
							<dt>
								<img src={thumbUrl} alt="캐릭터 이미지" />
								<Link to={`/`} className="btn">Go to List</Link>
							</dt>
							<dd>
								<h2>{info.name}</h2>

								{info.description ? (
									<>
										<p>Description</p>
										<p>{info.description}</p>
									</>
								) : null}

								<p>#Series</p>
								<ul>
									{info.series.items.map((item,idx) => (
										<li key={idx}>{item.name}</li>
									))}
								</ul>

								<p>#Stories</p>
								<ul>
									{info.stories.items.map((item,idx) => (
										<li key={idx}>{item.name}</li>
									))}
								</ul>
							</dd>
						</dl>
          </div>
        )
      )}
    </div>
  );
}

export default Detail;
