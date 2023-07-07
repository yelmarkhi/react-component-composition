import axios from 'axios';

export async function getStaticProps() {
  try {
    const response = await axios.get('https://picsum.photos/v2/list');
    const images = response.data;
    return {
      props: {
        images: mock, // images
      },
    }
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    return {
      props: {
        images: [],
      },
    }
  }
}

const mock = [
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
  },
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    download_url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4'
  },
]