const info = document.getElementById('info');

async function fetchData() {
  const url = 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab2a8cf537msh5dd281f7f69058ep1d9312jsnc2690e711eb8',
      'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const result = await response.json(); // Parse the JSON data
      console.log(result.data); // This will display the parsed JSON object
      const company = result.data[0].company;
      console.log(company);

      // Update the innerText of the 'info' element
      info.innerText = company;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function to initiate the asynchronous operation
fetchData();
