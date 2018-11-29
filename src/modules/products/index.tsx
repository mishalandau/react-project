import * as cartStore from '@modules/cart/store/actions';
import ProductList from '@modules/products/components/ProductList';
import * as productsStore from '@modules/products/store/actions';
import * as React from 'react';
import { connect } from 'react-redux'
import HeaderButtons from './components/HeaderButtons';
import { IProduct } from './ProductModel';
import './products.css';


interface IStateProducts {
    isAddProducts: boolean;
}

interface IPropProducts extends IStateProducts {
    products?: IProduct[];
    selectedProducts?: number[];
    nextId: number;
    history?: any;
    dispatch: (action: any) => Promise<any>;
}

@(connect((state: any) => {
    return {
        nextId: state.products.nextId,
        products: state.products.data,
        selectedProducts: state.cart.productsIds,
    };
}) as any)
export default class Products extends React.Component<IPropProducts, IStateProducts> {
    constructor(props: any) {
        super(props);
        this.state = {
            isAddProducts: true,
        };
    }
    addProducts() {
        if (!this.state.isAddProducts) {
            return;
        }

        this.props.dispatch(productsStore.addProducts(this.props.nextId)).catch(() => {
            this.setState({
                isAddProducts: false,
            });
        });
    }

    redirectToCart() {
        this.props.history.push('/cart');
    }

    componentDidMount() {
        this.addProducts();
    }

    toggleCart(id: number) {
        this.props.dispatch(cartStore.toggleCart(id));
    }

    get products() {
        return (this.props.products as any[]).map((product) => {
            return {
                ...product,
                isSelected: this.props.selectedProducts &&
                    this.props.selectedProducts.includes(product.id),
            };
        });
    }


    render() {
        return (
            <div className="products">
                <HeaderButtons
                    isAddProducts={this.state.isAddProducts}
                    addProducts={() => this.addProducts()}
                    addToCart={() => this.redirectToCart()} />
                <ProductList
                    toggleCart={(id) => this.toggleCart(id)}
                    products={this.products} />
            </div>
        );
    }
}
