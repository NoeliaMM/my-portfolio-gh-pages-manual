import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import type { Project } from './project-card.model'; // Adjust the import path as necessary

interface Props {
  project: Project;
}

export const ProjectCardComponent: React.FC<Props> = ({ project }) => (
  <Card sx={{ width: 300 }}>
    <CardContent>
      <Typography variant="h6">{project.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {project.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
       View on GitHub
      </Button>
    </CardActions>
  </Card>
);

