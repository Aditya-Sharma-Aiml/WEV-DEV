function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let success = true;
      let success = false;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return "next task";
  })
  .then((value) => {
    console.log(value+" completed");
  })
  .catch((error) => console.error(error));
