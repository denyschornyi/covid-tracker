import React from 'react'

import './InfoBox.css'

import { Card, CardContent, Typography } from '@material-ui/core'
import numeral from 'numeral';

function InfoBox({title, cases, total}) {
    return (
        <Card className='infoBox'>
            <CardContent>
                {/* Title */}
                <Typography className='infoBox__ttitle' color="textSecondary">
                    {title}
                </Typography>
                {/* Number of cases */}
                <h2 className="infoBox__cases">
                    {numeral(cases).format("0,0")}
                </h2>
                {/* Total cases */}
                <Typography className="infoBox__total" color='textSecondary'>
                    {numeral(total).format("0,0")} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
