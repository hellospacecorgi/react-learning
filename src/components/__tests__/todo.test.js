import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "../TodoList";
import renderer from "react-test-renderer";

//npm run test
test("sample test name", () => {
  expect(true).toBe(true);
});

// test('should render todo component completed false', () => {
//     const expectedTextContent = "wash dishes";
//     const testTodo = { id: 1, title:  expectedTextContent, completed: false, };
//     // render a component
//     render(<Todo todo={testTodo}/>);
//     // retrieve the component that is rendered
//     const todoElement = screen.getByTestId('todo-1');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent(expectedTextContent);
//     expect(todoElement).not.toContainHTML('strike');
// })

// test('should render todo component completed true', () => {
//     const expectedTextContent = "throw rubbish";
//     const testTodo = { id: 2, title:  expectedTextContent, completed: true, };
//     // render a component
//     render(<Todo todo={testTodo}/>);
//     // retrieve the component that is rendered
//     const todoElement = screen.getByTestId('todo-1');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent(expectedTextContent);
//     expect(todoElement).toContainHTML('strike');

//     expect(todoElement).toMatchSnapshot('<strike>');
// })

// test('should match snapshot', () => {
//     const expectedTextContent = "feed dog";
//     const testTodo = { id: 1, title:  expectedTextContent, completed: true, };

//     // render tree with component inside
//     const tree = renderer.create(<Todo todo={testTodo}/>);

//     expect(tree).toMatchSnapshot();
// })
