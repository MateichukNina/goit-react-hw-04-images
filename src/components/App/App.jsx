import { useEffect, useState } from 'react';
import { fetchImage } from '../api';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { toast } from 'react-hot-toast';
import { Button } from '../Button/Button';
import { Wrapper } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);



  useEffect(() => {
    const loadImage = async () => {
      if (query && (query !== 'prevQuery.current '|| page !== 1)) {
        try {
          const img = await fetchImage(query.slice(query.indexOf('/') + 1), page);
          setImages(prevImages => [...prevImages, ...img]);
         
        } catch (error) {
          console.log(error);
        }
      }
    };

    loadImage();
  }, [query, page]);


  // const loadImage = async () => {
  //   query.slice(this.state.query.indexOf('/') + 1), page;
  // }, [query, page]);



  // useEffect(() => {
  //   if (query && (query !== prevState.query || page !== prevState.page)) {
  //     fetchImage()
  //       .then(img => {
  //         setImages(prevImages => [...prevImages, ...img]);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       });
  //   }
  // }, [query, page]);



  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value === '') {
      toast.error('Please enter a valid query');
      return;
    }
    changeQuery(event.target.elements.query.value);
    event.target.reset();
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {images.length > 0 && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
      <GlobalStyle />
    </Wrapper>
  );
};
