import React from 'react'
import FontAwesome from 'react-fontawesome'
import { calcTime, convertMoney } from '../../../helpers';

import { StyledMovieInfoBar } from '../../styles/StyledMovieInfoBar'

export const MovieInfoBar = ({runtime, budget, revenue}) => {
    return (
        <StyledMovieInfoBar>
            <div className="movieInfoBar-content">
                <div className="movieInfoBar-content-col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x"/>
                    <span className="movieInfoBar-info">Running time: {calcTime(runtime)}</span>
                </div>
                <div className="movieInfoBar-content-col">
                    <FontAwesome className="fa-budget" name="money" size="2x"/>
                    <span className="movieInfoBar-info">Budget: {convertMoney(budget)}</span>
                </div>
                <div className="movieInfoBar-content-col">
                    <FontAwesome className="fa-revenue" name="ticket" size="2x"/>
                    <span className="movieInfoBar-info">Revenue: {convertMoney(revenue)}</span>
                </div>
            </div>
        </StyledMovieInfoBar>
    )
}
