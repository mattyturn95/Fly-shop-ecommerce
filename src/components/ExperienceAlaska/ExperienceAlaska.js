import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './styles.css'


const ExperienceAlaska = () => {
    return (
        <Jumbotron className="jumbo" sm={12} md={12} lg={12}>
            <h1 className="header-jumbo">Experience Alaska with "WildFly Productions"</h1>
            <p className="jumbo-text">
                Wild Fly Productions boasts an amazing once off experience for those thrill seekers looking to tackle some of the infamous wild atlantic salmon
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

export default ExperienceAlaska
