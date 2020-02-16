import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addItem,
  remove,
  select,
  deselect
} from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected: isItemSelected,
    selectedItem: selectedItem,
  },
}) => ({
  groceryList,
  isItemSelected,
  selectedItem
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    remove,
    select,
    deselect
  }, dispatch)
);

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection selectedItem={this.props.selectedItem}/>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            {this.props.groceryList.map((grocery, index) => 
              <ListTable
                key={index}
                grocery={grocery}
                remove={this.props.remove}
                select={this.props.select}
                deselect={this.props.deselect}
                isSelected={this.props.selectedItem.id === grocery.id}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
  isItemSelected: PropTypes.array.Boolean,
  selectedItem: PropTypes.array.Object,
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
