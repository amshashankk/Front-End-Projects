// Some parts of code I have not updated as per the official authority. The projects landing page is as same as the original. So please If you wanna change it don't make it live use it on your own risk.//
const App = () => {
	const [projects, setProjects] = React.useState([]);
	
	React.useEffect(() => {
		fetch('https://substantial-diascia.glitch.me/projects')
			.then(res => res.json())
			.then(res => {
			console.log(res)
			setProjects(res)
		})
	}, []);
	
	return (
		<div className="projects-container">{
				projects.length > 0 ? 
					projects.map(project => (
					<div className="project">
						<img src={project.img_url} alt={project.name} />
						<div className="project-info">
							<p>{project.description}</p>
							<small>
								<strong>Tags:</strong> {project.tags.map(tag => (<span>{tag} </span>))}
							</small>
							<div className="btn-container">
								<a href="#">See project</a>
							</div>
						</div>
					</div>
				)) 
				: 'Loading projects'
			}
		</div>
	);
}


ReactDOM.render(<App />, document.getElementById('app'));

