import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
               <Toolbar>
                   <PhotoCamera />
                   <Typography variant="h6">
                       Photo Album
                   </Typography>
               </Toolbar>          
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                       <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                           Photo Album
                       </Typography>
                       <Typography variant="h5" align="center" color="textSecondary" paragraph>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque architecto sed reiciendis quo soluta, earum recusandae est odit tempore, fuga cumque modi vel. Provident quas voluptas assumenda quaerat nam.
                       </Typography>
                       <div>
                           <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See My photos 
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        secondary action
                                    </Button>
                                </Grid>
                           </Grid>
                       </div>
                    </Container>
                </div>
            </main>
             
        </>    
    )
}


export default App;