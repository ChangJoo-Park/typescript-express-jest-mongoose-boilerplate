import { hello } from "../server";

test("Hello from server.hello", () => {
    expect(hello()).toBe("Hello World");
});
