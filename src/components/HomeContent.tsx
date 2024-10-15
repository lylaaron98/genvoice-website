import React from "react";
import {
    Container,
    Typography,
    Button,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Divider,
} from "@mui/material";

const HomeContent = () => {
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Hello, my name's Aaron!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    +65 9366 1311 • lyl.aaron.98@gmail.com
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <Button href="https://linkedin.com/in/aaron-lee-b832431b3" target="_blank" color="primary" sx={{ mr: 1 }}>
                        LinkedIn
                    </Button>
                    <Button href="https://github.com/lylaaron98" target="_blank" color="primary">
                        GitHub
                    </Button>
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Summary
                                </Typography>
                                <Typography variant="body1">
                                    I’m a graduating college student from Goldsmiths, University of London, pursuing my Bachelor’s Degree in Computer Science (BSc), in my final year and exploring career options in relevant fields of study, more specifically Frontend/FullStack Development. I also have experience with Data Analytics, Machine Learning, and AI studies. Avidly reinforcing my skills and building experience with software development frameworks with Web2 and Web3 technologies.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Education
                                </Typography>
                                <Typography variant="body1">
                                    Bachelors (Hons) in Computer Science, Apr 2021 - Dec 2024
                                </Typography>
                                <Typography variant="body1">
                                    Goldsmiths, University of London, Singapore Institute of Management
                                </Typography>
                                <Typography variant="body2">
                                    Relevant coursework: Agile Software Programming, Object-Orientated Programming, Advanced Web Development, AI and Machine Learning
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Technical Skills
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Languages:</strong> HTML, CSS, C++, Java, JavaScript, TypeScript, Python, VBA, SQL
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Frameworks and Tools:</strong> NodeJS, ReactJS, ExpressJS, TailwindCSS, AntDesign, Django, Docker, Kubernetes, JUCE, Unity, TensorFlow, RESTAPI, Git, Microsoft SQL Server, JIRA
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Certifications:</strong> DS102 - Data Analytics in Python Distinction grade (Hackwagon Academy), Amazon AWS Academy Graduate - AWS Academy Cloud Foundations
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Work Experience
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText 
                                            primary="International Data Corporation, Singapore: Custom Solutions Intern (Mar 2023 - Apr 2023)" 
                                            secondary={
                                                <List>
                                                    <ListItem>Managed and organized large datasets using Excel.</ListItem>
                                                    <ListItem>Created charts, graphs, and visualizations to present data in a clear and concise manner.</ListItem>
                                                    <ListItem>Assisted in the development of PowerPoint presentations for client meetings and internal use.</ListItem>
                                                    <ListItem>Conducted research on industry trends and provided insights to the Custom Solutions team.</ListItem>
                                                    <ListItem>Collaborated with team members to ensure timely and accurate delivery of projects.</ListItem>
                                                </List>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText 
                                            primary="DAISO Singapore, Singapore: Software Developer (Nov 2023 - Feb 2024)" 
                                            secondary={
                                                <List>
                                                    <ListItem>Developed and maintained an in-house utilities dashboard for Daiso Singapore, optimizing internal processes for various departments, using React JS for the frontend.</ListItem>
                                                    <ListItem>Customized features and modules to meet specific departmental needs, enhancing overall usability.</ListItem>
                                                    <ListItem>Implemented backend functionalities with Node.js, enabling seamless communication between the frontend and the MSS SQL database server.</ListItem>
                                                    <ListItem>Collaborated closely with department heads to understand evolving needs and priorities, aligning software solutions with business goals.</ListItem>
                                                </List>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText 
                                            primary="Univers, Envision Group, Singapore: Frontend Software Engineer Intern (May 2024 - Dec 2024)" 
                                            secondary={
                                                <List>
                                                    <ListItem>Bug fixes and improvements for UI features.</ListItem>
                                                    <ListItem>Developed UI functions with ReactJS components and designed with Ant Design custom libraries.</ListItem>
                                                    <ListItem>Developed and maintained web applications and dashboards for projects, ensuring a user-friendly interface.</ListItem>
                                                    <ListItem>State management of software applications with agile methodology.</ListItem>
                                                    <ListItem>Collaborated with software engineers, designers, and managers across different teams internationally.</ListItem>
                                                </List>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Projects
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Otodecks - DJ Application:</strong> The application is a prototype that aims to imitate a fully functional DJ application. Developed a user-friendly interface with basic DJ controls for aspiring DJ artists to experiment on.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>MySmartHome - SmartHome Web Application:</strong> The application creates a SmartHome dashboard that enables users to control and adjust various household appliances for convenience and efficiency.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>G4Met - Game Matchmaker Application:</strong> The application creates a matchmaking platform for gamers to find their ideal teammates for leisure or competitive purposes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default HomeContent;
