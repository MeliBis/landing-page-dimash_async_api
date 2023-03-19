import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'


//llamar a cada uno de los elementos para hacer las transformaciones
//necesarias
async function fetchData(urlApi){
    const response = await fetch(urlApi); //ir por datos
    const data =  await response.json();  //esperar transformacion
    return data;  //retornar info traida de api
}

const anotherFunction = async (urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch(error){
    console.error(error);
    }
}
anotherFunction(API);

//platzi:
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data =  await response.json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);