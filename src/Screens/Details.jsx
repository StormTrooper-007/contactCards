import React from 'react';
import {useParams} from "react-router-dom";
import Typography from '@mui/material/Typography';
import '../Styles/Details.css'

function Details({data}) {
    let params = useParams();

    function getDetails(id){
        return data.find(item => item.id === id);
    }

    let detail = getDetails(parseInt(params.id, 10));
    return (
            <div className="details-container">
                <Typography gutterBottom variant="h3" component="div">
                    Details
                </Typography>

                <div className="info-container">
                    <span>Name:{detail.name}</span>
                    <span>Username:{detail.username}</span>
                    <span>Email:{detail.email}</span>
                    <span>Phone:{detail.phone}</span>
                    <span>Company:{detail.company.name}</span>
                    <span>Website:http://{detail.website}</span>
                    <span>
                       Address:
                    </span>
                    <ul>
                        <li><Typography variant="body2" color="text.secondary">Street:{detail.address.street}</Typography></li>
                        <li><Typography variant="body2" color="text.secondary">Suite: {detail.address.suite}  </Typography></li>
                        <li><Typography variant="body2" color="text.secondary">City: {detail.address.city}</Typography></li>
                        <li><Typography variant="body2" color="text.secondary">Zipcode: {detail.address.zipcode} </Typography></li>
                    </ul>
                </div>
            </div>
    );
}

export default Details;