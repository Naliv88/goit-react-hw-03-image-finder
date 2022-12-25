import React from 'react';
import { Watch } from 'react-loader-spinner';
import getData from './Loader/loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal';

import style from './App.module.css'

export class App extends React.Component {
  state = {
    isLoading: false,
    isCreateModalOpen: false,
    searchInput: '',
    page: 1,
    hits: null,
    modalImage: null,
  };

  componentDidMount() {
    this.getImageList();
  }

  componentDidUpdate(prevProps, prevState) { 
     const { searchInput, } = this.state;
    if (
      prevState.searchInput !== searchInput) {
      this.getImageList();
      console.log(searchInput);
    }
  }

  getImageList = async () => {
        const searchInput = this.state.searchInput;
    const page = this.state.page;
    try {
      this.setState({ isLoading: true });
      const images = await getData(searchInput, page);
      console.log(images);
      this.setState({ hits: images.hits });
      // debugger;
      } catch (error) {
      console.error(error);
      } finally {
      this.setState({ isLoading: false });
      };
  };


  onSubmit = data => {
     if (data === this.state.searchInput) {
      return;
    }
    this.setState({ searchInput: data });
    
  }

  closeModal = () => {
    this.setState({ isCreateModalOpen: false });
    this.setState({ modalImage: null });
  };

  openModal = imageUrl => {
    this.setState({ modalImage: imageUrl });
    this.setState({ isCreateModalOpen: true });
  };

  loadMore = async () => {
    this.setState({ isLoading: true });
    this.setState(prevState => ({ page: prevState.page + 1 }));
        const searchInput = this.state.searchInput;
    const page = this.state.page;
    try {
      const images = await getData(searchInput, page);
      console.log(images);
      this.setState(prevState => ({ hits: [...prevState.hits, ...images] }));
      // debugger;
      } catch (error) {
      console.error(error);
      } finally {
      this.setState({ isLoading: false });
      };
  };

  render() {
    console.log(this.state.hits);
    console.log(this.state.searchInput);
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.hits && <ImageGallery images={this.state.hits} onClick={this.openModal} />}
        
       {this.state.isLoading && <Watch width="200" color="#4fa94d" />}
        {this.state.isCreateModalOpen && (
          <Modal largeImage={this.state.modalImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
