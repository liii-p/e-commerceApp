const promises = [];
for (let i = 1; i <= 15; i++) {
  promises.push(fetch(`https://fakestoreapi.com/products?limit=${i}`));
}

const responses = await Promise.all(promises);

const jsonResponses = responses.map((response) => response.json());

const data = await Promise.all(jsonResponses);

const totalData = data.map((productResult) => productResult.results).flat();

setProducts(totalData);
console.log(products);
