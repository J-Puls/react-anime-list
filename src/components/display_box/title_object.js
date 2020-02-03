import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux"
import { removeTitle, openInfoModal, openUpdateModal, openDeleteModal } from "../../state/actions"

const TitleObject = props => {
  const dispatch = useDispatch();
  const title = props.title;
  const id = title.mal_id;
  return (
    <Col xs="6" sm="4" md="3" className="p-sm-3">
      <Figure>
        <Figure.Image
          rounded
          alt={title.title + " thumbnail"}
          src={title.image_url}
          className="display-img shadow w-100"
        />
        <span className="lead text-white">{title.title}</span>

        <Figure.Caption className="text-light">
          {"Rating: " + title.score + " / 10"}
        </Figure.Caption>
        <Row className="w-100 m-0">
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="info"
              objid={title.objID}
              onClick={() => dispatch(openInfoModal(title))}
            >
              <i className="material-icons">
                info
              </i>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="success"
              objid={title.mal_id}
              onClick={() => dispatch(openUpdateModal(title))}
            >
              <i className="material-icons" objid={title.mal_id}>
                edit
              </i>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="danger"
              objid={title.mal_id}
              onClick={() => dispatch(openDeleteModal(title))}
            >
              <i className="material-icons" objid={title.mal_id}>
                delete
              </i>
            </Button>
          </Col>
        </Row>
      </Figure>
    </Col>
  );
};

export default TitleObject;
