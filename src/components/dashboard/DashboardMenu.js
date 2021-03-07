import { Link } from "react-router-dom";

export default function DashboardMenu() {
	return (
		<nav class="dashboard">
			<Link to="/dashboard/posts">Posts</Link>
		</nav>
	);
}
