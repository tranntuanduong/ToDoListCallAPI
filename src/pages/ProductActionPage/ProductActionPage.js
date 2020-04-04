import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    onSave = (event) => {
        var { txtName, txtPrice, chkbStatus, id } = this.state;
        var { history } = this.props;
        var product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : chkbStatus
            //state : chkbStatus ???? -> Warning: A component is changing a controlled input of type checkbox to be uncontrolled
        }
        event.preventDefault();
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        // history.push(`/products`)
        history.goBack();
    }

    componentDidMount() {
        // console.log('componentDidMount')
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log('componentDidUpdate!!')
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus, id } = this.state;
        var notifyDefault = id ? 'Update product..' : 'Add product';

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className={`alert alert-info`}>
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Notification!</strong> {notifyDefault}
                </div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input field"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Prive</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Input field"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus} />
                            In stock
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Save</button>
                    <Link
                        to="/products"
                        className="btn btn-danger">
                        Back
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);