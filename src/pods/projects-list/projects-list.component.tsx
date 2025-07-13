import { Grid, Box, Typography, useTheme } from '@mui/material';
import { ProjectCardComponent } from '../project-card';
import type { Project } from '../project-card/project-card.model';


interface ProjectsListProps {
  projects: Project[];  
}

export const ProjectsListComponent: React.FC<ProjectsListProps> = ({ projects }) => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 72px)',
        background: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: theme.palette.primary.main }}>
        My practices
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1200 }}>
        {projects.map((project, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ProjectCardComponent project={project} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
