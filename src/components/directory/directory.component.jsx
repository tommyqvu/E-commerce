import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import sectionData from '../../directory.data';
class Directory extends React.Component {
  state = {
    section: sectionData,
  };
  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
