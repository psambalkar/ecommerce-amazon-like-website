import React from 'react';
import './directory.styles.scss';
import {connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

const Directory=({sections})=> {
    return(
    <div className="directory-menu">
     {sections.map(({title,imageUrl,id,size,linkUrl})=><MenuItem title={title} key={id} image={imageUrl} size={size} linkUrl={linkUrl}/>)}
    </div>);
}

const mapStateToProps=createStructuredSelector({
sections:selectDirectorySections
})

export default connect(mapStateToProps)( Directory);