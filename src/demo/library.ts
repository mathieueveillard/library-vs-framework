import display from "library/display";
import expect from "library/expect";

// Your code invokes the library

display("This test succeeds", expect(0, 0));
display("This test fails", expect(0, 1));
