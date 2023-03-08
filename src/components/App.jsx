import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import GalleryList from './ImageGallery'
import SearchForm from "./SearchBar";
import ModalLightbox from "./Modal";
import LoadMoreBtn from "./Button";
import Loader from "./Loader";
import ScrollUp from "./ScrollUp";
import { Toaster } from 'react-hot-toast';
import getImages from "services/api";

class App extends Component{
  state = {
    images: [],
    page: 1,
    value: '',
    isOpenModal: false,
    isLoading: false,
    largeImg: '',
    loadMore: true,
};

  async componentDidUpdate(prevProps, prevState) {
      const {page,value} = this.state;

    if(prevState.value !== value || prevState.page !== page) {
        this.setState({isLoading: true});
        try {
            const images =  await getImages(value.trim(), page);
            console.log(images)

            if(images.totalHits/12 < this.state.page){
              this.setState({loadMore: false});
            }

            this.setState({images: [...this.state.images,...images.hits]});

            if (page > 1 ) {
              this.scrollOnLoadButton();
            }
        } catch (error) {
            console.log({error})
        } finally {
          this.setState({isLoading:false})
        }
    };
};

    handleGalleryItem = largeImgUrl => {
      this.setState({
        largeImg: largeImgUrl,
        isOpenModal: true,
      });
    };

    handleLoad=()=> {
      this.setState((prev)=>({page: prev.page + 1}))
    }

    openModal=()=> {
      this.setState({isOpenModal: true})
    };

    closeModal=()=> {
      this.setState({isOpenModal: false})
    };

    handleSubmit = value => {
      this.setState({value});
    };

    onChangeQuery = value => {
      this.setState({
      images: [],
      page: 1,
      value: value,
      loadMore: true,
    });
  };

    scrollOnLoadButton = () => {
        window.scrollBy({
            top: document.body.scrollHeight,
            behavior: 'smooth',
    });
    };


 render(){
    const {images, isOpenModal, isLoading, largeImg} = this.state;

    return(
        <Layout>
          <SearchForm  onSearch={this.onChangeQuery}/>

          <GalleryList images={images} onImageClick={this.handleGalleryItem} />
          {this.state.loadMore && images.length > 0 && <LoadMoreBtn onClick={this.handleLoad} />}

          {isOpenModal && <ModalLightbox onClose={this.closeModal}>
            <img src={largeImg} alt="modal-img"/>
          </ModalLightbox>}

          {isLoading && <Loader />}
          
          <ScrollUp/>
          <Toaster position='top-right' toastOptions={{
            duration:1500 
          }}/>
        <GlobalStyle/>
        </Layout>
    );
};
}
  export default App;