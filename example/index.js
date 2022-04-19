import React from 'react';
import { render } from 'react-dom';
import EditControlExample from './edit-control';
import Modaldemo from './modal';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { AccessAlarm, ThreeDRotation, Favorite } from '@mui/icons-material';
import { StyledEngineProvider } from '@mui/material/styles';
import Appbar from './appbar';

const example = (

<span>
<StyledEngineProvider injectFirst >    <Appbar />
<Modaldemo /></StyledEngineProvider>

    <EditControlExample onChange={onChange} />
    </span>
);

function onChange(geojson) {
  console.log('geojson changed', geojson);
  console.log('location', location);
}

render(example, document.getElementById('app'));

/*  

     <div>
    <span><h2><AccessAlarm color="primary" /><Favorite color="primary" />  <Button variant="contained">Geolocate</Button> Ground Cover Mapper  <Button variant="contained">Settings</Button>
    </h2></span>

*/
