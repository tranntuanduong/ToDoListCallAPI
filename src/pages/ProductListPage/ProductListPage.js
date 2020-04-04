import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductRequest} from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        // callApi('products', 'GET', null).then(res => {
        //    this.props.fetchAllProducts(res.data);
        // })  
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link
                    to="/products/add"
                    type="button"
                    className="btn btn-info mb-10">
                    Add product
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}>
                    </ProductItem>
                );
            })
        }
        return result;
    }

    onDelete = (id) => {
        this.props.onDeleteProducts(id);
    }

   
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProducts : (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);