import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getStudents, deleteStudent } from '../actions/studentActions';
import PropTypes from 'prop-types';

class Students extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

onDeleteClick = id => {
  this.props.deleteStudent(id);
}
  render(){
    const { students } = this.props.student;
    return (
      <Container>
      <ListGroup>
      <TransitionGroup className="students">
      {students.map(({ id, name }) => (
        <ListGroupItem>
        <Button className="remove-btn"
        color="danger"
        size="sm"
        onClick={this.onDeleteClick.bind(this, id)}
        >&times;
        </Button>
        {name}
        </ListGroupItem>
      ))}
      </TransitionGroup>
      </ListGroup>
      </Container>
    );
  }
}
Students.propTypes = {
  getStudents: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  student: state.student
});


export default connect(mapStateToProps, { getStudents, deleteStudent })(Students);
