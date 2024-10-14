import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [clickedProjects, setClickedProjects] = useState(new Set());

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/NefounzAI/repos');
        const data = await response.json();

        const filteredProjects = data
          .filter((repo) => !repo.private)
          .map((repo) => ({
            title: repo.name,
            description: repo.description,
            link: repo.html_url,
          }));

        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleLinkClick = (index) => {
    setClickedProjects((prev) => new Set(prev).add(index)); 
  };

  return (
    <div className="p-4 mb-20"> 
      <h2 className="text-3xl font-bold mb-10 text-white">My Projects:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800  rounded-lg p-4 text-white shadow-md transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-white">{project.description || 'No description available.'}</p>
            {!clickedProjects.has(index) && ( // Render link only if not clicked
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(index)} 
                className="inline-block mt-9 text-blue-500 hover:underline" 
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
