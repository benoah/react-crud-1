import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

export default function PostList({ register }) {
	const [posts, setPosts] = useState([]);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/posts");
				console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ul>
			<option value="">Select media</option>
			{posts.map((media) => {
				return <li key={media.id}>{media.title.rendered}</li>;
			})}
		</ul>
	);
}
