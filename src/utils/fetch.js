const getData = (url, onSuccess) => fetch(url)
  .then((result) => result.json())
  .then((data) => onSuccess(data))
  .catch((error) => console.dir(error));

export default getData;
