import React, { useEffect, useState } from 'react';
import type { Project } from '../project-card/project-card.model';
import type { GithubRepo } from '../../core/types';
import { ProjectsListComponent } from './projects-list.component';

export const ProjectsListContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  // const theme = useTheme();

  useEffect(() => {
    const username = import.meta.env.VITE_GITHUB_USERNAME;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        const repos: Project[] = data.map((repo: GithubRepo) => ({
          name: repo.name,
          description: repo.description ?? 'Sin descripción',
          githubUrl: repo.html_url
        }));
        setProjects(repos);
      });
  }, []);

  return (
    <ProjectsListComponent projects={projects} />
  );
};
