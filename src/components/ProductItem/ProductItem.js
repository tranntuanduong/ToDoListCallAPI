import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
      
        var statusName = product.status === true ? 'In stock' : 'Out of stock';
        var statusClass = product.status === true ? 'primary' : 'default';
        var productPrice = product.price !== '' ? `${product.price}$` : ''
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{productPrice}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link 
                        to={`/products/${product.id}/edit`}
                        className="btn btn-success mr-10">
                        Updatee
                    </Link>
                    <button 
                    type="button" 
                    className="btn btn-danger"
                    onDoubleClick={() => this.onDelete(product.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    onDelete = (id) => {
        // if(confirm('Are you sure you wish to delete this item ?')) { //eslint-disable-line
        //     this.props.onDelete(id)
        // }
        this.props.onDelete(id)
    }
}

export default ProductItem;
