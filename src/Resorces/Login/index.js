import React from 'react';
import  {Grid,Paper,TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './login.scss';


const login=()=>{    
    const Style={padding :30,height:'50vh',width:260, margin:"35px auto"};
    const email='';
    const password='';
    return( 
        
        <Grid>
            <form onSubmit=""> 
                <Paper style = {Style} > 
                    <h1>Inicie sesión </h1> 
                    <div> 
                      <div>  
                       <TextField name='Email' type='email'  variant='outlined' label='Email' value={email?.email }/> 
                      </div>
                      <br/>
                      <div>
                        <FormControl> 
                          <InputLabel htmlFor='outlined-adornment-password' variant='outlined' >
                            password
                          </InputLabel>
                          <OutlinedInput fullWidth label="Password"
                                    id="outlined-password"
                                    type= 'password'
                                    name="password"
                                />
                        </FormControl>
                      </div>
                    </div> 
                    <br></br>
                    <button type='submit' variant='contained' className='boton'> Login </button>
                </Paper>
            </form>
        </Grid>
    );
}   
export default login; 