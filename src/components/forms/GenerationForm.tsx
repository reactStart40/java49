import React from "react";
import {FormControl, TextField, Box, Button } from "@mui/material";
import employeeConfig from '../../config/employee-config.json';

type Props={
submitFn: (count: number) => void
  }
 export const GenerationForm: React.FC<Props>= (props)=>{

const {minGen, maxGen}=employeeConfig;
    const [count, setCount] =React.useState<number>(0);
    
    function onSubmitFn(event:any){
        event.preventDefaul();
    props.submitFn(count);
        document.querySelector('form')!.reset();
    }

    function handlerGeneration(event: any) {
       setCount (event.target.value);
    }
   
    return <Box>
        <form onSubmit={onSubmitFn}>
            <TextField  type="number" required fullWidth label="employees generation"
        onChange={handlerGeneration} 
            helperText={`enter amount  in range [${minGen}-${maxGen}]`}
            inputProps={{
                min: `${minGen}`,
                max: `${maxGen}`
            }}/>
<Button type="submit">Submit</Button>

        </form>

    </Box>
}