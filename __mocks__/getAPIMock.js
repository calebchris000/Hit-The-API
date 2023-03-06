

const getDataMock = async (api) => {
    const send = await fetch(api);
    const response = await send.json();
    return response;
  };

  export {getAPIMock, getDataMock}