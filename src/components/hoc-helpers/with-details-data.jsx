import React, {Component} from 'react';

import Spinner from '../spinner/';
import ErrorBoundry from '../error-boundry';

const WithDetailsData = (View, getData, getImage) => {

  
    return class extends Component {

        state = {
            item: null,
            loading: true,
            image: null
          };

      componentDidMount() {
        this.updateItem();
      }
      
      componentDidUpdate(prevProps) {
        const { itemId } = this.props;
        if (prevProps.itemId !== itemId) {
          this.updateItem(itemId);
        }
      }
    
      updateItem() {
        this.setState({ loading: true });
        const { itemId } = this.props;
    
        if (!itemId) {
          return;
        }
    
        getData(itemId).then(item => {
          this.setState({
            item,
            image: getImage(item),
            loading: false
          });
        });
      }
  
  
      render() {
        if (!this.state.item) {
          return <span> Choose some character!!!</span>;
        }
    
        const {
          item,
          loading,
          image
        } = this.state;
    
        if (loading) {
          return <Spinner />;
        }

        return(
            <ErrorBoundry>
               <View {...this.props} item={item} image={image} />
            </ErrorBoundry>
        ) 
      }
    }
  }

  export default WithDetailsData;