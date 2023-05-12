import display from "../shared/display";
import expect from "../shared/expect";

display("This test succeeds", expect(0, 0));
display("This test fails", expect(0, 1));
