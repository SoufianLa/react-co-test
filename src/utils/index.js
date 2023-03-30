const handleApiResponse = (response) => {
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  }

  export {handleApiResponse};