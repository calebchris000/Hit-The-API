import { getDataMock } from "./__mocks__/getAPIMock.js";

let testAPI = "https://jsonplaceholder.typicode.com/posts/1";
describe("Test the API", () => {
  test("should_be_defined ", () => {
    expect(getDataMock(testAPI)).toBeDefined();
  });

  test('should_return_json',async () => {
    const returnedData = await getDataMock(testAPI);
    expect(typeof returnedData).toEqual('object')
  })
});
   