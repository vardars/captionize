# Captionize.js: Effortless Input Captions

Captionize.js is a lightweight JavaScript library that enhances your HTML forms by adding stylish captions to input fields. These captions appear when the input is empty and disappear when the user starts typing, providing a clean and user-friendly experience.

## Purpose

The primary purpose of Captionize.js is to improve the user experience of web forms. By providing clear and concise captions, users can easily understand the purpose of each input field without cluttering the interface with permanent labels. The "passive" class functionality also allows for visual cues to guide the user.

## How to Use

Integrating Captionize.js into your project is straightforward.

1.  **Include the library:** Add the `captionize.js` file to your project and include it in your HTML:

    ```html
    <script src="path/to/captionize.js"></script>
    ```

2.  **Prepare your HTML:** Ensure your input fields have unique `id` attributes. You can also add the `passive` class to inputs where you want the special styling.

    ```html
    <input type="text" id="username" class="passive" placeholder="Username">
    <input type="email" id="email" placeholder="Email Address">
    ```

3.  **Initialize the library:** After the DOM is loaded, call the `captionize.set()` method, providing a CSS selector for the input fields you want to target.

    ```javascript
    // Example: Target all input fields with the class "passive"
    captionize.set("input.passive");

    // Example: Target specific input fields by ID
    captionize.set("#username, #email");
    ```

### Code Example

Here's a complete example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Captionize.js Example</title>
  <style>
    /* Optional: Style the passive class */
    .passive {
      font-style: italic;
      color: #777;
    }
  </style>
</head>
<body>

  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" class="passive"><br><br>

    <label for="email">Email:</label>
    <input type="text" id="email" class="passive"><br><br>

    <input type="submit" value="Submit">
  </form>

  <script src="captionize.js"></script>
  <script>
    // Initialize captionize for all inputs with the "passive" class
    captionize.set("input.passive");
  </script>

</body>
</html>
```

## "Passive" Class Functionality

When an input field has the `passive` class and is empty, Captionize.js will:

1.  Set the input's value to its `id` (or a predefined caption if you customize the library).
2.  Add the `passive` class to the input field. This allows you to apply specific CSS styles (e.g., italic text, different color) to indicate that it's a caption and not user-entered text.

Once the user focuses on the input or starts typing, the caption is removed, and the `passive` class is also removed, reverting to the default input styling.

## Browser Compatibility

Captionize.js is expected to work in all modern web browsers. However, it has not been extensively tested across all browser versions and platforms.

## Contributing

We welcome contributions to improve Captionize.js! If you'd like to contribute, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/issue-description`.
3.  **Make your changes** and ensure the code is well-commented.
4.  **Test your changes** thoroughly.
5.  **Submit a pull request** with a clear description of your changes.

## License

Captionize.js is released under the **MIT License**.

```
MIT License

Copyright (c) [Year] [Your Name/Organization]

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