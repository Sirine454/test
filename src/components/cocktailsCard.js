import React from 'react'
import {Card} from 'react-bootstrap'


const cocktailsCard = ({data,match,history}) => {

    return (
        <div>
             {data.map((drink) => (
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={drink.strDrinkThumb}></Card.Img>
  <Card.Body>
    <Card.Title>{drink.strDrink}</Card.Title>
  </Card.Body>
</Card>
 

 ))}
        </div>
    )
}

export default cocktailsCard
