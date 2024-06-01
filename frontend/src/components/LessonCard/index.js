import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 18rem;
  height: 25rem;
  margin: auto;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.1); /* Borda discreta */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.3); /* Borda ligeiramente mais destacada ao hover */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h5`
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
`;

const LessonCard = ({ image, title, text }) => {
  return (
    <div className="col">
      <Card>
        <CardImage src={image} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default LessonCard;
