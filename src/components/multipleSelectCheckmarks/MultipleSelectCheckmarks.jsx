import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default function MultipleSelectCheckmarks({ label = 'Select', options = [1, 2] }) {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        if (value.includes('Select All')) {
            // If 'Select All' is selected, select all options except 'Select All'
            if (personName.length === options.length - 1) {
                setPersonName([]);
            } else {
                setPersonName(options.filter((option) => option !== 'Select All'));
            }
        } else {
            setPersonName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value
            );
        }
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: '100%', height: '50px', border: 'none' }}>
                <InputLabel id="demo-multiple-checkbox-label" sx={{ background: 'white' }}>{label}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    sx={{
                        height: '50px',
                        border: "1px solid #C0C0C0",
                        borderRadius: '12px'
                    }}
                >
                    {options.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
