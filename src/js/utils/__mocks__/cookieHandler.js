var cookieMock = jest.genMockFromModule('../cookieHandler');

cookieMock.getBlueprintNames.mockImplementation(function() {
  return [];
})

module.exports = cookieMock;