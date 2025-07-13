import React, { useEffect, useState } from 'react';
import type  { Project } from '../project-card/project-card.model';
import { HomeComponent } from './home.component';
import type { GithubRepo } from '../../core/types';


export const HomeContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/NoeliaMM/repos')
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
    <HomeComponent projects={projects} />
  );
};
