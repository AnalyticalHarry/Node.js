```python
MIT License

Copyright (c) 2024 Hemant Thapa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# Node JS

Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable, high-performance applications with JavaScript, both on the server-side and in the command line.

Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient. It is widely used for building server-side applications, RESTful APIs, and real-time applications such as chat applications and collaborative tools.

## Usage

Node.js is commonly used for:
- **Server-side Development**: Building backend services and APIs.
- **Real-time Applications**: Developing applications that require real-time data processing, such as chat applications and live updates.
- **Command-Line Tools**: Creating CLI tools and scripts.
- **Microservices**: Building scalable microservices architectures.

## Advantages

1. **Non-Blocking I/O**: Handles multiple requests concurrently without blocking the execution thread, improving performance and scalability.
2. **Single Programming Language**: Use JavaScript on both the client and server sides, simplifying development and reducing context switching.
3. **NPM Ecosystem**: Access to a vast ecosystem of libraries and tools through the Node Package Manager (NPM).
4. **Community Support**: Large and active community contributing to a wide range of resources and packages.
5. **Performance**: High performance due to the V8 engine and efficient handling of asynchronous operations.

## Disadvantages

1. **Single Threaded**: Although Node.js handles I/O operations asynchronously, CPU-intensive tasks can block the event loop, affecting performance.
2. **Callback Hell**: Complex asynchronous operations can lead to deeply nested callbacks, making code harder to manage and read.
3. **Maturity**: Some libraries and tools in the Node.js ecosystem may not be as mature or stable as those in other ecosystems.
4. **Performance Issues**: For applications requiring heavy computational processing, Node.js might not be the best choice compared to other languages optimized for such tasks.

## Topics to Learn for Working with Frameworks like React.js or React Native

1. **Basic JavaScript Knowledge**
   - Understanding of JavaScript fundamentals and ES6+ features.
   - Familiarity with asynchronous programming (promises, async/await).

2. **Node.js Core Concepts**
   - **Local Modules & Exports**: Learn how to create and use local modules.
   - **Scope**: Understand variable scoping and closures.
   - **IIFE (Immediately Invoked Function Expressions)**: Know how to use IIFE for module encapsulation.
   - **Module Wrapper**: Understand the module wrapper function in Node.js.
   - **Module Caching**: Learn how Node.js caches modules to improve performance.
   - **Import and Export Patterns**: Familiarize yourself with common patterns for importing and exporting modules.
   - **ES Modules**: Understand ES6 module syntax and how it differs from CommonJS.

3. **NPM (Node Package Manager)**
   - Managing packages and dependencies.
   - Understanding package.json and npm scripts.

4. **RESTful API Development**
   - Building and consuming RESTful APIs.
   - Understanding HTTP methods and status codes.

5. **Asynchronous Programming**
   - Handling asynchronous operations effectively.
   - Error handling and debugging asynchronous code.

6. **Framework-Specific Knowledge**
   - **React.js**: Learn about components, props, state, lifecycle methods, hooks, and React Router.
   - **React Native**: Understand mobile-specific components, navigation, and integrating with native modules.

7. **Build Tools and Testing**
   - Using build tools like Webpack and Babel.
   - Writing and running tests with tools like Jest or Mocha.

8. **Version Control**
   - Using Git for version control and collaboration.
