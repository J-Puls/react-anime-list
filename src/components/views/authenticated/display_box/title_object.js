import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux"
import { openInfoModal, openUpdateModal, openDeleteModal } from "../../../../state/actions"
import infoIconBlue from "./assets/info-icon-blue.svg";
import editIconGreen from "./assets/edit-icon-green.svg";
import trashIconRed from "./assets/trash-icon-red.svg";

const TitleObject = props => {
  const dispatch = useDispatch();
  const title = props.title;
  return (
    <Col xs="6" sm="4" md="3" className="p-sm-3 title-object">
      <Figure className="w-100">
      <span className="lead text-danger font-weight-bolder">{title.title}</span>
        <Figure.Image
          rounded
          alt={title.title + " thumbnail"}
          src={title.image_url}
          className="display-img w-100"
        ></Figure.Image>
                <Row className="w-100 m-0">
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 object-button"
              block
              size="md"
              variant="link"
              onClick={() => dispatch(openInfoModal(title))}
            >
              <Image src={infoIconBlue}/>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 object-button"
              block
              size="md"
              variant="link"
              onClick={() => dispatch(openUpdateModal(title))}
            >
              <Image src={editIconGreen}/>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 object-button"
              block
              size="md"
              variant="link"
              onClick={() => dispatch(openDeleteModal(title))}
            >
              <Image src={trashIconRed}/>
            </Button>
          </Col>
        </Row>



      </Figure>
    </Col>
  );
};

export default TitleObject;
