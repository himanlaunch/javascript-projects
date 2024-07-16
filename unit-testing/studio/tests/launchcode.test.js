// launchcode.test.js code:

const launchcode = require('../index.js');

describe("Testing launchOutput() method", function() {

  test("Returns 'Launch!' when divisible by 2", function() {
    const result = launchcode.launchOutput(2);
    expect(result).toEqual('Launch!');
  });

  test("Returns 'Code!' when divisible by 3", function() {
    const result = launchcode.launchOutput(3);
    expect(result).toEqual('Code!');
  });

  test("Returns 'Rocks!' when divisible by 5", function() {
    const result = launchcode.launchOutput(5);
    expect(result).toEqual(' Rocks!');
  });

  test("Returns 'LaunchCode!' when divisible by 2 and 3", function() {
    const result = launchcode.launchOutput(6);
    expect(result).toEqual('LaunchCode!');
  });

  test("Returns 'Code Rocks!' when divisible by 3 and 5", function() {
    const result = launchcode.launchOutput(15);
    expect(result).toEqual('Code Rocks!');
  });

  test("Returns 'Launch Rocks!' when divisible by 2 and 5", function() {
    const result = launchcode.launchOutput(10);
    expect(result).toEqual('Launch Rocks!');
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function() {
    const result = launchcode.launchOutput(30);
    expect(result).toEqual('LaunchCode Rocks!');
  });

  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work!'", function() {
    const result = launchcode.launchOutput(7);
    expect(result).toEqual("Rutabagas! That doesn't work!");
  });

});
