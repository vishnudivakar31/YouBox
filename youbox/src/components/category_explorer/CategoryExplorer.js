import AddIcon from '@material-ui/icons/Add'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";

import './category_explorer.css'

export default function CategoryExplorer({ categories }) {
    return(
        <Paper elevation={2} className='category_explorer'>
            <Box>
                <Box className='add_new_pane'>
                    <TextField 
                        label='Add new category' 
                        variant='outlined' 
                        size='small' 
                    />
                    <Button
                        color='primary'
                        variant='outlined'
                        startIcon={<AddIcon />}
                        className='add_category_btn'
                    >
                        Add
                    </Button>
                </Box>
                <Box className='category_group'>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Category List</FormLabel>
                        <RadioGroup>
                            {categories.map((category, index) => (
                                <FormControlLabel value={category} control={<Radio />} label={category} key={index} />
                            ))}
                        </RadioGroup>
                        <Box hidden={categories.length > 0}>
                            <Typography variant='caption'>
                                No saved categories, add new categories
                            </Typography>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </Paper>
    )
}