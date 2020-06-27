
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import ImagePlaceholder from "../../assets/images/book_cover_placholder.png"

export const BookCard = ({ title, author, price, image }) => {
  return (
    <Card>
      <Image src={image = ImagePlaceholder} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='rub' />
          {price}
        </a>
      </Card.Content>
    </Card>
  )
}

export default BookCard;


