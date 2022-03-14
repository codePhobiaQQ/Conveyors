// material
import {
    Box,
    Grid,
    Container,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';
// components
import Page from '../components/Page';
import {
  AppReports
} from '../components/_dashboard/app';

// React-report-builder

import { ReportBuilder } from 'react-report-builder';
import { PeekdataApi } from 'peekdata-datagateway-api-sdk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-report-builder/node_modules/react-datepicker/dist/react-datepicker.css';
import 'react-report-builder/node_modules/react-table/react-table.css';
import 'react-report-builder/lib/main.css';

import ConvItems from "./mydata/ConvItems";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import qs from "qs";
import { createBrowserHistory } from "history";
// ----------------------------------------------------------------------
Date.prototype.customFormat = function (formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    YY = ((YYYY = this.getFullYear()) + "").slice(-2);
    MM = (M = this.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = this.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = (hhh = this.getHours());
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    hhhh = hhh < 10 ? ('0' + hhh) : hhh;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = this.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = this.getSeconds()) < 10 ? ('0' + s) : s;
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
};


//function ParamBar() {

//    const [convNumber, setconvNumber] = React.useState('');

//    const handleChange = (event) => {
//        setconvNumber(event.target.value);
//        console.log(convNumber1);
//        convNumber1 = event.target.value;
//    };
    


//    const [valueFromDate, setValueFromDate] = React.useState(null);
//    const [valueUntilDate, setValueUntilDate] = React.useState(null);



//    const [categories, setCategories] = useState([]);

//    useEffect(() => {
//        const fetchCategories = async () => {
//            const response = await axios.get("http://localhost:3001/categories");
//            const categoriesNames = response.data.map(category => {
//                return category.full_name;
//            })
//            setCategories(categoriesNames);
//        }
//        fetchCategories();
//    }, [])
//    console.log(valueFromDate);
//    console.log(categories);

//    return (<Grid container spacing={1} >
//        <Grid item xs={3}  >
//        </Grid>
//        <Grid item xs={3} >
//            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }} >
//                <InputLabel id="labelConv">Номер конвейера</InputLabel >
//                <Select
//                    labelId="labelConv"
//                    id="convNumber"
//                    value={convNumber}
//                    label="Номер конвейера"
//                    onChange={handleChange}>
//                    {categories.map((item) => (
//                        <MenuItem value={item}>{item}</MenuItem>
//                    ))}
//                </Select>
//            </FormControl>
//        </Grid>
//        <Grid item xs={3} >
//            <LocalizationProvider dateAdapter={AdapterDateFns}>
//                <DateTimePicker
//                    label="Дата от"
//                    ampm={false}
//                    value={valueFromDate}

//                    onChange={(newValue) => {
//                        valueFromDate1 = newValue;
//                        setValueFromDate(newValue);
//                    }}
//                    renderInput={(params) => <TextField {...params} />}
//                />
//            </LocalizationProvider>
//        </Grid>

//        <Grid item xs={3} >
//            <LocalizationProvider dateAdapter={AdapterDateFns}>
//                <DateTimePicker
//                    label="Дата до"
//                    ampm={false}
//                    value={valueUntilDate}
//                    onChange={(newValue) => {
//                        valueUntilDate1 = newValue;
//                        setValueUntilDate(newValue);
//                    }}
//                    renderInput={(params) => <TextField {...params} />}
//                />
//            </LocalizationProvider>
//        </Grid>


       

//    </Grid>);

//};


export default function DashboardApp() {
    const history = createBrowserHistory();
    var [convNumber, setconvNumber] = useState('0');
    var [valueFromDate, setvalueFromDate] = useState(null);
    var [valueUntilDate, setvalueUntilDate] = useState(null);
    var [pageVariantFill, setpageVariantFill] = useState(false);


    const handleChange = (event) => {
        setconvNumber(event.target.value);
        console.log(convNumber);
    };
    const handleChange1 = (event) => {
        setpageVariantFill(true);


    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("http://localhost:3001/categories");
            const categoriesNames = response.data.map(category => {
                return category.full_name;
            })
            setCategories(categoriesNames);
        }
        fetchCategories();
    }, [])


    useEffect(() => {
        history.push(`?convNumber=${convNumber}.valueFromDate=${valueFromDate}.valueUntilDate=${valueUntilDate}.pageVariantFill=${pageVariantFill}`);
    }, [convNumber, valueFromDate, valueUntilDate, pageVariantFill]);


    useEffect(() => {
        const filterParams = history.location.search.substr(1);
        const filtersFromParams = qs.parse(filterParams);
        if (filtersFromParams.convNumber) {
            convNumber=String(filtersFromParams.convNumber);
        }
        else if (filtersFromParams.valueUntilDate) {
            valueUntilDate=String(filtersFromParams.valueUntilDate);
        }
        else  if (filtersFromParams.valueFromDate) {
            valueFromDate=String(filtersFromParams.valueFromDate);
        }
        else if (filtersFromParams.pageVariantFill) {
            pageVariantFill=String(filtersFromParams.pageVariantFill);
        }
    }, []);



    console.log(convNumber);
    console.log(valueFromDate);
    console.log(valueUntilDate);
    console.log(pageVariantFill);
    if (pageVariantFill == false) {
        return (
            <Page title="Отчёты">
                <Container maxWidth="disabled">
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4">Отчёты</Typography>
                    </Box>

                    <Grid container spacing={1} >

                        <Grid item xs={8}  >
                            <Grid container spacing={1} >
                                <Grid item xs={3}  >
                                </Grid>
                                <Grid item xs={3} >
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }} >
                                        <InputLabel id="labelConv">Номер конвейера</InputLabel >
                                        <Select
                                            labelId="labelConv"
                                            id="convNumber"
                                            value={convNumber}
                                            label="Номер конвейера"
                                            onChange={handleChange}>
                                            {categories.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            label="Дата от"
                                            ampm={false}
                                            value={valueFromDate}

                                            onChange={(newValue) => {
                                                
                                                setvalueFromDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={3} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            label="Дата до"
                                            ampm={false}
                                            value={valueUntilDate}
                                            onChange={(newValue) => {
                                                
                                                setvalueUntilDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid item xs={2}  >
                            <Button variant="outlined" size="large" onClick={handleChange1}>Сформировать отчет</Button>
                        </Grid>
                        <Grid item xs={2}  >
                        </Grid>
                       

                    </Grid>
                </Container>
            </Page>
        );
    }
    else if (pageVariantFill == true) {
        return (
            <Page title="Отчёты">
                <Container maxWidth="disabled">
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4">Отчёты</Typography>
                    </Box>

                    <Grid container spacing={1} >

                        <Grid item xs={8}  >
                            <Grid container spacing={1} >
                                <Grid item xs={3}  >
                                </Grid>
                                <Grid item xs={3} >
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }} >
                                        <InputLabel id="labelConv">Номер конвейера</InputLabel >
                                        <Select
                                            labelId="labelConv"
                                            id="convNumber"
                                            value={convNumber}
                                            label="Номер конвейера"
                                            onChange={handleChange}>
                                            {categories.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            label="Дата от"
                                            ampm={false}
                                            value={valueFromDate}

                                            onChange={(newValue) => {

                                                setvalueFromDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={3} >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            label="Дата до"
                                            ampm={false}
                                            value={valueUntilDate}
                                            onChange={(newValue) => {

                                                setvalueUntilDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>




                            </Grid>
                        </Grid>
                        <Grid item xs={2}  >
                            <Button variant="outlined" size="large" onClick={handleChange1}>Сформировать отчет</Button>
                        </Grid>
                        <Grid item xs={2}  >
                        </Grid>
                        <Grid item xs={12}  >
                            <AppReports loaddata={convNumber} datafrom={valueFromDate.customFormat("#MM#/#DD#/#YYYY# #hhhh#:#mm#")} datato={valueUntilDate.customFormat("#MM#/#DD#/#YYYY# #hhhh#:#mm#")} />
                        </Grid>

                    </Grid>
                </Container>
            </Page>
        );
    }

    
  
}
