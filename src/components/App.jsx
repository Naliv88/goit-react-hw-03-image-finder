import React from 'react';
import getData from './GetData.jsx';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery'

export class App extends React.Component {
  state = {
    isLoading: false,
    isCreateModalOpen: false,
    isSuccessNotificationVisible: false,
    isErrorNotificationVisible: false,
    totalReactPackages: null,
    searchInput: '',
    page: 1,
    hits: null,
  };

  componentDidMount() {
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
      debugger;
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

  render() {
    console.log(this.state.hits);
    console.log(this.state.searchInput);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.hits && <ImageGallery images={this.state.hits} />}
        React homework template
        <br />
        <div className="card text-center m-3">
          <h5 className="card-header">Simple GET Request</h5>
          <div className="card-body">Total react packages:</div>
        </div>
      </div>
    );
  }
}
