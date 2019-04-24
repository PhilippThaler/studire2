import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './student.reducer';
import { IStudent } from 'app/shared/model/student.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IStudentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class StudentDetail extends React.Component<IStudentDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { studentEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Student [<b>{studentEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="matrikelNr">Matrikel Nr</span>
            </dt>
            <dd>{studentEntity.matrikelNr}</dd>
            <dt>
              <span id="firstName">First Name</span>
            </dt>
            <dd>{studentEntity.firstName}</dd>
            <dt>
              <span id="lastName">Last Name</span>
            </dt>
            <dd>{studentEntity.lastName}</dd>
            <dt>
              <span id="street">Street</span>
            </dt>
            <dd>{studentEntity.street}</dd>
            <dt>
              <span id="zipCode">Zip Code</span>
            </dt>
            <dd>{studentEntity.zipCode}</dd>
            <dt>
              <span id="city">City</span>
            </dt>
            <dd>{studentEntity.city}</dd>
          </dl>
          <Button tag={Link} to="/entity/student" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/student/${studentEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ student }: IRootState) => ({
  studentEntity: student.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
