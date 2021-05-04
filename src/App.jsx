import React, { Component } from 'react';
import API from './api/pixabayApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    savedRequest: '',
    isLoading: false,
    error: null,
    selectedImage: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.savedRequest !== this.state.savedRequest) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { page, savedRequest } = this.state;

    try {
      this.setState({ isLoading: true });
      const images = await API.fetchImages(savedRequest, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onChangeQuery = query => {
    this.setState({ savedRequest: query, page: 1, images: [], error: null });
  };
  onImageClick = event => {
    const { source } = event.target.dataset;
    this.setState({ selectedImage: source });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  // sctollImages = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  render() {
    const { images, isLoading, error, showModal, selectedImage } = this.state;
    const loadMore = images.length > 0 && !isLoading;

    return (
      <div className="App">
        {error && (
          <div>
            <h1>Ой, что-то пошло не так!</h1>
            <p>{error}</p>
          </div>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {isLoading && <Loader />}
        {loadMore && <Button onButtonClick={this.fetchImages} />}
        {showModal && (
          <Modal image={selectedImage} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
