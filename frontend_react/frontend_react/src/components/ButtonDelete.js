import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const ButtonDelete = (props) =>{
    
    return (
    <Button variant="outlined" color="secondary" >
        delete
    </Button>)
    
}
// startIcon={<DeleteIcon />}
export default ButtonDelete;