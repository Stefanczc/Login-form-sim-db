import { apiKey } from "./stuff.js";

async function fetchData() {
  const url = 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const result = await response.json(); 
      console.log(result.data); 

      // Call the new method to iterate through the data array
      processDataArray(result.data);
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

const listOfJobs = document.getElementById('listOfJobs');

function processDataArray(dataArray) {
  dataArray.forEach((item) => {
    const job = document.createElement('li');
    const titleJob = document.createElement('h3');
    titleJob.innerText = item.title;
    const companyJobName = document.createElement('p');
    companyJobName.innerText = item.company;

    job.appendChild(titleJob);
    job.appendChild(companyJobName);
    listOfJobs.appendChild(job);
  
  });
}

fetchData();
